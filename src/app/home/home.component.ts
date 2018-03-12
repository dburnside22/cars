import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('blockPhotos',[
      transition('* => *', [
        query('img', style({ opacity: 0}),{optional: true}),

        query('img', stagger('600ms', [
          animate('3s ease-in', keyframes([
            style({opacity:0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform: 'translateY(-20px)', offset: .3}),
            style({opacity:1, transform: 'translateY(0)', offset: 1}),
          ]))]),{optional: true}),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  private _window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  backToTop(){
    this.document.body.scrollTop = 0;
  }

}
