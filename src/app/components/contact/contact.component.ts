import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  constructor() {
    console.log(this.contactForm)
  }

  ngOnInit(): void {
  }

  submitContactForm(){
    console.log(this.contactForm.value);
  }

  isEmpty(formControl: any){
    if(formControl.value !== ''){
      return false;
    }
    return true
  }
}
