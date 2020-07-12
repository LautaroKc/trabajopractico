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
    },
    marca: function(req,res) {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id = req.params.marca;
        res.write('Estos son nuestros autos según la marca!\n\n')
        res.write('MARCA / MODELO / AÑO\n');
        res.write('------\n');
        database.forEach(function(sucursal){
        sucursal.autos.forEach(function(auto){
            if(auto.marca == id){
                res.write(`${auto.marca.toUpperCase()} ${auto.modelo.toUpperCase()} ${auto.anio}\n`)
                }    
            }) 
        })
        res.write('------\n'); 
        res.end(); 
    }    
}        

module.exports = marcas