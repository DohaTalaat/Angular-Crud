import { Component, Input, OnInit } from '@angular/core';
import { StdserveService } from 'src/app/servic/stdserve.service';
import { Student } from 'src/app/_mod/student';
@Component({
  selector: 'app-stdedit',
  templateUrl: './stdedit.component.html',
  styleUrls: ['./stdedit.component.css']
})
export class StdeditComponent implements OnInit {
 //@Input() id:number;
 @Input() nstd:Student;
 //std:Student=new Student(4,"sss",23);
  constructor(public stdesrve:StdserveService) { }

  ngOnInit(): void {
         //this.nstd=this.stdesrve.grtbyid(this.id);
  }
  Edit()
  {
    this.stdesrve.edite(this.nstd);
  }

}
