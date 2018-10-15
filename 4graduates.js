
// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.
// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

// {
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
// }


function graduates (students) {

  var result = {}
  for(var a = 0 ; a < students.length ; a++){
    if (result[students[a].class] === undefined){
      result[students[a].class] = []
    }
    if (students[a].score > 75){
      var list = {name : students[a].name , score : students[a].score}
      result[students[a].class].push(list)
    }
  }
  return result
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


console.log(graduates([])); //{}