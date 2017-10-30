var _trackIdKey = "trackId";
var _trackIdKeyDefault = "trackIdDefault";
var _trackIdKeyCa = "trackId.ca";
var _trackIdKeyDefaultCa = "trackIdDefault.ca";
var _trackIdKeyUk = "trackId.co.uk";
var _trackIdKeyDefaultUk = "trackIdDefault.co.uk";
var _trackIdKeyDe = "trackId.de";
var _trackIdKeyDefaultDe = "trackIdDefault.de";
var _trackIdKeyEs = "trackId.es";
var _trackIdKeyDefaultEs = "trackIdDefault.es";
var _trackIdKeyFr = "trackId.fr";
var _trackIdKeyDefaultFr = "trackIdDefault.fr";
var _trackIdKeyIt = "trackId.it";
var _trackIdKeyDefaultIt = "trackIdDefault.it";
var _trackIdKeyJp = "trackId.co.jp";
var _trackIdKeyDefaultJp = "trackIdDefault.co.jp";
var _trackIdKeyCn = "trackId.cn";
var _trackIdKeyDefaultCn = "trackIdDefault.cn";
var _trackIdKeyIn = "trackId.in";
var _trackIdKeyDefaultIn = "trackIdDefault.in";
var _trackIdKeyFlipkart = "trackId.flipkart";
var _trackIdKeyDefaultFlipkart = "trackIdDefault.flipkart";

// Saves value to localStorage.
function save_options() {
    localStorage[_trackIdKey]   = document.getElementById(_trackIdKey).value;
    localStorage[_trackIdKeyCa] = document.getElementById(_trackIdKeyCa).value;
    localStorage[_trackIdKeyUk] = document.getElementById(_trackIdKeyUk).value;
    localStorage[_trackIdKeyDe] = document.getElementById(_trackIdKeyDe).value;
    localStorage[_trackIdKeyEs] = document.getElementById(_trackIdKeyEs).value;
    localStorage[_trackIdKeyFr] = document.getElementById(_trackIdKeyFr).value;
    localStorage[_trackIdKeyIt] = document.getElementById(_trackIdKeyIt).value;
    localStorage[_trackIdKeyJp] = document.getElementById(_trackIdKeyJp).value;
    localStorage[_trackIdKeyCn] = document.getElementById(_trackIdKeyCn).value;
    localStorage[_trackIdKeyIn] = document.getElementById(_trackIdKeyIn).value;
    localStorage[_trackIdKeyFlipkart] = document.getElementById(_trackIdKeyFlipkart).value;
	
    // Update status to let user know options were saved.
    document.querySelector('button').innerHTML = "Saved.";
    // Close tab/popup
    setTimeout(
        function() {        
            window.close();
        }, 750);
}

// Restores saved value from localStorage.
function restore_options() {
    var trackId         = localStorage[_trackIdKey];    
	var trackIdCa       = localStorage[_trackIdKeyCa];    
	var trackIdUk       = localStorage[_trackIdKeyUk];    
	var trackIdDe       = localStorage[_trackIdKeyDe];    
	var trackIdEs       = localStorage[_trackIdKeyEs];    
	var trackIdFr       = localStorage[_trackIdKeyFr];    
	var trackIdIt       = localStorage[_trackIdKeyIt];    
	var trackIdJp       = localStorage[_trackIdKeyJp];    
	var trackIdCn       = localStorage[_trackIdKeyCn];    
	var trackIdIn       = localStorage[_trackIdKeyIn];    
	var trackIdFlipkart = localStorage[_trackIdKeyFlipkart];    

    if (trackId         === undefined || trackId         == localStorage[_trackIdKeyDefault])         { trackId         = ''; }    
    if (trackIdCa       === undefined || trackIdCa       == localStorage[_trackIdKeyDefaultCa])       { trackIdCa       = ''; }    
    if (trackIdUk       === undefined || trackIdUk       == localStorage[_trackIdKeyDefaultUk])       { trackIdUk       = ''; }    
    if (trackIdDe       === undefined || trackIdDe       == localStorage[_trackIdKeyDefaultDe])       { trackIdDe       = ''; }    
    if (trackIdEs       === undefined || trackIdEs       == localStorage[_trackIdKeyDefaultEs])       { trackIdEs       = ''; }    
    if (trackIdFr       === undefined || trackIdFr       == localStorage[_trackIdKeyDefaultFr])       { trackIdFr       = ''; }    
    if (trackIdIt       === undefined || trackIdIt       == localStorage[_trackIdKeyDefaultIt])       { trackIdIt       = ''; }    
    if (trackIdJp       === undefined || trackIdJp       == localStorage[_trackIdKeyDefaultJp])       { trackIdJp       = ''; }    
    if (trackIdCn       === undefined || trackIdCn       == localStorage[_trackIdKeyDefaultCn])       { trackIdCn       = ''; }	
	if (trackIdIn       === undefined || trackIdIn       == localStorage[_trackIdKeyDefaultIn])       { trackIdIn       = ''; }	
	if (trackIdFlipkart === undefined || trackIdFlipkart == localStorage[_trackIdKeyDefaultFlipkart]) { trackIdFlipkart = ''; }	
	
    var inputbox = document.getElementById(_trackIdKey);
    inputbox.value = trackId;
	
	document.getElementById(_trackIdKeyCa      ).value = trackIdCa;
	document.getElementById(_trackIdKeyUk      ).value = trackIdUk;
	document.getElementById(_trackIdKeyDe      ).value = trackIdDe;
	document.getElementById(_trackIdKeyEs      ).value = trackIdEs;
	document.getElementById(_trackIdKeyFr      ).value = trackIdFr;
	document.getElementById(_trackIdKeyIt      ).value = trackIdIt;
	document.getElementById(_trackIdKeyJp      ).value = trackIdJp;
	document.getElementById(_trackIdKeyCn      ).value = trackIdCn;
	document.getElementById(_trackIdKeyIn      ).value = trackIdIn;
	document.getElementById(_trackIdKeyFlipkart).value = trackIdFlipkart;
	
    inputbox.focus();
}

// pass Save button clicks to save_options with a small delay
function clickHandler(e) {
    setTimeout(save_options, 100);
}

// if the user pressed enter, imitate the user clicking the Save button.
function keydownHandler(e) {
    var keyCode = e.keyCode;
        
    // enter key code = 13
    if (keyCode == 13) {
        clickHandler();
    }
}

// Add listeners after the DOM has loaded
document.addEventListener('DOMContentLoaded',
    function() {      
        // listen for clicks on the Save button
        document.querySelector('button').addEventListener('click', clickHandler);
        // listen for keypresses
        document.addEventListener('keydown', keydownHandler);
        // Run restore options to load saved values.
        restore_options();
    }
);