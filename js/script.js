const
	resOut = document.querySelector('.resultOut-kit'),
	resIn = document.querySelector('.resultIn-kit'),
	modOutItem = document.querySelectorAll('.modelsOut__item-box'),
	modOutItemImg = document.querySelectorAll('.modelsOut__item'),
	facOutItemImg = document.querySelectorAll('.facingOut__item'),
	facInItemImg = document.querySelectorAll('.facingIn__item'),
	knobItemImg = document.querySelectorAll('.knob__item'),
	modOutRes = document.querySelectorAll('.modelsOut-result'),
	modRes4 = document.querySelector('.models-result-4'),
	facOutItem = document.querySelectorAll('.facingOut__item-box'),
	facOutRes = document.querySelectorAll('.facingOut-result'),
	facInItem = document.querySelectorAll('.facingIn__item-box'),
	facInRes = document.querySelectorAll('.facingIn-result'),
	knobItem = document.querySelectorAll('.knob__item-box'),
	knobOutRes = document.querySelectorAll('.knobOut-result'),
	knobInRes = document.querySelectorAll('.knobIn-result'),
	wallBtn = document.querySelector('.wallpapper__btn'),
	selectSideBtn = document.querySelectorAll('.select-side__btn'),
	selectSideBoth = document.querySelector('.select-side--both'),
	selectSideOut = document.querySelector('.select-side--out'),
	selectSideIn = document.querySelector('.select-side--in');

const
	modBox = document.querySelector('.models-kit'),
	facOutBox = document.querySelector('.facingOut-kit'),
	facInBox = document.querySelector('.facingIn-kit'),
	knobBox = document.querySelector('.knob-kit'),
	underlay = document.querySelector('.underlay'),
	wallUnderlay = document.querySelector('.wallpaper__underlay'),
	modMob = document.querySelector('.models__mobile'),
	facOutMob = document.querySelector('.facingOut__mobile'),
	facInMob = document.querySelector('.facingIn__mobile'),
	knobMob = document.querySelector('.knob__mobile');

const
	resInAll = document.querySelectorAll('.resultIn-kit'),
	wallpapper = document.querySelector('.wallpapper'),
	wallpapperBox = document.querySelector('.wallpapper__box'),
	wallpapperX = document.querySelector('.wallpaper__x-box');

const
	buyBtn = document.querySelector('.buy__btn'),
	modName = document.querySelector('.models-name'),
	facOutName = document.querySelector('.facingOut-name'),
	facInName = document.querySelector('.facingIn-name'),
	knobName = document.querySelector('.knob-name');

// Вывод имени файла

// let names = document.querySelector('.models-result-1').getAttribute('data-src').split('/');
// let name = names[nameArray .length - 1].split('.')[0];


underlay.addEventListener('click', (e) => {
	underlay.classList.remove('block');
	wallpapper.classList.remove('block');
	wallpapper.classList.add('none');
	wallpapperBox.innerHTML = '';
	modBox.classList.remove('flex');
	facOutBox.classList.remove('flex');
	facInBox.classList.remove('flex');
	knobBox.classList.remove('flex');
	modMob.classList.remove('mobile__btn-active');
	facOutMob.classList.remove('mobile__btn-active');
	facInMob.classList.remove('mobile__btn-active');
	knobMob.classList.remove('mobile__btn-active');
});


wallUnderlay.addEventListener('click', (e) => {
	wallUnderlay.classList.remove('block');
	wallpapper.classList.remove('block');
	wallpapper.classList.add('none');
	wallpapperBox.innerHTML = '';
	modBox.classList.remove('flex');
	facOutBox.classList.remove('flex');
	facInBox.classList.remove('flex');
	knobBox.classList.remove('flex');
	modMob.classList.remove('mobile__btn-active');
	facOutMob.classList.remove('mobile__btn-active');
	facInMob.classList.remove('mobile__btn-active');
	knobMob.classList.remove('mobile__btn-active');
});

wallpapperX.addEventListener('click', (e) => {
	wallUnderlay.classList.remove('block');
	wallpapper.classList.remove('block');
	wallpapper.classList.add('none');
	wallpapperBox.innerHTML = '';
	modBox.classList.remove('flex');
	facOutBox.classList.remove('flex');
	facInBox.classList.remove('flex');
	knobBox.classList.remove('flex');
	modMob.classList.remove('mobile__btn-active');
	facOutMob.classList.remove('mobile__btn-active');
	facInMob.classList.remove('mobile__btn-active');
	knobMob.classList.remove('mobile__btn-active');
});

wallBtn.addEventListener('click', (e) => {
	wallpapper.classList.remove('none');
	wallpapper.classList.add('block');
	wallUnderlay.classList.add('block');
	wallUnderlay.classList.remove('none');
	// console.log('rere');

	wallpapperBox.appendChild(resIn.cloneNode(true));

	let wallRes = wallpapperBox.querySelectorAll('.resultIn-kit');
	wallRes.forEach(function (item, i, arr) {
		item.classList.remove('resultIn-kit');
		item.classList.add('wallpapper-result');
	});

	document.querySelector('.wallpapper-result').classList.remove('none');

});

modMob.addEventListener('click', (e) => {
	underlay.classList.add('block');
	modBox.classList.add('flex');
	modMob.classList.add('mobile__btn-active');
});

facOutMob.addEventListener('click', (e) => {
	underlay.classList.add('block');
	facOutBox.classList.add('flex');
	facOutMob.classList.add('mobile__btn-active');
});

facInMob.addEventListener('click', (e) => {
	underlay.classList.add('block');
	facInBox.classList.add('flex');
	facInMob.classList.add('mobile__btn-active');
});

knobMob.addEventListener('click', (e) => {
	underlay.classList.add('block');
	knobBox.classList.add('flex');
	knobMob.classList.add('mobile__btn-active');
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

			modOutItemImg.forEach(item => {
				item.classList.remove('border');
			});

			modOutRes[i].src = modOutRes[i].dataset.src;
			modOutRes[i].classList.add('block');

			// const a = modOutRes[i].alt;
			// console.log(a);
			let names = modOutRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			// console.log(name);
			modName.innerHTML = name;
			modMob.innerHTML =
			`<p class="mobile__btn-text">Корпус</p>
			<p class="mobile__btn-name">(`+ name +`)</p>`;


			modRes4.src = modRes4.dataset.src;
			modRes4.classList.add('block');

			e.target.classList.add('border');



			// console.log(modOutItem[i]);

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
			facOutItemImg.forEach(item => {
				item.classList.remove('border');
			});

			facOutRes[i].src = facOutRes[i].dataset.src;
			facOutRes[i].classList.add('block');

			// const a = facOutRes[i].alt;
			// console.log(a);
			let names = facOutRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			// console.log(name);
			facOutName.innerHTML = name;
			facOutMob.innerHTML =
			`<p class="mobile__btn-text">Внешняя панель</p>
			<p class="mobile__btn-name">(`+ name +`)</p>`;

			let buyLink = facOutItem[i].getAttribute('data-src');
			buyBtn.href = buyLink;
			console.log(buyLink);


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
			facInItemImg.forEach(item => {
				item.classList.remove('border');
			});

			facInRes[i].src = facInRes[i].dataset.src;
			facInRes[i].classList.add('block');

			// const a = facInRes[i].alt;
			// console.log(a);
			let names = facInRes[i].getAttribute('data-src').split('/');
			let name = names[names.length - 1].split('.')[0];
			// console.log(name);
			facInName.innerHTML = name;
			facInMob.innerHTML =
			`<p class="mobile__btn-text">Внешняя панель</p>
			<p class="mobile__btn-name">(`+ name +`)</p>`;

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
			knobItemImg.forEach(item => {
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
			// console.log(name);
			knobName.innerHTML = name;
			knobMob.innerHTML =
			`<p class="mobile__btn-text">Внешняя панель</p>
			<p class="mobile__btn-name">(`+ name +`)</p>`;


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
	resOut.classList.remove('inline-block');
	resIn.classList.remove('inline-block');
	resOut.classList.add('inline-block');
	resIn.classList.add('inline-block');
});

selectSideOut.addEventListener('click', (e) => {
	resOut.classList.remove('none');
	resIn.classList.remove('none');
	resOut.classList.remove('inline-block');
	resIn.classList.remove('inline-block');
	resIn.classList.add('none');
	resOut.classList.add('inline-block');
});

selectSideIn.addEventListener('click', (e) => {
	resOut.classList.remove('none');
	resIn.classList.remove('none');
	resOut.classList.remove('inline-block');
	resIn.classList.remove('inline-block');
	resOut.classList.add('none');
	resIn.classList.add('inline-block');
});
