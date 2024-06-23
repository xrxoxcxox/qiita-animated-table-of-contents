const observeHeadings = document.querySelectorAll(".main-body h2");
const headingAnchorLinks = document.querySelectorAll(".table_of_contents a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headingAnchorLinks.forEach((headingAnchorLink) => {
          if (
            `#${entry.target.id}` === headingAnchorLink.getAttribute("href")
          ) {
            headingAnchorLink.setAttribute("aria-current", "true");
          } else {
            headingAnchorLink.removeAttribute("aria-current");
          }
        });
      }
    });
  },
  {
    rootMargin: "-10% 0px -90%",
  }
);

observeHeadings?.forEach((observeHeading) => {
  observer.observe(observeHeading);
});

headingAnchorLinks.forEach((headingAnchorLink) => {
  headingAnchorLink.addEventListener("click", () => {
    headingAnchorLink.setAttribute("aria-current", "true");

    headingAnchorLinks.forEach((otherHeadingAnchorLink) => {
      if (otherHeadingAnchorLink !== headingAnchorLink) {
        otherHeadingAnchorLink.removeAttribute("aria-current");
      }
    });
  });
});
