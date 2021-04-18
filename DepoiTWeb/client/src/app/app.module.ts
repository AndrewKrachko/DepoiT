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
import { UserPannelView } from './views/userPannelView';
import { FooterView } from './views/footerView';
import { HeaderView } from './views/headerView';
import { ItemListView } from './views/itemListView';

@NgModule({
    declarations: [
        AppComponent,
        HeaderView,
        FooterView,
        DashboardPage,
        LoginPage,
        DepotListView,
        StorageListView,
        ItemListView,
        UserPannelView,
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