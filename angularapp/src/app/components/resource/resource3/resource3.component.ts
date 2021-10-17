import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resource3',
  templateUrl: './resource3.component.html',
  styleUrls: ['./resource3.component.css']
})
export class Resource3Component implements OnInit {
  safeUrl1
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safeUrl1=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/JnvKXcSI7yk');

  }

}
