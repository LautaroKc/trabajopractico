const fs = require('fs');
const database = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosController = {
    index: function(req, res) {
        res.set({'content-type':'text/plain;charset=utf-8'});
        let autos = [];
        database.forEach(function(sucursales){
            sucursales.autos.forEach(function(auto){
                let datos = {marca: auto.marca, modelo: auto.modelo, anio: auto.anio, color: auto.color};
                autos.push(datos);
            })
        });
        res.write('Lista total de autos: ' + autos.length)
        res.write('\n\n--------------------\n')
        res.write('MARCA / MODELO / AÑO / COLOR\n')
        res.write('--------------------\n\n')
        autos.forEach(function(auto){
            res.write(`${auto.marca} / ${auto.modelo} / ${auto.anio} / ${auto.color}\n`)
            res.write('-------------\n')
        })
        res.end();
    },
    marca: function(req, res) {
    let id = req.params.marca;
    res.set({'content-type':'text/plain;charset=utf-8'});
    res.write('Estos son nuestros autos según su marca! \n\n')
    res.write('------\n');
    database.forEach(function(sucursales){
    sucursales.autos.forEach(function(auto){
            if (id == auto.marca){
            res.write(`Modelo: ${auto.modelo.toUpperCase()} | Año: ${auto.anio}\n`)
                }
            })
        })
    res.write('------\n');    
    res.end();
    }
}

module.exports = autosController