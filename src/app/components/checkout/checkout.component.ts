import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/api/cart';
import { Checkout } from 'src/app/models/api/checkout';
import { ShippingDetails } from 'src/app/models/api/shippingDetails';
import { CartItem } from 'src/app/models/cart-item';
import { Item } from 'src/app/models/item';
import { Pet } from 'src/app/models/pets';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { PetService } from 'src/app/services/pets.service';
import { CartItem as ApiCartItem } from '../../models/api/cartItem';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  waste_products: Pet[] = []
  copy_products: Pet[] = []
  type_products: Pet[] = []
  plastic_products: Pet[] = []
  metal_products: Pet[] = []
  searchString = "";

  isLoading = false;
  buttonMsg = "Inquire";
  private pathToAssets: string = "../../assets/";
  pets: Pet[] = new Array();
  pet: Pet;
  items: CartItem[] = new Array()
  chosen: string;
  shipping: ShippingDetails = new ShippingDetails()
  paymentOptions = ["Paypal", "Cashapp", "Zelle", "Applepay", "Venmo"]
  constructor(private cartService: CartService, private apiService: ApiService, private router: Router,
    private productService: PetService, private petService: PetService) {
  }

  getPetName(id: string): string {
    return this.petService.find(id).name
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.shipping.paymentOption = this.paymentOptions[1]
      console.log(this.shipping.paymentOption)
      this.items = data;
      this.pets = this.petService.findAll()
      this.shipping = new ShippingDetails();
      if (this.items.length > 0) {
        this.chosen = this.items[0].pet.id
      } else {
        this.chosen = this.pets[0].id
        this.pet = this.pets[0]
      }

      this.items.forEach(item => {
        if(item.pet.id == this.chosen) {
          this.pet = item.pet
        }
      })
    })

    this.waste_products = this.productService.findByCategory('waste-papers')
    this.copy_products = this.productService.findByCategory('copy-paper')
    this.type_products = this.productService.findByCategory('paper-type')
    this.metal_products = this.petService.findByCategory('metal-scrap')
    this.plastic_products = this.petService.findByCategory('plastic-scrap')
  }

  onChange(value: string) {
    console.log(value)
    let item: Item = new Item();
    item.pet = this.petService.find(this.chosen)
    this.pet = item.pet
    this.cartService.add(item)
  }

  total() {
    return this.cartService.total();
  }

  grandTotal() {
    return this.cartService.grandTotal();
  }

  submit() {
    this.isLoading = true;
    this.buttonMsg = "Loading...";
    if (this.items.length < 1) {
      Swal({
        title: 'Oops!',
        text: 'No product selected, please select a product before proceeding.',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#fec931'
      })
      this.isLoading = false;
      this.buttonMsg = "Inquire";
    } else {
      let checkout = new Checkout();
      let cart = new Cart()
      this.items.forEach((value: CartItem) => {
        let apiCartItem: ApiCartItem = new ApiCartItem();
        apiCartItem.petName = value.pet.name;
        apiCartItem.productTotal = value.pet.price
        cart.cartItems.push(apiCartItem)
      })
      cart.grandTotal = this.cartService.total();
      checkout.cart = cart;
      checkout.shippingDetails = this.shipping;
      this.apiService.checkout(checkout)
        .subscribe((data: any) => {
          this.isLoading = true;
          this.shipping = new ShippingDetails()
          this.cartService.purge()
          Swal({
            title: 'Thanks!',
            text: 'Thank you! We took note of your request. We will contact you as soon as possible',
            type: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#fec931'
          })
          this.isLoading = false;
          this.buttonMsg = "Inquire";
        },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
            Swal({
              title: 'Error!',
              text: 'Unable to reach us. Make sure you are connected to the internet',
              type: 'warning',
              confirmButtonText: 'Ok got it!',
              confirmButtonColor: '#fec931'
            })
            this.buttonMsg = "Inquire";
          });
    }
  }

  itemTotal(item: CartItem): number {
    let total: number = this.cartService.totalItems();
    return total;
  }

  getPrice(item: CartItem) {
    return this.cartService.getPrice(item.pet);
  }

  Shipping() {
    return this.cartService.shipping();
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
