//probando lo dado en clase

function sumar(num1, num2) {
    return num1 + num2
}

//console.log(sumar(4, 5))

//console.log(sumar('hola', 'chau'))

//console.log(sumar('hola', 'mundo'))



//desafio 1
class Usuario {
    constructor(nombre, apellido, libro, mascota) {
        this.nombre = nombre;
        this.apellido = apellido; 
        this.libro = libro; 
        this.mascota = mascota;
    }

    

    getFullName() {
        return `nombre: ${this.nombre} apellido: ${this.apellido}`
    }
    countMascotas(){
        return `mascota: ${this.mascota}`
    }
    //addBook (bookNombre, bookAutor){
       // this.libro.push({ombre:bookNombre, autor: bookAutor});
       // console.log("Se añadio", `{nombre: ${bookNombre}, autor ${bookAutor}}`);
    //}
    getBookNames(){
       return `libro: ${this.libro}`
    }
    
}

const usuario1 = new Usuario('Marcelo','Torino' ,["nombre: El Psicoanalsita", "autor: Jhon Katzenbach"], ['perro', 'gato'])

const usuario2 = new Usuario('Elena', 'Yokese',["nombre: Orgullo y prejuicio", "autor:Jane Austen"], 'no tiene')





console.log(usuario1)
console.log(usuario2)
//
console.log(usuario1.getFullName())
console.log(usuario1.countMascotas());
//
console.log(usuario2.getFullName())
console.log(usuario2.countMascotas());
//

console.log(usuario1.getBookNames());
console.log(usuario2.getBookNames());

