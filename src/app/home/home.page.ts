import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchQuery: string = '';
  items: any[] = []; // Property to store the list of books
  allItems: any[] = []; // Property to store all books for filtering

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.initializeItems();
  }

  initializeItems() {
    // Fetch books data from Firestore
    this.firestore.collection('items').valueChanges().subscribe((data: any) => {
      this.items = data;
      this.allItems = data; // Keep a copy of all items
      console.log(data);
    });
  }

  ngOnInit() {
    this.initializeItems();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    const val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.allItems.filter((item) => {
        return (item.itemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.items = [...this.allItems]; // Reset to all items if search query is empty
    }
  }
}
