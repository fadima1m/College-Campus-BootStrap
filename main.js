// resize header to size of browser window

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight + "px";
})

// set modal time delay before loading

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

// form validation
(function () {
	'use strict'

	var forms = document.querySelectorAll('.needs-validation')

	Array.prototype.slice.call(forms)
	.forEach(function (form){
		form.addEventListener('submit', function (event){
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}
			form.classList.add('form-group') },
			false)
		})
}) ()