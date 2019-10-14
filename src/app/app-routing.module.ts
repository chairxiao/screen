import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadarComponent } from './routes/radar/radar.component';
import { ForecastComponent } from './routes/forecast/forecast.component';
import { RealComponent } from './routes/real/real.component';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LayoutTemplateComponent } from './layout/layout-template/layout-template.component';
// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
// ];
const routes: Routes = [
  {
  path: '',
  component: LayoutTemplateComponent,
  children:[
  {path: '',redirectTo: 'real',pathMatch: 'full'},
  {path: 'forecast',component: ForecastComponent,data:{title: '预报天气'}},
  {path: 'radar',component: RadarComponent,data:{title: '雷达图'}},
  {path: 'real',component: RealComponent,data:{title: '实况天气'}}
]
}];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
