//// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import "zone.js/dist/zone";
import "reflect-metadata";
// main entry point
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.modules";
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.then(success => console.log(`Bootstrap success`))
	.catch(error => console.log(error));