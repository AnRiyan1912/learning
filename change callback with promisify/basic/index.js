// function getusers(iserror, callback) {
//     setTimeout(() => {
//        const users = ['Andre', 'Riyanto', 'Dudi', 'Aeng']
       
//        if(iserror) {
//         callback(new Error('Cannot acces if you offline1'))
//         return
//        }

//        callback(users)
//     }, 3000);
// }
// const { promisify } = require ('util')

// function getUsers(isError, callback) {

//     setTimeout(() => {

//        const users = ['Andre', 'Riyanto', 'Dudi', 'Aeng']
       
//        if(isError) {
//         callback(new Error('Cannot acces if you offline !'), null)
//         return
//        }

//        callback(null, users)
//     }, 3000);
// }

// const getUsersPromise = promisify(getUsers)

// getUsersPromise(false)
// .then(users => console.log(users))
// .catch(err => console.log(err.message))

// getUsersPromise(true)
// .then(users => console.log(users))
// .catch(err => console.log(err.message))


// access file fs,readfile

const fs = require('fs');
const {promisify} = require ('util');

const readFile = promisify(fs.readFile);

readFile('./text.txt', 'utf8')
.then(data => console.log(data))
.catch(err => console.log(err.message))