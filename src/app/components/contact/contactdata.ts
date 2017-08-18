export class ContactData {
 contactDate: string;
  name: string;
  email: string;
  phonenumber: string;
  message: string;

  constructor(contactDate: string, name: string, email: string, phonenumber: string, message: string) {
    this.contactDate = contactDate;
    this.name = name;
    this.email = email;
    this.phonenumber = phonenumber;
    this.message = message;
  }
}
