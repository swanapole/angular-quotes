import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {  private timer:number;
 private timer:number;
 private id:number=0;
  quotes=[]
  // new Quotes("max",0,false,1,"test","max",0,0);
    // new Quotes("max",0,false,1,"test","max",0,0)
  // ];

quotesDelete(isDelete,index){
  if(isDelete){
 let toDelete = confirm(`Are you sure you want to delete this quote?`);
   if(toDelete){
     this.quotes.splice(index, 1);
      this.getHighest();
   }
 }
  }

 postNewQuotes(quote){
   this.id+=1;
   quote.id = this.id;
   this.timer=setInterval(()=>{
       quote.time+=1;
   },1000);
   this.quotes.push(quote);
   console.log('test');
 }

 voteAdd(vote,index){
   if(vote){
     this.quotes[index].upVote += 1;
     this.getHighest();
   } else {
     this.quotes[index].downVote += 1;
   }
 }

 getHighest(){
   let highest = 0;
   let highestQuote:Quotes;
   for(let quote of this.quotes){ //Stores highest quote
     if(quote.upVote>highest){
       highest=quote.upVote;
       highestQuote=quote;
     }
   }
   console.log(highestQuote);
   this.getId(highestQuote);
 }

 getId(change:Quotes){
    for(let quote of this.quotes){
      if(quote.id==change.id){
        quote.highest=true;
      }
      else{
        quote.highest=false;
      }
    }
 }

 constructor() { }

 ngOnInit() {

 }
 ngOnDestroy(){
   clearInterval(this.timer);
 }
}
