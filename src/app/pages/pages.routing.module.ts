import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  { path: 'tentang-kami', component: AboutComponent },
  { path: 'artikel', component: ArticleComponent },
];
//path itu urlnya, component itu commponent yang akan di load
// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
