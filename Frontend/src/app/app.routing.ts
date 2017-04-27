import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
// import { ReportItemComponent } from './report-item.component';

const appRoutes: Routes = [
  // { path: 'employees/add', component: EmployeeFormComponent },
  // { path: 'report', component: ReportItemComponent },
  { path: 'employee/:id', component: FormComponent},
  { path: 'employee', pathMatch: 'full', redirectTo: 'employee/' },
  { path: '', pathMatch: 'full', redirectTo: 'employee/' }
];

export const Routing = RouterModule.forRoot(appRoutes);