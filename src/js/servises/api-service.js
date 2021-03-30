import { API_PATH } from '../costants.js';
import { HttpService } from './http-service.js';

export class ApiService extends HttpService {

	constructor() {
		super(API_PATH);

	}
	getMasters() {
		return this.get('staff');
	}

	getSaloonServices() {
		return this.get('services');
	}

	createOrder(order) {
		return this.post('orders', order);
	}
}

export default new ApiService();