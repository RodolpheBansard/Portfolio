import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import '../../../assets/smtp.js'
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isNotifActive = false;
  isNotifSuccess = true;

  contactForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  submitContactForm(){
    Email.send({
      Host:'smtp.elasticemail.com',
      Username:'rbansard.freelance@gmail.com',
      Password:'5EA509F74F91D5A233156221E6858D41C04F',
      To:'rbansard.freelance@gmail.com',
      From:'bansardrodolphe@gmail.com',
      Subject:'Contact Portfolio',
      Body:this.getBody(),
    }).then(
        (message: any) => {
          if(message === 'OK'){
            this.isNotifSuccess = true;
          }
          else {
            this.isNotifSuccess = false;
          }
          this.triggerNotif();
        }
    );
    this.contactForm.controls.name.setValue('');
    this.contactForm.controls.email.setValue('');
    this.contactForm.controls.message.setValue('');
  }

  getBody(){
    return '<h1>'+ this.contactForm.controls.name.value +'</h1>' +
      '<p>'+ this.contactForm.controls.email.value +'</p>' +
      '<p>'+ this.contactForm.controls.message.value +'</p>';
  }

  isEmpty(formControl: any){
    if(formControl.value !== ''){
      return false;
    }
    return true
  }

  triggerNotif(){
    this.isNotifActive = true;
    setTimeout(()=>{
      this.isNotifActive=false;
    },300)
  }
}
