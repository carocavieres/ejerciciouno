import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-encabezadoc',
  templateUrl: './encabezadoc.component.html',
  styleUrls: ['./encabezadoc.component.scss'],
})
export class EncabezadocComponent implements OnInit {

 @Input() tituloPagina: string;
  constructor() { }

  ngOnInit() {}

}
