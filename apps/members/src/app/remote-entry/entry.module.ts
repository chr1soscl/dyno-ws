import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MemberHomeComponent } from '../member-home/member-home.component';
import { MemberSearchComponent } from '../member-search/member-search.component';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: MemberHomeComponent,
      },
      {
        path:'memberSearch',
        pathMatch:'full',
        component: MemberSearchComponent
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
