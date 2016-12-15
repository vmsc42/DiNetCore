// /script/model/question.ts

// -------------------------------------------------------------------------------------------------
// QuestionData
// -------------------------------------------------------------------------------------------------
export class QuestionData {
	// index signature
	[propName: string]: any;
	// class property
	public question: string;

	//----------------------------------------------------------------------------------------------
	constructor(q: string = "") {
		this.question = q;
	}

}

// -------------------------------------------------------------------------------------------------
// AnswerData
// -------------------------------------------------------------------------------------------------
export class AnswerData extends QuestionData {
	// index signature
	[propName: string]: any;
	public answer: string;

	//----------------------------------------------------------------------------------------------
	constructor(q: string = "", a: string = "") {
		super(q);
		this.answer = a;
	}

	//----------------------------------------------------------------------------------------------
	static deserialize(jsonData: any): AnswerData {
		let instance  = new AnswerData();
		for (let prop in jsonData) {
			if (!jsonData.hasOwnProperty(prop) || typeof jsonData[prop] === "object") {
				continue;
			}
			instance[prop] = jsonData[prop];
		}
		return instance;
	}

}
