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
import { DepotListView } from './views/depotListView';
import { StorageListView } from './views/storageListView';

@NgModule({
    declarations: [
        AppComponent,
        DashboardPage,
        LoginPage,
        DepotListView,
        StorageListView,
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