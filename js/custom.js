/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(function eventModal(arg) {
	var addr = "http://ptpb.pe.hu/api/event/" + arg;
	$.get( addr, function( data ) {
	  $( "#project-1-label" ).html( data.name );
	  
	});
});