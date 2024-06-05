import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modalnews',
  templateUrl: './modalnews.component.html',
  styleUrls: ['./modalnews.component.scss']
})
export class ModalnewsComponent {
  @Input() article: any;
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }
}
