var opened=false;

function toggleShow(id, size, appear='flex'){
	
	var played=($("#"+id).hasClass("selected"));
	$("#p_"+id).toggleClass("disappear");
	var element=document.getElementById(id);
	var infos_element= document.getElementById("infos_"+id);
	if(played){
		element.classList.remove("selected");
		var tlT= new TimelineMax({	paused:true	});
		$("#infos_"+id).css({minHeight:"", height: size+"vh"});
		tlT.to("#infos_"+id,0.3,{	height:"0vh" });
		tlT.to("#p_"+id,0,{	display:'none'});
		tlT.play();
	}else{
		element.classList.add("selected");
		var tlT= new TimelineMax({	paused:true	});
		$("#infos_"+id).css({height:"", minHeight:"0vh"});
		tlT.to("#infos_"+id,0.3,{	minHeight: size+'vh', ease: Back.easeOut.config(2) });
		tlT.to("#p_"+id,0,{	display: ''+appear });
		tlT.play();
	}
	return;

}

function open_img(url="none"){
	if(!opened)
		document.getElementById("huge_image_container").innerHTML="<div class='huge_images' onClick='open_img()'><img src="+url+"></div>";
	else
		document.getElementById("huge_image_container").innerHTML="";
	opened=!opened;
}

function open_more_info(n){
	$("#more_info_icon_"+n).toggleClass("rotated");
	$("#more_info_"+n).toggleClass("disappear");
}