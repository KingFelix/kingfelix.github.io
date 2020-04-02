const el = document.querySelectorAll('.under');
const img = document.querySelectorAll('.animate-img');

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', function() {
    el.forEach( function(e) {
      if (isInViewport(e)) {
        e.classList.add('under-color');
      } else {
        e.classList.remove('under-color');
      }
    });
});

window.addEventListener('scroll', function() {
    img.forEach( function(e) {
      if (isInViewport(e)) {
        e.classList.add('position-reset');
      }
    });
});

// -- Toggle Fixed Header -- //

var header             = document.querySelector('#header-wrap'),
    shadow             = 'shadow',
    unfix              = 'un-fixed';

var lastScroll = 0;

    function fixedNav() {
        var newScroll = window.scrollY;

        if (newScroll > lastScroll) {

            header.classList.remove(shadow);
            header.classList.add(unfix);

        } else if (newScroll == 0) {

            header.classList.remove(shadow);

        } else {

            header.classList.add(shadow);
            header.classList.remove(unfix);

        }
        lastScroll = newScroll;
    }

// -- Ensures backward compatibility with IE old versions -- //
function scrollNav() {

	if ( document.addEventListener ) {

		window.addEventListener('scroll', fixedNav);

	} else if ( document.attachEvent ) {

		window.attachEvent('onscroll', fixedNav);

	} else {

		return;
	}
}

scrollNav();

// -- Menu icon --//
const icon = document.querySelector("#icon");
const nav = document.querySelector("#bar");
const menu = document.querySelector('#menu');
const link = document.querySelectorAll('.menu-link');

function openMenu() {
  if (nav.className == "active") {
    nav.className = "";
  } else {
    nav.className += "active";
  }

  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  } else {
    menu.classList.add('open')
  }
}

function menuClick() {
  icon.addEventListener('click', openMenu);
  link.forEach((item, i) => {
    item.addEventListener('click', openMenu);
  });

}

menuClick();
