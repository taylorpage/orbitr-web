import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  // Detects if an element is in screen view
  detectVisibleElement(elementReference: ElementRef) {
    let bounding = elementReference.nativeElement.getBoundingClientRect();
    
    return (
      bounding.top >= 0 && 
      bounding.left >= 0 && 
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && 
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }
}
