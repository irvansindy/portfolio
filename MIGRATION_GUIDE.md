# 🔄 Migration Guide - HTML to React Conversion

Panduan lengkap tentang bagaimana template Masterly HTML di-convert ke React Components.

---

## 📖 HTML vs React Mapping

### Header Section

**HTML:**

```html
<header>
  <nav>
    <a href="#" class="ms-sidebar-toggle">
      <img src="assets/images/icons/menu.svg" class="svg_img" alt="menu" />
    </a>
  </nav>
</header>
```

**React:**

```jsx
<Header onMenuClick={handleMenuClick} />
```

---

### Sidebar Navigation

**HTML:**

```html
<div class="ms-sidebar">
  <div class="menu-list">
    <ul class="navbar-nav mb-2 ml-auto" id="top-menu">
      <li class="nav-item active">
        <a class="nav-link ms-nav" href="#home">Home</a>
      </li>
      <!-- More items -->
    </ul>
  </div>
</div>
```

**React:**

```jsx
<Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
```

Data diambil dari array yang didefinisikan dalam component.

---

### Hero Section

**HTML:**

```html
<section id="home" class="ms-hero margin-b-50">
  <h2 class="ms-hero-title">
    <span
      >Hello, <br />
      I am<br />
      <span class="name">&nbsp; Maria Ilvor</span>
    </span>
  </h2>
  <!-- More content -->
</section>
```

**React:**

```jsx
<Hero />;
// Data dari profileData object
{
  profileData.fullName;
}
{
  profileData.title;
}
```

---

### Portfolio Section (with Loop)

**HTML:**

```html
<div class="col-lg-6 mix graphics templates">
  <div class="ms-project-box">
    <h3>BonzaMart - Super market</h3>
    <!-- Static content for each project -->
  </div>
</div>
<!-- Repeated 6 times manually -->
```

**React:**

```jsx
{portfolioData.map((project) => (
  <div key={project.id} className="col-lg-6 mix">
    <div className="ms-project-box">
      <h3>{project.title}</h3>
      <!-- Dynamic content -->
    </div>
  </div>
))}
```

---

### Counter Section with Animation

**HTML:**

```html
<span class="counter counter-value" data-count="156">156</span>+

<!-- Requires JavaScript to animate -->
<script>
  // jQuery counterup plugin
  $(document).ready(function(){
    $('.counter').counterUp({...});
  });
</script>
```

**React:**

```jsx
{
  countersData.map((item) => (
    <span className="counter counter-value">{counts[item.id] || 0}</span>
  ));
}

// useEffect hook handles animation
useEffect(() => {
  if (!hasStarted) return;
  countersData.forEach((item) => {
    // Auto-increment logic
  });
}, [hasStarted]);
```

---

### Contact Form

**HTML:**

```html
<form>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      id="fname"
      placeholder="Full Name"
    />
  </div>
  <button type="submit" class="ms-learn-more-right">
    <span class="text">Submit</span>
  </button>
</form>
```

**React:**

```jsx
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  const { id, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Send data to API
};

// Form JSX with controlled inputs
<input type="text" onChange={handleChange} value={formData.fullName} />;
```

---

### WhatsApp Widget

**HTML:**

```html
<div class="ms-style ms-right-bottom">
  <div class="ms-panel">
    <!-- Static contact items -->
    <div class="ms-header">
      <strong>Need Help?</strong>
    </div>
    <ul>
      <li>
        <a class="ms-list" data-number="918866774266" data-message="...">
          Maria W Ilvor
        </a>
      </li>
    </ul>
  </div>
</div>
```

**React:**

```jsx
<WhatsAppWidget />
// Handles:
// - State management for panel open/close
// - Dynamic contact list rendering
// - WhatsApp link generation
// - Click handlers
```

---

### Scroll Effects

**HTML:**

```html
<!-- Requires external jQuery plugins -->
<script src="assets/js/vendor/jquery-3.1.1.min.js"></script>
<script src="assets/js/vendor/tilt.jquery.js"></script>
<script src="assets/js/script.js"></script>
```

**React:**

```jsx
// Custom hooks menggantikan jQuery
import { useScrollSmooth, useScrollProgress } from "./hooks/useScroll";

function App() {
  useScrollSmooth(); // Smooth scroll navigation
  useScrollProgress(); // Back to top progress
}
```

---

## 🔑 Key Conversion Principles

### 1. **Static HTML → Reusable Components**

Setiap section HTML menjadi component React yang berdiri sendiri.

### 2. **Inline Data → Centralized Data Files**

Hard-coded data dipindahkan ke `/src/data/` files untuk mudah di-manage.

### 3. **jQuery → React Hooks**

jQuery plugins digantikan dengan custom React hooks dan state management.

### 4. **CSS Classes → Dynamic Classes**

Hard-coded classes diganti dengan conditional class binding.

### 5. **Global Scripts → Modular Utilities**

Script global dipecah menjadi utility functions dan services.

---

## 🎯 Conversion Best Practices Used

✅ **Component Separation**

- Setiap section memiliki component sendiri
- Layout components terpisah dari content

✅ **Data Management**

- Centralized data files
- Easy to update tanpa sentuh component code

✅ **Prop Drilling**

- Props digunakan untuk pass data antar component
- Future: Gunakan Context API untuk complex state

✅ **Custom Hooks**

- useScrollSmooth() - smooth scroll navigation
- useScrollProgress() - scroll progress tracking
- useScrollReveal() - reveal on scroll animation

✅ **Service Layer**

- Separated API calls
- Reusable service functions
- Local storage utilities

---

## 🚀 Future Improvements

### 1. State Management

```javascript
// Current: Local state dalam component
// Future: Context API atau Redux untuk global state
```

### 2. Routing

```javascript
// Saat ini: Single page
// Future: React Router untuk multi-page
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

### 3. Performance

```javascript
// Implementasi:
// - React.memo() untuk memoization
// - useCallback() untuk function optimization
// - Image lazy loading
```

### 4. Type Safety

```javascript
// Tambahkan TypeScript atau PropTypes
import PropTypes from "prop-types";

Component.propTypes = {
  data: PropTypes.array.isRequired,
};
```

---

## 📋 HTML to React Checklist

Saat convert HTML baru ke React, gunakan checklist ini:

- [ ] Buat component file di folder yang sesuai
- [ ] Extract data ke `/src/data/`
- [ ] Import data dan external dependencies
- [ ] Convert HTML ke JSX (className, camelCase props)
- [ ] Implement state management jika diperlukan
- [ ] Add event handlers
- [ ] Test component rendering
- [ ] Import component di App.jsx

---

**Semua conversion mengikuti React best practices dan modern conventions.** ✨
