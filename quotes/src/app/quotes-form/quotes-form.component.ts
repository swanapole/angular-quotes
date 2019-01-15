import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {newQuotes=new Quotes(0," "," "," ",0,0,0, false);
  @Output() addQuotes = new EventEmitter<Quotes>();

  postQuote(){
    this.addQuotes.emit(this.newQuote);
    this.newQuotes=new Quotes(0," "," "," ",0,0,0, false);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
