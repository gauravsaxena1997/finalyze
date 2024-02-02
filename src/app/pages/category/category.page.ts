import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryType } from '../../models/category.model';
import { globalCategories } from '../../constants/category';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CategoryPage implements OnInit {
  public user: User = {
    _id: 'test123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'test123@gmail.com',
    categories: globalCategories
  };
  public selectedCategoryType: CategoryType = CategoryType.INCOME;
  public categoryTypes: string[] = Object.values(CategoryType);
  constructor() { }

  ngOnInit() {
  }

}
