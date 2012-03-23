// JavaScript Document

console.log("Hello There!!");
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
		console.log("Here is selected sub menu:", subSelected);
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
	console.log("Here is me!:", me);
	console.log("Here is me.id!:", me.id);
	if (selectedContent !== me.id) {
		$("."+selectedContent+"Content").hide(1000);
		console.log("Here is what I'm trying to hide:", "."+selectedContent);
		console.log("selectedContent was different!!!: ",selectedContent);
	}
	selectedContent = me.id;
	console.log("Here is new selected Content: ",selectedContent);		
}

function bioClick(me) { // bind click event to all images
		//$(this).toggleClass("polaroidSelected");
		console.log("In bio click!. Here is selected: ",me);
		
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
			console.log("I'm equal!!");
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
	
	// Function to handle non submenu heads being clicked

	
	// Click Handling For Menu Items
	$(".menuHead").click(function() {
			console.log("This is what 'this' is: ", this.id);
			if (selected == null)
				selected = this.id;
			switch(this.id) {
				case "Home": 
					console.log ("Home Us was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					$(".HomeContent").show(1000);
					break;
				case "ContactUs": 
					console.log ("Contact Us was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					break;
				case "AboutUs": 
					console.log ("About Us was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					$(".AboutUsContent").show(1000);
					break;
				case "Bios": 
					console.log ("Bios was clicked!");
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
					console.log ("Videos was clicked!");
					//submenuHeadClick(this);
					menuHeadClick(this);
					hideOthers(this);
					$(".VideosContent").show(1000);
					break;
				case "Pictures": 
					console.log ("Pictures was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					break;
				case "Reviews": 
					console.log ("Reviews was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					break;
				case "News": 
					console.log ("News was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					break;
				case "Misc": 
					console.log ("Misc was clicked!");
					menuHeadClick(this);
					hideOthers(this);
					break;	
			}});	
			
	$(".subMenuItem").click(function() {
		console.log("Here is selected sub menu item:", this.id);
		/* Check to see if another sub menu has been selected */
		if (subSelectedItem== null) 
			subSelectedItem= this.id;
		switch(this.id) {
			case "Nicco": 
				console.log ("Nicco was clicked! Trying to select Nicco Pic: ",this.id+"Pic" );
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Alex": 
				console.log ("Alex was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Jesse": 
				console.log ("Jesse was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Fletcher": 
				console.log ("Fletcher was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "Marina": 
				console.log ("Marina was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "LiveShows": 
				console.log ("Live Shows was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
			case "WebSketches": 
				console.log ("Web Sketches was clicked!");
				bioClick("#"+this.id+"Pic");
				submenuItemClick(this);
				break;
		}});

});


/*switch(me.id){
		case "HomeContent": 
			console.log ("Home Us was clicked!");
			menuHeadClick(this);
			$(".HomeContent").show(1000);
			break;
		case "ContactContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "AboutContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "BiosContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "VideosContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "PicturesContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "ReviewsContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "NewsContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
		case "MiscContent": 
			console.log ("Contact Us was clicked!");
			menuHeadClick(this);
			hideOthers(this);
			break;
	}
 */