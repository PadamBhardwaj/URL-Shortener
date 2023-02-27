import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { NgTinyUrlModule } from 'ng-tiny-url';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgTinyUrlModule],
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
