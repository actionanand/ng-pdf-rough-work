import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { getHost } from '../../shared/functions/get-host';
import { createClassManager } from '../../shared/functions/class-manager';

@Component({
  selector: 'app-inject-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject-works.component.html',
  styleUrls: ['./inject-works.component.scss'],
})
export class InjectWorksComponent {
  // changeDetectorRef = inject(ChangeDetectorRef);

  host = getHost<HTMLElement>();

  classManager = createClassManager(getHost(), 'red-color');

  setFontColorAsRed() {
    this.classManager.add();
  }

  removeFontColor() {
    this.classManager.remove();
  }
}
