  document.addEventListener('DOMContentLoaded', stickyHeader);
  window.addEventListener( 'resize', stickyHeader );
   
  function stickyHeader() {
    var header = window.__page_generator ? document.querySelector('.section') : document.querySelector('.page-block');
    var headerHeight = header.clientHeight;
    header.classList.add("sticky-header");
    document.querySelector('body').style.marginTop = headerHeight + 'px';
  }
