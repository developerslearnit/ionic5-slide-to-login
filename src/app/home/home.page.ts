import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GestureController, IonFab } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild(IonFab, { read: ElementRef }) slideButton: ElementRef;
  @ViewChild('slideBox', { read: ElementRef }) slideBox: ElementRef;
  constructor(private getstureCtrl: GestureController,private router: Router,
    private zone: NgZone) { }
  loginWrapWidth: number = 0;


  ngAfterViewInit(): void {
   this.createSlideGesture();
  }

  createSlideGesture() {
    const gesture = this.getstureCtrl.create({
      el: this.slideButton.nativeElement,
      gestureName: 'swipe to login',
      onStart: ev => {
        this.loginWrapWidth = -(this.slideBox.nativeElement.offsetWidth - (43 + 30));       
        
      },
      onMove: ev => {

        if (ev.deltaX > 0 || ev.deltaX == 0) {
          return false;
        }
        if (ev.deltaX < this.loginWrapWidth) {
          this.zone.run(() => {
            this.router.navigate(['/secret']);
        });
          
        }else{
          this.slideButton.nativeElement.style.transform = `translateX(${ev.deltaX}px)`;
        }

      },
      onEnd: ev => {

      }
    });

    gesture.enable(true);
  }

}
