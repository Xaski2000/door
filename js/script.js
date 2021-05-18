const
	resOut = document.querySelector('.resultOut-kit'),
	resIn = document.querySelector('.resultIn-kit'),
	modOutItem = document.querySelectorAll('.modelsOut__item'),
	modOutRes = document.querySelectorAll('.modelsOut-result'),
	modRes4 = document.querySelector('.models-result-4'),
	facOutItem = document.querySelectorAll('.facingOut__item'),
	facOutRes = document.querySelectorAll('.facingOut-result'),
	facInItem = document.querySelectorAll('.facingIn__item'),
	facInRes = document.querySelectorAll('.facingIn-result'),
	knobItem = document.querySelectorAll('.knob__item'),
	knobOutRes = document.querySelectorAll('.knobOut-result'),
	knobInRes = document.querySelectorAll('.knobIn-result'),
	selectSideBtn = document.querySelectorAll('.select-side__btn'),
	selectSideBoth = document.querySelector('.select-side--both'),
	selectSideOut = document.querySelector('.select-side--out'),
	selectSideIn = document.querySelector('.select-side--in');

const
	modBox = document.querySelector('.models-kit'),
	facOutBox = document.querySelector('.facingOut-kit'),
	facInBox = document.querySelector('.facingIn-kit'),
	knobBox = document.querySelector('.knob-kit'),
	testover = document.querySelector('.testover'),
	testmod = document.querySelector('.testmod'),
	testfacOut = document.querySelector('.testfacOut'),
	testfacIn = document.querySelector('.testfacIn'),
	testknob = document.querySelector('.testknob');

const
	resInAll = document.querySelectorAll('.resultIn-kit'),
	testint = document.querySelector('.testint'),
	testintIn = document.querySelector('.testint-inside');

// String.prototype.filename = function(extension){
// 	var s = this.replace(/\\/g, '/');
// 	s = s.substring(s.lastIndexOf('/')+ 1);
// 	return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
// };

// console.log(modRes4.src.filename());

// Вывод имени файла

// let names = document.querySelector('.models-result-1').getAttribute('data-src').split('/');
// let name = names[nameArray .length - 1].split('.')[0];


// Дверь на фоне

// selectSideBoth.addEventListener('click', (e) => {
// 	testint.classList.remove('none');
// 	testint.classList.add('block');
// 	console.log('rere');

// 	testintIn.appendChild(resIn.cloneNode(true));
// });

testmod.addEventListener('click', (e) => {
	testover.classList.add('block');
	modBox.classList.add('flex');
});

testfacOut.addEventListener('click', (e) => {
	testover.classList.add('block');
	facOutBox.classList.add('flex');
});

testfacIn.addEventListener('click', (e) => {
	testover.classList.add('block');
	facInBox.classList.add('flex');
});

testknob.addEventListener('click', (e) => {
	testover.classList.add('block');
	knobBox.classList.add('flex');
});

testover.addEventListener('click', (e) => {
	testover.classList.remove('block');
	modBox.classList.remove('flex');
	facOutBox.classList.remove('flex');
	facInBox.classList.remove('flex');
	knobBox.classList.remove('flex');
});


modOutItem.forEach(function (item, i, arr) {
	if (i + 1 <= modOutRes.length) {
		item.addEventListener('click', (e) => {
			modOutRes.forEach(item => {
				item.classList.remove('block');
			});
			modOutItem.forEach(item => {
				item.classList.remove('border');
			});

			modOutRes[i].src = modOutRes[i].dataset.src;
			modOutRes[i].classList.add('block');

			// const a = modOutRes[i].alt;
			// console.log(a);
			let names = modOutRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			console.log(name);

			modRes4.src = modRes4.dataset.src;
			modRes4.classList.add('block');

			e.target.classList.add('border');


			// console.log('Корпус ' + (i + 1));

		});
	}
});

facOutItem.forEach(function (item, i, arr) {
	if (i + 1 <= facOutRes.length) {
		item.addEventListener('click', (e) => {
			facOutRes.forEach(item => {
				item.classList.remove('block');
			});
			facOutItem.forEach(item => {
				item.classList.remove('border');
			});

			facOutRes[i].src = facOutRes[i].dataset.src;
			facOutRes[i].classList.add('block');

			// const a = facOutRes[i].alt;
			// console.log(a);
			let names = facOutRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			console.log(name);

			e.target.classList.add('border');

			// console.log('Внешняя панель ' + (i + 1));

		});
	}
});

facInItem.forEach(function (item, i, arr) {
	if (i + 1 <= facInRes.length) {
		item.addEventListener('click', (e) => {
			facInRes.forEach(item => {
				item.classList.remove('block');
			});
			facInItem.forEach(item => {
				item.classList.remove('border');
			});

			facInRes[i].src = facInRes[i].dataset.src;
			facInRes[i].classList.add('block');

			// const a = facInRes[i].alt;
			// console.log(a);
			let names = facInRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			console.log(name);

			e.target.classList.add('border');

			// console.log('Внутренняя панель ' + (i + 1));

		});
	}
});

knobItem.forEach(function (item, i, arr) {
	if (i + 1 <= knobOutRes.length) {
		item.addEventListener('click', (e) => {
			knobOutRes.forEach(item => {
				item.classList.remove('block');
			});
			knobItem.forEach(item => {
				item.classList.remove('border');
			});

			knobOutRes[i].src = knobOutRes[i].dataset.src;
			knobOutRes[i].classList.add('block');
			knobInRes[i].src = knobInRes[i].dataset.src;
			knobInRes[i].classList.add('block');

			// const a = knobOutRes[i].alt;
			// console.log(a);
			let names = knobOutRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			console.log(name);

			e.target.classList.add('border');

			// console.log('Фурнитура ' + (i + 1));
			// console.log(knobOutRes[i].dataset.src);

		});
	}
});

selectSideBtn.forEach(function (item, i, arr) {
	item.addEventListener('click', (e) => {
		selectSideBtn.forEach(item => {
			item.classList.remove('border');
		});
		item.classList.add('border');
	});
});

selectSideBoth.addEventListener('click', (e) => {
	resOut.classList.remove('none');
	resIn.classList.remove('none');
	resOut.classList.remove('block');
	resIn.classList.remove('block');
	resOut.classList.add('block');
	resIn.classList.add('block');
});

selectSideOut.addEventListener('click', (e) => {
	resOut.classList.remove('none');
	resIn.classList.remove('none');
	resOut.classList.remove('block');
	resIn.classList.remove('block');
	resIn.classList.add('none');
	resOut.classList.add('block');
});

selectSideIn.addEventListener('click', (e) => {
	resOut.classList.remove('none');
	resIn.classList.remove('none');
	resOut.classList.remove('block');
	resIn.classList.remove('block');
	resOut.classList.add('none');
	resIn.classList.add('block');
});

// const testbtn = document.querySelector('.test-btn'),
// 		testbtn2 = document.querySelector('.test-btn-2'),
// 		testbtn3 = document.querySelector('.test-btn-3'),
// 		test = document.querySelector('.test-1'),
// 		tests = document.querySelectorAll('.tesst'),
// 		test1 = document.querySelector('.test-1-1'),
// 		test2 = document.querySelector('.test-1-2'),
// 		test3 = document.querySelector('.test-1-3');

// testbtn3.addEventListener('click', () => {
// 	if (window.getComputedStyle(test1).display == 'none') {
// 		tests.forEach(item => {
// 			item.classList.remove('test-none');
// 			item.classList.add('test-block');
// 		});
// 	} else {
// 		tests.forEach(item => {
// 			item.classList.remove('test-block');
// 			item.classList.add('test-none');
// 		});
// 	}
// });

// const modResBox = document.querySelectorAll('.models-result-box'),
// 	facResBox = document.querySelectorAll('.facing-result-box'),
// 	knobResBox = document.querySelectorAll('.knob-result-box');



// const
// 	facOutItem1 = document.querySelector('.facingOut__item-1'),
// 	facOutItem2 = document.querySelector('.facingOut__item-2');

// const
// 	facInItem1 = document.querySelector('.facingIn__item-1'),
// 	facInItem2 = document.querySelector('.facingIn__item-2'),
// 	facInItem3 = document.querySelector('.facingIn__item-3');

// const
// 	knobItem1 = document.querySelector('.knob__item-1'),
// 	knobItem2 = document.querySelector('.knob__item-2'),
// 	knobItem3 = document.querySelector('.knob__item-3');

// //

// const modOutRes = document.querySelectorAll('.modelsOut-result'),


// const modInRes = document.querySelectorAll('.modelsIn-result'),
// 	facInRes = document.querySelectorAll('.facingIn-result'),


// // Корпуса

// const modRes1 = document.querySelector('.models-result-1'),
// 	modRes2 = document.querySelector('.models-result-2'),
// 	modRes3 = document.querySelector('.models-result-3'),
//

// // Внешние панели

// const facOutRes1 = document.querySelector('.facingOut-result-1'),
// 	facOutRes2 = document.querySelector('.facingOut-result-2');

// // Внутренние панели

// const facInRes1 = document.querySelector('.facingIn-result-1'),
// 	facInRes2 = document.querySelector('.facingIn-result-2'),
// 	facInRes3 = document.querySelector('.facingIn-result-3');

// // const facRes1 = document.querySelector('.facing-result-1'),
// // 		facRes2 = document.querySelector('.facing-result-2');

// // Внешние ручки

// const knobOutRes1 = document.querySelector('.knobOut-result-1');

// // Внутренние ручки

// const knobInRes1 = document.querySelector('.knobIn-result-1');