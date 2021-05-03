var readline = require('readline'); // Set var readline to require the readline module

var rl = readline.createInterface({ //Create an interface to get input and output from a readable stream
    input: process.stdin,
    output: process.stdout
});

const args = process.argv.slice(2); //Get arguments from the command line and put them into an array

var AvailableNum = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'] //An array with the strings representing the phonetic equivalent of the integers

for (var num=0; num<args.length;num++){ //A for loop that goes through the arguments given in the args arrray and selects its phoenetic equivalent
    if (args[num].length < 2){
        args[num] = AvailableNum[args[num]]
    }

    if (args[num].length == 2){
        args[num] = AvailableNum[args[num][0]] + AvailableNum[args[num][1]]
    }

    if (args[num].length == 3){
        args[num] = AvailableNum[args[num][0]] + AvailableNum[args[num][1]] + AvailableNum[args[num][2]]
    }
}

console.log(args.toString()); //Prints the phoenetic equivalents to the command line in string form
rl.close(); //Closes the readline



