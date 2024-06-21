import { Component, Input, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticketData: any; // Datos del boleto recibidos como entrada

  constructor() { }

  ngOnInit(): void {
    // Lógica de generación del boleto (por ejemplo, usar jsPDF)
    this.generateTicket();
  }

  generateTicket() {
    const doc = new jsPDF();

    // Ejemplo: Generar contenido del boleto
    doc.text(`Nombre: ${this.ticketData.customerName}`, 10, 10);
    doc.text(`Clase: ${this.ticketData.className}`, 10, 20);
    doc.text(`Fecha: ${this.ticketData.date}`, 10, 30);
    // Agregar más detalles según sea necesario

    // Guardar o mostrar el documento generado
    doc.save('boleto.pdf'); // Guardar como PDF con nombre 'boleto.pdf'
  }

}
