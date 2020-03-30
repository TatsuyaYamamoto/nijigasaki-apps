import './index.scss'

function initSectionObserver() {
  const sections = [
    // fallback
    // {
    //   targetElement: document.getElementById("news-section"),
    //   backgroundElement: document.getElementById("section-list-background-news"),
    // },
    {
      targetElement: document.getElementById("about-school-section"),
      backgroundElement: document.getElementById("section-list-background-about-school"),
    },
    {
      targetElement: document.getElementById("school-life-section"),
      backgroundElement: document.getElementById("section-list-background-school-life"),
    },
    {
      targetElement: document.getElementById("examination-section"),
      backgroundElement: document.getElementById("section-list-background-examination"),
    },
    {
      targetElement: document.getElementById("special-section"),
      backgroundElement: document.getElementById("section-list-background-special"),
    },
  ];

  const sectionObserver = new IntersectionObserver(function (entries, object) {
    entries.forEach(entry => {
      sections.forEach(section => {
        if (entry.target === section.targetElement) {
          if (entry.isIntersecting) {
            section.backgroundElement.classList.add("section-list__background-image--show");
          } else {
            section.backgroundElement.classList.remove("section-list__background-image--show");
          }
        }
      });
    });
  });
  sections.forEach((section) => {
    sectionObserver.observe(section.targetElement);
  });
}

(() => {
  initSectionObserver();
})();
