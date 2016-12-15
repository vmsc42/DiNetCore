// /scripts/app.modules.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

// #### Application
import { DiAppComponent } from "./components/diapp.component";
import { DefaultviewComponent } from "./components/defaultview.component";
import { AboutComponent } from "./components/about.component";
import { NotFoundComponent } from "./components/notfound.component";
import { routing } from "./routes";
// #### Services
import { ApplicationConfig } from "./app.config";
import { CommunicationService } from "./services/communication.service";
import { ApiCallService } from "./services/apicall.service";

@NgModule({
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		DiAppComponent,
		DefaultviewComponent,
		AboutComponent,
		NotFoundComponent
	],
	providers: [
		ApplicationConfig,
		CommunicationService,
		ApiCallService
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [DiAppComponent]
})

export class AppModule { }