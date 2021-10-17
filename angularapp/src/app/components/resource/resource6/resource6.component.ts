import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resource6',
  templateUrl: './resource6.component.html',
  styleUrls: ['./resource6.component.css']
})
export class Resource6Component implements OnInit {
  safeUrl1
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safeUrl1=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/UfOxcrxhC0s');
  }

}
