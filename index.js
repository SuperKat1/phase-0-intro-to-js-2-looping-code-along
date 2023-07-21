const names = ["Charlie", "Samip", "Ali"];
const experience = "birthday";


function writeCards(names, experience) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
        message[i] = (`Thank you, ${names[i]}, for the wonderful ${experience} gift!`);
  }

  return message;
}

console.log(writeCards(names, experience)); 


let counter = 12;
function countDown(counter) {
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
    return counter;
}

countDown(counter);

