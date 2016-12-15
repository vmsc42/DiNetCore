// /scripts/components/diapp.component.ts

import { Component, Inject, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "di-app",
	templateUrl: "data/templates/diapp.component.html"
})

// -------------------------------------------------------------------------------------------------
// DiAppComponent
// -------------------------------------------------------------------------------------------------
export class DiAppComponent implements OnInit {
	private router: Router;

	//----------------------------------------------------------------------------------------------
	constructor( @Inject(Router) router: Router) {
		this.router = router;
	}


	//----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {

	}


	//----------------------------------------------------------------------------------------------
	/**
	 * Cleanup just before Angular destroys the component. Unsubscribe observables and detach event handlers to avoid memory leaks.
	 * Called just before Angular destroys the directive/component.
	 */
	ngOnDestroy() {

	}
}