import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

buildingLogo:string = "";

  constructor(public http: HttpClient, private userService: UserService) {
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      if (user) {
        this.getBuildingLogo(user);
      }
    });
  }

  private currentUserSubscription: Subscription = null;

  ngOnDestroy() {
    this.currentUserSubscription?.unsubscribe();
  }

  async getBuildingLogo(user: User) {
    if (!user) {
      return;
    }

    this.buildingLogo = user.photo_url

  }

  ngOnInit() {
  }

}
