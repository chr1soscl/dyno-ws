import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MemberHomeComponent } from './member-home/member-home.component';

@NgModule({
  declarations: [AppComponent, MemberHomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component: MemberHomeComponent
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
