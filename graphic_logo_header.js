<!-- Begin HEADER OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON




var color		= "000000"	// HEADER BACKGROUND COLOR (EDIT IN THE css FILE)
var showdate		= "yes"		// SHOW THE DATE ON THE PAGE
var stripes	 	= "yes"		// SHOW STRIPE UNDER THE FLASH





// COPYRIGHT 2008 � Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+color+'"><tr><td align="left">');
document.write('<a href="index.html"><img src="picts/logo.jpg" border="0"></a><br>');


   if (stripes == "yes") {
document.write('</td></tr><tr class="printhide"><td class="pagebars">');
document.write('<img src="picts/spacer.gif" width="10" height="1"><br>');
}
document.write('</td></tr></table>');



// START DATE SCRIPT
   if (showdate == "yes") {

document.write('<div id="date-location" class="printhide">');
var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write("<span class=\"date-font\"><nobr>" + weekday[d.getDay()] + " ")
document.write(monthname[d.getMonth()] + " ")
document.write(d.getDate() + ". ")
document.write(d.getFullYear())
document.write("</nobr><br></span>")
document.write('</div>');

}


//  End -->