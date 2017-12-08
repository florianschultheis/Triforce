import { Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
})
export class SecurityCamerasComponent {

  cameras: any[] = [{
    title: 'Bäckerei Konrad',
    source: 'assets/images/baecker.jpg',
  }, {
    title: 'Südstadtsport',
    source: 'assets/images/sportladen.jpg',
  }, {
    title: 'LastCoolPizza',
    source: 'assets/images/restaurant.jpg',
  }, {
    title: 'BioBoy',
    source: 'assets/images/supermarkt.jpg',
  }];

  selectedCamera: any = this.cameras[0];

  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = false;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}
