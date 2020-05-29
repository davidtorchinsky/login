import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }

}
