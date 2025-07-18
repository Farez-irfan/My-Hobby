window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  const body = document.body;
  const title = document.getElementById('main-title');
  const desc = document.getElementById('main-desc');
  const exploreBtn = document.getElementById('explore-btn');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      const bgImage = img.getAttribute('data-bg');
      const newTitle = img.getAttribute('data-title');
      const newDesc = img.getAttribute('data-desc');
      const newLink = img.getAttribute('data-link');

      if (bgImage) {
        body.style.backgroundImage = `url('${bgImage}')`;
      }

      if (title && desc && exploreBtn) {
        title.style.opacity = 0;
        desc.style.opacity = 0;

        setTimeout(() => {
          title.textContent = newTitle;
          desc.textContent = newDesc;
          exploreBtn.setAttribute('href', newLink);

          title.style.opacity = 1;
          desc.style.opacity = 1;
        }, 300);
      }
    });
  });
});