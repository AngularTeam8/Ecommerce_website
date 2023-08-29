import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AgeCalServiceService {
  public birthdate: Date;

  public age: number;
  constructor() {}

  CalculateAge(birthdate) {
    //  console.log(birthdate);
    const timeDiff = +new Date(Math.abs(Date.now()) - +new Date(birthdate));

    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
}
