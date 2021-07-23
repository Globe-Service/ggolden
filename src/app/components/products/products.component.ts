import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  waste_products: Pet[] = []
  copy_products: Pet[] = []
  type_products: Pet[] = []
  plastic_products: Pet[] = []
  metal_products: Pet[] = []

  products: Pet[] = new Array()
  tags: Pet[] = new Array()
  topProducts: Pet[] = new Array()
  currentProducts: Pet[] = new Array()
  categories: string[] = new Array()
  currentCategory = "all";
  maxProducts: number = 9;
  numberPages: number = 1;
  currentPage: number = 1;
  searchString = "";

  constructor(private productService: PetService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCategory = params["id"];
    })
    this.setCategory(this.currentCategory)
    // this.currentProducts = this.productService.slice(this.currentProducts, ((this.currentPage - 1) * this.maxProducts), this.currentPage * this.maxProducts)
    this.setCategories()

    this.waste_products = this.productService.findByCategory('waste-papers')
    this.copy_products = this.productService.findByCategory('copy-paper')
    this.type_products = this.productService.findByCategory('paper-type')
    this.plastic_products = this.productService.findByCategory('plastic-scrap')
    this.metal_products = this.productService.findByCategory('metal-scrap')
  }

  getCategoryCount(category: string) {
    let count = 0
    if (category === 'all') {
      count = this.productService.findAllCategories().length
    } else {
      this.productService.findByCategory(category).forEach(product => {
        if (product.category === category) {
          count++
        }
      })
    }
    return count
  }

  setCategories() {
    this.productService.findAll().forEach(p => {
      if (!this.categories.includes(p.category) && p.category != '') {
        this.categories.push(p.category)
      }
    })
  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }

  getCategory(category: string): boolean {
    return this.currentCategory === category ? true : false;
  }

  setCategory(category: string) {
    if (category === "all") {
      this.currentProducts = this.productService.findAll()
      this.currentProducts.sort((a, b) => a.name.localeCompare(b.name))
      this.currentCategory = category
    }
    else {
      this.currentProducts = this.productService.findByCategory(category)
      this.currentProducts.sort((a, b) => a.name.localeCompare(b.name))
      this.currentCategory = category;
    }
  }

}
