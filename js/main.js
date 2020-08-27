var mySwiper = new Swiper ('.swiper-photo1', {
	slidesPerView: 3,
	loop: true,
	autoplay: {
		delay: 2000,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  var mySwiper2 = new Swiper ('.swiper-photo2', {
	slidesPerView: 3,
	reverseDirection: true,
	loop: true,
	autoplay: {
		delay: 2000,
		reverseDirection: true,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  var mySwiper3 = new Swiper ('.swiper-photo3', {
	slidesPerView: 3,
	loop: true,
	autoplay: {
		delay: 2000,
		reverseDirection: false,
	  },
	  breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			450:{
				slidesPerView: 2,
				
			},
			120:{
				slidesPerView: 1,
			}
		},
  });

  new  WOW().init();