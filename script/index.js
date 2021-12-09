function showKonsulDokter(){
    localStorage.clear();

    let carouselImg = document.getElementById("carousel");
    let pelayananKlinik = document.getElementById("pelayanan-klinik");
    let konsulForm = document.getElementById("konsul-form");
    let konsulSukses = document.getElementById("konsul-sukses");
    
    carouselImg.style.display = "none";
    pelayananKlinik.style.display = "none";

    konsulForm.style.display = "block";
    konsulSukses.style.display = "none";
}

window.onload = function(){
    showHome()
}

function showHome() {
    localStorage.clear();

    let carouselImg = document.getElementById("carousel");
    let pelayananKlinik = document.getElementById("pelayanan-klinik");
    let konsulForm = document.getElementById("konsul-form");
    let konsulSukses = document.getElementById("konsul-sukses");
    
    carouselImg.style.display = "block";
    pelayananKlinik.style.display = "block";

    konsulForm.style.display = "none";
    konsulSukses.style.display = "none";
    
}

function submitKonsulDokter(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let noHp = document.getElementById("no-hp").value;
    let email = document.getElementById("email").value;
    let tanggalKonsul = document.getElementById("tanggal-konsul").value;
    let layanan = source.options[source.selectedIndex].value;
    let masalah = document.getElementById("masalah").value;

    console.log(nama, noHp, email, email, tanggalKonsul, layanan, masalah);
    if (nama != "" && noHp != "" && email != "" && tanggalKonsul != ""  && layanan != "") {
    localStorage.setItem("nama", nama)
    localStorage.setItem("noHp", noHp)
    localStorage.setItem("email", email)
    localStorage.setItem("tanggalKonsul", tanggalKonsul)
    localStorage.setItem("layanan", layanan)
    localStorage.setItem("masalah", masalah)
    showKonsulSukses()
  } else {
    alert("Please fill the fields that are required");
  }
}

function showKonsulSukses(){
    const terimaKasih = document.getElementById("terima-kasih");
    terimaKasih.innerHTML=localStorage.getItem("nama")+", Terima kasih telah menghubungi kami";
    const dokterMenghubungi = document.getElementById("dokter-menghubungi");
    dokterMenghubungi.innerHTML= localStorage.getItem("layanan") + " akan segera menghubungi anda. <br> Jangan lupa untuk pergi ke Dokter Cinta pada tanggal " + localStorage.getItem("tanggalKonsul");

    let carouselImg = document.getElementById("carousel");
    let pelayananKlinik = document.getElementById("pelayanan-klinik");
    let konsulForm = document.getElementById("konsul-form");
    let konsulSukses = document.getElementById("konsul-sukses");
    
    carouselImg.style.display = "none";
    pelayananKlinik.style.display = "none";

    konsulForm.style.display = "none";
    konsulSukses.style.display = "block";

    // tampilkan nama dll
    
}

function kembaliKeHome(){

}