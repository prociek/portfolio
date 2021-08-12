// Importing all image sources for certificates
import ultimateHtml from "url:./img/certificates/ultimate-html.jpg";
import beginningCpp from "url:./img/certificates/beginning-cpp.jpg";
import webDeveloper from "url:./img/certificates/web-developer.jpg";
import completeJavascript from "url:./img/certificates/complete-javascript.jpg";
import javascriptWeirdParts from "url:./img/certificates/javascript-wired-parts.jpg";
import advancedCss from "url:./img/certificates/advanced-css.jpg";
import javascriptAdvanced from "url:./img/certificates/javascript-advanced.jpg";
import reactGuide from "url:./img/certificates/react-guide.jpg";
import responsiveWeb from "url:./img/certificates/responsive-web.jpg";
import understandingTypescript from "url:./img/certificates/understanding-typescript.jpg";
import gitAndGithub from "url:./img/certificates/git-and-github.jpg";

const imgSrcs = {
  ultimateHtml,
  beginningCpp,
  webDeveloper,
  completeJavascript,
  javascriptWeirdParts,
  advancedCss,
  javascriptAdvanced,
  reactGuide,
  responsiveWeb,
  understandingTypescript,
  gitAndGithub,
};

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
      });
    });
  }
}

class Modal {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.image = this.modal.querySelector(".modal__image");

    this.configure();
  }

  closeModal() {
    this.modal.classList.add("modal-hidden");
    console.log("modal close");
  }

  openModal() {
    this.modal.classList.remove("modal-hidden");
  }

  changeImageSrc(imgSrc) {
    this.image.setAttribute("src", imgSrc);
  }

  configure() {
    this.modal.addEventListener("click", this.closeModal.bind(this));
  }
}

class CertificatesList {
  constructor(imgSrcs) {
    this.list = document.querySelector(".certificates__list");
    this.imgSrcs = imgSrcs;
    this.modal = new Modal();

    this.configure();
  }

  openModal(e) {
    if (e.target.classList.contains("certificates__button")) {
      const img = e.target.dataset.img;
      this.modal.changeImageSrc(this.imgSrcs[img]);
      this.modal.openModal();
    }
  }

  configure() {
    this.list.addEventListener("click", this.openModal.bind(this));
  }
}

new Navigation();
new CertificatesList(imgSrcs);
