import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn();
  }
  logout() {
    this.auth.logout();
  }

}
