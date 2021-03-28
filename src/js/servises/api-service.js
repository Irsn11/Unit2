import { API_PATH } from '../costants';
import { HttpService } from './http-service';

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