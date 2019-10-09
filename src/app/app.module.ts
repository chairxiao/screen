import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RadarComponent } from './routes/radar/radar.component';
import { ForecastComponent } from './routes/forecast/forecast.component';
import { RealComponent } from './routes/real/real.component';
import { LayoutTemplateComponent } from './layout/layout-template/layout-template.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    ForecastComponent,
    RealComponent,
    LayoutTemplateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
