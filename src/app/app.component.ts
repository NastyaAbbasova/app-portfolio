import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';

  isMainPageVisible: boolean = true;
  isAboutUsPageVisible: boolean = false;
  isConstactPageVisible: boolean = false;

  showMainPage() {
    this.isMainPageVisible = true;
    this.isAboutUsPageVisible = false;
    this.isConstactPageVisible = false;
  }
  showAboutUsPage() {
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = true;
    this.isConstactPageVisible = false;
  }

  showContactPage() {
    this.isMainPageVisible = false;
    this.isAboutUsPageVisible = false;
    this.isConstactPageVisible = true;
  }
}
