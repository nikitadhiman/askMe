import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private coreService: CoreService, private route: Router) { }

  userName: string;
  password: string;
  errorMessage: string;
  allUsers: Array<any> = [];

  ngOnInit(): void {
    this.errorMessage = '';
    this.getUsers();
  }

  getUsers() {
    this.coreService.getUser()
        .subscribe( response => {
          console.log(response);
          this.allUsers = response;
        }, error => {
          console.log(error);
        });
  }

  loginToApp(): void{

    this.errorMessage = '';
    const result =  this.validUser(this.userName, this.password);
    if (result) {
      localStorage.setItem('currentUser', JSON.stringify(result));
      this.route.navigateByUrl('/askMe/dashboard');

     }else{
      this.errorMessage = 'Invalid Details, please try with correct details';
     }
  }

  validUser = (username: string, password: string) => {
    if (this.allUsers.length === 0){ return false; }
    let loggedInUser = '';
    this.allUsers.forEach( user => {
      if ((user.userName === username && user.password === password)
      || (user.userEmail === username && user.password === password)){
        loggedInUser = user;
        return;
      }
    });

    return loggedInUser;
  }

}
