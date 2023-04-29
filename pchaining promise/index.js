function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error('Not enough money to withdraw'));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money)  {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(money < 35000)
        })
    })
}