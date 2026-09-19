/* =========================================
   DATA
========================================= */

let pasien = JSON.parse(localStorage.getItem("pasien")) || [
    {
        id: "PSN001",
        nama: "Andi Saputra",
        jk: "Laki-laki",
        umur: 22,
        telepon: "081234567890",
        alamat: "Banda Aceh"
    },
    {
        id: "PSN002",
        nama: "Siti Rahma",
        jk: "Perempuan",
        umur: 25,
        telepon: "082345678901",
        alamat: "Aceh Besar"
    }
];


let dokter = JSON.parse(localStorage.getItem("dokter")) || [
    {
        id: "D001",
        nama: "dr. Ahmad Fauzi",
        spesialis: "Dokter Umum",
        telepon: "081234567890"
    },
    {
        id: "D002",
        nama: "dr. Siti Aisyah",
        spesialis: "Dokter Gigi",
        telepon: "082345678901"
    },
    {
        id: "D003",
        nama: "dr. Budi Santoso",
        spesialis: "Dokter Anak",
        telepon: "083456789012"
    },
    {
        id: "D004",
        nama: "dr. Rina Marlina",
        spesialis: "Dokter Kandungan",
        telepon: "084567890123"
    },
    {
        id: "D005",
        nama: "dr. Andi Pratama",
        spesialis: "Dokter Penyakit Dalam",
        telepon: "085678901234"
    },
    {
        id: "D006",
        nama: "dr. Dewi Lestari",
        spesialis: "Dokter Kulit",
        telepon: "086789012345"
    },
    {
        id: "D007",
        nama: "dr. Rizky Ramadhan",
        spesialis: "Dokter Mata",
        telepon: "087890123456"
    }
];


let jadwal = JSON.parse(localStorage.getItem("jadwal")) || [
    {
        dokter: "dr. Ahmad Fauzi",
        hari: "Senin",
        jam: "08.00 - 12.00"
    },
    {
        dokter: "dr. Siti Aisyah",
        hari: "Selasa",
        jam: "13.00 - 17.00"
    },
    {
        dokter: "dr. Budi Santoso",
        hari: "Rabu",
        jam: "08.00 - 12.00"
    },
    {
        dokter: "dr. Rina Marlina",
        hari: "Kamis",
        jam: "09.00 - 13.00"
    },
    {
        dokter: "dr. Andi Pratama",
        hari: "Jumat",
        jam: "13.00 - 17.00"
    },
    {
        dokter: "dr. Dewi Lestari",
        hari: "Sabtu",
        jam: "08.00 - 12.00"
    },
    {
        dokter: "dr. Rizky Ramadhan",
        hari: "Senin",
        jam: "13.00 - 17.00"
    }
];


let pemeriksaan =
    JSON.parse(localStorage.getItem("pemeriksaan")) || [
        {
            tanggal: "19/09/2026",
            pasien: "Andi Saputra",
            dokter: "dr. Ahmad Fauzi",
            keluhan: "Demam",
            diagnosa: "Flu",
            resep: "Paracetamol 3x1"
        }
    ];


let obat = JSON.parse(localStorage.getItem("obat")) || [

    {
        kode: "OBT001",
        nama: "Paracetamol",
        kategori: "Tablet",
        stok: 50,
        harga: 5000
    },
    {
        kode: "OBT002",
        nama: "Amoxicillin",
        kategori: "Kapsul",
        stok: 30,
        harga: 8000
    },
    {
        kode: "OBT003",
        nama: "Ibuprofen",
        kategori: "Tablet",
        stok: 40,
        harga: 6000
    },
    {
        kode: "OBT004",
        nama: "Antasida",
        kategori: "Tablet",
        stok: 35,
        harga: 4000
    },
    {
        kode: "OBT005",
        nama: "CTM",
        kategori: "Tablet",
        stok: 45,
        harga: 3000
    },
    {
        kode: "OBT006",
        nama: "Vitamin C",
        kategori: "Tablet",
        stok: 60,
        harga: 7000
    },
    {
        kode: "OBT007",
        nama: "OBH Sirup",
        kategori: "Sirup",
        stok: 25,
        harga: 12000
    },
    {
        kode: "OBT008",
        nama: "Omeprazole",
        kategori: "Kapsul",
        stok: 30,
        harga: 9000
    },
    {
        kode: "OBT009",
        nama: "Loratadine",
        kategori: "Tablet",
        stok: 35,
        harga: 7500
    },
    {
        kode: "OBT010",
        nama: "Salbutamol",
        kategori: "Tablet",
        stok: 25,
        harga: 6000
    },
    {
        kode: "OBT011",
        nama: "Betadine",
        kategori: "Cair",
        stok: 20,
        harga: 15000
    },
    {
        kode: "OBT012",
        nama: "Promag",
        kategori: "Tablet",
        stok: 40,
        harga: 5000
    },
    {
        kode: "OBT013",
        nama: "Bodrex",
        kategori: "Tablet",
        stok: 50,
        harga: 4000
    },
    {
        kode: "OBT014",
        nama: "Mylanta",
        kategori: "Sirup",
        stok: 25,
        harga: 18000
    }
];


let pembayaran =
    JSON.parse(localStorage.getItem("pembayaran")) || [];


/* =========================================
   LOCAL STORAGE
========================================= */

function simpanData() {

    localStorage.setItem("pasien", JSON.stringify(pasien));

    localStorage.setItem("dokter", JSON.stringify(dokter));

    localStorage.setItem("jadwal", JSON.stringify(jadwal));

    localStorage.setItem(
        "pemeriksaan",
        JSON.stringify(pemeriksaan)
    );

    localStorage.setItem("obat", JSON.stringify(obat));

    localStorage.setItem(
        "pembayaran",
        JSON.stringify(pembayaran)
    );
}


/* =========================================
   NAVIGASI
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const page = this.dataset.page;

        bukaHalaman(page);

    });

});


function bukaHalaman(page) {

    document.querySelectorAll(".page").forEach(item => {
        item.classList.remove("active-page");
    });

    document.getElementById(page).classList.add("active-page");


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.page === page) {
            link.classList.add("active");
        }

    });


    const judul = {
        dashboard: "Dashboard",
        pasien: "Data Pasien",
        dokter: "Data Dokter",
        jadwal: "Jadwal Dokter",
        pemeriksaan: "Pemeriksaan",
        obat: "Data Obat",
        pembayaran: "Pembayaran",
        riwayat: "Riwayat Pemeriksaan"
    };

    document.getElementById("pageTitle").textContent =
        judul[page];


    refreshData();
}


/* =========================================
   TANGGAL
========================================= */

document.getElementById("tanggal").textContent =
    new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

    document.getElementById("totalPasien").textContent =
        pasien.length;

    document.getElementById("totalDokter").textContent =
        dokter.length;

    document.getElementById("totalPemeriksaan").textContent =
        pemeriksaan.length;

    document.getElementById("totalObat").textContent =
        obat.length;


    const tbody =
        document.getElementById("dashboardPemeriksaan");

    tbody.innerHTML = "";


    pemeriksaan.slice(0, 5).forEach(item => {

        tbody.innerHTML += `
            <tr>
                <td>${item.pasien}</td>
                <td>${item.dokter}</td>
                <td>${item.keluhan}</td>
                <td>${item.tanggal}</td>
            </tr>
        `;

    });

}


/* =========================================
   PASIEN
========================================= */

function tampilkanPasien() {

    const tbody =
        document.getElementById("tabelPasien");

    const keyword =
        document.getElementById("searchPasien")?.value
        .toLowerCase() || "";


    tbody.innerHTML = "";


    pasien
        .filter(item =>
            item.nama.toLowerCase().includes(keyword)
        )
        .forEach((item, index) => {

            tbody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>
                        <strong>${item.id}</strong>
                    </td>

                    <td>${item.nama}</td>

                    <td>${item.jk}</td>

                    <td>${item.umur} Tahun</td>

                    <td>${item.telepon}</td>

                    <td>
                        <button
                            class="action-delete"
                            onclick="hapusPasien('${item.id}')">
                            Hapus
                        </button>
                    </td>

                </tr>
            `;

        });

}


function bukaModalPasien() {

    document.getElementById("modalPasien")
        .classList.add("show");

}


function simpanPasien(e) {

    e.preventDefault();


    const data = {

        id: "PSN" +
            String(pasien.length + 1).padStart(3, "0"),

        nama:
            document.getElementById("namaPasien").value,

        jk:
            document.getElementById("jkPasien").value,

        umur:
            document.getElementById("umurPasien").value,

        telepon:
            document.getElementById("teleponPasien").value,

        alamat:
            document.getElementById("alamatPasien").value

    };


    pasien.push(data);

    simpanData();

    e.target.reset();

    tutupModal("modalPasien");

    tampilkanPasien();

    updateDashboard();

    alert("Data pasien berhasil disimpan.");

}


function hapusPasien(id) {

    if (!confirm("Hapus data pasien ini?")) return;

    pasien = pasien.filter(item => item.id !== id);

    simpanData();

    tampilkanPasien();

    updateDashboard();

}


/* =========================================
   DOKTER
========================================= */

function tampilkanDokter() {

    const tbody =
        document.getElementById("tabelDokter");

    const keyword =
        document.getElementById("searchDokter")?.value
        .toLowerCase() || "";


    tbody.innerHTML = "";


    dokter
        .filter(item =>
            item.nama.toLowerCase().includes(keyword)
        )
        .forEach((item, index) => {

            tbody.innerHTML += `
                <tr>

                    <td>${index + 1}</td>

                    <td>${item.id}</td>

                    <td>${item.nama}</td>

                    <td>${item.spesialis}</td>

                    <td>${item.telepon}</td>

                    <td>

                        <button
                            class="action-delete"
                            onclick="hapusDokter('${item.id}')">
                            Hapus
                        </button>

                    </td>

                </tr>
            `;

        });

}


function bukaModalDokter() {

    document.getElementById("modalDokter")
        .classList.add("show");

}


function simpanDokter(e) {

    e.preventDefault();


    dokter.push({

        id:
            "D" +
            String(dokter.length + 1).padStart(3, "0"),

        nama:
            document.getElementById("namaDokter").value,

        spesialis:
            document.getElementById("spesialisDokter").value,

        telepon:
            document.getElementById("teleponDokter").value

    });


    simpanData();

    e.target.reset();

    tutupModal("modalDokter");

    tampilkanDokter();

    updateDashboard();

    alert("Data dokter berhasil disimpan.");

}


function hapusDokter(id) {

    if (!confirm("Hapus dokter ini?")) return;

    dokter = dokter.filter(item => item.id !== id);

    simpanData();

    tampilkanDokter();

    updateDashboard();

}


/* =========================================
   JADWAL
========================================= */

function tampilkanJadwal() {

    const container =
        document.getElementById("jadwalList");

    container.innerHTML = "";


    jadwal.forEach((item, index) => {

        container.innerHTML += `

            <div class="schedule-card">

                <h3>👨‍⚕️ ${item.dokter}</h3>

                <p class="schedule-day">
                    📅 ${item.hari}
                </p>

                <p>
                    🕐 ${item.jam}
                </p>

                <button
                    class="action-delete"
                    onclick="hapusJadwal(${index})">
                    Hapus
                </button>

            </div>

        `;

    });

}


function bukaModalJadwal() {

    const select =
        document.getElementById("jadwalDokter");

    select.innerHTML = `
        <option value="">Pilih Dokter</option>
    `;


    dokter.forEach(item => {

        select.innerHTML += `
            <option value="${item.nama}">
                ${item.nama}
            </option>
        `;

    });


    document.getElementById("modalJadwal")
        .classList.add("show");

}


function simpanJadwal(e) {

    e.preventDefault();


    jadwal.push({

        dokter:
            document.getElementById("jadwalDokter").value,

        hari:
            document.getElementById("hariJadwal").value,

        jam:
            document.getElementById("jamJadwal").value

    });


    simpanData();

    e.target.reset();

    tutupModal("modalJadwal");

    tampilkanJadwal();

}


function hapusJadwal(index) {

    if (!confirm("Hapus jadwal ini?")) return;

    jadwal.splice(index, 1);

    simpanData();

    tampilkanJadwal();

}


/* =========================================
   PEMERIKSAAN
========================================= */

function tampilkanPemeriksaan() {

    const tbody =
        document.getElementById("tabelPemeriksaan");

    tbody.innerHTML = "";


    pemeriksaan.forEach((item, index) => {

        tbody.innerHTML += `

            <tr>

                <td>${index + 1}</td>

                <td>${item.tanggal}</td>

                <td>${item.pasien}</td>

                <td>${item.dokter}</td>

                <td>${item.keluhan}</td>

                <td>${item.diagnosa}</td>

                <td>

                    <button
                        class="action-delete"
                        onclick="hapusPemeriksaan(${index})">
                        Hapus
                    </button>

                </td>

            </tr>

        `;

    });

}


function bukaModalPemeriksaan() {

    const pasienSelect =
        document.getElementById("pemeriksaanPasien");

    const dokterSelect =
        document.getElementById("pemeriksaanDokter");


    pasienSelect.innerHTML =
        `<option value="">Pilih Pasien</option>`;

    dokterSelect.innerHTML =
        `<option value="">Pilih Dokter</option>`;


    pasien.forEach(item => {

        pasienSelect.innerHTML += `
            <option value="${item.nama}">
                ${item.nama}
            </option>
        `;

    });


    dokter.forEach(item => {

        dokterSelect.innerHTML += `
            <option value="${item.nama}">
                ${item.nama}
            </option>
        `;

    });


    document.getElementById("modalPemeriksaan")
        .classList.add("show");

}


function simpanPemeriksaan(e) {

    e.preventDefault();


    const sekarang = new Date();


    pemeriksaan.unshift({

        tanggal:
            sekarang.toLocaleDateString("id-ID"),

        pasien:
            document.getElementById("pemeriksaanPasien").value,

        dokter:
            document.getElementById("pemeriksaanDokter").value,

        keluhan:
            document.getElementById("keluhan").value,

        diagnosa:
            document.getElementById("diagnosa").value,

        resep:
            document.getElementById("resep").value

    });


    simpanData();

    e.target.reset();

    tutupModal("modalPemeriksaan");

    tampilkanPemeriksaan();

    tampilkanRiwayat();

    updateDashboard();

    alert("Pemeriksaan berhasil disimpan.");

}


function hapusPemeriksaan(index) {

    if (!confirm("Hapus pemeriksaan ini?")) return;

    pemeriksaan.splice(index, 1);

    simpanData();

    tampilkanPemeriksaan();

    tampilkanRiwayat();

    updateDashboard();

}


/* =========================================
   OBAT
========================================= */

function tampilkanObat() {

    const tbody =
        document.getElementById("tabelObat");

    const keyword =
        document.getElementById("searchObat")?.value
        .toLowerCase() || "";


    tbody.innerHTML = "";


    obat
        .filter(item =>
            item.nama.toLowerCase().includes(keyword)
        )
        .forEach((item, index) => {

            tbody.innerHTML += `

                <tr>

                    <td>${index + 1}</td>

                    <td>${item.kode}</td>

                    <td>${item.nama}</td>

                    <td>${item.kategori}</td>

                    <td>${item.stok}</td>

                    <td>
                        Rp ${Number(item.harga).toLocaleString("id-ID")}
                    </td>

                    <td>

                        <button
                            class="action-delete"
                            onclick="hapusObat(${index})">
                            Hapus
                        </button>

                    </td>

                </tr>

            `;

        });

}


function bukaModalObat() {

    document.getElementById("modalObat")
        .classList.add("show");

}


function simpanObat(e) {

    e.preventDefault();


    obat.push({

        kode:
            "OBT" +
            String(obat.length + 1).padStart(3, "0"),

        nama:
            document.getElementById("namaObat").value,

        kategori:
            document.getElementById("kategoriObat").value,

        stok:
            Number(document.getElementById("stokObat").value),

        harga:
            Number(document.getElementById("hargaObat").value)

    });


    simpanData();

    e.target.reset();

    tutupModal("modalObat");

    tampilkanObat();

    updateDashboard();

    alert("Data obat berhasil disimpan.");

}


function hapusObat(index) {

    if (!confirm("Hapus obat ini?")) return;

    obat.splice(index, 1);

    simpanData();

    tampilkanObat();

    updateDashboard();

}


/* =========================================
   PEMBAYARAN
========================================= */

function tampilkanPembayaran() {

    const tbody =
        document.getElementById("tabelPembayaran");

    tbody.innerHTML = "";


    pembayaran.forEach((item, index) => {

        tbody.innerHTML += `

            <tr>

                <td>${index + 1}</td>

                <td>${item.tanggal}</td>

                <td>${item.pasien}</td>

                <td>${item.layanan}</td>

                <td>
                    Rp ${item.total.toLocaleString("id-ID")}
                </td>

                <td>
                    <span class="status status-lunas">
                        Lunas
                    </span>
                </td>

                <td>

                    <button
                        class="action-delete"
                        onclick="hapusPembayaran(${index})">
                        Hapus
                    </button>

                </td>

            </tr>

        `;

    });

}


function bukaModalPembayaran() {

    const select =
        document.getElementById("pembayaranPasien");

    select.innerHTML =
        `<option value="">Pilih Pasien</option>`;


    pasien.forEach(item => {

        select.innerHTML += `
            <option value="${item.nama}">
                ${item.nama}
            </option>
        `;

    });


    document.getElementById("modalPembayaran")
        .classList.add("show");

}


function simpanPembayaran(e) {

    e.preventDefault();


    pembayaran.unshift({

        tanggal:
            new Date().toLocaleDateString("id-ID"),

        pasien:
            document.getElementById("pembayaranPasien").value,

        layanan:
            document.getElementById("layananBayar").value,

        total:
            Number(
                document.getElementById("totalBayar").value
            )

    });


    simpanData();

    e.target.reset();

    tutupModal("modalPembayaran");

    tampilkanPembayaran();

    alert("Pembayaran berhasil disimpan.");

}


function hapusPembayaran(index) {

    if (!confirm("Hapus pembayaran ini?")) return;

    pembayaran.splice(index, 1);

    simpanData();

    tampilkanPembayaran();

}


/* =========================================
   RIWAYAT
========================================= */

function tampilkanRiwayat() {

    const tbody =
        document.getElementById("tabelRiwayat");

    tbody.innerHTML = "";


    pemeriksaan.forEach(item => {

        tbody.innerHTML += `

            <tr>

                <td>${item.tanggal}</td>

                <td>${item.pasien}</td>

                <td>${item.dokter}</td>

                <td>${item.keluhan}</td>

                <td>${item.diagnosa}</td>

                <td>${item.resep || "-"}</td>

            </tr>

        `;

    });

}


function cetakRiwayat() {

    window.print();

}


/* =========================================
   MODAL
========================================= */

function tutupModal(id) {

    document.getElementById(id)
        .classList.remove("show");

}


window.addEventListener("click", function(e) {

    if (e.target.classList.contains("modal")) {

        e.target.classList.remove("show");

    }

});


/* =========================================
   REFRESH
========================================= */

function refreshData() {

    updateDashboard();

    tampilkanPasien();

    tampilkanDokter();

    tampilkanJadwal();

    tampilkanPemeriksaan();

    tampilkanObat();

    tampilkanPembayaran();

    tampilkanRiwayat();

}


/* =========================================
   START
========================================= */

refreshData();