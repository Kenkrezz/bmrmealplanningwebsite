let bmrbutton = document.getElementById('btn');
let jadwalbutton = document.getElementById('btnjadwal');
let deletebutton = document.getElementById('btndelete');

bmrbutton.addEventListener('click', () => {
    const nama = document.getElementById('nama');
    const umur = parseInt(document.getElementById('umur').value);
    const tinggibadan = parseInt(document.getElementById('tinggi').value);
    const beratbadan = parseInt(document.getElementById('berat').value);
    const hasil = document.getElementById('output');
    const gender = document.getElementById('gender').value;
    let status=false;

    if ((umur >= 0) && (tinggibadan >= 0) && (beratbadan >= 0)){
        document.getElementById('input_error').innerHTML = '';
        status=true;
    }else{
        document.getElementById('input_error').innerHTML = 'Mohon mengisi umur/tinggi/berat secara lengkap';
    }

    //BMR CALCULATOR
    //BMR Laki-laki = 66 + (13,7 x Berat Badan) + (5 x Tinggi Badan) - (6,78 x Umur)
    //BMR Perempuan = 655 + (9,6 x Berat Badan) + (1,8 x Tinggi Badan) - (4,7 x Umur)

    if(status){
        const bmrlaki = (66 + (13.7*beratbadan) + (5*tinggibadan) - (6.78*umur)).toFixed(2);
        const bmrperempuan = (655 + (9.6*beratbadan) + (1.8*tinggibadan) - (4.7*umur)).toFixed(2);

        if(gender == "male"){
            hasil.innerHTML = bmrlaki + " Kalori/Hari";
        }else{
            hasil.innerHTML = bmrperempuan + " Kalori/Hari";
        }

    }else{
        hasil.innerHTML = '...';
    }

});

jadwalbutton.addEventListener('click', () => {
    const makanan = document.getElementById('daftarmakanan').value;
    const jadwal = document.getElementById('daftarjadwal').value;

    const tabelseninpagi = document.getElementById('seninpagitabel');
    const tabelselasapagi = document.getElementById('selasapagitabel');
    const tabelrabupagi = document.getElementById('rabupagitabel');
    const tabelkamispagi = document.getElementById('kamispagitabel');
    const tabeljumatpagi = document.getElementById('jumatpagitabel');
    const tabelsabtupagi = document.getElementById('sabtupagitabel');
    const tabelminggupagi = document.getElementById('minggupagitabel');

    const tabelseninsiang = document.getElementById('seninsiangtabel');
    const tabelselasasiang = document.getElementById('selasasiangtabel');
    const tabelrabusiang = document.getElementById('rabusiangtabel');
    const tabelkamissiang = document.getElementById('kamissiangtabel');
    const tabeljumatsiang = document.getElementById('jumatsiangtabel');
    const tabelsabtusiang = document.getElementById('sabtusiangtabel');
    const tabelminggusiang = document.getElementById('minggusiangtabel');

    const tabelseninmalam = document.getElementById('seninmalamtabel');
    const tabelselasamalam = document.getElementById('selasamalamtabel');
    const tabelrabumalam = document.getElementById('rabumalamtabel');
    const tabelkamismalam = document.getElementById('kamismalamtabel');
    const tabeljumatmalam = document.getElementById('jumatmalamtabel');
    const tabelsabtumalam = document.getElementById('sabtumalamtabel');
    const tabelminggumalam = document.getElementById('minggumalamtabel');

    if(jadwal == "seninpagi"){
        tabelseninpagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "seninsiang"){
        tabelseninsiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "seninmalam"){
        tabelseninmalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "selasapagi"){
        tabelselasapagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "selasasiang"){
        tabelselasasiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "selasamalam"){
        tabelselasamalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "rabupagi"){
        tabelrabupagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "rabusiang"){
        tabelrabusiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "rabumalam"){
        tabelrabumalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "kamispagi"){
        tabelkamispagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "kamissiang"){
        tabelkamissiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "kamismalam"){
        tabelkamismalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "jumatpagi"){
        tabeljumatpagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "jumatsiang"){
        tabeljumatsiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "jumatmalam"){
        tabeljumatmalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "sabtupagi"){
        tabelsabtupagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "sabtusiang"){
        tabelsabtusiang.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "sabtumalam"){
        tabelsabtumalam.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "minggupagi"){
        tabelminggupagi.innerHTML += '<p>' + makanan + '</p>';
    }else if(jadwal == "minggusiang"){
        tabelminggusiang.innerHTML += '<p>' + makanan + '</p>';
    }else{
        tabelminggumalam.innerHTML += '<p>' + makanan + '</p>';
    }

});


deletebutton.addEventListener('click', () => {
    const makanan = document.getElementById('daftarmakanan').value;
    const jadwal = document.getElementById('daftarjadwal').value;

    const tabelseninpagi = document.getElementById('seninpagitabel');
    const tabelselasapagi = document.getElementById('selasapagitabel');
    const tabelrabupagi = document.getElementById('rabupagitabel');
    const tabelkamispagi = document.getElementById('kamispagitabel');
    const tabeljumatpagi = document.getElementById('jumatpagitabel');
    const tabelsabtupagi = document.getElementById('sabtupagitabel');
    const tabelminggupagi = document.getElementById('minggupagitabel');

    const tabelseninsiang = document.getElementById('seninsiangtabel');
    const tabelselasasiang = document.getElementById('selasasiangtabel');
    const tabelrabusiang = document.getElementById('rabusiangtabel');
    const tabelkamissiang = document.getElementById('kamissiangtabel');
    const tabeljumatsiang = document.getElementById('jumatsiangtabel');
    const tabelsabtusiang = document.getElementById('sabtusiangtabel');
    const tabelminggusiang = document.getElementById('minggusiangtabel');

    const tabelseninmalam = document.getElementById('seninmalamtabel');
    const tabelselasamalam = document.getElementById('selasamalamtabel');
    const tabelrabumalam = document.getElementById('rabumalamtabel');
    const tabelkamismalam = document.getElementById('kamismalamtabel');
    const tabeljumatmalam = document.getElementById('jumatmalamtabel');
    const tabelsabtumalam = document.getElementById('sabtumalamtabel');
    const tabelminggumalam = document.getElementById('minggumalamtabel');

    if(jadwal == "seninpagi"){
        tabelseninpagi.innerHTML = '';
    }else if(jadwal == "seninsiang"){
        tabelseninsiang.innerHTML = '';
    }else if(jadwal == "seninmalam"){
        tabelseninmalam.innerHTML = '';
    }else if(jadwal == "selasapagi"){
        tabelselasapagi.innerHTML = '';
    }else if(jadwal == "selasasiang"){
        tabelselasasiang.innerHTML = '';
    }else if(jadwal == "selasamalam"){
        tabelselasamalam.innerHTML = '';
    }else if(jadwal == "rabupagi"){
        tabelrabupagi.innerHTML = '';
    }else if(jadwal == "rabusiang"){
        tabelrabusiang.innerHTML = '';
    }else if(jadwal == "rabumalam"){
        tabelrabumalam.innerHTML = '';
    }else if(jadwal == "kamispagi"){
        tabelkamispagi.innerHTML = '';
    }else if(jadwal == "kamissiang"){
        tabelkamissiang.innerHTML = '';
    }else if(jadwal == "kamismalam"){
        tabelkamismalam.innerHTML = '';
    }else if(jadwal == "jumatpagi"){
        tabeljumatpagi.innerHTML = '';
    }else if(jadwal == "jumatsiang"){
        tabeljumatsiang.innerHTML = '';
    }else if(jadwal == "jumatmalam"){
        tabeljumatmalam.innerHTML = '';
    }else if(jadwal == "sabtupagi"){
        tabelsabtupagi.innerHTML = '';
    }else if(jadwal == "sabtusiang"){
        tabelsabtusiang.innerHTML = '';
    }else if(jadwal == "sabtumalam"){
        tabelsabtumalam.innerHTML = '';
    }else if(jadwal == "minggupagi"){
        tabelminggupagi.innerHTML = '';
    }else if(jadwal == "minggusiang"){
        tabelminggusiang.innerHTML = '';
    }else{
        tabelminggumalam.innerHTML = '';
    }

});