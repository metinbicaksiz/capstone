import { supabase } from '../lib/supabase'

// ==================== ARTICLES ====================

export const discussionService = {
  // Articles
  async getArticles(lessonId) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('lesson_id', lessonId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async createArticle(articleData) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert([articleData])
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async deleteArticle(articleId) {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', articleId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // ==================== DISCUSSIONS ====================

  async getDiscussion(articleId) {
    try {
      const { data, error } = await supabase
        .from('discussions')
        .select('*')
        .eq('article_id', articleId)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async createDiscussion(discussionData) {
    try {
      const { data, error } = await supabase
        .from('discussions')
        .insert([discussionData])
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  // ==================== COMMENTS ====================

  async getComments(discussionId) {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          user:user_id(name, role, avatar_url),
          comment_likes(count),
          replies:comments(
            *,
            user:user_id(name, role, avatar_url),
            comment_likes(count)
          )
        `)
        .eq('discussion_id', discussionId)
        .is('parent_comment_id', null)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async createComment(commentData) {
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([commentData])
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async updateComment(commentId, updates) {
    try {
      const { data, error } = await supabase
        .from('comments')
        .update(updates)
        .eq('id', commentId)
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async deleteComment(commentId) {
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // ==================== LIKES ====================

  async likeComment(commentId, userId) {
    try {
      const { data, error } = await supabase
        .from('comment_likes')
        .insert([{ comment_id: commentId, user_id: userId }])

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  async unlikeComment(commentId, userId) {
    try {
      const { error } = await supabase
        .from('comment_likes')
        .delete()
        .eq('comment_id', commentId)
        .eq('user_id', userId)

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  async getCommentLikes(commentId) {
    try {
      const { data, error } = await supabase
        .from('comment_likes')
        .select('*')
        .eq('comment_id', commentId)

      if (error) throw error
      return { data: data.length, error: null }
    } catch (error) {
      return { data: 0, error: error.message }
    }
  },

  // ==================== UNREAD ====================

  async markCommentUnread(commentId, userId) {
    try {
      const { error } = await supabase
        .from('comment_reads')
        .upsert(
          { comment_id: commentId, user_id: userId, is_unread: true },
          { onConflict: 'comment_id,user_id' }
        )

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  async markCommentRead(commentId, userId) {
    try {
      const { error } = await supabase
        .from('comment_reads')
        .upsert(
          { comment_id: commentId, user_id: userId, is_unread: false },
          { onConflict: 'comment_id,user_id' }
        )

      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // ==================== USER PROFILES ====================

  async getUserProfile(userId) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async updateUserProfile(userId, updates) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()

      if (error) throw error
      return { data: data[0], error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  async getUserComments(userId) {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  },

  // ==================== REAL-TIME SUBSCRIPTIONS ====================

  subscribeToComments(discussionId, callback) {
    return supabase
      .channel(`comments:${discussionId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `discussion_id=eq.${discussionId}`
        },
        (payload) => callback(payload)
      )
      .subscribe()
  },

  subscribeToLikes(commentId, callback) {
    return supabase
      .channel(`likes:${commentId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comment_likes',
          filter: `comment_id=eq.${commentId}`
        },
        (payload) => callback(payload)
      )
      .subscribe()
  }
}
