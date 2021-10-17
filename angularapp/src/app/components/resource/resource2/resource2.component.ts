import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resource2',
  templateUrl: './resource2.component.html',
  styleUrls: ['./resource2.component.css']
})
export class Resource2Component implements OnInit {
safeUrl1
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safeUrl1=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xGpHfFf18Ns');
  }

}
