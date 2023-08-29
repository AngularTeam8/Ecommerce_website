import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-demo-registraction-form",
  templateUrl: "./demo-registraction-form.component.html",
  styleUrls: ["./demo-registraction-form.component.css"],
})
export class DemoRegistractionFormComponent implements OnInit {
  demoForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.createForm();
  }
  createForm() {
    this.demoForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    this.isFormSubmitted = true;
  }

  ngOnInit() {}
}
