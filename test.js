var randomAdder = () => {
    // create a function that adds together the sum of 15 random numbers
    // console.log the total

    const numOfValues = num;
    const max = 100;
    const min = 10;
    let total = 0;
    for (let i = 0; i < numOfValues; i++) {
        let value = Math.ceil(Math.random() * (max - min) + min);
        total += value;
    }
    console.log(total);
}

randomAdder();

module.exports = randomAdder;