import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Word } from '../model/word';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  text = '';
  words: Word[] = [];
  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => {
      this.text = result;
      this.initWords();
    });
  }

  selectWord(index) {
    this.textService.selectWord(index);
    this.textService.getSyn();
  }

  initWords() {
    const strings = this.text.split(' ');
    for (let i = 0; i < strings.length; i++) {
      const commaIndex = strings[i].indexOf(',');
      if (commaIndex !== -1) {
        const wordWithoutComma = strings[i].substring(0, commaIndex);
        this.words.push(new Word(wordWithoutComma));
        this.words.push(new Word(','));
      } else {
        this.words.push(new Word(strings[i]));
      }
    }
    this.textService.words = this.words;
  }
}
