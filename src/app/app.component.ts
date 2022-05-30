import { Component } from '@angular/core';
import { PollService } from './poll.service';
import { Poll, PollForm } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  activePoll: Poll= null;
  
  polls = this.ps.getPolls()
  constructor(private ps: PollService) {
    
  }
  setActivatePoll(poll) {
    this.activePoll = null;
    setTimeout(() => {
      this.activePoll = poll;
    },100);
  }
  handlePollCreated(poll: PollForm) {
    this.ps.createPoll(poll);
    
  }
}
