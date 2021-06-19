import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.less']
})
export class AssessmentComponent implements OnInit {
  start = false;
  counter = 5;
  interval:any;

  constructor(private router: Router) { }
  startCounter(){
    this.start = !this.start;    
    
   this.interval = setInterval(()=>{
      this.counter--;
      if(this.counter == 0){
        clearInterval(this.interval);
        this.router.navigate(['start']);
      }   
    }, 1000)
    
  }


  ngOnInit() {
  }

}
