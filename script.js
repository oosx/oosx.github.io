const year = document.querySelector("#year");
const navLinks = [...document.querySelectorAll("nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

year.textContent = new Date().getFullYear();

const sectionObserver = new IntersectionObserver(
  (entries) => {
    if (window.scrollY < 120) {
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === "#about";
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
      return;
    }

    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.6] }
);

sections.forEach((section) => sectionObserver.observe(section));
navLinks[0].setAttribute("aria-current", "true");

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
