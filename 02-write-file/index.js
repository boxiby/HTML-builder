const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Добро пожаловать! Введите текст для записи в файл:');

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('До свидания!');
    rl.close();
  } else {
    fs.appendFile('output.txt', input + '\n', (err) => {
      if (err) throw err;
      console.log(`Записано: ${input}`);
    });
  }
});

rl.on('SIGINT', () => {
  console.log('До свидания!');
  rl.close();
});