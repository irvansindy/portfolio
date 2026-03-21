# CMS Portfolio - Architecture Diagram

## Flow Diagram: User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                    PORTFOLIO WEBSITE (Public)                   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Header with "🔐 Admin" Button (Top Right)              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                          ↓                                       │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│  │ Hero Section   │  │ About Section  │  │ Portfolio      │   │
│  │ (Static)       │  │ (Uses Skills   │  │ (Uses CMS)     │   │
│  │                │  │  from CMS)     │  │                │   │
│  └────────────────┘  └────────────────┘  └────────────────┘   │
│                                                                 │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐   │
│  │ Experience     │  │ Services       │  │ News           │   │
│  │ (Uses CMS)     │  │ (Uses CMS)     │  │ (Uses CMS)     │   │
│  └────────────────┘  └────────────────┘  └────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                             ↓
                    User clicks "🔐 Admin"
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    ADMIN LOGIN PAGE                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Logo: "Admin CMS"                                      │   │
│  │ Description: "Portfolio Management System"             │   │
│  │ Input: [Password Field]                                │   │
│  │ Button: [Login]                                        │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                             ↓
            User enters password & clicks Login
                             ↓
            ┌──── Password Validation ────┐
            ↓                              ↓
         CORRECT                        WRONG
           ↓                              ↓
      Set Auth         Show Error "Password Salah!"
      (localStorage)          (Try again)
           ↓
┌─────────────────────────────────────────────────────────────────┐
│                 ADMIN PANEL - MAIN DASHBOARD                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Header: "📊 Admin CMS Dashboard" [Logout Button]        │   │
│  │ ─────────────────────────────────────────────────────── │   │
│  │ Tabs:                                                    │   │
│  │ [📚 Experience] [💼 Portfolio] [🛠️ Services]             │   │
│  │ [📰 News] [⚡ Skills]                                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│                    TAB CONTENT AREA                             │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [Items List with Preview]                              │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐             │   │
│  │  │Item 1    │  │Item 2    │  │Item 3    │             │   │
│  │  │[Edit]    │  │[Edit]    │  │[Edit]    │             │   │
│  │  │[Delete]  │  │[Delete]  │  │[Delete]  │             │   │
│  │  └──────────┘  └──────────┘  └──────────┘             │   │
│  │                                                         │   │
│  │ [+ Add New Item Button]                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [Edit Form] (shown when Edit clicked)                  │   │
│  │ Field 1: [Input]                                        │   │
│  │ Field 2: [Input]                                        │   │
│  │ Field 3: [Input]                                        │   │
│  │ [Update Button] [Cancel Button]                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                          ↓                                      │
│                    Data Saved to                               │
│                   localStorage                                │
│                          ↓                                      │
│              Portfolio Updates Real-time!                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                        APP.JSX (Root)                                │
│                                                                      │
│  State: isLoggedIn, page, sidebar                                   │
│  Hooks: useAuth(), useScroll()                                      │
└──────────────────────────────────────────────────────────────────────┘
                    ↓
        ┌───────────┴───────────┐
        ↓                       ↓
   ┌─────────┐          ┌──────────────┐
   │ isAuth? │          │ Current Page │
   └────┬────┘          └──────────────┘
        ↓                       ↓
    ┌────┴────┐          ┌──────┴─────┐
    ↓         ↓          ↓             ↓
   HOME   ADMIN-LOGIN   ADMIN-PANEL   OTHER

HOME: Portfolio Display
├─ Header (with admin button)
├─ Sections (using CMS data)
│  ├─ Experience (from cmsDataService)
│  ├─ Portfolio (from cmsDataService)
│  ├─ Service (from cmsDataService)
│  ├─ News (from cmsDataService)
│  └─ About (Skills from cmsDataService)
└─ Footer

ADMIN-LOGIN: Login Form
├─ Input password
├─ Validate with authService
└─ Set localStorage & redirect

ADMIN-PANEL: Management Dashboard
├─ Header (with Logout button)
├─ Tabs Navigation
├─ Tab Content
│  └─ Managers (20 items selected per tab)
│     ├─ List items with Edit/Delete
│     ├─ Form for Add/Edit
│     └─ Fetch/Update/Delete via cmsDataService
└─ Footer (Reset button)
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERACTIONS                            │
│  Add Item | Edit Item | Delete Item | Login | Logout           │
└────────────────────────────────────────────────────────────────┘
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│              MANAGER COMPONENTS (5)                             │
├─────────────────────────────────────────────────────────────────┤
│ ExperienceManager | PortfolioManager | ServicesManager         │
│ NewsManager | SkillsManager                                     │
└────────────────────────────────────────────────────────────────┘
                    ↓         ↓         ↓
           ┌────────┴─────────┴─────────┴────────┐
           ↓                                      ↓
    ┌────────────────────┐         ┌────────────────────┐
    │ cmsDataService     │         │ authService        │
    ├────────────────────┤         ├────────────────────┤
    │ - getExperienceData│         │ - login()          │
    │ - addPortfolioItem │         │ - logout()         │
    │ - updateItem()     │         │ - isLoggedIn()     │
    │ - deleteItem()     │         └────────────────────┘
    │ - resetAllData()   │                  ↓
    └────────────────────┘          [localStorage:
                             ├─ cms_admin_auth]
              ↓
      [localStorage]
      ├─ cms_experience_data
      ├─ cms_portfolio_data
      ├─ cms_services_data
      ├─ cms_news_data
      └─ cms_skills_data
              ↓
    ┌─────────────────────┐
    │  Browser Refresh    │
    │ (Data Persists!)    │
    └─────────────────────┘
              ↓
    ┌─────────────────────┐
    │  App Renders        │
    │  with Updated Data  │
    └─────────────────────┘
              ↓
    ┌─────────────────────┐
    │  Portfolio Shows    │
    │  Latest Content!    │
    └─────────────────────┘
```

---

## Service Layer Architecture

```
┌────────────────────────────────────────────┐
│         SERVICES LAYER                     │
├────────────────────────────────────────────┤
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │   authService.js                     │ │
│  ├──────────────────────────────────────┤ │
│  │ • login(password)                    │ │
│  │ • logout()                           │ │
│  │ • isLoggedIn()                       │ │
│  │ • getAuthInfo()                      │ │
│  │                                      │ │
│  │ Storage: localStorage.cms_admin_auth│ │
│  └──────────────────────────────────────┘ │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │   cmsDataService.js                  │ │
│  ├──────────────────────────────────────┤ │
│  │ EXPERIENCE:                          │ │
│  │  • getExperienceData()               │ │
│  │  • addExperienceItem(type, item)     │ │
│  │  • updateExperienceItem(type, id)    │ │
│  │  • deleteExperienceItem(type, id)    │ │
│  │                                      │ │
│  │ PORTFOLIO:                           │ │
│  │  • getPortfolioData()                │ │
│  │  • addPortfolioItem(item)            │ │
│  │  • updatePortfolioItem(id, item)     │ │
│  │  • deletePortfolioItem(id)           │ │
│  │                                      │ │
│  │ SERVICES:                            │ │
│  │  • getServicesData()                 │ │
│  │  • addServiceItem(item)              │ │
│  │  • updateServiceItem(id, item)       │ │
│  │  • deleteServiceItem(id)             │ │
│  │                                      │ │
│  │ NEWS:                                │ │
│  │  • getNewsData()                     │ │
│  │  • addNewsItem(item)                 │ │
│  │  • updateNewsItem(id, item)          │ │
│  │  • deleteNewsItem(id)                │ │
│  │                                      │ │
│  │ SKILLS:                              │ │
│  │  • getSkillsData()                   │ │
│  │  • addSkillItem(item)                │ │
│  │  • updateSkillItem(id, item)         │ │
│  │  • deleteSkillItem(id)               │ │
│  │                                      │ │
│  │ UTILITIES:                           │ │
│  │  • resetAllData()                    │ │
│  │                                      │ │
│  │ Storage: localStorage.cms_*_data     │ │
│  └──────────────────────────────────────┘ │
│                                            │
└────────────────────────────────────────────┘
```

---

## Component Dependency Graph

```
App.jsx
├── useAuth() [hook]
├── useScrollSmooth() [hook]
├── useScrollProgress() [hook]
│
├── AdminLogin.jsx (if not logged in)
│   └── useAuth()
│
├── AdminPanel.jsx (if logged in)
│   ├── ExperienceManager.jsx
│   │   └── cmsDataService
│   ├── PortfolioManager.jsx
│   │   └── cmsDataService
│   ├── ServicesManager.jsx
│   │   └── cmsDataService
│   ├── NewsManager.jsx
│   │   └── cmsDataService
│   └── SkillsManager.jsx
│       └── cmsDataService
│
└── Home Page (if logged out)
    ├── Header.jsx (with admin button)
    │   └── navigateToAdmin()
    ├── Hero.jsx
    ├── About.jsx
    │   └── cmsDataService.getSkillsData()
    ├── Experience.jsx
    │   └── cmsDataService.getExperienceData()
    ├── Service.jsx
    │   └── cmsDataService.getServicesData()
    ├── Portfolio.jsx
    │   └── cmsDataService.getPortfolioData()
    ├── News.jsx
    │   └── cmsDataService.getNewsData()
    ├── Contact.jsx
    └── Footer.jsx
```

---

## State Management Flow

```
┌─────────────────────────────────────────────┐
│         GlobalState (in App.jsx)            │
├─────────────────────────────────────────────┤
│ • isLoggedIn (from useAuth hook)            │
│ • page (home/admin-login/admin)             │
│ • sidebarOpen (boolean)                     │
│ • isLoading (boolean)                       │
└─────────────────────────────────────────────┘
        ↓            ↓           ↓
   ┌────────┐   ┌──────────┐   ┌──────────┐
   │Manager │   │Component │   │Page      │
   │Component│   │State     │   │State     │
   └────────┘   └──────────┘   └──────────┘
        ↓            ↓           ↓
   ┌────────────────────────────────────┐
   │     Local Component State via       │
   │     useState() & useEffect()        │
   └────────────────────────────────────┘
        ↓
   ┌────────────────────────────────────┐
   │        localStorage (Persistent)   │
   │                                    │
   │ • cms_experience_data              │
   │ • cms_portfolio_data               │
   │ • cms_services_data                │
   │ • cms_news_data                    │
   │ • cms_skills_data                  │
   │ • cms_admin_auth                   │
   └────────────────────────────────────┘
```

---

## API-like Flow (cmsDataService)

```
Manager Component
    │
    ├─ cmsDataService.getExperienceData()
    │  └─ Read from localStorage
    │
    ├─ cmsDataService.addPortfolioItem(item)
    │  ├─ Add item to array
    │  ├─ Write to localStorage
    │  └─ Return success message
    │
    ├─ cmsDataService.updatePortfolioItem(id, item)
    │  ├─ Find item by ID
    │  ├─ Update fields
    │  ├─ Write to localStorage
    │  └─ Return success message
    │
    └─ cmsDataService.deletePortfolioItem(id)
       ├─ Filter out item
       ├─ Write to localStorage
       └─ Return success message
```

---

**Version:** 1.0.0 | **Updated:** March 21, 2026

This architecture ensures:

- ✅ Clean separation of concerns
- ✅ Reusable services
- ✅ Easy to maintain and extend
- ✅ Responsive UI updates
- ✅ Data persistence
- ✅ Secure authentication
