function trackPackage() {
	var carrier = document.getElementById('carrier').value;
	var trackNum = document.getElementById('number').value;
	var ups = 'http://wwwapps.ups.com/WebTracking/track?loc=en_US&track.x=Track&trackNums=' + trackNum;
	var fedex = 'http://fedex.com/Tracking?action=track&language=english&cntry_code=us&tracknumbers=' + trackNum;
	var usps = 'https://tools.usps.com/go/TrackConfirmAction.action?tRef=fullpage&tLc=1&text28777=&tLabels=' + trackNum;
	if (carrier === 'UPS') {
		var win = window.open(ups, '_blank');
	} else if (carrier === 'USPS') {
		var win = window.open(usps, '_blank');
	} else {
		var win = window.open(fedex, '_blank');
	}
	win.focus();

}

document.getElementById('track').onclick = trackPackage;
