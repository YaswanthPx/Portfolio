// Animate skills on scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      skill.style.width = skill.style.width; // already set in HTML
    }
  });
});
