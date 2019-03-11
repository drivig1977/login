import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  users=[];

  constructor(private apiService: ApiService, private plt: Platform, private authService: AuthenticationService) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(true);
    });
  }
  loadData(refresh = false, refresher?) {
    this.apiService.getUsers(refresh).subscribe(res => {
      this.users = res;
      if (refresher) {
        refresher.target.complete();
      }
    });
  }
 
  updateUser(id) {
    this.apiService.updateUser(id, {name: 'Simon', job: 'CEO'}).subscribe();
  }

}
