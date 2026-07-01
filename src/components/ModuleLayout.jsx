import ModuleSidebar from './ModuleSidebar'
import './ModuleLayout.css'

export default function ModuleLayout({ moduleNumber, moduleName, children, lessonNumber, lessonTitle, lessonDescription, lessonIcon, bannerColor }) {
  const defaultColor = 'linear-gradient(135deg, #1a4a8a 0%, #2e86c1 60%, #5dade2 100%)'
  const backgroundColor = bannerColor || defaultColor

  return (
    <>
      <div className="module-layout-wrapper">
        <ModuleSidebar moduleNumber={moduleNumber} moduleName={moduleName} />
        <div className="module-content">
          {/* <div className="page-banner" style={{ background: backgroundColor }}>
            <div className="banner-icon">{lessonIcon || '📖'}</div>
            <h1>{lessonTitle || moduleName}</h1>
            <p className="banner-sub">{lessonDescription || `Course Module ${moduleNumber}`}</p>
          </div> */}
          {children}
        </div>
      </div>
    </>
  )
}
