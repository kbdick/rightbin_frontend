import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Inject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Rollbar from 'rollbar';

import { CollectorModule } from './collector/collector.module';
import { ReportsModule } from './reports/reports.module';
import { UiModule } from './ui/ui.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebUsbComponent } from './web-usb/web-usb.component';
import { FocusInvalidInputDirective } from './directives/focus-invalid-input.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { HomeComponent } from './home/home.component';

// Rollbar setup for frontend error reporting
const rollbarConfig = {
  accessToken: '956d27308fc746878fdba47ac5adcc99',
  captureUncaught: true,
  captureUnhandledRejections: true,
};
@Injectable()
class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err:any) : void {
    this.rollbar.error(err.originalError || err);
  }
}
function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}
const RollbarService = new InjectionToken<Rollbar>('rollbar');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WebUsbComponent,
    FocusInvalidInputDirective,
    AutofocusDirective,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CollectorModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    UserModule,
    ReportsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CollectorModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    UserModule,
    ReportsModule,
    ReactiveFormsModule
    ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
