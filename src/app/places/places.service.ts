import { Injectable } from '@angular/core';
import {place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: place[]=[
    {
      id: '1',
      title: 'torre eiffel',
      imageURL:'https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg',
      comments: ['maravilla del mundo','hermoso']

    },
    {
      id: '2',
      title: 'arco del triunfo',
      imageURL:'https://estaticos.muyhistoria.es/media/cache/760x570_thumb/uploads/images/pyr/5b5860755cafe8761facfe59/arco-del-triunfo-paris-francia_0.jpg',
      comments: ['Ubicado en francia', 'historico']

    },
    {
      id: '3',
      title: 'montañas ',
      imageURL:'https://estaticos.muyhistoria.es/media/cache/760x570_thumb/uploads/images/pyr/5b5860755cafe8761facfe59/arco-del-triunfo-paris-francia_0.jpg',
      comments: []

    }
   

  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
}

  getPlace(placeId: string){
    return{
      ...this.places.find(place=>{
        return place.id ===placeId
      })
    }
  }

  addPlace(title:string,imageURL:string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id:this.places.length +1 +""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
