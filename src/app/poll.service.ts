import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll, PollForm } from './types';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([{
      id: 1,
      question: "Do u like water melon",
      thumbnail: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
      results: [0, 5, 7],
      options: ['cats', 'dogs', 'none'],
      voted: true,
    },
    {
      id: 1,
      question: "Do u like mango",
      thumbnail: "https://images.ctfassets.net/hrltx12pl8hq/1kSlS6H6YMm30e0Mkr86Hc/930fef722ebc9fb51f80d8bb0e372596/IHP_3_24.png?fit=fill&w=1200&h=630",
      results: [7, 2, 7],
      options: ['cats', 'yes', 'none'],
      voted: true,
    }
    
    ]).pipe(delay(2000));
    
  }
  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
    
  }
  createPoll(poll:PollForm) {
    console.log(poll);
    
  }
}
