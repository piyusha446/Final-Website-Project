function validate()
		{
			var name = f1.txtName.value;
			if(name == "")
			{
				alert("Name is required.");
				f1.txtName.focus();
				return false;
			}
			var email = f1.txtEmail.value
			if(email == "")
			{
				alert("Valid Email is required.");
				f1.txtEmail.focus();
				return false;
			}
			atpos = email.indexOf("@");
			dotpos = email.lastIndexOf(".");
			if(atpos < 1 || (dotpos - atpos < 2))
			{
				alert("Invalid Email !!!");
				f1.txtEmail.focus();
				return false;
			}
			var phone = f1.txtPhone.value;
			if(phone == "" || isNaN(phone) || phone.length != 10)
			{
				alert("Valid Phone Number is required.");
				f1.txtPhone.focus();
				return false;
			}
			var message=f1.txtMessage.value;
			if(message == "")
			{
				alert("Message box cannot be left empty.");
				f1.txtMessage.focus();
				return false;
			}
			return true;
		}