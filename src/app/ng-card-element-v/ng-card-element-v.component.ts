import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter, OnInit, ContentChild, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-ng-card-element-v',
  templateUrl: './ng-card-element-v.component.html',
  styleUrls: ['./ng-card-element-v.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgCardElementVComponent implements OnInit, AfterContentInit {
  @Input() title: string;
  @Input() name: string;
  @Input() time = new Date();
  @Input() caption: string;
  @Input() avtar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  @ContentChild('media') media: any;

  constructor() { }

  ngOnInit() {
  }

  likeEvent() {
    this.likeNotify.emit(true);
  }
  shareEvent() {
    this.shareNotify.emit(true);
  }
  commentEvent() {
    this.commentNotify.emit(true);
  }

  ngAfterContentInit() {
    console.log(this.media);
  }
}
