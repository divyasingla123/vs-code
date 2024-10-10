// Write a code to display the random names in random colors in single line on console window
const chalk = require("chalk");
const names = ['Ram', 'Krish', 'Alok', 'Geeta', 'Devishi'];
const colors = [chalk.green, chalk.red, chalk.blue, chalk.yellow, chalk.magenta];

function showNames() {
    var rndnam = Math.floor(Math.random() * names.length);
    var rndcol = Math.floor(Math.random() * colors.length);
    var color = colors[rndcol];
    var name = names[rndnam];
    // process.stdout.write(\r${color(name)}); // names overlap honge idhar
    process.stdout.write(`\r${color(name)}     `);
}

setInterval(showNames, 1000);