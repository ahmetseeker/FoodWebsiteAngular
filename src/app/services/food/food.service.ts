import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14},
      { name: 'FastFood', count: 4},
      { name: 'Pizza', count: 2},
      { name: 'Lunch', count: 3},
      { name: 'SlowFood', count: 2},
      { name: 'Hamburger', count: 1},
      { name: 'Fry', count: 1},
      { name: 'Soup', count: 1},
    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price:10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food1.jpg',
        tags: ['SlowFood', 'Lunch']
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: true,
        origins: ['Germany', 'USA'],
        stars: 3.2,
        imageUrl: '/assets/images/foods/food2.webp',
        tags: ['FastFood', 'Hamburger']
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: false,
        origins: ['Belgium', 'France'],
        stars: 3.1,
        imageUrl: '/assets/images/foods/food3.png',
        tags: ['FastFood', 'Fry']
      },
      {
        id: 5,
        name: 'Chicken Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['India', 'Asia'],
        stars: 3,
        imageUrl: '/assets/images/foods/food6.jpg',
        tags: ['SlowFood', 'Soup']
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: true,
        origins: ['Italy'],
        stars: 4,
        imageUrl: '/assets/images/foods/food5.webp',
        tags: ['FastFood', 'Lunch', 'Pizza']
      },
    ]
  }
}
