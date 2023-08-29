import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  registerForm : FormGroup;
  title ='formValidation';
  submitted = false;
 todayDate = new Date
  todaysDate = new Date;

  constructor(private formBuilder:FormBuilder) {
    
   }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['',[ Validators.required,Validators.minLength(4)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
    })
   
  }

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return
  }
  alert('Success : Form Submitted');
}
 

}