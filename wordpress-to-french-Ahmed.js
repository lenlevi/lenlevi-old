window.addEventListener('load', (event) => {
var p, first_link, second_link, third_link, anzeige, meta;
		p = document.getElementsByClassName('copyright-bar');
		p[0].innerHTML = '<span>© 2022 Club du Consommateur</span>';

		first_link = document.getElementById('menu-item-100');
		first_link.innerHTML = '<a href="https://club-der-verbraucher.com/a-propos-de-nous-2/">À propos de nous</a>';

		second_link = document.getElementById('menu-item-99');
		second_link.innerHTML = '<a href="https://club-der-verbraucher.com/contacter/">Contact</a>';

		first_link = document.getElementById('menu-item-96');
		first_link.innerHTML = '<a href="https://consumer-match.com/politique-de-confidentialite/">Politique De Confidentialité</a>';

		forth_link = document.getElementsByClassName('link');
		forth_link[0].innerText = 'VÉRIFIER LA DISPONIBILITÉ >>';

		anzeige = document.getElementById('main');
		anzeige.innerHTML += '<div class="publi">Publi-Communiqué</div>';

logo = document.querySelectorAll('.site-logo > a > img');
		logo[0].src="https://club-der-verbraucher.com/wp-content/uploads/2021/11/concommateur_logo.png";

		meta = document.getElementsByClassName('entry-meta');
		meta[0].innerHTML = '<span id="post_date"></span><span>par Rédaction</span>';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

function formatDate(date) {
	var monthNames = new Array(
	                "January", "February", "March", "April", "May", "June", "July",
	                "August", "September", "October", "November", "December");
		var dd = date.getDate();
		
		var mm = monthNames[date.getMonth()];
		if (mm < 10) mm = '0' + mm;
		return dd + ' ' + mm + ' ';
		}
		var d = new Date();
		var dtd = document.getElementById("post_date");
		d.setDate(d.getDate() - 2);
		formatDate(d);
		dtd.innerHTML = formatDate(d);

});
