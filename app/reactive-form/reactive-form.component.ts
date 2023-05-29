import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbidenVal } from './shared/custom.validator';
import { pswdValidator } from './shared/password.validator';
import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private regServ: RegistrationService){}
  regForm: any;
  get f(){
    return this.regForm.controls
  }

  
  ngOnInit(): void {
    this.regForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(5), forbidenVal(/^admin$/),
      forbidenVal(/^password$/)]],
      email : [''],
      subscribe: [false],
      password : [''],
      confirmPassword : [''],
      address : this.fb.group({
        street : [''],
        city : [''],
        state : [''],
        pincode: ['']
      })
    }, {validator: pswdValidator})

    this.regForm.get('subscribe').valueChanges.subscribe((checkedVal: any) => {
      const email = this.regForm.get('email')
      if (checkedVal){
        email.setValidators(Validators.required);
      }
      else{
      email.clearValidators()
      }
      email.updateValueAndValidity()
    })
  }

  // regForm = new FormGroup({
  //   username: new FormControl('username'), //adding defailt value 'username'
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address : new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl('')
  //   })    
  // })

  loadAPI(){
    /*set all form values*/
    this.regForm.setValue({
      username: 'Prxrxnx',
      email : '',
      subscribe : false,
      password: 'test',
      confirmPassword: 'test',
      address: {
        street: 'Street',
        city: 'City',
        state: 'State',
        pincode: '400709'
      }
    })

    /*set some of the form values*/
    this.regForm.patchValue({
      username: 'Prxrxnx02',
      password: 'test1',
      confirmPassword: 'test1',
    })
  }
  onSubmit(){
    console.log(this.regForm.value);
    this.regServ.register(this.regForm.value). subscribe(
      response => console.log('success!', response),
      error => console.log('Error!', error)      
    )
  }
}
