import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceiptGenaratorComponent } from './receipt-genarator/receipt-genarator.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'receipt', component: ReceiptsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to Home component
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'user-profile', component: UserProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
