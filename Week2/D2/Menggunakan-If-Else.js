var nama = 'Suardhito Ihsan Pratama';
var peran = 'Assasin';
  if (nama === '') {
    console.log('Nama tidak boleh kosong');
    if (nama === '') {
      console.log('Pilih peranmu untuk memulai game');
    } else if (peran === 'Assasin') {
      console.log('Halo Assasin Suardhito Ihsan Pratama, kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Penyihir') {
      console.log('Halo Penyihir Suardhito Ihsan Pratama, kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Warrior') {
      console.log('Halo Warrior Suardhito Ihsan Pratama, ciptakan keajaiban yang membantu kemenanganmu!');
    }
  } else {
    if (peran === 'Assasin') {
      console.log('Selamat datang di Dunia Roxes, ' + nama);
      console.log('Halo Assasin Suardhito Ihsan Pratama, kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Penyihir') {
      console.log('Selamat datang di Dunia Roxes, ' + nama);
      console.log('Halo Penyihir Suardhito Ihsan Pratama, kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Warrior') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo Warrior Suardhito Ihsan Pratama, ciptakan keajaiban yang membantu kemenanganmu!');
    }
  }