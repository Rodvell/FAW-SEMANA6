import { Component, Input } from '@angular/core';
import { ListColor } from '../../models/rgbdata.model';

@Component({
	selector: 'app-colorlist',
	standalone: true,
	imports: [],
	templateUrl: './colorlist.component.html',
	styleUrl: './colorlist.component.css'
})
export class ColorlistComponent {
	@Input() dataColors : Array<ListColor> = [];
}


/*
export class ConverterComponent {
    red: number = 0;
    green: number = 0;
    blue: number = 0;
    hexColor: string = '#000000'; // Color inicial

    convertToHex() {
        // Convertir valores RGB a hexadecimal
        this.hexColor = this.rgbToHex(this.red, this.green, this.blue);
    }

    // Función para convertir valores RGB a hexadecimal
    rgbToHex(red: number, green: number, blue: number): string {
        const redHex = this.componentToHex(red);
        const greenHex = this.componentToHex(green);
        const blueHex = this.componentToHex(blue);
        return `#${redHex}${greenHex}${blueHex}`;
    }

    // Función auxiliar para convertir componente RGB a hexadecimal
    componentToHex(component: number): string {
        const hex = component.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
}
*/
