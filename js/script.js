document.addEventListener('DOMContentLoaded', function () {
	// получаем корневой элемент слайдера
	const $slider = document.querySelector('[data-slider="chiefslider"]');
	// выполняем инициализацию
	new ChiefSlider($slider, {
		loop: true
	});
});

// document.querySelector('#first').on('click', function () {
// 	alert("done");
// });

// (function () {
// 	function scrollHorizontally(e) {
// 		e = window.event || e;
// 		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
// 		document.querySelector(".models-kit").scrollLeft -= (delta * 40); // Multiplied by 40
// 		e.preventDefault();
// 	}
// 	if (document.querySelector(".models-kit").addEventListener) {
// 		// IE9, Chrome, Safari, Opera
// 		document.querySelector(".models-kit").addEventListener("mousewheel", scrollHorizontally, false);
// 		// Firefox
// 		document.querySelector(".models-kit").addEventListener("DOMMouseScroll", scrollHorizontally, false);
// 	} else {
// 		// IE 6/7/8
// 		document.querySelector(".models-kit").attachEvent("onmousewheel", scrollHorizontally);
// 	}
// })();