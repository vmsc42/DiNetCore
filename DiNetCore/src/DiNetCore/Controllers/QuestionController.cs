using DiNetCore.Model;
using Microsoft.AspNetCore.Mvc;

namespace DiNetCore.Controllers
{
	// -------------------------------------------------------------------------------------------------
	// QuestionController
	// -------------------------------------------------------------------------------------------------
	[Route("api/[controller]")]
	public class QuestionController : Controller
	{
		//----------------------------------------------------------------------------------------------
		// GET: api/Question
		[HttpGet]
		public short Get()
		{
			return 42;
		}

		//----------------------------------------------------------------------------------------------
		// GET api/Question/new_question
		[HttpGet("{Question}")]
		public IActionResult Get(string question)
		{
			return new JsonResult("42");
		}

		//----------------------------------------------------------------------------------------------
		// POST api/Question
		[HttpPost]
		public IActionResult Post([FromBody]QuestionData data)
		{
			return new JsonResult(new { question = data.Question, answer = 42 });
		}
	}
}
