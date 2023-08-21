var express = require('express');
var citizen = express.Router();
var citizens = []

citizen.use(express.json());

// 2. Creación de Ciudadanos:
citizen.post('/', function (req, res) {
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const dpi = req.body.dpi;
    const fechaNacimiento = req.body.fechaNacimiento;
    const estadoCivil = req.body.estadoCivil;
    const usuario = {
        nombres: nombres,
        apellidos: apellidos,
        dpi: dpi,
        fechaNacimiento: fechaNacimiento,
        estadoCivil: estadoCivil
    };

    if (!dpi || dpi == "" || !nombres || nombres == "" || !apellidos || apellidos == "" || !fechaNacimiento || fechaNacimiento == "" || !estadoCivil || estadoCivil == "") {
        return res.status(404).json({ error: 'Debe completar todos los datos requeridos.' });
    }
    citizens.push(usuario);
    res.json({ success: 'Se creo el registro del ciudadano.' });
});

// 3. Actualización de datos de ciudadanos:
citizen.put('/:dpi', function (req, res) {
    const dpi = req.params.dpi;
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const fechaNacimiento = req.body.fechaNacimiento;
    const estadoCivil = req.body.estadoCivil;


    if (nombres == "" || apellidos == "" || fechaNacimiento == "" || estadoCivil == "") {
        return res.status(404).json({ error: 'Debe completar todos los datos requeridos para poder actualizarlos.' });
    }

    //Encuentra el índice de un objeto específico usando el método findIndex.
    const objIndex = citizens.findIndex((obj => obj.dpi == dpi));

    //Actualice la propiedad del nombre del objeto.
    citizens[objIndex].nombres = (nombres && nombres != "") ? nombres : citizens[objIndex].nombres;
    citizens[objIndex].apellidos = (apellidos && apellidos != "") ? apellidos : citizens[objIndex].apellidos;
    citizens[objIndex].fechaNacimiento = (fechaNacimiento && fechaNacimiento != "") ? fechaNacimiento : citizens[objIndex].fechaNacimiento;
    citizens[objIndex].estadoCivil = (estadoCivil && estadoCivil != "") ? estadoCivil : citizens[objIndex].estadoCivil;

    res.json({ success: 'Se actualizaron los datos del ciudadano ' + dpi });
});


// 4. Eliminación de ciudadanos por defunción:
citizen.delete('/:dpi', function (req, res) {
    const dpi = req.params.dpi;

    //Encuentra el índice de un objeto específico usando el método findIndex.  
    const objIndex = citizens.findIndex((obj => obj.dpi == dpi));

    //Elimina la propiedad id del objeto.
    citizens.splice(objIndex, 1);

    res.json({ success: 'Se eliminó al ciudadano con dpi No. ' + dpi });
});

// 5. Información de Ciudadano:
citizen.get('/:dpi', function (req, res) {
    const dpi = req.params.dpi;
    let validate_dpi = citizens.some((person) => person.dpi == dpi);
    const found_citizen = (validate_dpi) ? citizens.find((person) => { return person.dpi === dpi}) : { message: "No existe el registro solicitado." };  

    res.json(found_citizen);
});

// 6. Listado de Ciudadanos:
citizen.get('/', function (req, res) {

    if (citizens.length == 0) {
        return res.status(404).json({ message: 'No hay ciudadanos registrados todavía.' });
    }
    res.json(citizens);
});

module.exports = citizen