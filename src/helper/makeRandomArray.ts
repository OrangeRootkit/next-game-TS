const makeRandomArray = (amount:any, min:any, max:any) => {
     min = Math.ceil(min);
     max = Math.floor(max);
    const gameArr = []
    for (let i = 0; i<amount; i++) {

        gameArr.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return gameArr
  }

