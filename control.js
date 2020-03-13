
	window.onload=function(){

	var wrapperDiv = document.getElementById("wrapper");
	var sidebarDiv = document.getElementById("sidebar");
	var containerDiv = document.getElementById("container");
	var wrapperHeight=wrapperDiv.offsetHeight;
	var sidebarHeight =sidebarDiv.offsetHeight;
	var bodyHeight=window.screen.availHeight;
	if (wrapperHeight>sidebarHeight){
		if (wrapperHeight<(bodyHeight-10)){
			wrapperDiv.style.height=bodyHeight-10+"px";
			sidebarDiv.style.height =bodyHeight-10+"px";
			containerDiv.style.height=bodyHeight-10+"px";
		}
		else{
			sidebarDiv.style.height =wrapperHeight+"px";
			containerDiv.style.height=wrapperHeight+"px";
		}
	}
	else{
		if (sidebarHeight<(bodyHeight-10)){
			sidebarDiv.style.height =bodyHeight-10+"px";
			wrapperDiv.style.height=bodyHeight-10+"px";
			containerDiv.style.height=bodyHeight-10+"px";
		}
		else{
			wrapperDiv.style.height =sidebarHeight+"px";
			containerDiv.style.height=sidebarHeight +"px";
		}
	}

      }
