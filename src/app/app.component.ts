import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll= null;
  polls: Poll[] = [{
    id:1,
    question: "Do u like water melon",
    thumbnail: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    results: [0, 5, 7],
    options:['cats','dogs','none'],
    voted: true,
  },
  {
    id:1,
    question: "Do u like mango",
    thumbnail: "https://www.gettyimages.com/gi-resources/images/500px/987458168.jpg",
    results: [7, 2, 7],
    options:['cats','yes','none'],
    voted: true,
  }
  
  ];
  setActivatePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    },100);
  }
}
