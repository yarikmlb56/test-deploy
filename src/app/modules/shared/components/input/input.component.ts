import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {
  @Input() hasError: boolean;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() controlClassName: string;
  @Input() controlName: string;
  @Input() parentForm: FormGroup;

  @Output() handleFocus: EventEmitter<string> = new EventEmitter<string>();

  onFocus(): void {
    this.handleFocus.emit(this.controlName);
  }
}
