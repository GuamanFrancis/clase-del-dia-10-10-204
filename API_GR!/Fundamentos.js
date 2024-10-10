


//Js dolo lsfo frl vlirnr 

// node v8 = js lado del servidor 

// variables 
// es un espacio en memoria donde tambien se puede decir que es un contenedor de informacion.

//tipos simples 
let data = 12       //entero 
let data1 = 23.6    // float 
let data2 = "hola" //string
let data3 = '@'    //  char
let data4 = false    // boolean
let data5 = undefined  // undefined


//tipos compuestos 

let dato6 = ['hols ',54,false]    //arreglos o arrays

let user = {                    //objetos

    name: "josue", 
    activo: true
}

//no usar var - por el tema de hosting = investigar 
// pero si se utiliza let y const 

//--------------------------------------------------------

//strings - cadena de caracteres 
let password = "12345 francis guaman                "

//propiedades - metodos 

// la propiedad mas utilizada en strings es 
console.log(password.length);

// console.log nos sirve para imprimir en consola 

//Metodos mas clasicos 

console.log(password.trim());  //trim remueve los espacios en blanco como del principio y al final 
console.log(password.includes('5'));  // si en el password incluye el numero 5

//node --watch lo que hace es que se ejecute de manera automatica sin tener que limpiar la terminal 


console.log(password.toUpperCase()); // lo que hace es que hace todo en mayuscula 


console.log(password.toLocaleLowerCase());  // lo que hace es que convierte todo en minuscula 


//quien dicta los estandares de la web 
//la w3c permite determinar las reglas protocolos y eso 

//Cuales son los protocolos para javascript: es ecmascript  y en pocas es un organizmo que crea reglas y en pocas palabras es la forma en la que se debe escribir en javascript

//ES6 son reglas que me permiten saber como escribir en javascript pero tambien me perminte saber nuevas caracteristicas 

// Template strings  me permite concatenar texto con variables y tambien se utiliza el signo de dolar 

console.log(`El passwoed de juean es; ${password}`);

//-----------------------------------------
let gamprice1= "500.35"
let gamprice2= 500.35

// proceso de casting - ES6
console.log(+gamprice1+gamprice2);
//cuando ponemos el mas delante de un string se hace el proceso de casting 
//---------------------------------------------------------------------------------
//ORDEN DE EJECUCION DE LOS OPERADORES (* / + - ** () )

//---------------------------------------------------------------------------------



//condicionales 

let useCardBalance = 500

let cardBalance = 1000

//ES6 Operador ternario

//Esta es un forma mas rapida y simplificada del if 

//cardBalance <= useCardBalance == condicion que se va a comprobar
//"Pay " esto se ejecuta si es verdadero 
//"Consuming" esto se ejecuta si es falso
let result = cardBalance <= useCardBalance ? "Pay " : "Consuming"
 
//valores verdaderos - tambien llamados truthy  son vvalores que no estan vacios



//valores falsos - tambien llamados falsy  son valores que estan vacios



let email = "B@4GMAIL.COM"
!email ? console.log("provie an email") : console.log("Registrarse");

//comparacion estricta se encaga de que comparemos el valor y el tipo de dato y parr hacer eso se pone el === triple igual 
let userID = 123 
userID === "123" ? console.log("user found ") : console.log("USER DOESNT EXIT ");

//------------------------------------------------------------------------------------------------------------------------


//clasicos loops o bucles 

const goals = ['learn js','play socces','watching netflix', "enjoy the holiday"]
goals.forEach((goal)=>{console.log(goal)})

const newGoals = goals.map((goal)=>goal.toUpperCase())

//Summary 
console.log(goals);
console.log(newGoals);


//---------------------------------------------------------------------------------
//FUNCION ANINIMA Y AUTOEJECUTADA

//function(){

   // console.log("Ejecucuion de una función ");
    

//})()  //de esta manera tenemos unafuncion que hace que sea auto ejecutable 


//FUNCION DECLARADA 
    function getAvatar() {
        console.log('/photo/user.png');
        
        
    }

    // en este tipo de funcion siempre va a empezar con la palabra function

    getAvatar() // aqui estamos llamando a la funcion 


//FUNCION EXPRESADA 
const conecctionBDD= function(){
    console.log("Conexión ecitosa");
    
}

conecctionBDD()  // aqui estamos llamando a la funcion 


// en este caso empieza con una variable que ya hemos declarado


//ARGUMENTOS

const validarEmailAndToken = function (mail, token) {

    console.log(`El token es $(token) y su email es $(email)`);
    
    
}

validarEmailAndToken('juan@gmail.com','123')

//ARGUMENTOS OPCIONALES

const validarEmailAndTokenn = function (mail, token= 555) {

    console.log(`El token es $(token) y su email es $(email)`);
    
    
}

validarEmailAndToken('juan@gmail.com')

//RETORNO

function TiposRetorno() {
    // logica 
    //return 89
    //return true
    //return 87,34
    //return ['user1','user2']
    return {
        
        name:"Juan",id:8943
    }
}

TiposRetorno()

//ES6

//ARROW FUNCTION

const conecctionBDDMongo=()=>{
    console.log("Conexión ecitosa");
    
}
conecctionBDDMongo()

//nfn me iservve para crear funciones flecha haciendotodo lo anterior pero de manera mas rapida
//clg nos permite hacer un console.log

//FUNCION FLECHA es lo mismo que una funcion expresada pero de una manera mas rapida

const registeruser = (email) => {
    console.log("User registred");
  


}


const registeruser2 = email => console.log("User registred"); // esta es una manera mas rapida de hacer lo que estaba antes 
  




registeruser("pancho@gmail.com")





//--------------------------------------------------------------------------------------------------------


//OBJETOS   
const datosBananeritoGodd = {
    name: "Bananerito",
    age: 1,
    address: {
        city: "Machala",
        telephone: 123

    },
    friends: ['codigo','Torero'],
    status:true

    //lo podemos diferenciar cuando es json cuando las variables por decirlo asi estan entre comillas y si no estan como en este caso es un objeto 

}


console.log(datosBananeritoGodd.name )
console.log(datosBananeritoGodd.friends )

// aqui estoy creando 2 variables y guardando los datos de bananerito
//const nameB= datosBananeritoGodd.name 
//const friendsB = datosBananeritoGodd.friends

//ES6
//DESETRUCUTRACION
//aqui le digo que estos estos datos los voy obtener de datosbananerito
//const (name,age,address,friends,status) = datosBananeritoGodd




//propiedades

datosBananeritoGodd.photo = 'bananerito.png'
console.log(datosBananeritoGodd);
delete datosBananeritoGodd.age

Object.values(datosBananeritoGodd).includes("") ? console.log("Error") : console.log("OK");


const lunch = {

    name : "pollo Broster",
    price: 5,

}

const drinks = {

    name:"Jugo de coco ",
    sweet: false 
}

const  orderUser ={...lunch,...drinks}
console.log(orderUser);

// el ... lo utilizamos para poder agregar o sumar como esta en el ejercicio anterior 

//ES6

//Nombres de abreviaturas de propiedades


const nameVideogames = "Mariokart"
const priceVideogames = 89

const videogames = {

    nameVideogames,
    priceVideogames
}

// de esta maenera creamos un objeto apartir de const que estan disueltas
//esto aplica solo cuando los dos nombre son iguales pero en el caso de que los nombres deban ser diferentes se pone primero el nombre que queremos y luego ponemos lo que vamos a clonar por decirlo haci 

console.log(videogames);



//aprender bastante lo que es loops








































