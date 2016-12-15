// /script/services/communication.service.ts
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// -------------------------------------------------------------------------------------------------
// Communication service
// -------------------------------------------------------------------------------------------------
@Injectable()
export class CommunicationService {

	public p1Changed: BehaviorSubject<number> = new BehaviorSubject(null);

	//----------------------------------------------------------------------------------------------
	public get p1(): number {
		return this.p1Changed.getValue();
	}

	//----------------------------------------------------------------------------------------------
	public set p1(param: number) {
		// todo check new @param
		this.p1Changed.next(param);
	}
}

