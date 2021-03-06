import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactData } from './contactdata';
import {ContactService} from '../../service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData: ContactData;
  connected: boolean;
  constructor(private contactService: ContactService) {
    this.connected = false;
  }


  ngOnInit() {
  }


  onContact(form: NgForm) {
    console.log('onContact:' + form.value.contname);
    this.connected = true;

    this.contactData = new ContactData('' + new Date(), form.value.contname, form.value.contemail, form.value.contphone, form.value.contmessage);
    this.contactService.updateContactData(this.contactData).then(
      (item) => {
        console.log(item.key);
      });
  }

}
