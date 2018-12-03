import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
@Component({
  selector: 'app-synonym-list',
  templateUrl: './synonym-list.component.html',
  styleUrls: ['./synonym-list.component.css']
})
export class SynonymListComponent implements OnInit {
  syn: any;
  error = 'check word if you want get synonym';

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.getSynonymList();
  }

  applySyn(synword: string) {
    this.textService.selectedWord.value = synword;
  }

  getSynonymList() {
    this.textService.getSynonym().subscribe(data => {
      this.syn = data;
    });
  }
}
