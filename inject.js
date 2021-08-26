// the code which will be injected

(function() {
	var url = window.location.toString();
	url = url.replace("https://idm.snu.ac.kr/imc_change_pwd_form_mysnu.jsp?si_redirect_address=", "");
	url = url.replace("http://idm.snu.ac.kr/imc_change_pwd_form_mysnu.jsp?si_redirect_address=", "");
	window.location.replace(url);
	//document.getElementsByClassName("BT")[2].click();
})();