# EFL Academic Writing Course - React + Supabase

A modern React application for an EFL (English as a Foreign Language) Academic Writing Course, powered by Supabase for authentication and database management.

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM v6
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Styling**: CSS (responsive design)

## Project Structure

```
react-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/            # React Context for state management
│   │   └── AuthContext.jsx
│   ├── lib/               # Utilities and configurations
│   │   └── supabase.js
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── MaterialsPage.jsx
│   │   └── modules/       # Module pages
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
├── .env.example           # Environment variables template
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ (download from [nodejs.org](https://nodejs.org/))
- Supabase account (free tier available at [supabase.com](https://supabase.com))

### 1. Install Dependencies

```bash
cd react-app
npm install
```

### 2. Set Up Supabase

#### Step 1: Create Supabase Account
- Go to [supabase.com](https://supabase.com)
- Sign up for free
- Create a new project

#### Step 2: Get Your Credentials
In your Supabase project:
1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (VITE_SUPABASE_URL)
   - **Anon (Public) Key** (VITE_SUPABASE_ANON_KEY)

#### Step 3: Create Database Tables
Run these SQL queries in Supabase's SQL Editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'student',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own data
CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Create policy to allow users to update their own data
CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Create user_progress table
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  module_id VARCHAR(50),
  activity_id VARCHAR(100),
  status VARCHAR(50) DEFAULT 'not_started',
  score INT,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS on user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);
```

#### Step 4: Enable Email Authentication
In Supabase:
1. Go to **Authentication** → **Providers**
2. Enable **Email** (already enabled by default)
3. Go to **Policies** and ensure users can sign up

### 3. Configure Environment Variables

Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Deploying to Supabase Hosting

### Prerequisites
- Supabase CLI installed: `npm install -g @supabase/cli`

### Steps

1. **Login to Supabase CLI**
   ```bash
   supabase login
   ```

2. **Initialize Supabase in your project** (if not done)
   ```bash
   supabase init
   ```

3. **Build the app**
   ```bash
   npm run build
   ```

4. **Deploy to Supabase Hosting**
   ```bash
   supabase projects list  # Find your project ID
   supabase projects deploy --project-id your-project-id
   ```

Or deploy to other services:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

## Features

### Authentication
- Email/Password sign up and login
- Automatic user profile creation
- Protected routes
- Persistent sessions

### User Management
- User profile page
- Profile information stored in PostgreSQL
- User role management (student/instructor/admin)

### Course Structure
- 4 comprehensive modules
- Final preparation phase
- Study materials library
- Responsive design

## Folder Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── lib/               # Library functions (Supabase client)
├── pages/             # Full page components
│   └── modules/       # Module-specific pages
├── App.jsx            # Main component with routing
├── index.css          # Global styles
└── main.jsx           # React app entry point
```

## API Integration

### Auth Context
The `AuthContext` provides:
- `user` - Current authenticated user from Supabase Auth
- `profile` - User profile data from PostgreSQL
- `loading` - Loading state during auth initialization
- `signUp(email, password, name)` - Create new account
- `signIn(email, password)` - Login
- `signOut()` - Logout
- `updateProfile(updates)` - Update user profile

### Usage Example
```jsx
import { useAuth } from '../context/AuthContext'

function MyComponent() {
  const { user, profile, signOut } = useAuth()

  return (
    <div>
      <p>Welcome, {profile?.name}!</p>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
```

## Database Schema

### users table
- `id` - UUID (Primary Key, from Auth)
- `email` - User email
- `name` - User full name
- `role` - 'student' | 'instructor' | 'admin'
- `created_at` - Account creation timestamp
- `updated_at` - Last update timestamp

### user_progress table
- `id` - UUID (Primary Key)
- `user_id` - References users(id)
- `module_id` - Module identifier
- `activity_id` - Activity identifier
- `status` - 'not_started' | 'in_progress' | 'completed'
- `score` - Optional score/grade
- `completed_at` - Completion timestamp
- `created_at` - Record creation
- `updated_at` - Last update

## Styling

The app uses:
- **CSS Variables** for theming (colors defined in `index.css`)
- **Responsive Grid** for layouts
- **Flexbox** for component layouts
- **Mobile-first** design approach

### Color Scheme
- Primary: Blue (`--blue-dark`, `--blue-mid`, `--blue-light`)
- Secondary: Teal (`--teal-dark`, `--teal-light`)
- Accent: Orange, Green

## Troubleshooting

### Issue: "Missing Supabase credentials"
**Solution**: Check your `.env` file has the correct values from Supabase.

### Issue: "Cannot POST /auth/v1/signup"
**Solution**: Ensure email authentication is enabled in Supabase → Authentication → Providers

### Issue: "Users table doesn't exist"
**Solution**: Run the SQL queries in Supabase SQL Editor to create tables.

### Issue: Row Level Security (RLS) blocks queries
**Solution**: Check RLS policies are correctly created as shown in setup section.

## Next Steps

1. **Add Module Content**: Create interactive lessons in module pages
2. **Add Activities**: Integrate H5P or custom interactive components
3. **Add Assignments**: Create essay submission system
4. **Add Discussion Forum**: Build peer discussion features
5. **Add Feedback System**: Create instructor feedback tools
6. **Add Analytics**: Track user progress and engagement

## Security Notes

- Keep `.env` file secure (never commit to git)
- Use RLS (Row Level Security) to protect user data
- Enable HTTPS in production
- Regularly update dependencies
- Use strong passwords for authentication

## Performance Tips

- Code splitting is automatic with Vite
- Images are optimized
- CSS is scoped to components
- Use React DevTools to profile

## Resources

- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## License

This project is provided as-is for educational purposes.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Supabase documentation
3. Check browser console for errors
4. Verify environment variables are set correctly

---

**Version**: 1.0.0  
**Last Updated**: June 2024
