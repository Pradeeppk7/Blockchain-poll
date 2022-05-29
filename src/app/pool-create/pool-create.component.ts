import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pool-create',
  templateUrl: './pool-create.component.html',
  styleUrls: ['./pool-create.component.css']
})
export class PoolCreateComponent  {

  pollForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.pollForm = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control(''),
      option1: this.fb.control(''),
      option2: this.fb.control(''),
      option3: this.fb.control(''),

    });
  }
  submitForm() {
    console.log(this.pollForm.value);
  }

}
