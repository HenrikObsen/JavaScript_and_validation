using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;
using JavaScript_and_validation.Models;

namespace JavaScript_and_validation.Controllers
{
    public class ServiceController : Controller
    {
        // GET: Service
        public ActionResult Index()
        {
            return View();
        }

  
        public string GetData()
        {
            //Get som data from a database
            return DateTime.Now.ToString();

        }

   
        [HttpPost]
        public string AddKunde(Kunde kundeData)
        {
            return kundeData.Name;
        }

       
    }
}

// [ScriptMethod(UseHttpGet = true)]
//http://codehandbook.org/javascript-json-encode-decode-with-asp-net-sample-code/