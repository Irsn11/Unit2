import ApiService from '/services/api-service';
class OrderForm {
	constructor() {
		this.pending = false;
		this.formEl = document.getElementById('order-form');
		this.mastersSelect = this.formEl.elements.masterId;
		this.serviceSelect = this.formEl.elements.serviceId;

		this._init();
		this._bindEvents();
	}
	_init() {
		this._buildMastersSelect();
		this._buildServicesSelect();
	}
	async __buildMastersSelect() {
		try {
			const masters = await ApiService.getMasters();
			masters.forEach(master => {
				const option = document.createElement('option');
				option.value = master.id;
				option.textContent = `${master.surName} ${master.firstName}`;
				this.mastersSelect.add(option);
			});
		} catch (error) {
			console.error(error);
		}
	}
	async __buildServicesSelect() {
		try {
			const services = await ApiService.getSaloonServices();
			services.forEach(service => {
				const option = document.createElement('option');
				option.value = service.id;
				option.textContent = `${service.name}`;
				this.serviceSelect.add(option);
			});
		} catch (error) {
			console.error(error);
		}

	}
	_bindEvebnts() {
		this.formEl.addEventListener('submit', (event) => {
			event.preventDefault();
			this._handleForm();
		});
	}
	async _handleForm() {
		const orderData = {
			name: this.formEl.elements.name.value,
			phone: this.formEl.elements.phone.value,
			masterId: this.formEl.elements.masterId.value,
			serviceId: this.formEl.elements.serviceId.value,
			visitDate: this.formEl.elements.visitDate.value,

		};
		this._togglePendingState();

		try {
			await ApiService.createOder(orderData);
			this.formEl.reset();
			//показать сообщение об успехе
			//закрыть модалку

		} catch (error) {
			console.error(error);

		} finally {
			this._togglePendingState();
		}
	}
	_togglePendingState() {
		this.pending = !this.pending;
		this.formEl.classList.toggle('order-form_pending', this.pending);
	}
}
export default OrderForm;