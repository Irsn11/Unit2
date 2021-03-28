
import TabsManager from './files/tabs.js';



$(function () {
	$('#carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.arrow-prev'),
		nextArrow: $('.arrow-next'),
	});
});

$(function () {
	new TabsManager(document.querySelector('._tabs'));

});


$(function () {

	const form = document.querySelector('.form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		const { name, phone } = form.elements;
		const formData = {
			name: name.value,
			phone: phone.value
		}

		form.reset();

		console.log(formData);
	});
});
