import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
addContect: Contact = {
  id: '',
  name: '',
  email: '',
  phone: 0
};

constructor(private contactService: ContactService) {}

addContact(): void {
  this.contactService.addContact(this.addContect).subscribe(response => {
    alert('User added successfully');
    // You can perform any additional actions here, such as displaying a success message or refreshing the user list.
  });
}
}
