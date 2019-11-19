import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataFromChild: Employee;

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }
}
