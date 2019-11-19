import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent {
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  employees: Employee[] = [
    {
      name: 'Mark',
      phoneNumber: 2345978647
    },
    {
      name: 'Mary',
      phoneNumber: 2345978640
    },
    {
      name: 'John',
      phoneNumber: 5432978640
    }
  ];
  // tslint:disable-next-line: variable-name
  _employee: Employee;

  // tslint:disable-next-line: variable-name
  handleClick(_employee) {
    this.notify.emit(_employee);
  }
}
