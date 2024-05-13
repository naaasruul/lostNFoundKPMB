import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  itemDetails: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore
  ) { }

    ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let itemId = params.get('itemId')

     // Fetch item details from Firestore using itemId
     this.firestore.collection('items').doc(`${itemId}`).valueChanges().subscribe(
      (data: any) => {
        this.itemDetails = data;
        
      },
      (error) => {
        console.error('Error fetching item details:', error);
      }
    );
    })
  }

}
