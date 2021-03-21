const fs = require('fs');
const colors = require('colors');

// Equivalente 1
// const crearArchivo = (base = 5) => {

//     console.log("==============")
//     console.log(" TABLA DEL:", base)
//     console.log("==============")


//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//         salida = salida + (`${base} x ${i} = ${ base * i }\n`);
        
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida)

//     console.log("Tabla creada!")

// };

// Equivalente 2 con fn ASYNC que ya devuelve una promesa

const crearArchivo = async(base=5, listar=false, hasta=10) => {

    try {
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida = salida + (`${base} x ${i} = ${ base * i }\n`);
            
        }
        
        if (listar == true) {
            console.log("==============".rainbow)
            console.log(" TABLA DEL:", base)
            console.log("==============".rainbow)
    
            console.log(salida);
            
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return "Tabla creada!";
        
    } catch (error) {
        throw error;
    }

};

// Equivalente 3, con NEW PROMISE

// const crearArchivo = async(base = 5) => {

//     return new Promise((resolve, reject) => {

//         console.log("==============")
//         console.log(" TABLA DEL:", base)
//         console.log("==============")


//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida = salida + (`${base} x ${i} = ${ base * i }\n`);
            
//         }

//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida)

//         return "Tabla creada!";
//     })

// };

module.exports = {
    crearArchivo
}

