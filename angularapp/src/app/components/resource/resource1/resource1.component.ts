import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resource1',
  templateUrl: './resource1.component.html',
  styleUrls: ['./resource1.component.css']
})
export class Resource1Component implements OnInit {
  safeUrl;
  constructor(private _sanitizer:DomSanitizer) { }
pdfSrc="https://www.tutorialspoint.com/angularjs/angularjs_tutorial.pdf";
  ngOnInit() {
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xGpHfFf18Ns');
  }

}
