import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Poll } from './types';
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
      thumbnail: "https://www.gettyimages.com/gi-resources/images/500px/987458168.jpg",
      results: [7, 2, 7],
      options: ['cats', 'yes', 'none'],
      voted: true,
    }
    
    ]).pipe(delay(2000));
    
  }
  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
    
  }
  createPoll(question: string, thumbnail: string, options: string[]) {
    console.log(question,thumbnail,options)
    
  }
}
