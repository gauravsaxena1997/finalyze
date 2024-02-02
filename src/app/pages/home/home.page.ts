import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonTabBar ,IonTabs ,IonIcon ,IonTabButton ,IonItem ,IonLabel } from '@ionic/angular/standalone';
import { globalCategories } from '../../constants/category';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonTabButton, IonIcon, IonTabs, IonTabBar, IonHeader, IonToolbar, IonTitle, IonContent, IonTabButton],
})
export class HomePage {
  constructor() {}

  public newUser: User = {
    _id: 'test123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'test123@gmail.com',
    categories: globalCategories
  };
}
