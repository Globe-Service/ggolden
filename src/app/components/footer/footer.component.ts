import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/api/contact';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  submit() {
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      Swal({
        title: 'Thanks!',
        text: 'Thank you! Your email has been received. We will kep you up-to-date.',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#fec931'
      })
      this.contact = new Contact();
    },
      (err: HttpErrorResponse) => {
        Swal({
          title: 'Error!',
          text: 'Unable to subscribe. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok!',
          confirmButtonColor: '#fec931'
        })
      });

  }
}
