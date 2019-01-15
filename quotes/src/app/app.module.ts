import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
newQuotes=new Quotes(0," "," "," ",0,0,0, false);
  @Output() addQuotes = new EventEmitter<Quotes>();

  postQuote(){
    this.addQuotes.emit(this.newQuote);
    this.newQuotes=new Quotes(0," "," "," ",0,0,0, false);
  }    QuotesDetailsComponent,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
