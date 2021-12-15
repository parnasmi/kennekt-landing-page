(function () {
	const hamburgerBtn = document.querySelector(".hamburger-btn");
	const navMenu = document.querySelector(".page-header__nav");
	hamburgerBtn.addEventListener("click", function (e) {
		hamburgerBtn.classList.toggle("opened");
		navMenu.classList.toggle("opened");
	});
	// Click everywhere to close navigation
	document.addEventListener("click", function (event) {
		if (navMenu.contains(event.target) || hamburgerBtn.contains(event.target)) {
			return;
		}
		if (!navMenu.contains(event.target) || !hamburgerBtn.contains(event.target)) {
			navMenu.classList.remove("opened");
			hamburgerBtn.classList.remove("opened");
		}
	});
})();
