function init() {
  // ========== HTML REFERENCE VARIABLES ==========
  const bg_btn = document.getElementsByClassName('bg_btn')[0];
  const page_wrapper = document.getElementsByClassName('page_wrapper')[0];

  // ========== EVENT LISTENERS ==========
  bg_btn.addEventListener('click', () => {
    page_wrapper.style.backgroundColor = get_color();
  });

  // ========== FUNCTIONS ==========
  function get_color() {
    const r = Math.floor(Math.random() * (256 - 0));
    const g = Math.floor(Math.random() * (256 - 0));
    const b = Math.floor(Math.random() * (256 - 0));
    return `rgb(${r}, ${g}, ${b})`;
  }
}

window.addEventListener('load', init);
