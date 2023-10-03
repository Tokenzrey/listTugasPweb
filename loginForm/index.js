document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector("form");
	const nameInput = document.getElementById("name");
	const nimInput = document.getElementById("nim");
	const matkulInput = document.getElementById("matkul");
	const dosenInput = document.getElementById("dosen");
	const formTitle = document.getElementById("form-tittle");
	const formError = formTitle.querySelector("span");

	// Fungsi untuk menampilkan pesan kesalahan
	function showError(message) {
		formError.textContent = message;
	}

	// Fungsi untuk membersihkan input
	function clearInputs() {
		nameInput.value = "";
		nimInput.value = "";
		matkulInput.value = "";
		dosenInput.value = "";
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault(); // Mencegah pengiriman formulir standar

		// Menghapus pesan kesalahan sebelum memeriksa lagi
		showError("");

		// Memeriksa apakah semua input memiliki nilai
		if (
			!nameInput.value ||
			!nimInput.value ||
			!matkulInput.value ||
			!dosenInput.value
		) {
			showError("Semua input harus diisi!");
		} else {
			// Memeriksa apakah NIM hanya berisi angka
			if (/^\d+$/.test(nimInput.value)) {
				// Jika NIM berisi hanya angka, menampilkan pesan sukses
				alert(`Berhasil registrasi dengan ${nameInput.value}`);
				// Mengosongkan nilai input
				clearInputs();
			} else {
				// Jika NIM tidak hanya berisi angka, menampilkan pesan kesalahan
				showError("NIM hanya boleh berisi angka!");
			}
		}
	});

	const nameSuggestion = document.querySelector(".name-suggestion ul");
	const names = [
		"Andi",
		"Budi",
		"Citra",
		"Dewi",
		"Eka",
		"Firdaus",
		"Galih",
		"Hana",
		"Ira",
		"Joko",
		"Kurnia",
		"Lia",
		"Mega",
		"Nanda",
		"Opik",
		"Putri",
		"Rahmat",
		"Sari",
		"Tono",
		"Ulfa",
		"Vina",
		"Wahyu",
		"Xena",
		"Yoga",
		"Zahra",
		"Alya",
		"Bagus",
		"Cinta",
		"Dita",
		"Elsa",
	]; // Ganti dengan daftar nama yang sesuai

	// Event listener saat pengguna mengetik atau mengklik input "Nama"
	nameInput.addEventListener("input", function () {
		const inputValue = this.value;
		showSuggestions(inputValue);
	});

	nameInput.addEventListener("click", function () {
		const inputValue = this.value;
		showSuggestions(inputValue);
	});

	// Event listener saat pengguna memilih rekomendasi nama
	nameSuggestion.addEventListener("click", function (e) {
		if (e.target.tagName === "LI") {
			nameInput.value = e.target.textContent;
			nameSuggestion.style.display = "none";
		}
	});

	// Fungsi untuk menampilkan rekomendasi nama
	function showSuggestions(inputValue) {
		nameSuggestion.innerHTML = ""; // Kosongkan daftar rekomendasi

		const filteredNames = names
			.filter((name) => name.toLowerCase().includes(inputValue.toLowerCase()))
			.slice(0, 5); // Ambil hanya 5 hasil teratas

		filteredNames.forEach((name) => {
			const li = document.createElement("li");
			li.textContent = name;
			nameSuggestion.appendChild(li);
		});

		nameSuggestion.style.display = filteredNames.length ? "flex" : "none";
	}

	// Event listener saat pengguna klik di luar input "Nama"
	document.addEventListener("click", function (e) {
		if (e.target !== nameInput) {
			nameSuggestion.style.display = "none";
		}
	});
});
