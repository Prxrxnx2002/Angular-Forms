import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './services/enrollment.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  constructor(private EnSer: EnrollmentService){}
  topics = ['Topic1','Topic2','Topic3']
  topicError = true

  userModel = new User('','', null , 'default' , '', false,{Street:'',City: '',State:'',PinCode:''})

  validateTopic(val: any){
    if (val=="default"){
      this.topicError = true
    }
    else{
      this.topicError = false
    }
  }
  errMsg = ''
  submitted = false
  onSubmit(){
    if(this.errMsg){
      this.submitted = false
    }
    else{
      this.submitted = true
    }
    console.log(this.userModel);
    this.EnSer.enroll(this.userModel). subscribe(
      response => console.log('success!', response),
      error => console.log('Error!', error)      
    )
    
   
  }
}