import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  constructor(private readonly router: Router) {}

  date;
  time;
  week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  setIntervalReference;
  setTimeoutReference;
  splashTimeInMs = 5000;

  ngOnInit() {
    this.setTimeoutReference = setTimeout(() => {
      this.openApp();
    }, this.splashTimeInMs);
    this.updateDate();
    this.setIntervalReference = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  cancelAutoNavigate() {
    clearTimeout(this.setTimeoutReference);
  }

  openApp() {
    this.cancelAutoNavigate();
    this.router.navigate(["app"]);
  }

  updateTime() {
    const dt = new Date();
    const hrs = this.returnDoubleDigit(dt.getHours() + "");
    const mins = this.returnDoubleDigit(dt.getMinutes() + "");
    const secs = this.returnDoubleDigit(dt.getSeconds() + "");
    this.time = `${hrs}: ${mins} : ${secs}`;
    if (this.time == "00:00:00") {
      setTimeout(() => {}, 1000);
    }
    // console.log(`${this.returnDoubleDigit(dt.getSeconds())}: ${mins} : ${secs}`);
  }
  
  updateDate() {
    const dt = new Date();
    this.date = `${dt.getDate()}-${
      this.month[dt.getMonth()]
    }-${dt.getFullYear()} , ${this.week[dt.getDay()]}`;
  }

  returnDoubleDigit(str): string {
    return str.length < 2 ? ` 0${str} ` : ` ${str} `;
  }

  ngOnDestroy() {
    clearInterval(this.setIntervalReference);
  }
}
