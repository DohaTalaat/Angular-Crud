import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { StdserveService } from 'src/app/servic/stdserve.service';


import { Student } from 'src/app/_mod/student';

@Component({
  selector: 'app-addstd',
  templateUrl: './addstd.component.html',
  styleUrls: ['./addstd.component.css']
})
export class AddstdComponent implements OnInit {

  constructor(public stdserve:StdserveService) { }
 addbool:boolean=true;
 flag:boolean=true;
 createe:string="create";
 create()
 {
   if(this.flag==true)
   {
    this.flag=false
    this.createe="hide student "
   }
   else
   {this.flag=true;
    this.createe="Create";
   }
 }
 std:Student=new Student(4,"asmaa",22);
 @Output() add:EventEmitter<Student>=new EventEmitter<Student>();
 save()
 {
     this.stdserve.addstudent(new Student(this.std.id,this.std.name,this.std.age));
 }
  ngOnInit(): void {
  }

}
