const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta qué número muestra la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.base ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    
    .argv;

module.exports = argv;