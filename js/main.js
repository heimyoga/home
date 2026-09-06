(function () {
  const STORAGE_KEY = "heim-yoga-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "no" ? "nb" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang][key];
      if (text !== undefined) el.textContent = text;
    });

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    renderTrainingList(lang);
  }

  function renderTrainingList(lang) {
    const list = document.getElementById("training-list");
    if (!list) return;

    list.innerHTML = trainingItems[lang]
      .map(
        (item) =>
          `<li><strong>${item.title}</strong>${item.detail}</li>`
      )
      .join("");
  }

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  const burger = document.querySelector(".nav__burger");
  const navLinks = document.querySelector(".nav__links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  }

  setLanguage(currentLang);
})();
