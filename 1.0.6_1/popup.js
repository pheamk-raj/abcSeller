var url = 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCfMlWgQOMF5GRmbR5xlr_nmFhIdWZJls0';
var key = 'AIzaSyCfMlWgQOMF5GRmbR5xlr_nmFhIdWZJls0';

function openURL(_targetURL){	
	chrome.tabs.create(
		{
			'url': _targetURL,
			'selected': true
		},
		function (tab) {
			// tab opened, further processing takes place in content.js                
		}
	);    
}


function getCurrentTabUrl(callback) {
	var queryInfo = {
		active: true,
		currentWindow: true
	};
	
	var xhr = new XMLHttpRequest();
	xhr.open('get', 'http://delightedshopping.com/wp-content/uploads/extension/getip.php', true);
	xhr.setRequestHeader("Access-Control-Allow-Origin","*");
	xhr.setRequestHeader("Access-Control-Allow-Method",'GET');
	xhr.setRequestHeader("Content-Type","text/html");
	xhr.send(null);
	xhr.onreadystatechange = function() 
	{ 
	console.log(xhr,"___",XMLHttpRequest)
		if (xhr.readyState == XMLHttpRequest.DONE) {
			console.log(xhr.responseText);
		}
	}
	
  
  chrome.tabs.query(queryInfo, function(tabs){
    var tab = tabs[0];
    var url = tab.url;
	var j = 0;
	
	/*******************************/
	if(url.search("amazon") < 0){
		if(url.search("flipkart") < 0){
			if(url.search("shoponcliq") < 0){
				openURL("http://www.amazon.in/gp/goldbox");
				return ;
			}else{
				j=3;
			}
		}else{
			j=2;
		}
	}else{
		j=1;
	}
	
	
	/************************/
	var n = url.indexOf("?");
	var tempURL = url;
	tempURL += n > -1 ? "&affid=grtrading" : "?affid=grtrading";
	tab.url = tempURL;
	/************************/
	
	
    console.assert(typeof url == 'string', 'tab.url should be a string');
	var k = tab.id;
	//console.log(url[1],'__url',k);
	switch(j){
		case 1:
			createHTML(tab,"s-result-list=s-access-detail-page,a-carousel-viewport=s-access-detail-page,widgetContent=dealTitleTwoLine","am","");
		break;
		case 2:
			createHTML(tab,"_2SxMvQ=_2cLu-l,_3T_wwx=_1UoZlX+_3wU53n","fl","_3wU53n");
		break;
		case 3:
			createHTML(tab,"widget-tab-home=product-image,products-grid=product-image","shq","");
		break;
		
	}
    callback(url);
  });
}

function createHTML(tab,parentBodyClass,shType,childClass){
	chrome.tabs.executeScript(
		tab.id,
		{
			code: "document.querySelector('body').innerHTML;"
		}, 
		function (sourceCode)
		{
			myCode = sourceCode, lstType = 0;
			var list = "";
			var pageContent = myCode[0];
			//document.getElementById("__status").innerHTML = myCode;
			var contentWrapClass = parentBodyClass.split(",");
			
			for(var o=0; o < contentWrapClass.length; o++){
				var parentHTMLClass = contentWrapClass[o].split("=");
				list += createList(parentHTMLClass[1],shType,$(pageContent).find("."+parentHTMLClass[0]));
			}
			
			
			$("#sh_list").html(list);
			$("#sh_list").append("<div class='footer_button'><a href='javascript:void(0)' id='localstore'> Save to Auto Share on <img src='../images/fb.png' alt='share on Facebook' /> </a></div>");
			$("._fbshare").bind("click",linkClicked);	
			$("._shareall").bind("click",shareOnAll);
			$("#sh_list").on("click","#localstore",storeURLs);
			$("#search_input").bind("keyup",filterList);		
			if($("#sh_list").find(".row_list").length > 0){		
				$("#sh_list").find(".footer_button").show();
			}else{
				$("#sh_list").find(".footer_button").hide();
				$("#sh_list").html("<h2 class='nolinks'>No links available to share.</h2>");
			}
		});
}


function filterList(){
	var search = $("#search_input").val();
	console.log(search,'value')
	$("#sh_list").find("._product_name").parent().css("display", "none");
	$("#sh_list").find("._product_name").filter("._product_name:contains('"+search+"')").parent().css("display", "block")
}

document.addEventListener('DOMContentLoaded', function() {	
  getCurrentTabUrl(function(url) {
	//loadCalled(url);
  });
});


function createList(classList,shType,object){
	var list = "";
	var nodeList = classList.split("+");
	var pList = new Array(), node="";
	for(var _i = 0; _i < object.length; _i++){
		if(nodeList.length > 1){
			node = $(object[_i]).find("."+nodeList[0]);
			lstType=1;
		}else{
			node = $(object[_i]).find("."+nodeList[0]);
		}
		
		if(node.length){
			pList = node;
		}	
		list = createLinks(pList,lstType,nodeList[nodeList.length-1],shType);
	}
	return list;
}

function createLinks(list,lstType,childClass,shType){
	
	var vArray = new Array();
	for(var j = 0; j < list.length; j++){
		var v = "",hrft = "",imgsrc="";
		if(lstType == 1){
			hrft = $(list[j]).find("."+childClass).text();
		}else{
			hrft = list[j].title == "" ? $(list[j]).text() : list[j].title;
		}
		v =  "<div class='row_list'><input class='_checkbox' type='checkbox' value='"+ list[j].href +"' data='" + shType + "' />";
		v += "<div class='_product_name'>" + hrft.toLowerCase() + "</div>";
		v += "<span class='share_platform'>Share it on:</span>";
		v += "<a title='share on Facebook' class='_fbshare' data='" + shType + "' data-type='1' data-url='https://facebook.com/sharer.php?u=' href='javascript:void(0)' data-href='" + list[j].href + "'>" + "<img src='../images/fb.png' alt='share on Facebook' />" + "</a>";
		v += "<a title='share on Twitter' class='_fbshare' data='" + shType + "' data-type='2' data-url='http://twitter.com/intent/tweet?url=' href='javascript:void(0)' data-href='" + list[j].href + "'>" + "<img src='../images/tw.png' alt='share on Twitter' />" + "</a>";
		v += "<a title='share on Linkedin' class='_fbshare' data='" + shType + "' data-type='3' data-url='http://www.linkedin.com/shareArticle?mini=true&url=' href='javascript:void(0)' data-href='" + list[j].href + "'>" + "<img src='../images/lnk.png' alt='share on Linkedin' />" + "</a>";
		v += "<a title='share on G+' class='_fbshare' data='" + shType + "' data-type='4' data-url='https://plus.google.com/share?url=' href='javascript:void(0)' data-href='" + list[j].href + "'>" + "<img src='../images/gplus.png' alt='share on G+' />" + "</a>";
		//v += "<a title='share on all platform' class='_shareall' data-type='5' href='javascript:void(0)'>" + "All" + "</a>";
		v += "</div>";
		vArray.push(v);
	}
	return vArray.join("");
}

function storeURLs(){
	var dataURL = new Array();
	if(localStorage['urlList'] != undefined && localStorage['urlList'] != "undefined" && localStorage['urlList'] != null ){
		dataURL = localStorage['urlList'].split(",");
	}
	var dataNode = $("#sh_list").find("input:checkbox:checked"),shType = $("#sh_list").find("input:checkbox:checked").eq(0).attr("data");
	for(var i=0; i< dataNode.length; i++){
		var _xUrl = fbShare(dataNode[i].value,shType,"","","",true);
		console.log(dataNode[i].value,shType,"value");
		dataURL.push(_xUrl);
	}
	console.log(dataURL,dataURL.join(","))
	localStorage['urlList'] = dataURL.join(",");
	localStorage['isActive'] = true;
	$(".footer_button").prepend("<div class='success-msg'>URL Saved! Will prompt you in next 10 Min to share URL.</div>");
	chrome.runtime.sendMessage("test");
	
}

function linkClicked(){
	var url = $(this).attr("data-href");
	var shType = $(this).attr("data");
	var dataType = $(this).attr("data-type");
	var dataUrl = $(this).attr("data-url");
	var poptitle = encodeURIComponent($(this).parent().find('._product_name').text());
	fbShare(url,shType,poptitle,dataType,dataUrl);
}

function shareOnAll(){
var  k =0;
	var len = $(this).parent().find("._fbshare");
	if(k < len.length -1){
		//t = setTimeout(function(){
			clickEvent(len[k]);
		//},1000);
		k++;
	}else{
		//clearTimeout(t);
	}
}
function clickEvent(targetObj){
	//$(targetObj).trigger("click");
	console.log("__1")
}

function fbShare(url,shType,poptitle,dataType,dataUrl,_isAva){
	console.log(url,shType,poptitle,"url,shType,poptitle")
	var str = chrome.runtime.getURL("popup.html")
	str = str.replace("popup.html","")
	var webUrl = url.replace(str,"");
	var k = webUrl.split("&");
	var n = k[0].indexOf("?");
	var tempURL = k[0];
	tempURL += n > -1 ? "&" : "?";
	switch(shType){
		case 'fl':
			tempURL = "https://www.flipkart.com/" + tempURL;
			tempURL += "affid=" + localStorage["currentAff"] ;//"affid=grtrading&affExtParam1=chrome_extn";
		break;
		case 'am':
			if(url.indexOf("amazon.") <= 0){
				tempURL = "https://www.amazon.com/" + tempURL;
			}
			tempURL += "tag=" + localStorage["currentAff"]; //"tag=chrome_exten-21";
		break;
		case 'shq':
			if(url.indexOf("shoponcliq.com") <= 0){
				tempURL = "http://shoponcliq.com/" + tempURL;
			}
			tempURL += "utm_source=extension&utm_medium=context&utm_campaign=chrome_ext";
		break;
		case 'jb':
		break;
	}
	var shURL = "";
	if(_isAva == true){
		return tempURL;
	}else{
		shortenUrl(tempURL, function(response){
			shURL = encodeURIComponent(response.message);			
			shareType(shURL,dataType,dataUrl,poptitle);
		});	
	}
}

function shareType(url,type,dataUrl,poptitle){
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
	window.open(dataUrl+nxt);
}


/*****************  Short URL *********************/

function shortenUrl(longUrl, callback){			
	var urlComplete = url;
	var	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', urlComplete, true);
	xmlhttp.setRequestHeader('Content-Type', 'application/json');	
			
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status != 0) 
		{
			var response = JSON.parse(xmlhttp.responseText);
			if(response.id == undefined)
			{
				callback({status: 'error', message: response.error.message});
			}
			else	
			{
				callback({status: 'success', message: response.id});
			}
		}
	}
	xmlhttp.send(JSON.stringify({'longUrl': longUrl}));			
}