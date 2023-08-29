import { Component, OnInit } from "@angular/core";
import { AgeCalServiceService } from "../AgeCal-Service/age-cal-service.service";

@Component({
  selector: "app-age1",
  templateUrl: "./age1.component.html",
  styleUrls: ["./age1.component.css"],
})
export class Age1Component implements OnInit {
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
