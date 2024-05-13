import { Component } from '@angular/core';


import { Router} from '@angular/router'

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any[] = []; // Property to store the list of books
  newlyRegisteredBook: any; // Property for the newly registered book

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ){}
  ngOnInit() {
    // Fetch books data from Firestore
    this.firestore.collection('items').valueChanges().subscribe((data: any) => {
      this.items = data;
    });
  }

}
