const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.writeFile(path.resolve(__dirname, 'output.txt'), '', (err) => {
  if (err) throw err;
  console.log('Добро пожаловать! Введите текст для записи в файл:');
});

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('До свидания!');
    rl.close();
  } else {
    fs.appendFile(path.resolve(__dirname, 'output.txt'), input + '\n', (err) => {
      if (err) throw err;
      console.log(`Записано: ${input}`);
    });
  }
});

rl.on('SIGINT', () => {
  console.log('До свидания!');
  rl.close();
});