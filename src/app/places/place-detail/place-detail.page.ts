import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placeService.getPlace(recipeId);
    });
  }

  async deleteplace() {
  const alertElement= await this.alertCtrl.create({
      header: 'seguro que quieres eliminar?',
      message: 'se cuidadoso',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.placeService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });

   await alertElement.present();

  }
}
