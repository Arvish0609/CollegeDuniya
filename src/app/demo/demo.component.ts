import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() collegesData :{
    college_name : string,
    promoted : boolean,
    discount : number,
    original_fees : number,
    discounted_fees : number,
    fees_cycle : string,
    image : string,
    ranking : string,
    tags : string[],
    amenties : string[],
    rating : number,
    rating_remarks : string,
    famous_nearest_places : string,
    nearest_place : string[],
    offertext : string
  };

  constructor() { }

  ngOnInit() {
  }

}
