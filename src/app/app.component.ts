import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MenuController } from '@ionic/angular';
import { AuthServiceService } from './shared/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  public appPages = [
    { title: 'Sign-in', url: '/sign-in', icon: 'lock-open' },
    { title: 'Dashboard', url: '/dashboard', icon: 'apps' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(firestore: AngularFirestore, public authService: AuthServiceService, private menu: MenuController) { }
  signOut() {
    this.authService.signOut();
    this.menu.close();
  }
}
