import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'front',
  templateUrl: 'front.component.html',
})
export class FrontComponent {
	name: string;
	address: address;
	arr: string[];
	login: string;
	password: string;

	constructor() {
		this.name = 'Sergej';
		this.address = {
			street: 'pr. Pobedy, 37',
			city: 'Kiev',
			country: 'Ukraine'
		};
		this.arr = ['A', 'B', 'C'];
	}

	submitFront() {
		console.log('submit front', this.login, this.password);
	}

	addAr(ar) {
		this.arr.push(ar);
	}

	delAr(i) {
		this.arr.splice(i, 1);
	}
}

interface address {
	street: string,
	city: string,
	country: string
}