// item-details.page.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import to get route parameters
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Firestore import for data fetching
import { Observable } from 'rxjs'; // Optional import if you use Observables

// Define the Item interface to type the item details
export interface Item {
  itemid: string;
  itemName: string;
  itemOwner: string;
  itemLostDate: string;
  itemDesc: string;
  itemFound: boolean | null;
  itemLocLost: string;
  itemPic: string;
}

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  itemDetails: Item | null = null; // Store item details

  constructor(
    private route: ActivatedRoute, // ActivatedRoute to access route parameters
    private firestore: AngularFirestore // Firestore to fetch data
  ) { }

  ngOnInit() {
    // Get item ID from route parameters
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      // Fetch item details if ID is available
      this.getItemDetails(itemId);
    }
  }

  // Method to fetch item details from Firestore
  getItemDetails(itemId: string) {
    this.firestore.collection('items').doc(`${itemId}`).valueChanges().subscribe(
      (data: any) => {
        this.itemDetails = data;
        console.log(this.itemDetails)
      },
      (error) => {
        console.error('Error fetching item details:', error);
      }
    );
  }
}
