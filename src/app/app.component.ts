import { Component } from '@angular/core';
import { LIFFErrorObject } from 'liff-type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ngliff';

 private create(){
      liff.init({
        liffId: ''
      }).then( () => {
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      }).catch((err:LIFFErrorObject ) => {
        console.error(err.message);
      
      })
  }
}
