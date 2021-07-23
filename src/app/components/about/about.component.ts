import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  waste_products: Pet[] = []
  copy_products: Pet[] = []
  type_products: Pet[] = []
  plastic_products: Pet[] = []
  metal_products: Pet[] = []
  searchString = "";
  constructor(
    private router: Router,
    private productService: PetService
  ) { }

  ngOnInit() {
    this.waste_products = this.productService.findByCategory('waste-papers')
    this.copy_products = this.productService.findByCategory('copy-paper')
    this.type_products = this.productService.findByCategory('paper-type')
    this.metal_products = this.productService.findByCategory('metal-scrap')
    this.plastic_products = this.productService.findByCategory('plastic-scrap')
  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }
}
