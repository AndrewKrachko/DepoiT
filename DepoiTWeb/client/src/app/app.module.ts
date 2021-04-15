import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './Pages/loginPage.component';

import DashboardPage from './Pages/dashboardPage.component';
import Dashboard from './services/dashboard.service';

import { AuthActivator } from './services/authActivator';
import { FormsModule } from '@angular/forms';
import router from './router/router';

@NgModule({
    declarations: [
        AppComponent,
        DashboardPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        router
    ],
    providers: [
        Dashboard,
        AuthActivator,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }