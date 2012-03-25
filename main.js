// JavaScript Document
var myElement = document.getElementById("menuDiv");
var selected = null;
var subSelected = null;
var subSelectedItem = null;
var selectedContent = "Home";
var testing = document.getElementById("menuDiv").childNodes;
var selectedBio = null;
function menuHeadClick (me){
		if (selected != me) {
			$(selected).toggleClass("menuHeadSelected");
			$(me).toggleClass("menuHeadSelected");
		}
		selected = me;
		$(".subMenu").slideUp(800);
}
function submenuHeadClick (me) {
	if (selected !== me) {
			$(selected).toggleClass("menuHeadSelected");
			$(me).toggleClass("menuHeadSelected");
			$(subSelected).slideUp(800);
		}
		selected = me;
		subSelected ="#"+me.id+"Sub";
		$(subSelected).slideDown(800);	
}
function submenuItemClick (me) {
	if (subSelectedItem!= me) {
		$(subSelectedItem).toggleClass("subItemSelected");
		$(me).toggleClass("subItemSelected");		
	}
	subSelectedItem= me;		
}

function hideOthers(me) {
	if (selectedContent !== me.id) {
		$("."+selectedContent+"Content").hide(1000);
	}
	selectedContent = me.id;		
}

function bioClick(me) { // bind click event to all images
			if (selectedBio !== $(me)){	
			$(selectedBio).switchClass("polaroidSelected","polaroid",1000);
			$(selectedBio).children(":first").switchClass('polaroidImgSelected', 'polaroidImg',1000);
			$(selectedBio).next().hide(1000);
			selectedBio = null;
			$(".polaroid").show(0);
			if ($(me).attr("class") === "polaroid") {	
				$(".polaroid").hide(0);
				$(me).show(0);
				$(me).children(":first").switchClass('polaroidImg','polaroidImgSelected',1000);
				$(me).switchClass("polaroid","polaroidSelected",1000);
				$(me).next().show(1000);
				selectedBio = me;
				}
			}
		else {
			$(me).switchClass("polaroidSelected","polaroid",1000);
			$(me).children(":first").switchClass('polaroidImgSelected', 'polaroidImg',1000);
			$(me).next().hide(1000);
			selectedBio = null;
			$(".polaroid").show(0);
			selectedBio = me;
			}
	}



$(document).ready(function() {
	$(".subMenu").hide(0);
	$(".polaroid").click(function(){
		var temp = "#"+this.id;
		bioClick(temp)});
	$(".menuHead, .subMenuItem").hover(function() {		
		$(this).toggleClass("hoverOn");
	});
	
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		fitToView: true,
		helpers	: {
			title	: {
				type: 'outside'
			},
			overlay	: {
				opacity : 0.8,
				css : {
					'background-color' : '#000'
				}
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});

	// Function to handle non submenu heads being clicked

	
	// Click Handling For Menu Items
	$(".menuHead").click(function() {
			if (selected == null)
				selected = this.id;
			switch(this.id) {
				case "Home": 
					menuHeadClick(this);
					hideOthers(this);
					$(".HomeContent").show(1000);
					break;
				case "ContactUs": 
					menuHeadClick(this);
					hideOthers(this);
					$(".ContactUsContent").show(1000);
					break;
				case "AboutUs": 
					menuHeadClick(this);
					hideOthers(this);
					$(".AboutUsContent").show(1000);
					break;
				case "Bios": 
					menuHeadClick(this);
					hideOthers(this);
					$(selectedBio).switchClass("polaroidSelected","polaroid",1000);
					$(selectedBio).children(":first").switchClass('polaroidImgSelected', 'polaroidImg',1000);
					$(selectedBio).next().hide(1000);
					selectedBio = null;
					$(".polaroid").show(0);
					$(".BiosContent").show(1000);
					break;
				case "Videos": 
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$(".VideosContent").show(1000);
					break;
				case "Pictures": 
					menuHeadClick(this);
					hideOthers(this);
					$(".PicturesContent").show(1000);
					break;
				case "Reviews": 
					menuHeadClick(this);
					hideOthers(this);
					$(".ReviewsContent").show(1000);
					break;
				case "News": 
					menuHeadClick(this);
					hideOthers(this);
					break;
				case "Misc": 
					menuHeadClick(this);
					hideOthers(this);
					break;	
			}});	
			
	$(".subMenuItem").click(function() {
		/* Check to see if another sub menu has been selected */
		if (subSelectedItem== null) 
			subSelectedItem= this.id;
		switch(this.id) {
			case "Nicco": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Alex": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Jesse": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Fletcher": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Marina": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "LiveShows": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "WebSketches": 
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
		}});

});