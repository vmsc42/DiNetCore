// /scripts/app.config.ts

import { Injectable } from "@angular/core";

// -------------------------------------------------------------------------------------------------
// ApplicationConfig
// -------------------------------------------------------------------------------------------------
@Injectable()
export class ApplicationConfig {

	/**
	 * REST api base url.
	 * @type {string}
	 * @static
	 */
	static serviceEndpoint: string;
	static serviceEndpointDefault: string = "https://ecgapi.sapiensapi.com/demo/";
	//----------------------------------------------------------------------------------------------
}