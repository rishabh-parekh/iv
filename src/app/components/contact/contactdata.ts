/**
 * Book entity, used for filtering as well.
 */
export class ContactData {

 contactDate: string;
  
  /**
   * @type {string} title The title of the book.
   */
  name: string;

  /**
   * @type {string} author The author of the book.
   */
  email: string;
  /**
   * @type {number} year The year the book was published.
   */
  phonenumber: string;
  website: string;
  message: string;

  constructor(contactDate: string, name: string, email: string,phonenumber: string,website: string,message: string) {
    this.contactDate = contactDate;
    this.name = name;
    this.email = email;
    this.phonenumber = phonenumber;
    this.website = website;
    this.message = message;
  }

}