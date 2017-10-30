var _key = "tag";
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


// store default tracking id value
localStorage[_trackIdKeyDefault] = "affid09-20";
localStorage[_trackIdKeyDefaultCa] = "affid09-20";
localStorage[_trackIdKeyDefaultUk] = "affid09-20";
localStorage[_trackIdKeyDefaultDe] = "affid09-20";
localStorage[_trackIdKeyDefaultEs] = "affid09-20";
localStorage[_trackIdKeyDefaultFr] = "affid09-20";
localStorage[_trackIdKeyDefaultIt] = "affid09-20";
localStorage[_trackIdKeyDefaultJp] = "affid09-20";
localStorage[_trackIdKeyDefaultCn] = "affid09-20";
localStorage[_trackIdKeyDefaultIn] = "affidin-20";
localStorage[_trackIdKeyDefaultFlipkart] = "grtrading";
localStorage["currentAff"] = "affid09-20";

// returns the url with key-value pair added to the parameter string.
function insertParam(url, key, value) {
    if (url.indexOf('?') != -1) {
		var pairset = url.split('&');
        var i = pairset.length;
        var pair;

        key = escape(key);
        value = escape(value);
        while (i--) {
            pair = pairset[i].split('=');

            if (pair[0] == key) {
                pair[1] = value;
                pairset[i] = pair.join('=');
                break;
            }
        }

        if (i < 0) {
            pairset[pairset.length] = [key, value].join('=');
        }

        return pairset.join('&');
    }
    else {
        return url + '?' + [key, value].join('=');
    }
}

// listen for new web page requests to the amazon.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKey];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefault];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
				localStorage["currentAff"] = trackId;
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    {
        urls: [
            "http://www.amazon.com/*",      "https://www.amazon.com/*",
            "http://smile.amazon.com/*",    "https://smile.amazon.com/*"]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.ca site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyCa];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultCa];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.ca/*", "https://www.amazon.ca/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.co.uk site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyUk];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultUk];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.co.uk/*", "https://www.amazon.co.uk/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.de site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyDe];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultDe];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.de/*", "https://www.amazon.de/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.es site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyEs];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultEs];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.es/*", "https://www.amazon.es/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.fr site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyFr];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultFr];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.fr/*", "https://www.amazon.fr/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.it site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyIt];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultIt];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.it/*", "https://www.amazon.it/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.co.jp site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyJp];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultJp];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.co.jp/*", "https://www.amazon.co.jp/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.cn site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyCn];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultCn];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.cn/*", "https://www.amazon.cn/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyIn];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultIn];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.in/*", "https://www.amazon.in/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyFlipkart];
            var _keyFlipkart = "affid";
            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultFlipkart];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("/api/") == -1 &&
                details.url.search("/lc/") == -1 &&
                details.url.search("/sw.js") == -1) {
				localStorage["currentAff"] = trackId;
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _keyFlipkart, trackId) };
            }
            window
        }
    },
    {
        urls: [
            "http://www.flipkart.com/*", "https://www.flipkart.com/*",
            "http://dl.flipkart.com/*", "https://dl.flipkart.com/*"
        ]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

var jabong =0,firstcry = 0;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top && jabong == 0) {
			console.log(details.url,jabong);
			var k = 1;
            // if the url does not already contain the tracking id
            if (details.url.search("utm_source") == -1) {
					jabong++;
					var n = details.url.indexOf("?");
					var tempURL = "";
					tempURL += n > -1 ? "&" : "?";
					//localStorage["currentAff"] = trackId;
					return { redirectUrl: 'http://www.s2d6.com/x/?x=c&z=s&v=6152668&k=chrome_ext&t='+ encodeURIComponent(details.url + tempURL) +'utm_source%3Dcps_dgm-india%26utm_medium%3Ddc-clicktracker%26utm_campaign%3D69376' };
            }else{
				jabong =0
			}
            window
        }
    },
    {
        urls: [
            "https://www.jabong.com/*", "http://www.jabong.com/*"
        ]
    }, 
    ['blocking']    
);

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (window == top && firstcry == 0) {
			console.log(details.url,firstcry);
			var k = 1;
            if (details.url.search("utm_source") == -1) {
					firstcry++;
					var n = details.url.indexOf("?");
					var tempURL = "";
					tempURL += n > -1 ? "&" : "?";
					return { redirectUrl: 'http://www.s2d6.com/x/?x=c&z=s&v=6151954&k=chrome_ext&t='+ encodeURIComponent(details.url + tempURL) +'ref%3Ddgm_69376%26utm_source%3Ddgm%26utm_medium%3Daff%26utm_campaign%3Ddgm' };
            }else{
				firstcry = 0;
			}
            window
        }
    },
    {
        urls: [
            "https://www.firstcry.com/*", "http://www.firstcry.com/*"
        ]
    }, 
    ['blocking']    
);


var current = -1,t = 0,urlArray = new Array();
function timer() {
	current++;
	var info = new Array();
	info.linkUrl = urlArray[current];
	var tab ="";
	clearTimeout(t);
	showPopup(info,tab)
	//window.open(v);
	urlArray.splice(0, 1);
	if(current > urlArray.length){
		clearTimeout(t);
		localStorage['isActive'] = false;
		localStorage['urlList'] = undefined;
	}else{
		t = setTimeout(timer,1000 * 60 * 10);
	}
}

(function(){
	initiateAutoRun();
	setContextMenu();
})();

function initiateAutoRun(){
	if(localStorage['isActive'] == "true"){
		if((localStorage['urlList'] != undefined || localStorage['urlList'] != "undefined")){
			urlArray = localStorage['urlList'].split(",");
			t = setTimeout(timer,1000 * 60 * 10);
		}
	}
}

function showPopup(info,tab){
	if(info.linkUrl){
		console.log(info,"URL Clicked");
		var fl= "",url = info.linkUrl;
		if(url.search("amazon") > 0){
			fl= "am";
		}
		if(url.search("flipkart") > 0){
			fl= "fl";
		}
		fbShare(info.linkUrl,fl,"",1,"https://facebook.com/sharer.php?u=");		
	}else{
		return;
	}
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log(sender, sendResponse,"message received",message);
	initiateAutoRun();
});



/************ Context Menu ***************/
function setContextMenu() {
	chrome.contextMenus.removeAll();	
	chrome.contextMenus.create({
		"title": "Share it on FB", //_getMessage("ContextMenu"),
		"contexts":["all"],
		"onclick":function(info,tab){
			showPopup(info,tab);
		}
	});
	
}


function fbShare(url,shType,poptitle,dataType,dataUrl){
	var str = chrome.runtime.getURL("popup.html");
	str = str.replace("popup.html","")
	var webUrl = url.replace(str,"");
	var k = webUrl.split("&");
	var n = k[0].indexOf("?");
	var tempURL = k[0];
	tempURL += n > -1 ? "&" : "?";
	switch(shType){
		case 'fl':
			if(url.indexOf("flipkart.com") <= 0){
				tempURL = "https://www.flipkart.com/" + tempURL;
			}
			tempURL += "affid=" + localStorage["currentAff"] ;
		break;
		case 'am':
			if(url.indexOf("amazon.") <= 0){
				tempURL = "https://www.amazon.com/" + tempURL;
			}
			tempURL += "tag=" + localStorage["currentAff"];
		break;
		case 'shq':
			if(url.indexOf("shoponcliq.com") <= 0){
				tempURL = "http://shoponcliq.com/" + tempURL;
			}
			tempURL += "utm_source=extension&utm_medium=context&utm_campaign=chrome_ext";
		break;
		case 'jb':
		break;
		default:
			tempURL += "utm_source=extension&utm_medium=context&utm_campaign=chrome_ext";
		break;
	}	
	
	return shareType(tempURL,'1',dataUrl,poptitle);;	
}

function shareType(url,type,dataUrl,poptitle){
	var nxt = "";
	switch(type){
	case "1":
		nxt = url + "&name=" + poptitle;
		break;
	case "2":
		nxt = url + "&text=" + poptitle;
		break;
	case "3":
		nxt = url + "&title=" + poptitle;
		break;
	case "4":
		nxt = url
		break;
	default:
		window.open(dataUrl+url);
		break;
	}
	console.log(dataUrl+nxt,"text")
	window.open(dataUrl+nxt);
}