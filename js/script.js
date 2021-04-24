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


const modResBox = document.querySelectorAll('.models-result-box'),
		facResBox = document.querySelectorAll('.facing-result-box'),
		knobResBox = document.querySelectorAll('.knob-result-box');

const modOutItem = document.querySelectorAll('.modelsOut__item'),
		modOutItem1 = document.querySelector('.modelsOut__item-1'),
		modOutItem2 = document.querySelector('.modelsOut__item-2'),
		modOutItem3 = document.querySelector('.modelsOut__item-3');

const facOutItem = document.querySelectorAll('.facingOut__item'),
		facOutItem1 = document.querySelector('.facingOut__item-1'),
		facOutItem2 = document.querySelector('.facingOut__item-2');

const facInItem = document.querySelectorAll('.facingIn__item'),
		facInItem1 = document.querySelector('.facingIn__item-1'),
		facInItem2 = document.querySelector('.facingIn__item-2'),
		facInItem3 = document.querySelector('.facingIn__item-3');

const knobItem = document.querySelectorAll('.knob__item'),
		knobItem1 = document.querySelector('.knob__item-1'),
		knobItem2 = document.querySelector('.knob__item-2'),
		knobItem3 = document.querySelector('.knob__item-3');

//

const modOutRes = document.querySelectorAll('.modelsOut-result'),
		facOutRes = document.querySelectorAll('.facingOut-result'),
		knobOutRes = document.querySelectorAll('.knobOut-result');

const modInRes = document.querySelectorAll('.modelsIn-result'),
		facInRes = document.querySelectorAll('.facingIn-result'),
		knobInRes = document.querySelectorAll('.knobIn-result');

// Корпуса

const modRes1 = document.querySelector('.models-result-1'),
		modRes2 = document.querySelector('.models-result-2'),
		modRes3 = document.querySelector('.models-result-3'),
		modRes4 = document.querySelector('.models-result-4');

// Внешние панели

const facOutRes1 = document.querySelector('.facingOut-result-1'),
		facOutRes2 = document.querySelector('.facingOut-result-2');

// Внутренние панели

const facInRes1 = document.querySelector('.facingIn-result-1'),
		facInRes2 = document.querySelector('.facingIn-result-2'),
		facInRes3 = document.querySelector('.facingIn-result-3');

// const facRes1 = document.querySelector('.facing-result-1'),
// 		facRes2 = document.querySelector('.facing-result-2');

// Внешние ручки

const knobOutRes1 = document.querySelector('.knobOut-result-1');

// Внутренние ручки

const knobInRes1 = document.querySelector('.knobIn-result-1');

function modOutResNullify() {
	modOutRes.forEach(item => {
		item.classList.remove('block');
	});
	modOutItem.forEach(item => {
		item.classList.remove('border');
	});
	modRes4.classList.add('block');
}

function modInResNullify() {
	modInRes.forEach(item => {
		item.classList.remove('block');
	});
}

function facOutResNullify() {
	facOutRes.forEach(item => {
		item.classList.remove('block');
	});
	facOutItem.forEach(item => {
		item.classList.remove('border');
	});

}

function facInResNullify() {
	facInRes.forEach(item => {
		item.classList.remove('block');
	});
	facInItem.forEach(item => {
		item.classList.remove('border');
	});
}

function knobResNullify() {
	knobOutRes.forEach(item => {
		item.classList.remove('block');
	});
	knobInRes.forEach(item => {
		item.classList.remove('block');
	});
	knobItem.forEach(item => {
		item.classList.remove('border');
	});
}

// Внешние корпуса

modOutItem1.addEventListener('click', () => {
	modOutResNullify();
	// modRes2.classList.remove('block');
	modRes1.classList.add('block');
	modOutItem1.classList.add('border');
});

modOutItem2.addEventListener('click', () => {
	modOutResNullify();
	modRes2.classList.add('block');
	modOutItem2.classList.add('border');
});

modOutItem3.addEventListener('click', () => {
	modOutResNullify();
	modRes3.classList.add('block');
	modRes4.classList.add('block');
	modOutItem3.classList.add('border');
});

// Внешние панели

facOutItem1.addEventListener('click', () => {
	facOutResNullify();
	facOutRes1.src = facOutRes1.dataset.src;
	console.log(facOutRes1);
	console.log(facOutRes2);
	facOutRes1.classList.add('block');
	facOutItem1.classList.add('border');
});

facOutItem2.addEventListener('click', () => {
	facOutResNullify();
	facOutRes2.src = facOutRes2.dataset.src;
	facOutRes2.classList.add('block');
	console.log(facOutRes2);
	facOutItem2.classList.add('border');
});

// Внутренние панели

facInItem1.addEventListener('click', () => {
	facInResNullify();
	facInRes1.classList.add('block');
	facInItem1.classList.add('border');
});

facInItem2.addEventListener('click', () => {
	facInResNullify();
	facInRes2.classList.add('block');
	facInItem2.classList.add('border');
});

facInItem3.addEventListener('click', () => {
	facInResNullify();
	facInRes3.classList.add('block');
	facInItem3.classList.add('border');
	console.log(facInItem3);
});

// Ручки

knobItem1.addEventListener('click', () => {
	knobResNullify();
	knobOutRes1.classList.add('block');
	knobInRes1.classList.add('block');
	knobItem1.classList.add('border');
});