import { Component, Input, OnInit, Output } from '@angular/core';
import { StdserveService } from 'src/app/servic/stdserve.service';
import { Student } from 'src/app/_mod/student';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.css']
})
export class StdlistComponent implements OnInit {
  std:Student[]=[];
  constructor(private stdlist:StdserveService) { }
  stdd:Student=new Student(1,"",22);
  delete(s:Student)
  {   console.log(s);
    this.stdd=s;

      
  }
  ngOnInit(): void {
    this.std=this.stdlist.getallstudent();
  }
 
    estd:Student;
  edit(e)
  {
    console.log(e);
    this.estd=new Student(e.id,e.name,e.age);
    
  
  }
 

}
