import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import Passbase from "@passbase/button";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("passbaseButton") passbaseButton: ElementRef;

  ngAfterViewInit() {
    Passbase.renderButton(
      this.passbaseButton.nativeElement,
      "49ab129a42f3bd68094d83d742e92750a0416a57224dcd013288a2e08be5c63c",
      {
        onFinish: (identityAccessKey) => {},
        onError: (errorCode) => {},
        onStart: () => {}
      }
    );
  }
}
