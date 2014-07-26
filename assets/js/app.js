$(document).ready(function(){
	var $dbb = $(".dbb"),
	$clsBtn = $(".icon-close"),
	$follow = $(".follow"),
	$nls = $(".nls"),
	$dbs = $(".dbs"),
	$mForm = $(".mForm"),
	$nForm = $(".nForm"),
	$countdown = $(".countdown");

	$dbb.on('click', function(){
		$dbs.slideDown(1000, 'easeOutBack');
	});
	$clsBtn.on('click', function(){
		$(this).parent().slideUp(1000, 'easeInOutBack');
	});
	$follow.on('click', function(e){
		$nls.slideDown(1000, 'easeOutBack');

		e.preventDefault();
	});

	targetDate = new Date(2014, 06, 30);
	setInterval(function(){
		$countdown.html(countdown(targetDate).days*24 + countdown(targetDate).hours + " hours " + countdown(targetDate).minutes + " minutes " );
	}, 1000);
	console.log(countdown(targetDate));

	function validateMessage() {
		var $mName = $(".mn"),
			$mEmail = $(".me"),
			$mMessage = $(".mm"),
			errorCount = 0,
			errorMessage = "",
			emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

			if($mName.val().length < 3) {
				errorCount++;
				errorMessage += "Name doesn't look correct. ";
			}

			if(!emailPattern.test($mEmail.val())) {
				errorCount++;
				errorMessage += "Email address doesn't look correct. ";
			}

			if($mMessage.val().length < 3) {
				errorCount++;
				errorMessage += "You've not entered any message. ";
			}

			return {
				count: errorCount,
				message: errorMessage
			}
	}

	function validateNewsletter() {
		var $nName = $(".nn"),
			$nEmail = $(".ne"),
			errorCount = 0,
			errorMessage = "",
			emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

			if($nName.val().length < 3) {
				errorCount++;
				errorMessage += "Name doesn't look correct. ";
			}

			if(!emailPattern.test($nEmail.val())) {
				errorCount++;
				errorMessage += "Email address doesn't look correct. ";
			}

			return {
				count: errorCount,
				message: errorMessage
			};
	}

	$mForm.on('submit', function(e){
		if (validateMessage().count != 0) {
			$dbs.find('.error').html("Oh oh! You have some errors. " + validateMessage().message);
		}

		e.preventDefault();
	});


	$nForm.on('submit', function(e){
		if (validateNewsletter().count != 0) {
			$nls.find('.error').html("Oh oh! You have some errors. " + validateNewsletter().message);
		}

		e.preventDefault();
	});

});