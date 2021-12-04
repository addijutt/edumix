import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PaymentComponent } from './payment/payment.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {  path: '', component: LayoutComponent, children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'detail', component: TeacherDetailComponent },
    { path: 'payment', component: PaymentComponent },
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
