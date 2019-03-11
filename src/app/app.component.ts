import { NetworkService, ConnectionStatus } from './services/network.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OfflineManagerService } from './services/offline-manager.service';


import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private offlineManager: OfflineManagerService,
    private networkService: NetworkService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.authenticationService.authenticationState.subscribe(state => {
        console.log('Auth changed: ',state);
       
        if (state) {
          this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
            if (status == ConnectionStatus.Online) {
              console.log('Status on app.components ');
              console.log(status);
              this.offlineManager.checkForEvents().subscribe();
            }
          });
          this.router.navigate(['menu', 'dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
 
    });
  }
}
