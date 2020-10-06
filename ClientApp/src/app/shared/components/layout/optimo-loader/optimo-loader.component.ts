import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'optimo-loader',
  templateUrl: './optimo-loader.component.html',
  styleUrls: ['./optimo-loader.component.sass']
})
export class OptimoLoaderComponent implements OnInit {

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  constructor() { }

  ngOnInit(): void {
  }

}
