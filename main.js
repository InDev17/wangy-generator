const inputNama = document.getElementById('input-nama')
const getContainer = document.querySelector('.container-text')
const getCopy = document.getElementById('copy-button')

function copytext(str) {
  let el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const renderWangy = (waifu) => {
  if(waifu == ''){
    alert('Silahkan masukkan nama waifu kalian.')
  }else{
  let wangy = `${waifu}❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${waifu} wangi aku mau nyiumin aroma wanginya ${waifu} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${waifu} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${waifu} AAAAA LUCCUUUUUUUUUUUUUUU............ AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${waifu} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${waifu} gw ... di laptop ngeliatin gw, ${waifu} .. kamu percaya sama aku ? aaaaaaaaaaah syukur aku gak mau merelakan ${waifu} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${waifu} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
  getContainer.innerHTML = wangy;
  getCopy.addEventListener('click', (e) => {
    copytext(wangy)
  })
  }
}

inputNama.addEventListener('keyup', (e) => {
  if(e.keyCode == 13) {
    e.preventDefault()
    
    renderWangy(inputNama.value.toUpperCase())
  }
})
