import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home.routing.module';
import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './pages.routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, HomeModule, HomeRoutingModule, PageRoutingModule],
  exports: [PagesComponent],
})
export class PagesModule {}
