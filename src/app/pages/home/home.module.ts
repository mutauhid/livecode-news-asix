import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, BodyComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
