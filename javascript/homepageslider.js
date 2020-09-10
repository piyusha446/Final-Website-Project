/*image slider*/
		var image1=new Image();
		image1.src="img/image1.jpg";
		var image2=new Image();
		image2.src="img/image2.jpg";
		var image3=new Image();
		image3.src="img/image3.jpg";
		var image4=new Image();
		image4.src="img/image4.jpg";
		var image5=new Image();
		image5.src="img/image5.jpg";
		var image6=new Image();
		image6.src="img/image6.jpg";

		var step=1
			function slideit()
			{
				if(!document.images)
				{
					return;
				}
				document.images.slide.src=eval("image"+step+".src");
				if(step<6)
				{
					step++;
				}
				else
				{
					step=1;
				}
				setTimeout("slideit()", 3000);
			}
			slideit()