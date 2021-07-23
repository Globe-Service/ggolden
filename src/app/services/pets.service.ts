import { Injectable } from '@angular/core';
import { Pet, PETS } from '../models/pets';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private pets: Pet[] = new Array();

  constructor() {
    //Very important initialization since PETS is an array of objects that have been cast to type pet
    //Relying on this may cause runtime problems
    PETS.forEach((element: Pet) => {
      let pet: Pet = new Pet();
      pet.id = element.id;
      pet.name = element.name;
      pet.category = element.category;
      pet.image = element.image;
      pet.price = element.price;
      pet.description_1 = element.description_1;
      pet.description_2 = element.description_2;
      this.pets.push(pet);
    });

    this.pets.sort((a, b) => a.name.localeCompare(b.name));
  }

  
  findAll(): Pet[] {
    return this.pets;
  }

  slice(array: Pet[], start: number, end: number) {
    let result = new Array()
    array.slice(start, end).forEach(value => result.push(value))
    return result;
  }

  findByCategory(cat: string): Pet[] {
    let products: Pet[] = []
    this.pets.forEach(pet => {
      if (pet.category == cat) {
        products.push(pet)
      }
      
    });
    return products
  }

  find(id: string): Pet {
    let i = this.getSelectedIndex(id)
    return i < 0 ? null : this.pets[i];
  }

  findRandomAndExclude(maxNo: number, excludedId: string): Pet[] {
    let total: number
    let copied: Map<number, number> = new Map<number, number>();
    let somePets = [];
    this.pets.forEach((p: Pet) => {
      somePets.push(p);
    })
    //Remove product with provided id from products
    for (var j = 0; j < somePets.length; j++) {
      if (excludedId === somePets[j].id) {
        somePets.splice(j, 1)
        break;
      }
    }
    total = somePets.length;
    let randomPets: Pet[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * somePets.length))
      if (!copied.has(index)) {
        randomPets.push(somePets[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomPets;
  }

  findRandom(maxNo: number) {
    let copied: Map<number, number> = new Map<number, number>();
    let total = this.pets.length;
    let randomProducts: Pet[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * this.pets.length))
      if (!copied.has(index)) {
        randomProducts.push(this.pets[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProducts;
  }

  findRandomFromArray(maxNo: number, array: Pet[]) {
    let copied: Map<number, number> = new Map<number, number>();
    let total = array.length;
    let randomProduct: Pet;
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * array.length))
      if (!copied.has(index)) {
        randomProduct = array[index]
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProduct;
  }

  search(id: string): Pet[] {
    let found: Pet[] = [];
    //Assuming all spaces are replaced by +
    let splits = id.split("+");
    for (var i = 0; i < this.pets.length; i++) {
      for (var j = 0; j < splits.length; j++) {
        if (this.pets[i].name.toLowerCase().includes(splits[j].toLowerCase()) || this.pets[i].id.toLowerCase().includes(splits[j].toLowerCase())) {
          found.push(this.pets[i])
          // break out of loop as soon as we get the first match
          break;
        }
      }
    }
    return found;
  }
  
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.pets.length; i++) {
      if (this.pets[i].id == id) {
        return i;
      }
    }
    return -1;
  }


  findRandomByCategory(maxNo: number, category: string) {
    let copied: Map<number, number> = new Map<number, number>();
    let products = this.findByCategory(category);
    let total = products.length;
    let randomProducts: Pet[] = [];
    total = maxNo > total ? total : maxNo;
    let i = 0;
    while (i < total) {
      let index = Math.floor((Math.random() * products.length))
      if (!copied.has(index)) {
        randomProducts.push(products[index])
        copied.set(index, index);
        i++;
      } else {
        //Just for documentation sake not really needed
        continue;
      }
    }
    return randomProducts;
  }

  findAllCategories() {
    let products: Pet[] = []
    this.pets.forEach(p => {
      if (p.category.toLowerCase() != '') {
        products.push(p)
      }
    })
     return products
  }
}