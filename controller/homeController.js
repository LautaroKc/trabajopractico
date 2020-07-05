const fs = require('fs');
const database = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const home = {
    index: (req, res) => {
        res.write("Bienvenidos!\n\n");
        let sucursalesTitulos = [];
        database.forEach((sucursales) => {
            sucursalesTitulos.push(sucursales.sucursal)
        });
        res.write(`\nEstas son nuestras sucursales:\n${sucursalesTitulos.join('\n')}`)
        res.end()
    }
}

module.exports = home;