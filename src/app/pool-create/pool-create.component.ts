import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollForm } from '../types';

@Component({
  selector: 'app-pool-create',
  templateUrl: './pool-create.component.html',
  styleUrls: ['./pool-create.component.css']
})
export class PoolCreateComponent  {

  pollForm: FormGroup;
  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();
  constructor(private fb: FormBuilder) { 
    this.pollForm = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control(''),
      op1: this.fb.control(''),
      op2: this.fb.control(''),
      op3: this.fb.control(''),

    });
  }
  submitForm() {
    const formData: PollForm = {
      question: this.pollForm.get("question").value,
      thumbnail: this.pollForm.get("image").value,
      options: [
        this.pollForm.get('op1').value,
        this.pollForm.get('op2').value,
        this.pollForm.get('op3').value
      ]
    };
    this.pollCreated.emit(formData);
  }

}
