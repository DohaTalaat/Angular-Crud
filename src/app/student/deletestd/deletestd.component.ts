import { Component, Input, OnInit } from '@angular/core';
import { StdserveService } from 'src/app/servic/stdserve.service';
import { Student } from 'src/app/_mod/student';

@Component({
  selector: 'app-deletestd',
  templateUrl: './deletestd.component.html',
  styleUrls: ['./deletestd.component.css']
})
export class DeletestdComponent implements OnInit {
  @Input() stud:Student= new Student(1,"",21);
  constructor(public stdserve:StdserveService) { }
 
  ngOnInit(): void {
  }
  delete()
  {
    this.stdserve.deletestd(this.stud.id);
  }

}
