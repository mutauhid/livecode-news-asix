import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, ArticleComponent],
  imports: [BrowserModule, SharedModule, PagesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
