import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { User } from '../classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signedIn: boolean;
  greeting: string;
  user: User;

  constructor(public amplifyService: AmplifyService,
  ) { 
    this.amplifyService = amplifyService;
    this.signedIn = false;
    this.amplifyService.authStateChange$
    .subscribe(authState => {
      this.signedIn = authState.state === 'signedIn';
      if (!authState.user) {
        this.user = null;
      } else {
        this.user = authState.user;
        this.greeting = "Hello " + this.user.userName;
      }
    });
  }

  ngOnInit() {
  }

}
