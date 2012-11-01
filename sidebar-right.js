<!-- Begin

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON

// ONLY USE lowercase FOR ALL OPTIONS




var paragraph_1 	= "yes"		// SHOW THE 1ST PARAGRAPH
var paragraph_2 	= "yes"		// SHOW THE 2ND PARAGRAPH
var showimage		= "yes"		// SHOW A SIDEBAR IMAGE

var topspacing		= "10"		// NUDGE SIDEBAR DOWN
var sidewidth		= "125"		// SIDEBAR WIDTH





// NUDGE SPACER
document.write('<img src="picts/spacer.gif" height="'+topspacing+'" width="'+sidewidth+'"><br>');

document.write('<table cellpadding="5" cellspacing="10" border="0" class="sidebartext-right"><tr><td>');







// START RIGHT SIDEBAR AREA PARAGRAPH 1 EDIT THIS AREA

   if (paragraph_1 == "yes") {

document.write('<fieldset><legend>');

document.write('Professional Associations<br></legend>');

document.write('MRS Appraisals keeps our staff in good standing with the following associations FHA, The Appraisal Institute, The Appraisal Foundation and the Appraisal Subcomittee. <a href="contact.htm">Contact us...</a><br>');
document.write('<br><img src="mrsgraphics/logos/fha.gif">');
document.write('<br><br><br><img src="mrsgraphics/logos/AIS.jpg">');
document.write('<br><br><br><img src="mrsgraphics/logos/asc.gif">');
document.write('<br><br><br><img src="mrsgraphics/logos/aff.jpg">');
document.write('<br><br><br><img src="mrsgraphics/vspicts/small_praire.jpg">');
document.write('<br><br><br><img src="mrsgraphics/vspicts/small_apt.jpg">');


document.write('</fieldset>');
document.write('<br><br>');

}
// END RIGHT SIDEBAR AREA PARAGRAPH 1







// SMALL PICTURE AREA

   if (showimage == "no") {

document.write('<br><center>');
document.write('<a href="index.html"><img src="mrsgraphics/OrderApp.jpg" border="0" class="borders"></a><br>');
document.write('</center>');
document.write('<br><br>');
}







// START RIGHT SIDEBAR AREA PARAGRAPH 2 EDIT THIS AREA

   if (paragraph_2 == "no") {

document.write('<fieldset><legend>');

document.write('Notes Area<br></legend>');

document.write('You can also turn off this area in the sidebar-right.js and have no right side bar showing in this area.<br>');

document.write('</fieldset>');
document.write('<br><br>');

}
// END RIGHT SIDEBAR AREA PARAGRAPH 2







document.write('</td></tr></table>');


// -- END -->