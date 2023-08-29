import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-assignment2',
  templateUrl: './reactive-assignment2.component.html',
  styleUrls: ['./reactive-assignment2.component.css']
})
export class ReactiveAssignment2Component implements OnInit {
  projectForm: FormGroup;
  isFormSubmitted : boolean = false;
  constructor() {
    this.createForm();
  }

  createForm() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl('', [Validators.required], [this.NameNotAllowed.bind(this)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable', Validators.required)
    });
  }

  NameNotAllowed(control: FormControl): Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'projectNameNotAllowed': true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return myPromise;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log('Form Submitted', this.projectForm);
  }

  ngOnInit() {
  }
}