import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceiptGenaratorComponent } from './receipt-genarator/receipt-genarator.component';
import { ReceiptsComponent } from './receipts/receipts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'receipt', component: ReceiptsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to Home component


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
