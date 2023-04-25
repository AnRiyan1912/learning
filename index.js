// const { getUser, getWeather } = require('./information');

// function getUserWeather(userId, callback) {
//   getUser(userId, (error, user) => {
//     if (error) {
//       callback(error, null);
//     }

//     getWeather(user.location, (error, weather) => {
//       if (error) {
//         callback(error, null);
//       }
//       callback(null, { ...user, ...weather });
//     });
//   });
// }

// getUserWeather(1, (error, userWeather) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(userWeather);
// });

const { getUser, getWeather } = require('./information');

function getUserWeather(userId) {
  let user;

  return getUser(userId)
    .then((_user) => {
      user = _user;
      return getWeather(user.location);
    })

    .then((weather) => ({ ...user, ...weather }));
}

getUserWeather(1).then(console.log).catch(console.log);
