import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resource5',
  templateUrl: './resource5.component.html',
  styleUrls: ['./resource5.component.css']
})
export class Resource5Component implements OnInit {
  safeUrl1
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit(){
    this.safeUrl1=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lBBtq3Oawqw');
  }

}
