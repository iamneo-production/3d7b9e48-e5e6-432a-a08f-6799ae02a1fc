import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-resource4',
  templateUrl: './resource4.component.html',
  styleUrls: ['./resource4.component.css']
})
export class Resource4Component implements OnInit {
  safeUrl1
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.safeUrl1=this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ER8oKX5myE0');
  }

}
