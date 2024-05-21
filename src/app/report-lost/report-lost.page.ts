import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';

export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}

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
    itemLostDate: '',
    itemDesc: '',
    itemFound: null,
    itemLocLost: '',
    itemPic: ''
  };

  selectedFile: File | null = null;

  constructor(
    private afStorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async registeritem() {
    if (this.selectedFile) {
      const filePath = `lost_items/${Date.now()}_${this.selectedFile.name}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, this.selectedFile);

      task.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await fileRef.getDownloadURL().toPromise();
          this.item.itemPic = downloadURL;

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
            itemLostDate: '',
            itemDesc: '',
            itemFound: null,
            itemLocLost: '',
            itemPic: '',
          };

          alert("Success!");
          this.backTo();
        })
      ).subscribe();
    } else {
      alert("Please select a file to upload.");
    }
  }

  backTo() {
    this.router.navigate(['tabs/home']);
  }
}
