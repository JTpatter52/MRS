<!-- Begin

// NOTE: If you use a ' add a slash before it like this \'




var searchdomain	= "allwebcodesign.com"		// DOMAIN TO SEARCH




// SIMPLE GOOGLE SITE SEARCH




// COPYRIGHT 2007 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law




document.write('<form method="get" action="http://www.google.com/search" class="formmargin" target="_top">');
document.write('<input type="hidden" name="ie" value="UTF-8">');
document.write('<input type="hidden" name="oe" value="UTF-8">');
document.write('<input type="hidden" name="domains" value="'+searchdomain+'">');

document.write('<table cellpadding="0" cellspacing="0" border="0" class="sidebartext"><tr><td valign="top">');

document.write('<INPUT type="text" name="q" size="15" maxlength="255" value="" class="searchsiteform"><br>');

document.write('</td><td valign="top">');

document.write('<INPUT TYPE="image" SRC="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search"><br>')

document.write('</td></tr><tr><td colspan="2">');

document.write('<input type="radio" name="sitesearch" value="">Google <input type="radio" name="sitesearch" value="'+searchdomain+'" checked>Site <br>');

document.write('</td></tr></TABLE>');

document.write('</form>');





//  End -->