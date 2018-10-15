
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = []

  for(var a = 0 ; a < arrPenumpang.length ; a++){
  var obj = {
    penumpang : arrPenumpang[a][0],
    naikDari : arrPenumpang[a][1],
    tujuan : arrPenumpang[a][2],
    bayar :0
  }
  var ongkos = (rute.indexOf(arrPenumpang[a][2]) - rute.indexOf(arrPenumpang[a][1])) *2000
  obj.bayar = ongkos
  result.push(obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]