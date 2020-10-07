import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSmeUploaderModule } from 'projects/ng-sme-uploader/src/lib/ng-sme-uploader.module';
// import { NgSmeUploaderModule } from 'ng-sme-uploader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSmeUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
