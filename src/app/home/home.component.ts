import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { LIFFErrorObject } from 'liff-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 os : string;
  constructor() { }

  ngOnInit() {
    // alert("LINE LIFF");  
    // this.firstLiff() 
    this.getEnvironment;
    console.log(liff.getOS())
    // console.log(liff.getProfile())
    // this.getUserProfile()
  }

  async getUserProfile(){
    let profile = await liff.getProfile();
    console.log(profile.displayName)
  }
 
  async firstLiff(){
    // alert("Line Lift")
    let liffini = await liff.init({ liffId: "1654187718-l0z2DKvr" })

    // console.log(liffini)
  }

  openWindow() {
    alert("LINE LIFF");
  }
  getEnvironment() {
    this.os = liff.getOS();
    // console.log(getos)
  }
}
