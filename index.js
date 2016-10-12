var fs = require("fs");

module.exports = function(yargs){

    var argv = yargs
        .option("i", {
            alias: "in",
            demand: false,
            describe: "The input file (if excluded, stdin is used)",
            type: "file"
        })
        .option("o", {
            alias: "out",
            demand: false,
            describe: "The output file (if excluded, stdout is used)",
            type: "file"
        })
        .argv;

    return {
        inStream: function(){
            return process.stdin.isTTY ? fs.createReadStream(argv.in) : process.stdin;
        },
        outStream: function(){
            return argv.out ? fs.createWriteStream(argv.out) : process.stdout;
        },
        argv: argv
    };
};
