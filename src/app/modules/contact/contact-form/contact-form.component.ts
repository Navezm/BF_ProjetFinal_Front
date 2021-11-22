import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {F_Email} from "./email.form";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  emailFom: FormGroup = new FormGroup(F_Email);

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  submit(){
    const values = this.emailFom.value;
    this.http.post("http://localhost:8080/sendMail", values).subscribe();
    this.emailSent();
  }

  emailSent(){
    let divOrder = document.getElementById('divOrderDone');
    // @ts-ignore
    divOrder.style.display = 'block';

    this.emailFom.reset();
  }

}
