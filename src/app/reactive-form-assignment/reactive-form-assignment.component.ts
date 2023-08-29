import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form-assignment",
  templateUrl: "./reactive-form-assignment.component.html",
  styleUrls: ["./reactive-form-assignment.component.css"],
})
export class ReactiveFormAssignmentComponent implements OnInit {
  // selectedGender: string = 'male'; // Set default value to 'male'

  // onGenderChange(event: any) {
  //   this.selectedGender = event.target.value;
  // }
  myForm: FormGroup;
  countries = [
    { id: "1", value: "India" },
    { id: "2", value: "USA" },
    { id: "3", value: "UK" },
    { id: "4", value: "Germany" },
    { id: "5", value: "Australia" },
    { id: "6", value: "France" },
    { id: "7", value: "Russia" },
    { id: "8", value: "Japan" },
  ];
  genders = [
    { id: "1", value: "Male" },
    { id: "2", value: "Female" },
  ];
  isFormSubmitted: boolean = false;
  constructor() {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.myForm = new FormGroup({
      fullname: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      birthday: new FormControl(["", Validators.required]),
      country: new FormControl(["", Validators.required]),
      mobile: new FormControl([
        "",
        [Validators.required],
        Validators.pattern("[0-9]*"),
        Validators.maxLength(10),
      ]),
      bio: new FormControl([Validators.maxLength(32)]),
      gender: new FormControl("Male"),
      email: new FormControl("", Validators.required),
      skills: new FormArray([new FormControl("Angular8", Validators.required)]),
    });
  }
  OnSubmit() {
    if (this.myForm.valid) {
      this.isFormSubmitted = true;
    }
    console.log("Submit method called", this.myForm);
    console.log("Form Values : ", this.myForm.value);
  }
  OnAddSkills() {
    this.myForm.get("skills") as FormArray;
    (<FormArray>this.myForm.get("skills")).push(
      new FormControl("", Validators.required)
    );
  }
  RemoveSkill(i: number) {
    (<FormArray>this.myForm.get("skills")).removeAt(i);
  }
}