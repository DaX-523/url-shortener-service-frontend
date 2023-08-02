import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlsRoutingModule } from './urls-routing.module';
import { UrlsComponent } from './urls.component';


@NgModule({
  declarations: [
    UrlsComponent
  ],
  imports: [
    CommonModule,
    UrlsRoutingModule
  ]
})
export class UrlsModule { }
