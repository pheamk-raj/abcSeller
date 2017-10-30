document.addEventListener('DOMContentLoaded', function() {	
  getCurrentTabUrl(function(url) {
	//loadCalled(url);
  });
});

function getCurrentTabUrl(callback) {
	var queryInfo = {
		active: true,
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function(tabs){
    var tab = tabs[0];
    var url = tab.url;
	});
	alert("url:--- "+url);
	callback(url);
}