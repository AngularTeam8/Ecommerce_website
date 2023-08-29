import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  myForm: FormGroup;
  genders = [
    { id: "1", value: "Male" },
    { id: "2", value: "Female" },
  ];
  isFormSubmitted: boolean = false;
  notAllowedNames = ['Codemind', 'Technology'];
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('ngOnit Called');
    // by using patchValue 
    setTimeout(() => {
      setTimeout(() => {
        this.myForm.patchValue({
          'userDetails' : {
            'email': 'jack@gmail.com'
          }
        })
    }, 3000)  //PatchValue will display after 3 sec.
    // by using setValue
        this.myForm.setValue({
          'userDetails' : {
            'username': 'Codemind1122',
            'email': 'codemind@outlook.com'
          },
          'course' : 'JavaScript',
          'gender': 'Female',
          'skills': ['Azure']
        })
    }, 4000)  //SetValue will display after 4 sec.
  }

  createForm() {
    // By using FormGroup and FormArray

    // this.myForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NameNotAllowed.bind(this)]),
    //     'email': new FormControl(null,[Validators.required, Validators.email], this.EmailNotAllowed ),
    //     'password': new FormControl("",[Validators.required]),
        
    //   }),
    //   'course': new FormControl("Angular"),
    //   'gender': new FormControl("Male", Validators.required),
    //   'email': new FormControl(["", Validators.required]),
    //   'skills': new FormArray([new FormControl("Angular8", Validators.required)]),
    
    // });

    // By using FormBuilder
    
    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        username : ['', [Validators.required, this.NameNotAllowed.bind(this)]],
        email: ['', [Validators.required, Validators.email], this.EmailNotAllowed ]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this.fb.array([])
    })
  }
// Logic of reset Form
  resetForm() {
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course': 'Angular',
      'gender': 'Male',
      'skills': ['']
    });
  }

  OnSubmit() {
    if (this.myForm.valid) {
      this.isFormSubmitted = true;
      console.log("Submit method called", this.myForm);
      console.log("Form Values : ", this.myForm.value);
    }
    console.log('Submit method called',this.myForm);
    this.resetForm();
    
  }
  // ===========================================================
  OnAddSkills() {
    this.myForm.get("skills") as FormArray;
    (<FormArray>this.myForm.get("skills")).push(
      new FormControl("", Validators.required)
    );
  }
  RemoveSkill(i:number){
    (<FormArray>this.myForm.get('skills')).removeAt(i)
  }
  // ===========================================================




  NameNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}
    }
    return null;
  }
  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {

        if (control.value === 'd.suryawanshi123@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 100)
    })
    return myPromise;
  }


}

// ==================================================================