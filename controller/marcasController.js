const fs = require('fs');
const database = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const marcas = {
    marcas: function(req, res) {
        let marcas = [];
        database.forEach(function(sucursales){
            sucursales.autos.forEach(function(auto){
                marcas.push(auto.marca)
            })
        })
        let marcaSinRepetir = [...new Set(marcas)];
        res.write('-------------\n')
        res.write("Marcas disponibles en nuestras concesionarias:\n")
        res.write('-------------\n\n')
        marcaSinRepetir.sort();
        marcaSinRepetir.forEach(function(marca) {
            res.write(`${marca.toUpperCase()} \n`)
        });
        res.write('--------------')
        res.send();
    }
    //rutas parametrizadas
}        

module.exports = marcas