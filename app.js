
let data=JSON.parse(localStorage.getItem('produk')||'[]');
function login(){document.getElementById('loginPage').style.display='none';document.getElementById('app').style.display='block';render();}
function logout(){location.reload();}
function show(id){document.querySelectorAll('.page').forEach(x=>x.classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
function addProduk(){
let n=nama.value,h=harga.value;
if(!n||!h)return;
data.push({n,h});save();nama.value='';harga.value='';
}
function hapus(i){data.splice(i,1);save();}
function save(){localStorage.setItem('produk',JSON.stringify(data));render();}
function render(){
tb.innerHTML='';
data.forEach((p,i)=>tb.innerHTML+=`<tr><td>${p.n}</td><td>${p.h}</td><td><button onclick="hapus(${i})">Hapus</button></td></tr>`);
jmlProduk.textContent=data.length;
}
