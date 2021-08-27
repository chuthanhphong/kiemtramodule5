import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './player/list/list.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
