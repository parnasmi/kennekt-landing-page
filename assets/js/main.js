(function () {
	const hamburgerBtn = document.querySelector(".hamburger-btn");
	const navMenu = document.querySelector(".page-header__nav");

	hamburgerBtn.addEventListener("click", function (e) {
		hamburgerBtn.classList.toggle("opened");
		navMenu.classList.toggle("opened");
	});
})();
