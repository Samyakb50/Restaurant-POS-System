import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyDCRjwZv-d10VLAN8v9_mnXt5Lf2-OEwd0",
    authDomain: "mynew-e670b.firebaseapp.com",
    })
  }
}
