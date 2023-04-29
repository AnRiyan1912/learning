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

function buyCinemaTicket(money)  {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(money < 35000) {
                reject(new Error ('not enough money to buy ticket'))
            }

            resolve(money) 
        }, 1000)
    })
}

function goInsideCinema(ticket) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(!ticket){
                reject(new Error ('Not have ticket'))
            }
        })

        resolve(ticket)

    }, 1000)
}

