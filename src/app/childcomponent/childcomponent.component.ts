import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText: string;

  @Output() outputEvent = new EventEmitter<string>();

  @ViewChild('childMessage') msgChild: ElementRef;

  message: string = '';

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    this.outputEvent.emit(this.msgChild.nativeElement.value);
  }
}
