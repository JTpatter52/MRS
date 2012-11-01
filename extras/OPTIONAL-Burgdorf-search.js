<!-- Begin

// NOTE: If you use a ' add a slash before it like this \'




var	showsearch	= "yes"			// SHOW SEARCH BOX
var	yourdomain	= "allwebcodesign.com"	// YOUR DOMAIN NAME



// Burgdorf SITE SEARCH




// COPYRIGHT 2007 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law




   if (showsearch == "yes") {

document.write('<form method="POST" action="http://'+yourdomain+'/cgi-bin/websearch.pl" class="formmargin" target="_top">');

document.write('<INPUT TYPE="hidden" NAME="DateRange" VALUE="All">');
document.write('<INPUT TYPE="hidden" NAME="hits" value="25">');
document.write('<INPUT TYPE="hidden" NAME="any terms" value="any terms">');

document.write('<table cellpadding="0" cellspacing="0" border="0" class="sidebartext"><tr><td valign="top">');

document.write('<input type="text" name="terms" size="15" class="searchsiteform">');

document.write('</td><td valign="top">');

document.write('<INPUT TYPE="image" SRC="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search"><br>')

document.write('</td></tr></TABLE>');

document.write('</form>');

}







//  End -->