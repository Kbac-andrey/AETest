import { Component } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  constructor(private textService: TextService) {
  }

  toggleBold() {
    if (typeof this.textService.selectedWord === 'undefined' || null) {
      alert('choose word');
    } else {
      return this.textService.selectedWord.bold = !this.textService.selectedWord.bold;
    }
  }

  toggleItalic() {
    if (typeof this.textService.selectedWord === 'undefined' || null) {
      alert('choose word');
    } else {
      this.textService.selectedWord.italic = !this.textService.selectedWord.italic;
    }
  }

  toggleUnderline() {
    if (typeof this.textService.selectedWord === 'undefined' || null) {
      alert('choose word');
    } else {
      this.textService.selectedWord.underlined = !this.textService.selectedWord.underlined;
    }
  }

  isBold() {
    if (this.textService.selectedWord) {
      return this.textService.selectedWord.bold;
    }
    return false;
  }

  isItalic() {
    if (this.textService.selectedWord) {
      return this.textService.selectedWord.italic;
    }
    return false;
  }

  isUnderline() {
    if (this.textService.selectedWord) {
      return this.textService.selectedWord.underlined;
    }
    return false;
  }
}
