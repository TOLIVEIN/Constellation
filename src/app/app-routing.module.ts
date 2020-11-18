import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent, outlet: 'header' },
  // { path: '', component: SiderComponent, outlet: 'sidebar' },
  // { path: '', component: ContentComponent, outlet: 'content' },
  // { path: '', component: FooterComponent, outlet: 'footer' },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
