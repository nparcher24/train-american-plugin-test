import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.css'],
})
export class SignInPage implements OnInit {

  constructor(
    public authService: AuthServiceService
  ) { }

  ngOnInit() {
  }

}
