import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
  colorVal = 'blue';

  bgValue = '#ddd'
  peoples: any[] = [
    {'name': 'Jack', 'country': 'UK'},
    {'name': 'Sumit', 'country': 'USA'},
    {'name': 'Anup', 'country': 'HK'},
    {'name': 'Tom', 'country': 'UK'},
    {'name': 'Surya', 'country': 'USA'},
    {'name': 'Shreyas', 'country': 'IND'},
    {'name': 'Piu', 'country': 'IND'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
