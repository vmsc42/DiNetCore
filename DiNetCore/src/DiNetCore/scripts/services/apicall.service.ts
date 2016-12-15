// /script/services/apicall.service.ts

import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType, Request, RequestOptionsArgs } from "@angular/http";
import { ApplicationConfig } from ".././app.config";
import { QuestionData, AnswerData } from "../model/question";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

// -------------------------------------------------------------------------------------------------
// Communication service
// -------------------------------------------------------------------------------------------------
@Injectable()
export class ApiCallService {
	private headers: Headers;

	//----------------------------------------------------------------------------------------------
	constructor(private _http: Http, private _config: ApplicationConfig) {
		this.headers = new Headers();
		this.headers.append("Content-Type", "application/json");
		this.headers.append("Accept", "application/json");
	}

	//----------------------------------------------------------------------------------------------
	public request1(): Observable<number> {
		let serviceUrl = "api/Question";
		return this._http.get(serviceUrl)
			.map(this.parseResponse1)
			.catch(this.onError);
	}

	//----------------------------------------------------------------------------------------------
	public postQuestion(q: string): Observable<AnswerData> {
		let serviceUrl = "api/question";
		let body = JSON.stringify(new QuestionData(q));
		return this._http.post(serviceUrl, body, { headers: this.headers })
			.map(this.parseAnswer)
			.catch(this.onError);
	}

	//----------------------------------------------------------------------------------------------
	/**
	 * In a real world app, we might use a remote logging infrastructure
	 * We'd also dig deeper into the error to get a better message
	 * @param error
	 */
	private onError(error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}

	//----------------------------------------------------------------------------------------------
	private parseResponse1(r: Response): number {
		console.log(r);
		return 42;
	}

	//----------------------------------------------------------------------------------------------
	private parseAnswer(r: Response): AnswerData {
		return AnswerData.deserialize(r.json());
	}

}

