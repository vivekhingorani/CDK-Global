/**
 * @param dependencies {Array} name of modules this code depends on. Can exclude ".js"
 * @param callback {Function} function containing this module's functionality.
 * @version Fri Feb 25 18:44:56 2011
 */
require([], function() {
  /*
   * Put all functions for sitewide context here
   */

  //this function runs when the page loads
  require.ready(function() {
	
	if ($("form[name=bmDocForm]").length && document.location.href.indexOf("model_configs.jsp")>-1) {
		setTimeout(function(){$("#save").click();},10);
	}

  });
});