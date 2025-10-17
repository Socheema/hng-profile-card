# Live Demo

Deployed URL (Replace with actual deployment URL)

# Features

✅ Real-time millisecond timestamp using Date.now()
✅ Fully responsive design (mobile, tablet, desktop)
✅ Semantic HTML5 markup
✅ Complete accessibility (keyboard navigation, screen reader support)
✅ All required data-testids for automated testing
✅ Social links with proper security attributes

# Local Setup

Clone or download this repository
Open index.html in any modern web browser
No build tools or dependencies required

# Technology Stack

HTML5 - Semantic markup
CSS3 - Grid, Flexbox, Custom Properties
Vanilla JavaScript - Real-time updates, accessibility

# Testing

All elements include exact data-testid attributes as specified:
// Example test selectors
'[data-testid="test-profile-card"]'
'[data-testid="test-user-time"]' // Should match Date.now()
'[data-testid="test-user-social-twitter"]'

# Automated Test Verification

// Time accuracy test
const timeElement = document.querySelector('[data-testid="test-user-time"]');
const currentTime = parseInt(timeElement.textContent);
const now = Date.now();
expect(Math.abs(currentTime - now)).toBeLessThan(200); // Allow 200ms delta

# Accessibility Features

Skip link for screen readers
Keyboard-navigable social links
Visible focus indicators
Semantic structure with ARIA labels
Live time updates announced to screen readers

# Responsive Breakpoints

Mobile (< 480px): Stacked layout
Tablet (480px - 768px): Optimized spacing
Desktop (≥ 768px): Avatar left, content right grid layout

# Deployment

Netlify

Connect GitHub repo to Netlify
Deploy automatically on push
Custom domain optional

# GitHub Pages

Push to main branch
Enable GitHub Pages in Settings > Pages
Access at https://username.github.io/repo-name

# Component Structure

article[test-profile-card]
├── figure[test-user-avatar]
├── header
│ ├── h1[test-user-name]
│ └── div[test-user-time]
├── p[test-user-bio]
├── nav[test-user-social-links]
│ ├── a[test-user-social-twitter]
│ ├── a[test-user-social-linkedin]
│ └── ...
├── section
│ ├── h2 "Hobbies"
│ └── ul[test-user-hobbies]
└── section
├── h2 "Dislikes"
└── ul[test-user-dislikes]

# Browser Support

Chrome 88+
Firefox 84+
Safari 14+
Edge 88+

# Performance

No external dependencies
Minimal JavaScript footprint
CSS Grid for efficient rendering
Lazy-loaded avatar image

# Customization

Update profile data in HTML
Modify CSS custom properties (:root)
Adjust time update interval in JavaScript
Replace avatar URL or implement file upload

# License

MIT License - feel free to use and modify
