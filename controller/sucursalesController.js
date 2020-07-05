const fs = require('fs');
const database = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const sucursales = {
index: function(req, res) {
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('Sobre nuestras sucursales:\n\n')
    database.forEach(function(sucursal){
    res.write('-------\n')
    res.write(`${sucursal.sucursal}\n${sucursal.direccion}\n${sucursal.telefono}\n`)
    res.write('-------') 
        });
    res.send();    
    },
 sucursal: function(req, res) {
    res.set({'content-type':'text/plain;charset=utf-8'})
    let id = req.params.sucursal;
        let autosCantidad =[];
        database.forEach((sucursal) =>{
            if (id == sucursal.sucursal){
                sucursal.autos.forEach(function(auto){
                    autosCantidad.push(auto)
                })
                res.write(`Sucursal de ${sucursal.sucursal}\n`)
                res.write('\n------------------------------\n')
                res.write(`Autos disponibles: ${autosCantidad.length}`)
                res.write('\n------------------------------\n')
                res.write('MARCA / MODELO / AÑO / COLOR\n')
                autosCantidad.forEach(function(auto) {
                res.write(`\n${auto.marca} / ${auto.modelo} / ${auto.anio} / ${auto.color}`)})
                res.write('\n\n------------------------------\n')
                res.write(`Dirección: ${sucursal.direccion}\nTelefono: ${sucursal.telefono}`)
                res.write('\n------------------------------\n')
                res.end()
            }   
        })
        res.end('Sucursal no encontrada')
    }
}

module.exports = sucursales;