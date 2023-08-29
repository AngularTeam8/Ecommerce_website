import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"],
})
export class SimpleFormComponent implements OnInit {
  isFormSubmitted = false;
  defaultmail = false;
  isEmailValid = false;
  
  // email: string = '@gmail.com';
  username = "";
  // uname = "";
  email = "";
  state = "";

  defaultCourseValue = "Angular";
  defaultCountry = "India";
  // defaultState = "Maharastra";

  genders = [
    { id: "1", value: "Male" },
    { id: "2", value: "Female" },
    { id: "3", value: "Other" },
  ];

  formData = {
    username: "",
    email: "",
    course: "",
    country: "",
    state: "",
    gender: "",
  };

  constructor() {}

  ngOnInit() {}

  OnSubmit(form: NgForm) {
    console.log("form submitted", form);

    this.isFormSubmitted = true;

    let username = form.value.username;
    console.log("user input Username name is", username);

    let email = form.value.email;
    console.log("Email is", email);

    let course = form.value.course;
    console.log("user input Course name is", course);

    let country = form.value.address.country;
    console.log("user input country name is", country);

    let state = form.value.address.state;
    console.log("user input State name is", state);

    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;
    let countrry = form.value.address.country;
    // reset the form controls

    form.resetForm({ course: "Angular" });

    //setting the default value for the nested object after reset
    console.log(form.controls["address"]);
    let objaddress = form.controls["address"];

    console.log("after getting address form group", objaddress);
    // objaddress.controls["country"].patchValue("India");
  }
  checkEmail(email): void {
    console.log(email.target.value);

    const domain = email.target.value.substring(
      email.target.value.lastIndexOf("@") + 1
    );
    console.log("domain ", domain);

    if (domain == "codemind.com") {
      // false
      this.isEmailValid = false;
    } else {
      // true
      this.isEmailValid = true;
    }
  }
}