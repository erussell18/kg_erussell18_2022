var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const args = process.argv.slice(2);

var AvailableNum = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']

for (var num=0; num<args.length;num++){
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

console.log(args.toString());
rl.close();



