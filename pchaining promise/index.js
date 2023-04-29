function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100000) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 35000) {
        reject(new Error('your many not enough'));
      }

      resolve('ticket -1');
    }, 1000);
  });
}

function goToCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error('Not have ticket'));

        resolve('Enjoy watch the movie');
      }
    }, 1000);
  });
}

function watchTheMovie() {
  withDrawMoney(10000)
    .then((money) => buyCinemaTicket(money))
    .then((ticket) => goToCinema(ticket))
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}
watchTheMovie();
