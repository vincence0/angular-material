import { Component, enableProdMode } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

enableProdMode();
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "materialApp";
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
