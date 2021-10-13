import { Injectable } from '@angular/core';
import { Student } from '../_mod/student';

@Injectable({
  providedIn: 'root'
})
export class StdserveService {
  students:Student[]=[ 
    new Student(1,"doha",23),
    new Student(20,"ali",25),
    new Student(30,"ahmed",24),
    
 
  ]
  getallstudent(){
    return this.students;
  }
  grtbyid(id){
    this.students.forEach(a=>{
      if(a.id==id)
      return a;
    });
  }
  addstudent(std:Student)
  {
     this.students.push(std);
  }
  deletestd(id)
  {
     this.students.filter(a=>a.id!=id);
  }
  table:boolean=true;
  editedept:boolean=false;

  edite(st:Student)
  { console.log(st);
    for(let i=0 ; i<this.students.length;i++)
    {
      if(this.students[i].id==st.id)
      {
        console.log(st);
        this.students[i].name=st.name;
        this.students[i].age=st.age;
        
      }
    }
  }
  constructor() { }
}
