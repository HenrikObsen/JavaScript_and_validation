var imported = document.createElement('script');
imported.src = '../Content/js/ValidatorTypes.js';
document.head.appendChild(imported);



var validate = function (form) {

    var validated = true;

    // Validate inputs in form.
    for (var i = 0; i < validationList.length; i++) {
        var input = validationList[i];
        if (input.name != null) {
           var value = document.forms[form.name][input.name].value; 
        }
        
        var error = document.getElementById(input.errorElementID);

        var thisValidation = true;
        var requiredFailed = false;

        // Check if there is an errorMessage from previous post attempt. If there is, remove it.
        if (error.innerText != null) {
            error.innerText = "";
        }

        // Check if the field is isRequired.
        if (input.isRequired || input.type == "compare") {
            // Check if there is a value in the input.
            if ((value == null || value === "") && input.type != "compare") {
                error.innerText = "This field is required.";
                requiredFailed = true;
                validated = false;
            }

            if (!requiredFailed) {
                // Check for emails.
                //var list = [{ key: "email", method: "validateEmail" }, { key: "url", method: "validateUrl" }, { key: "number", method: "validateNumbers" }];

                //for (var j = 0; j < list.length; j++) {
                //    if (input.type === list[j].key) {
                //        if (!list[j].method(value)) {
                //            thisValidation = false;
                //        }
                //    }
                //}


                if (input.type === "email") {
                    if (!validateEmail(value)) {
                        thisValidation = false;
                    }
                }

                // Check for URLs.
                if (input.type === "url") {
                    if (!validateUrl(value)) {
                        thisValidation = false;
                    }
                }

                // Check for numbers.
                if (input.type === "number") {
                    if (!validateNumbers(value)) {
                        thisValidation = false;
                    }
                }
                // Compare values.
                if (input.type === "compare") {
                    var compValue1 = document.forms[form.name][input.compareName1].value;
                    var compValue2 = document.forms[form.name][input.compareName2].value;
                    if (!compareValues(compValue1, compValue2)) {
                        thisValidation = false;
                    }
                }

            

                // Check for custom regex.
                if (input.regex) {
                    if (!input.regex.test(value)) {
                        thisValidation = false;
                    }
                }
            }

            // If this validation failed, set the text on the failed element and set validation to false.
            if (!thisValidation) {
                error.innerText = input.errorMessage;
                validated = false;
            }
        }
    }

    return validated;
};

