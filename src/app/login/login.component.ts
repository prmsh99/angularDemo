import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  country:string = 'australia';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() :void {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(res=>{
        if(res.admin) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['user']);
        }
      },
      (err: Error)=>{
        console.log('@@@@ Error',err);
      });
    }
  }
}
