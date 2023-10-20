import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Juan';
  age = 18;
  btnDisabled = true;
  inputType = 'number';
  inputValue = 12345;
}
