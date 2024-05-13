import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import AngularFire modules
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-report-lost',
  templateUrl: './report-lost.page.html',
  styleUrls: ['./report-lost.page.scss'],
})
export class ReportLostPage implements OnInit {
  item = {
    itemid: '',
    itemName: '',
    itemOwner: '',
    itemLostDate:'',
    itemDesc:'',
    itemFound: null,
    itemLocLost:'',
  }

  constructor(
    private afStorage: AngularFireStorage, // Corrected import
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async registeritem() {
    // Create a reference to the 'items' collection
    const itemsCollectionRef = this.firestore.collection('items');
    
    // Add the item data to the collection, letting Firestore generate a unique ID
    const docRef = await itemsCollectionRef.add(this.item);

    // Retrieve the auto-generated ID from the document reference
    const autoId = docRef.id;

    // Update the item object with the auto-generated ID
    this.item.itemid = autoId;

    // Store the updated item data with the auto-generated ID to Firestore
    await itemsCollectionRef.doc(autoId).set(this.item);

    // Clear the form
    this.item = {
      itemid: '',
      itemName: '',
      itemOwner: '',
      itemLostDate:'',
      itemDesc:'',
      itemFound: null,
      itemLocLost:'',
    };

    alert("success!");

    this.backTo()
}
  backTo(){
    this.router.navigate(['tabs/home']);
  }
}
