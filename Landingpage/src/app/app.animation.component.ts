import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as bodymovin from '../assets/vendor/loloco_animation/bodymovin';
@Component({
  selector: 'na-animation',
  templateUrl: '../build/animation.html',
  styleUrls : ["../build/css/contact.css"]
})

export class AnimationComponent implements OnInit{ 
  ngOnInit(): void {
    var animData = {
      wrapper: document.getElementById('bodymovin'),
      animType: 'svg',
      loop: false,
      autoplay: true,
      path: '/../assets/vendor/loloco_animation/LOLOCO_2.json'
      

  };
  var anim = bodymovin.loadAnimation(animData);
  bodymovin.setSubframeRendering(true);
  }
  
 
}
