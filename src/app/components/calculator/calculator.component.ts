import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-calculator',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './calculator.component.html',
	styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
	public title = "Calculadora";
	public resultOperation: number = 0;
	public num1 = new FormControl();
	public num2 = new FormControl();

	sumar() {
		var n1 = this.num1.value;
		var n2 = this.num2.value;
		var result = n1 + n2;

		this.resultOperation = result;
	}

	restar() {
		var n1 = this.num1.value;
		var n2 = this.num2.value;
		var result = n1 - n2;

		this.resultOperation = result;
	}

	multiplicar() {
		var n1 = this.num1.value;
		var n2 = this.num2.value;
		var result = n1 * n2;

		this.resultOperation = result;
	}

	dividir() {
		var n1 = this.num1.value;
		var n2 = this.num2.value;
		var result = n1 / n2;

		this.resultOperation = result;
	}

	potencia() {
		var n1 = this.num1.value;
		var n2 = this.num2.value;
		var result = n1 ** n2;

		this.resultOperation = result;
	}
}
