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

  person = {
    name: 'John',
    age: 18,
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
