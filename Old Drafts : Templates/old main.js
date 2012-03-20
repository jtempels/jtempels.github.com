// JavaScript Document

console.log("Hello There!!");
var myElement = document.getElementById("menuDiv");
var selected = null;
var subSelected = null;
var subSelectedItem = null;

var testing = document.getElementById("menuDiv").childNodes;
$(document).ready(function() {
	$(document).click(function() {
		console.log("You clicked somehwere")});
	
	$(".menuHead, .subMenuHead, .subMenuItem").hover(function() {		
		$(this).toggleClass("menuHeadSelected");
		console.log(this);
		console.log(selected);
	
			
			
	});
	
	$(".subMenu").hide(0);
	$(".menuHead").click(function() {
			if (selected != null) {
				$(selected).toggleClass("menuHeadSelected");
				$(this).toggleClass("menuHeadSelected");
				console.log("Inside a menu head click");
				if (this.className == "subMenuHead menuHeadSelected") {
					console.log("Selected children", this.nextSibling.firstChild);
				}
			}			
			else {
				$(this).toggleClass("menuHeadSelected");	
			}
			selected = this;
			$(".subMenu").slideUp(800);
	});
	
	$(".subMenuHead").click(function() {
			/* Check to see if another sub menu has been selected */
			if (selected != null) {
				if (selected != this) {
					$(selected).toggleClass("menuHeadSelected");
					$(this).toggleClass("menuHeadSelected");
					$(subSelected).slideUp(800);		
				}
			}			
			else {
				$(this).toggleClass("menuHeadSelected");	
			}
			selected = this;
			subSelected ="#"+this.id+"Sub";
			console.log("Here is selected sub menu:", subSelected);
			$(subSelected).slideDown(800);					
	});
	
	$(".subMenuItem").click(function() {
		console.log("Here is selected sub menu item:", this.id);
		/* Check to see if another sub menu has been selected */
			if (subSelectedItem!= null) {
				if (subSelectedItem!= this) {
					$(subSelectedItem).toggleClass("subItemSelected");
					$(this).toggleClass("subItemSelected");		
				}
			}			
			else {
				$(this).toggleClass("subItemSelected");	
			}
			subSelectedItem= this;		
	});
	
});

 