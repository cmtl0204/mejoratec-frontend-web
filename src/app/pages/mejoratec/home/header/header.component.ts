import {Component} from '@angular/core';
import {MejoratecService} from "../../../../services/mejoratec.service";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  indicator: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    public mejoratecService: MejoratecService
  ) {

  }

  logout() {
    this.authService.isLoggIn = false;
    this.router.navigate(['/auth/authentication/login']);
  }
}
