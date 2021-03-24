window.onload = () => {
	burger.addEventListener('click', () => {
		mobileMenu.classList.toggle('visible');
		burger.classList.toggle('visible');
	});

	mobileMenu.onclick = function (event) {
		let a = event.target.closest('a');
		if (!a) return;
		else {
			mobileMenu.classList.toggle('visible');
			burger.classList.toggle('visible');
		}

	};


}