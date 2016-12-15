// /scripts/components/defaultview.component.ts

import { Component, Inject, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { ApiCallService } from ".././services/apicall.service";
import { QuestionData, AnswerData } from "../model/question";

@Component({
	selector: "defaultview",
	templateUrl: "data/templates/defaultview.component.html"
})

// -------------------------------------------------------------------------------------------------
// DefaultviewComponent
// -------------------------------------------------------------------------------------------------
export class DefaultviewComponent implements OnInit {
	private _urlChangesSubs: any;
	private _questionText: string = "";
	private _captionText: string = "";

	//----------------------------------------------------------------------------------------------
	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _api: ApiCallService) { }

	//----------------------------------------------------------------------------------------------
	/**
	 * Initialize the directive/component after Angular first displays the data-bound properties and sets input properties.
	 * Called once, after the first ngOnChanges.
	 */
	ngOnInit() {
		this._urlChangesSubs = this._activatedRoute.url.subscribe(
			(segments: UrlSegment[]) => this.onUrlChanged(segments),
			(error: ErrorEvent) => this.onError("on url changed", error as ErrorEvent));
	}

	//----------------------------------------------------------------------------------------------
	/**
	 * Cleanup just before Angular destroys the component. Unsubscribe observables and detach event handlers to avoid memory leaks.
	 * Called just before Angular destroys the directive/component.
	 */
	ngOnDestroy() {
		this._urlChangesSubs.unsubscribe();
	}

	//----------------------------------------------------------------------------------------------
	private onUrlChanged(segments: UrlSegment[]) {
		// todo parse url segments
		this._captionText = "default";
		for (let i: number = 1; i < segments.length; i++) {
			this._captionText += `>${segments[i].path}`;
		}
	}

	//----------------------------------------------------------------------------------------------
	private getAnswer() {
		this._api.request1().subscribe(
			(answer: number) => console.log("answer is:", answer),
			(error: ErrorEvent) => this.onError("getAnswer", error as ErrorEvent));
	}

	//----------------------------------------------------------------------------------------------
	private postQuestion() {
		let q: string = this._questionText !== "" ?
			this._questionText :
			"The Answer to the Ultimate Question of Life, The Universe, and Everything";
		this._api.postQuestion(q).subscribe(
			(data: AnswerData) => alert(`${data.question} is: ${data.answer}`),
			(error: ErrorEvent) => this.onError("postQuestion", error as ErrorEvent));
	}

	//----------------------------------------------------------------------------------------------
	/**
	 * In a real world app, we might use a remote logging infrastructure
	 * We'd also dig deeper into the error to get a better message
	 * @param error
	 */
	private onError(place: string, error: ErrorEvent) {
		console.error(`${place} throws error
		 ${error.message}`);
	}
}