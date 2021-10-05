import { RemoteEntryModule } from './remote-entry/entry.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberHomeComponent } from './member-home/member-home.component';

@NgModule({
  declarations: [AppComponent, MemberSearchComponent, MemberHomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
