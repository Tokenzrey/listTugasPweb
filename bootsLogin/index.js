document.addEventListener("DOMContentLoaded", function () {
	const btns = document.querySelectorAll(".btn");
	const signInForm = document.querySelector(".form-signin");
	const signUpForm = document.querySelector(".form-signup");
	const frame = document.querySelector(".frame");
	const signUpLink = document.querySelector(".signup-inactive");
	const signInLink = document.querySelector(".signin-active");
	const forgot = document.querySelector(".forgot");
	const btnSignup = document.querySelector(".btn-signup");
	const btnSignin = document.querySelector(".btn-signin");
	const nav = document.querySelector(".nav");
	const success = document.querySelector(".success");
	const welcome = document.querySelector(".welcome");
	const coverPhoto = document.querySelector(".cover-photo");
	const profilePhoto = document.querySelector(".profile-photo");
	const error = document.querySelector(".error");
	btns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			signInForm.classList.toggle("form-signin-left");
			signUpForm.classList.toggle("form-signup-left");
			frame.classList.toggle("frame-long");
			signUpLink.classList.toggle("signup-active");
			signInLink.classList.toggle("signin-inactive");
			forgot.classList.toggle("forgot-left");
			this.classList.remove("idle");
			this.classList.add("active");
		});
	});

	btnSignup.addEventListener("click", function () {
		// Validasi form signup
		const regisFullName = document.getElementById("regisFullName").value;
		const regisEmail = document.getElementById("regisEmail").value;
		const regisDlno = document.getElementById("regisDlno").value;
		const regisPassword = document.getElementById("regisPassword").value;
		error.innerHTML = ""; // Menghapus pesan kesalahan sebelumnya

		if (!regisFullName || !regisEmail || !regisDlno || !regisPassword) {
			error.innerHTML = "Semua kolom harus diisi.";
			return; // Berhenti jika ada kolom yang kosong
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(regisEmail)) {
			error.innerHTML = "Format email tidak valid.";
			return; // Berhenti jika email tidak sesuai format
		}

		const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
		if (!passwordRegex.test(regisPassword)) {
			error.innerHTML =
				"Password harus memiliki setidaknya 1 karakter besar, 1 angka, dan panjang minimal 8 karakter.";
			return; // Berhenti jika password tidak sesuai format
		}

		// Jika semua validasi berhasil, lanjutkan ke animasi berikutnya
		nav.classList.toggle("nav-up");
		signUpForm.classList.toggle("form-signup-down");
		success.classList.toggle("success-left");
		frame.classList.toggle("frame-short");
	});

	btnSignin.addEventListener("click", function () {
		// Validasi form signup
		const signInEmail = document.getElementById("inEmail").value;
		const signInPassword = document.getElementById("password").value;
		error.innerHTML = ""; // Menghapus pesan kesalahan sebelumnya

		if (!signInEmail || !signInPassword) {
			error.innerHTML = "Semua kolom harus diisi.";
			return; // Berhenti jika ada kolom yang kosong
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(signInEmail)) {
			error.innerHTML = "Format email tidak valid.";
			return; // Berhenti jika email tidak sesuai format
		}

		const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
		if (!passwordRegex.test(signInPassword)) {
			error.innerHTML =
				"Password harus memiliki setidaknya 1 karakter besar, 1 angka, dan panjang minimal 8 karakter.";
			return; // Berhenti jika password tidak sesuai format
		}

		const btnAnimate = document.querySelector(".btn-animate");
		btnAnimate.classList.toggle("btn-animate-grow");
		welcome.classList.toggle("welcome-left");
		coverPhoto.classList.toggle("cover-photo-down");
		frame.classList.toggle("frame-short");
		profilePhoto.classList.toggle("profile-photo-down");
		forgot.classList.toggle("forgot-fade");
	});
});
