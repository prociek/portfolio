class Navigation {
  constructor() {
    this.toggleNavBtn = document.getElementById("toggle-nav");
    this.nav = document.getElementById("nav");
    this.navItems = document.querySelectorAll(".header__list-item");

    this.configure();
  }

  isOpen() {
    return this.nav.getAttribute("aria-expanded") === "true";
  }

  slideNavItemIn(item, delay) {
    setTimeout(() => {
      item.style.transform = "translateX(0)";
    }, delay);
  }

  slideNavItemOut(item, delay) {
    setTimeout(() => {
      item.style.transform = "translateX(100%)";
    }, delay);
  }

  toggleNav() {
    if (!this.isOpen()) {
      this.nav.style.display = "block";
      this.nav.setAttribute("aria-expanded", "true");
      this.navItems.forEach((item, idx) => {
        this.slideNavItemIn(item, idx * 100);
      });
      this.toggleNavBtn.classList.add("closed");
    } else {
      this.nav.setAttribute("aria-expanded", "false");
      this.navItems.forEach((item, idx) => {
        this.slideNavItemOut(item, idx * 100);
      });
      this.toggleNavBtn.classList.remove("closed");
    }
  }

  configure() {
    this.toggleNavBtn.addEventListener("click", this.toggleNav.bind(this));
    this.navItems.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleNav();
        console.log("nav clicked");
      });
    });
  }
}

new Navigation();
