# HNG Profile Card - Test Requirements Checklist

## Core Functionality Tests ✅

### Data-testid Verification
```javascript
// Run in browser console to verify all required elements
const requiredTestIds = [
  'test-profile-card',
  'test-user-name',
  'test-user-bio',
  'test-user-time',
  'test-user-avatar',
  'test-user-social-links',
  'test-user-hobbies',
  'test-user-dislikes'
];

requiredTestIds.forEach(id => {
  const element = document.querySelector(`[data-testid="${id}"]`);
  console.assert(element !== null, `❌ MISSING: ${id}`);
  console.log(`✅ ${id}:`, element ? 'FOUND' : 'MISSING');
});


// Verify Date.now() accuracy
const timeElement = document.querySelector('[data-testid="test-user-time"]');
const displayedTime = parseInt(timeElement?.textContent || 0);
const currentTime = Date.now();
const delta = Math.abs(displayedTime - currentTime);

console.assert(
  delta < 200,
  `⏰ Time accuracy failed: ${delta}ms delta (max 200ms allowed)`
);
console.log(`⏰ Time delta: ${delta}ms ✅`);


// Verify target="_blank" and rel attributes
const socialLinks = document.querySelectorAll('[data-testid^="test-user-social-"]');
socialLinks.forEach((link, index) => {
  console.assert(
    link.target === '_blank',
    `❌ Social link ${index} missing target="_blank"`
  );
  console.assert(
    link.rel.includes('noopener noreferrer'),
    `❌ Social link ${index} missing rel="noopener noreferrer"`
  );
});
console.log(`🔗 ${socialLinks.length} secure social links verified`);
