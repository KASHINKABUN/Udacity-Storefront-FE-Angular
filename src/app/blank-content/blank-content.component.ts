import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blank-content',
  templateUrl: './blank-content.component.html',
  styleUrls: ['./blank-content.component.less']
})
export class BlankContentComponent {
  blankContent: string = '../../assets/blank-content.jpg'
  @Input() message?: string = 'Oop! No data available!'
}
