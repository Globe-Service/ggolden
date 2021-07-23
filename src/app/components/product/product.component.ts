import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Pet } from 'src/app/models/pets';
import { CartService } from 'src/app/services/cart.service';
import { PetService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  waste_products: Pet[] = []
  copy_products: Pet[] = []
  type_products: Pet[] = []
  plastic_products: Pet[] = []
  metal_products: Pet[] = []

  searchString = "";

  pet: Pet = new Pet();
  pets: Pet[] = [];
  category: string
  constructor(private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private cartService: CartService,
    private titleService: Title) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.category = params["category"]
      this.pet = this.petService.find(id)
      let randomProducts = this.petService.findRandomByCategory(4, this.category)
      let products: Pet[] = []
      randomProducts.forEach(p => {
        if (p.id != id) {
          products.push(p)
        }
      })
      this.pets = products
      if (!this.pet) {
        this.router.navigate(["/"]);
      }
    })
    this.titleService.setTitle("Buy " + this.pet.name + " online")

    this.waste_products = this.petService.findByCategory('waste-papers')
    this.copy_products = this.petService.findByCategory('copy-paper')
    this.type_products = this.petService.findByCategory('paper-type')
    this.plastic_products = this.petService.findByCategory('plastic-scrap')
    this.metal_products = this.petService.findByCategory('metal-scrap')
  }

  addToCart() {
      let item: Item = new Item();
      item.pet = this.pet;
      this.cartService.add(item);
      // this.router.navigate(["/checkout"])
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }

}
