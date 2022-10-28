import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PizzaserviceService } from '../pizzaservice.service';

@Component({
  selector: 'app-foodtruck',
  templateUrl: './foodtruck.component.html',
  styleUrls: ['./foodtruck.component.scss']
})
export class FoodtruckComponent implements OnInit {
  data:any = {'items': []};
  originalData:any = {};
  categories:any = [];
  totalCount = 0;
  constructor(private http: HttpClient, private pizzaService: PizzaserviceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').subscribe((res):any => {
      if(res) {
        this.data = res;
        this.originalData = res;
        this.fetchUniqueCategories();
      }
    },
    error => {
      console.log('@@ error');
    });
  }

  fetchUniqueCategories(){
    let res:any = [];
    this.data.items.forEach((item:any) => {
      if(!res.includes(item.category)) {
        res.push(item.category);
      }
    });
    this.categories = res;
    //let uniqueValues = [... new Set(this.data.items.map((item:any) => item.category))];
    //console.log(uniqueValues);
  }

  onCategoryUpdate(event:any) {
    let categoryChoice = event.currentTarget.value;
    if(categoryChoice == 'All Categories') {
      this.data = JSON.parse(JSON.stringify(this.originalData));
    } else {
      this.data = JSON.parse(JSON.stringify(this.originalData));
      this.data.items = this.data.items.filter((item:any) => item.category == categoryChoice);
    }
  }

  addToCart(item:any) {
    this.totalCount++;
    item.added = true;
    this.pizzaService.addToCart(item);
    this.originalData.items.forEach((obj:any)=>{
      if(obj.id == item.id) {
        obj.added = true;
      }
    });
  }

  removeFromCart(item:any) {
    this.totalCount--;
    item.added = false;
    this.pizzaService.removeFromCart(item);
    this.originalData.items.forEach((obj:any)=>{
      if(obj.id == item.id) {
        obj.added = false;
      }
    });
  }

}


//ele.className += " active";
//ele.classList.add("active") or ele.classList.remove("active");
