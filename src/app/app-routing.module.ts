import { NgModule, SimpleChange } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleProblemComponent } from './components/simple-problem.component';

const routes: Routes = [
  { path: '', component: SimpleProblemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
