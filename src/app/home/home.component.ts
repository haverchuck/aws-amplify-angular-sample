import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AmplifyService]
})
export class HomeComponent implements OnInit {

  constructor(public amplifyService: AmplifyService,
  ) { 
    this.amplifyService = amplifyService;

  }

  ngOnInit() {
  }

}
