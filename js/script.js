document.addEventListener('DOMContentLoaded', function () {
	// получаем корневой элемент слайдера
	// const $slider = document.querySelector('[data-slider="chiefslider"]');
	// // выполняем инициализацию
	// new ChiefSlider($slider, {
	// 	loop: true
	// });

	const $sliders = document.querySelectorAll('[data-slider="chiefslider"]');
	$sliders.forEach(function ($slider) {
		new ChiefSlider($slider, {
			loop: true
		});
	});

});

const series1 = document.querySelector('.series-1'),
	series2 = document.querySelector('.series-2'),
	series3 = document.querySelector('.series-3'),
	series4 = document.querySelector('.series-4'),
	series5 = document.querySelector('.series-5'),
	facingItem = document.querySelectorAll('.facing__item'),
	facingItem1 = document.querySelectorAll('.facing__item-series-1'),
	facingItem2 = document.querySelectorAll('.facing__item-series-2'),
	facingItem3 = document.querySelectorAll('.facing__item-series-3'),
	facingItem4 = document.querySelectorAll('.facing__item-series-4'),
	facingItem5 = document.querySelectorAll('.facing__item-series-5');

	function hideFacingItem () {
		facingItem.forEach(item => {
			item.classList.remove('test-block');
			item.classList.add('test-none');
		});
	}

series1.addEventListener('click', () => {
	// facingItem.forEach(item => {
	// 	item.classList.remove('test-block');
	// 	item.classList.add('test-none');
	// });

	hideFacingItem();

	facingItem1.forEach(item => {
		item.classList.add('test-block');
	});
});
series2.addEventListener('click', () => {
	facingItem.forEach(item => {
		item.classList.remove('test-block');
		item.classList.add('test-none');
	});

	facingItem2.forEach(item => {
		item.classList.add('test-block');
	});
});
series3.addEventListener('click', () => {
	facingItem.forEach(item => {
		item.classList.remove('test-block');
		item.classList.add('test-none');
	});

	facingItem3.forEach(item => {
		item.classList.add('test-block');
	});
});
series4.addEventListener('click', () => {
	facingItem.forEach(item => {
		item.classList.remove('test-block');
		item.classList.add('test-none');
	});

	facingItem4.forEach(item => {
		item.classList.add('test-block');
	});
});
series5.addEventListener('click', () => {
	facingItem.forEach(item => {
		item.classList.remove('test-block');
		item.classList.add('test-none');
	});

	facingItem5.forEach(item => {
		item.classList.add('test-block');
	});
});

const testbtn = document.querySelector('.test-btn'),
		testbtn2 = document.querySelector('.test-btn-2'),
		testbtn3 = document.querySelector('.test-btn-3'),
		test = document.querySelector('.test-1'),
		tests = document.querySelectorAll('.tesst'),
		test1 = document.querySelector('.test-1-1'),
		test2 = document.querySelector('.test-1-2'),
		test3 = document.querySelector('.test-1-3');

testbtn.addEventListener('click', () => {
	if (window.getComputedStyle(test).display == 'none') {
		test.classList.remove("test-none");
		test.classList.add("test-block");
	} else {
		test.classList.remove("test-block");
		test.classList.add("test-none");
	}
	const a = window.getComputedStyle(test).display;
	console.log('большой '+a);
});

testbtn2.addEventListener('click', () => {
	if (window.getComputedStyle(test1).display == 'none') {
		test1.classList.remove("test-none");
		test1.classList.add("test-block");
	} else {
		test1.classList.remove("test-block");
		test1.classList.add("test-none");
	}
	const a = window.getComputedStyle(test1).display;
	console.log('маленький '+a);
});
testbtn3.addEventListener('click', () => {
	if (window.getComputedStyle(test1).display == 'none') {
		tests.forEach(item => {
			item.classList.remove('test-none');
			item.classList.add('test-block');
		});
	} else {
		tests.forEach(item => {
			item.classList.remove('test-block');
			item.classList.add('test-none');
		});
	}

});


test1.addEventListener('click', () => {
	console.log('Клик 1-1!');
});
test2.addEventListener('click', () => {
	console.log('Клик 1-2!');
});
test3.addEventListener('click', () => {
	console.log('Клик 1-3!');
});