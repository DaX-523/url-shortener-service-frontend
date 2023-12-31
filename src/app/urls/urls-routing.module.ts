import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlsComponent } from './urls.component';

const routes: Routes = [{ path: '', component: UrlsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlsRoutingModule { }
