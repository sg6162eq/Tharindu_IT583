// Dyllan Sowers for IT 483 fall 2019

$(document).ready(function()
{
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#reservation_form").submit(
		function(event)
		{
			var arrivalDate = $("#arrival_date");
			var nights = $("#nights");
			var name = $("#name");
			var phone = $("#phone");
			var email = $("#email");
			var fields = [arrivalDate, nights, name, phone, email];
			var isValid = true;

			for(i = 0; i < fields.length; i++)
			{
				// Validate all fields are not empty
				if(fields[i].val().trim() === "")
				{
					isValid = false;
					fields[i].next().text("This field is required.");
				}
				else
				{
					fields[i].next().text("");
				}

				// Validate nights is a number
				if(isNaN(nights.val().trim()) || nights.val() === "")
				{
					isValid = false;
					nights.next().text("Must be a number.")
				}
				else
				{
					nights.next().text("");
				}

				//Validate email matches the required pattern
				if(!emailPattern.test(email.val().trim()))
				{
					isValid = false;
					email.next().text("Must be a valid email address");
				}
				else
				{
					email.next().text("");
				}
				fields[i].val(fields[i].val().trim());
			}

			if(isValid === false)
			{
				event.preventDefault();
			}

		} //end function
	); // end submit
	$("arrival_date").focus();
}); // end ready