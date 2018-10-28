import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: 'app/modules/landing/landing.module#LandingModule' },
    { path: 'chatUP', loadChildren: 'app/modules/network/network.module#NetworkModule', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
