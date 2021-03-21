window.onload = () => {
	burger.addEventListener('click', () => {
		mobileMenu.classList.toggle('visible');
		burger.classList.toggle('visible');
	});

	const list = document.querySelectorAll(".navigation__link");
	list.forEach(i => {
		i.addEventListener('click', function () {
			mobileMenu.classList.toggle('visible');
			burger.classList.toggle('visible');
		})
	});
};
