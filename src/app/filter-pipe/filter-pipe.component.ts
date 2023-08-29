import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {
  namesearch: string = '';
  prodcutArr: any[] = [
    {
      prodNo: 1,
      productName: 'Mobile',
      productPrice: '50000 RS',
      availability: 'Available'
    },
    {
      prodNo: 2,
      productName: 'TV',
      productPrice: '150000 RS',
      availability: 'Available'

    },
    {
      prodNo: 3,
      productName: 'Washing Machine',
      productPrice: '150000 RS',
      availability: 'Not Available'

    },
    {
      prodNo: 4,
      productName: 'Tab',
      productPrice: '35000 RS',
      availability: 'Available'

    }
  ];

  
 
  constructor() { }

  ngOnInit() {
  }

}