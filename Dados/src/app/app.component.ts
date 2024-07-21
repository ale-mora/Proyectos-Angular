import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	daDer = '../assets/img/dice1.png';
	daIzq = '../assets/img/dice2.png';
	num1 = 1;
	num2 = 2;

	tirarDados(): void {
		this.num1 = Math.round(Math.random() * 5) + 1;
		this.num2 = Math.round(Math.random() * 5) + 1;
		this.daDer = '../assets/img/dice' + this.num1 + '.png';
		this.daIzq = '../assets/img/dice' + this.num2 + '.png';
	}
}
