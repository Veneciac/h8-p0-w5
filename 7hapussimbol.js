// Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string. Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.
//console.log(/[A-Z]/.test(message))
// Code

function hapusSimbol(str) {
  return str.match(/[a-b,0-9]/g).join('')
}
// function hapusSimbol(str) {
//   var stri = ''
//   var abjad = str.match(/[a-z,0-9]/g)
//   //console.log(abjad)
//   for(var i = 0 ; i < abjad.length ; i++){
//     stri += abjad[i]
//   }
//   return stri
// }

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100