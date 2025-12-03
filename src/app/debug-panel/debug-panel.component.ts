import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-debug-panel',
  templateUrl: './debug-panel.component.html',
  styleUrls: ['./debug-panel.component.css']
})
export class DebugPanelComponent {

  @Output() toggleSale = new EventEmitter<void>();

  // Function to emit the event when button is clicked
  onToggleSale(): void {
    this.toggleSale.emit();
  }
}