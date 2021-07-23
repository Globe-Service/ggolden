import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pets';
import { PetService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  waste_papers: Pet[] = new Array();
  waste_paper_product: Pet
  paper_types: Pet[] = new Array();
  paper_type_product: Pet
  copy_papers: Pet[] = new Array();
  copy_paper_product: Pet
  plastic_scrap: Pet[] = new Array()
  plastic_products: Pet
  metal_scrap: Pet[] = new Array()
  metal_products: Pet
  
  searchString = "";

  products: Pet[] = new Array()
  id: string;

  private pathToAssets: string = "../../assets/";

  constructor(private productService: PetService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params["id"]
      this.products = productService.search(this.id);
    })
  }

  ngOnInit() {

    this.waste_papers = this.productService.findByCategory('waste-papers')
    this.waste_paper_product = this.productService.findRandomFromArray(1, this.waste_papers)
    this.paper_types = this.productService.findByCategory('paper-type')
    this.paper_type_product = this.productService.findRandomFromArray(1, this.paper_types)
    this.copy_papers = this.productService.findByCategory('copy-paper')
    this.copy_paper_product = this.productService.findRandomFromArray(1, this.copy_papers)
    this.plastic_scrap = this.productService.findByCategory('plastic-scrap')
    this.plastic_products = this.productService.findRandomFromArray(1, this.plastic_scrap)
    this.metal_scrap = this.productService.findByCategory('metal-scrap')
    this.metal_products= this.productService.findRandomFromArray(1, this.metal_scrap)
  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }

}
