import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService } from '../../services/network.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserService,
    public networkService: NetworkService,
  ) { }

  show = false;

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  signOut() {
    // No need to unsubscribe
    this.userService.signOut().subscribe(() => {
      this.router.navigate(['/login'])
    });
  }
}
