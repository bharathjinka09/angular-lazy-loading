import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{ path: '', component: PagesComponent }];

@NgModule({
  declarations: [PagesComponent],
  imports: [RouterModule.forChild(routes)],

  providers: [],
  bootstrap: [],
  exports: [RouterModule],
})
export class PagesModule {}
