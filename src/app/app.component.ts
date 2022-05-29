import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  polls = [{
    question: "Do u like water melon",
    image: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    votes: [0, 5, 7],
    voted: true,
  },
  {
    question: "Do u like mango or apple",
    image: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    votes: [4, 5, 7],
    voted: true,
    },
    {
      question: "Do u like water melon",
      image: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
      votes: [ 5, 7, 1],
      voted: true,
    }];
}
