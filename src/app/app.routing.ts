import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(RUTAS)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
