# node-command-line-data-io
Boilerplate data flow manager for command line node scripts

## Synopsis
Sets up basic data flow for command line scripts. Input and output data streams are created based on whether file arguments are provided, or this script is being used in a pipeline.

## Usage

    const yargs = require("yargs"), // Add any additional options here
          io    = require("command-line-data-io")(yargs);

    const { argv, inStream, outStream } = io;

    inStream().pipe(outStream());


Adds the following command line arguments

    -i, --in    The input file (if excluded, stdin is used)
    -o, --out   The output file (if excluded, stdout is used)

If this script is used in a pipeline, `process.stdin` is used and `--in` is ignored. If `--out` is specified, the out file is used and `process.stdout` is ignored. If this script is not used in a pipeline, you must use `--in` and `--out`.