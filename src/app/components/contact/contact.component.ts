import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/api/contact';
import { Pet } from 'src/app/models/pets';
import { ApiService } from 'src/app/services/api.service';
import { PetService } from 'src/app/services/pets.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  waste_products: Pet[] = []
  copy_products: Pet[] = []
  type_products: Pet[] = []
  plastic_products: Pet[] = []
  metal_products: Pet[] = []

  searchString = "";

  contact: Contact = new Contact();
  pets: Pet[] = new Array()
  petsName: string[] = new Array()
  isLoading = false;
  buttonMsg = "Send Message";
  constructor(private apiService: ApiService, private router: Router, private petService: PetService) { }

  ngOnInit() {
    this.pets = this.petService.findAll()
    this.pets.forEach(pet => {
      if (!this.petsName.includes(pet.name) && pet.name != '') {
        this.petsName.push(pet.name)
      }
    })

    this.waste_products = this.petService.findByCategory('waste-papers')
    this.copy_products = this.petService.findByCategory('copy-paper')
    this.type_products = this.petService.findByCategory('paper-type')
    this.metal_products = this.petService.findByCategory('metal-scrap')
    this.plastic_products = this.petService.findByCategory('plastic-scrap')

  }

  submit() {
    this.buttonMsg = "Loading..."
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      this.isLoading = true;
      Swal({
        title: 'Thanks!',
        text: 'Thank you! Your message has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#fec931'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Send Message";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to send message. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok!',
          confirmButtonColor: '#fec931'
        })
        this.buttonMsg = "Send Message";
      });

  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }
}