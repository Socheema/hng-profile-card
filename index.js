class ProfileCard {
  constructor() {
    this.timeElement = document.querySelector('[data-testid="test-user-time"]');
    this.updatingElement = document.querySelector(".time-updating");
    this.init();
  }

  init() {
    this.updateTime();


    this.updateInterval = setInterval(() => {
      this.updateTime();
    }, 100);


    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {

      } else {
        this.updateTime();
      }
    });

    console.log("HNG Profile Card initialized");
  }

  updateTime() {
    const now = Date.now();
    this.timeElement.textContent = now;


    this.timeElement.style.opacity = "0.7";
    setTimeout(() => {
      this.timeElement.style.opacity = "1";
    }, 100);


    if (this.updatingElement) {
      this.updatingElement.textContent = `(updated ${new Date().toLocaleTimeString()})`;
    }
  }

  destroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  window.profileCard = new ProfileCard();
});


window.addEventListener("beforeunload", () => {
  if (window.profileCard) {
    window.profileCard.destroy();
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const card = document.querySelector('[data-testid="test-profile-card"]');
    const focusableElements = card.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }
});



