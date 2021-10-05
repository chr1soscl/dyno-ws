import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path:'home',
          component:HomeComponent,
          pathMatch:'full'
        },
        {
          path: 'members',
          loadChildren: () =>
            import('members/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'memberSearch',
          loadChildren: () =>
            import('members/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'physicians',
          loadChildren: () =>
            import('physicians/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'orders',
          loadChildren: () =>
            import('orders/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'prescriptions',
          loadChildren: () =>
            import('prescriptions/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
