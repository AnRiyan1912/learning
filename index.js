// test('Penjelasan perintah', () => {
//     expect(perintah.matcher(nilai yang di ekspetasikan))
// }) 

// test('dua tambah dua adalah empat', () => {
//     expect(2 + 2).toBe(4)
// })


// test('lima dikali lima adalah 25', () => {
//     expect(5 * 5).tobe(25)
// })
// const jest = require('jest')

// jest.test('Pengujian olah aritmatika', () => {
//     test('empat tambah empat adalah delapan', () => {
//         expect(4 + 4).toBe(1)
//     })

//     test('dua dikali dua adalah empat',() => {
//         expect(2 * 2).toBe(2)
//     })
// })

function sum  (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('inputs must be number');
    }

    return a + b;
}

module.exports = sum;
