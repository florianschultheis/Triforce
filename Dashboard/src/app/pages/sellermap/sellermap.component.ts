import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'ngx-sellermap',
  styleUrls: ['./sellermap.component.scss'],
  templateUrl: './sellermap.component.html',
})
export class SellermapComponent {

  // google maps zoom level
  zoom: number = 12;
  
  // initial center position for the map
  lat: number = 50.941278;
  lng: number = 6.958281;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 50.997292,
		  lng: 6.905840,
		  label: 'A',
      draggable: false
	  },
	  {
		  lat: 50.947392,
		  lng: 6.915850,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 50.967399,
		  lng: 6.904750,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
}
