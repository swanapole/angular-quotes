import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})

  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() vote = new EventEmitter<boolean>();
  deleteQuote(erase:boolean){
    this.isDelete.emit(erase);
  }

  addVote(voteCount:boolean){
    this.vote.emit(voteCount);
  }
  constructor() { }

  ngOnInit() {export class QuotesDetailsComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
