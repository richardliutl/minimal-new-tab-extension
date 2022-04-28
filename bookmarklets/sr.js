javascript:
	u = location.href;
if (u.match('www.google.com')) {
	query = u.match(/\?q\=(.*?)&/)[1]
	window.location = "https://www.google.com/search?q=site%3Areddit.com+" + query;
} else {
	alert('Not a Google URL.');
}
