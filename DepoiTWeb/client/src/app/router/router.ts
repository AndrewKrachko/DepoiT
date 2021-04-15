import { RouterModule } from "@angular/router";
import DashboardPage from "../Pages/dashboardPage.component";
import { LoginPage } from "../Pages/loginPage.component";
import { AuthActivator } from "../services/authActivator";

const routes = [
    { path: "", component: DashboardPage , canActivate: [AuthActivator]},
    { path: "login", component: LoginPage },
    { path: "**", redirectTo: "/"},
];

const router = RouterModule.forRoot(routes, { useHash: true });

export default router;