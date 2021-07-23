import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api/contact';
import { Pet } from '../../models/pets';
import { Seo } from '../../models/seo';
import { ApiService } from '../../services/api.service';
import { PetService } from '../../services/pets.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color_product: Pet
  thermal_product: Pet
  magazine_product: Pet
  kraft_product: Pet

  pets: Pet[] = new Array();
  waste_papers: Pet[] = new Array();
  waste_paper_product: Pet
  paper_types: Pet[] = new Array();
  paper_type_product: Pet
  copy_papers: Pet[] = new Array();
  copy_paper_product: Pet
  plastic_scrap: Pet[] = new Array();
  plastic_scrap_products: Pet
  metal_scrap: Pet[] = new Array();
  metal_scrap_products: Pet

  contact: Contact = new Contact();
  isLoading = false;
  seo = new Seo()
  tags = new Array()
  date: Date
  properties = new Array()
  schema;
  navigationSchema;
  buttonMsg = "Send Message";
  private pathToAssets: string = "../../assets/";


  constructor(
    private productService: PetService, 
    private apiService: ApiService,
    private seoService: SEOService) {
      var now = new Date(), y = now.getFullYear(), m = now.getMonth();
      this.date = new Date(y, m + 1, 0);
      console.log(this.date.toUTCString())
  }

  ngOnInit() {
    this.pets = this.productService.findRandom(8);
    this.waste_papers = this.productService.findByCategory('waste-papers')
    this.waste_paper_product = this.productService.findRandomFromArray(1, this.waste_papers)
    this.paper_types = this.productService.findByCategory('paper-type')
    this.paper_type_product = this.productService.findRandomFromArray(1, this.paper_types)
    this.copy_papers = this.productService.findByCategory('copy-paper')
    this.copy_paper_product = this.productService.findRandomFromArray(1, this.copy_papers)
    this.plastic_scrap = this.productService.findByCategory('plastic-scrap')
    this.plastic_scrap_products = this.productService.findRandomFromArray(1, this.plastic_scrap)
    this.metal_scrap = this.productService.findByCategory('metal-scrap')
    this.metal_scrap_products = this.productService.findRandomFromArray(1, this.metal_scrap)

    this.color_product = this.productService.find('color-copy-paper')
    this.thermal_product = this.productService.find('double-a-a4')
    this.magazine_product = this.productService.find('magazine-waste-paper')
    this.kraft_product = this.productService.find('kraft-paper')
  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
