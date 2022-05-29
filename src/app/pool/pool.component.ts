import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  @Input() question: string;
  @Input() votes: number[];
  @Input() voted: boolean;
  @Input() pollImage: string;
  numberOfVotes: number;


  constructor() {
   
    
   }

  ngOnInit(): void {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc, curr) => {
        return acc += curr
    
      })
    }
  }

}
