import { Component, OnInit } from "@angular/core";
import { AgeCalServiceService } from "../AgeCal-Service/age-cal-service.service";

@Component({
  selector: "app-age2",
  templateUrl: "./age2.component.html",
  styleUrls: ["./age2.component.css"],
})
export class Age2Component implements OnInit {
  public birthdate: string;
  public age: number;

  constructor(private objService: AgeCalServiceService) {}

  ngOnInit() {}

  public CalculateAge(birthdate) {
    if (this.birthdate) {
      this.objService.CalculateAge(birthdate);
      this.age = this.objService.age;
    }
  }
  
}
