import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultviewComponent } from "./components/defaultview.component";
import { AboutComponent } from "./components/about.component";

import { NotFoundComponent } from "./components/notfound.component";

const appRoutes: Routes = [

	{ path: "default", redirectTo: "default/", pathMatch: "full" },
	{ path: "default/:path", component: DefaultviewComponent },
	{ path: "default/:level1/:level2", component: DefaultviewComponent },
	{ path: "default/:level1/:level2/:level3", component: DefaultviewComponent },


	{ path: "", redirectTo: "default/", pathMatch: "full" },

	{ path: "about", component: AboutComponent },
	{ path: "not-found", component: NotFoundComponent },
	{ path: "**", redirectTo: "not-found", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });






