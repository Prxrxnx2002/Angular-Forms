import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbidenVal } from './shared/custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  get f(){
    return this.regForm.controls
  }
  constructor(private fb: FormBuilder){}

  regForm = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(5), forbidenVal(/^admin$/),forbidenVal(/^password$/)]],
    password : [''],
    confirmPassword : [''],
    address : this.fb.group({
      street : [''],
      city : [''],
      state : [''],
      pincode: ['']
    })
  })

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

}
