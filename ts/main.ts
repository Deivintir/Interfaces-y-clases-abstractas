/**Interfaces y clases abstractas:
 * En esta undidad llegamos a uno de los aspectos más importantes de TypeScript y de cualquier lenguaje de programación orientada a objetos:
 * el uso de interfaces, clases e instancias de objetos.
 * 
 * Comenaaremos de manera práctica por las interfaces, un secillo mecanismo muy utilizado en TypeScript por la particularidad de las aplicaciones
 * desarrolladas en javaScript, en las que en muhcas ocasiones la simplicidad y la flexibilidad son necesarias.
 * 
 * Posteriormente, aprenderemos cómo se implementan las clases en TypeScript, cómo se estableec el acceso a sus miembros y cómo es posible crear
 * miembros estáticos para modularizar nuestro código.
 * 
 * Para concluir, estudiaremos de forma práctica las clases abstractas como complemento al resto de las sintaxis empleadas en el uso de objetos en 
 * TypeScripty, por tanto, en JavaScript. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Interfaces en TypeScript:
 * En los lenguajes de programación orientada a objetos, las interfaces son un mecanismo que permite describir qué miembros deberá contener una determinada
 * clase. Su objetivo es establecer lo que se denomina un contrato, es decir, obligan a que las clases implementen propiedades y métodos para dar respuesta
 * a la estructura de datos que manejamos en las diferentes partes de la arquitectura de software de una aplicación.
 * 
 * De este modo, una interfaz simplemente describe los atributos que debe contener y su tipo; en el caso de los métodos, solamente su cabecera, es decir, 
 * el identificador y los parámetros. Las interfaces extenderán las clases para que obligatoriamente usen sus atributos y métodos, como veremos mas adelante.
 * 
 * Sin embargo, además de este uso habitual, en TypeScript las interfaces definen un tipo de objeto para usar como tipado estático en las delcaraciones de variables,
 * constantes o funciones. En esencia, es lo mismo que si usáramos un literal de objeto asociado a un alias, con una serie de matices que tembién veremos más adelante.
 * 
 * De momento, en lo que respecta ala declaración de interfaces en TypeScript, estas utilizan la palabra reservada "interface" seguida del identificador y, entre llaves,
 * las definiciones de propiedades y métodos.
 * 
 * interface identificador{
 *      propiedad1: tipo-propiedad1;
 *      propiedad2: tipo-propiedad2;
 *      ...
 *      metodo1(param1 : tipo, param2: tipo): tipo;
 *      ...
 * }
 * 
 * Como venimos haciendo en cada apartado, para comprobar estos elementos de TypeScript de manera práctica vamos a crear un ejemplo: */

interface Article{
    sku : string;
    description : string;
    price : number; //Esta línea deberá ir comentada para comprobar el resultado.
}
let articleIn: Article = {
    sku: 'A231',
    description: 'lorem ipsum sit amet',
    price: 25,
}
/**Aquí tenemos el primero de los usos de las interfaces como tipo estático; hemos creado una interfaz "Article" que define tres propiedades con sus correspondientes
 * y la asignamos como tipo de dato de la variable "articleIn". Al inicializar el valor de esa variable, le asignamos un literal de objeto con dos de las propiedades
 * y sus valores específicos.
 * 
 * A continuación, lanzaremos en la terminal de VSC el comando para transpiliar este archivo de la siguiente manera.
 * 
 * tsc ts/main.ts --outFile js/main.js --watch
 * 
 * Y comprobaremos que TypeScript chequea dos cosas: por una parte, que los tipos de las propiedades sean los específicados en la interfaz(en este caso se cumple, ua que
 * ambos son "string") y que todas las propiedades definidas en la interfaz estén declaradas. Este último es el motivo por el cual en este caso se obtiene un error,
 * ya que la propiedad "price" no está declarada.
 * 
 * Si añadimos la propiedad a la variable "artivle1", el error desaparecerá y compilará perfectamente.
 * 
 * Otra de las particularidades sintácticas es que las interfaces permiten que sus  miembros sean opcionales; para ello, les añadimos el operador "?". Por ejemplo, en
 * la interfaz podemos añadir una propiedad opcional de la siguiente manera: */

interface Motorbike {
    marca: string;
    modelo: string;
    color: string;
    cilindrada?: number;
}
let motorbikeIn: Motorbike = {
    marca: 'Honda',
    modelo: 'GSX',
    color: 'naranja',
}
/**Aunque la variable "motorbikeIn" no contenga la propiedad "cilindrada", al ser declarada como opcional, el código no lanzará error.
 * 
 * Las interfaces se usan en TypeScript para un propósito den la declaración de clases, pero esta cuestión la abordaremos más adelante, dentro del aprendizaje de los
 * mecanismos de clases. */
/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Diferencias de las interfaces respecto a los tipos de objetos e intersecciones:
 * Usar interfaces en TypeScript como tipo de dato estático es muy parecido a usar tipos de objetos añadidos a un alias de la manera que aprendimos en apartados anteriores.
 * Ejemplo: */

type Plane = {
    passengers: number;
    crew: number;
    name: string;
}
let newPlane: Plane = {
    passengers: 350,
    crew: 8,
    name: 'Boeing 747',
}
/**La diferencia entre un uso y otro radica en la intersección de tipos, un mecanismo que permite combinar dos o más tipos de alias, y que utiliza el signo "&" para
 * usar un tipo en otro. Por ejemplo, podemos sustituir todo el código anterior para aprender una intersección de tipos de alias de la siguiente forma: */

type Car = {
    marca: string;
    modelo: string;
    motor: number;
}
type CarPlate = Car &{
    matricula: number;
}
let carIn: CarPlate = {
    marca: 'Renault',
    modelo: 'meganne',
    motor: 1600,
    matricula: 1800,
}

/**Este mecanismo de intersección también está incluido en las interfaces.
 * Ejemplo: */

interface Truck  {
    marca: string;
    modelo: string;
    motor: number;
}
interface TruckPlate extends Truck{
    matricula: number;
}

let newTruck: TruckPlate = {
    marca: 'Scania',
    modelo: 'L11',
    motor: 8800,
    matricula: 6543,
}

/**Como vemos, el mecanismos es muy parecido; y en este caso, las interfaces usan la palabra reservada "extends" para implementar los miembros de una interfaz en otra.
 * Podemos  modificar en ambos casos las propiedades de la variable newTruck para comprobar que, si se incumplen los tipos o interfaces, el transpilador de TypeScript
 * devolverá error. */
/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**--------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**En principio, la declaración de clases en TypeScript se efectúa de la misma manera que en JavaScript desde la implementación de ECMAScript-2015, es decir, usando la
 * palabra reservada "class", un identificador y, entre llaves, los miembros de la clase.
 * 
 * class Identificador {
 *      Miembros
 * }
 * 
 * El despegue de TypeScript como referencia de la comunidad de deesarrollo web se debe en buena parte a que su uso permitía utilizar clases antes que los entornos de 
 * ejecución JavaSctipt tuvieran plena compatibilidad para la declaración de clases.
 * 
 * De esta manera, como primera aproximación a las clases de TypeScript podemos decir que son iguales a las de JavaScript, pero con la posibilidad de establecer un tipado
 * estático de sus propiedades y métodos.
 * Ejemplo: */

class Bicicle {
    marca: string;
    modelo: string;
    montaje: string;
    stock: number;
    securityStock: number;

    constructor(marca: string, modelo: string, montaje: string){
        this.marca = marca;
        this.modelo = modelo;
        this.montaje = montaje;
    }
    setStock(stock:number, securityStock:number):void{
        this.stock = stock;
        this.securityStock = securityStock;
    }
    getAvailableStock(): number{
        return this.stock - this.securityStock;
    }
}

/**En esta clase "Article" podemos comprobar que disponemos de varias propiedades con sus correspondientes tipos, el método constructor en el que se pueden también
 * asignar tipos y un método "set" y "get" con tipado estático para parámetros y su retorno.
 * 
 * La instancia de objetos de esta clase se llevará a cabo con el mismo mecanismo que en JavaScript, con la palabra reservada "new" seguida de la clave y un paréntesis
 * con los argumentos que espera el constructor, ya que esa invocación llama a este método de la clase.
 * Como en otros lenguajes que usan la programación orientada a objetos, las clases también son usadas como tipo de datos para obligar a que una variable tenga como
 * tipo de dato una instancia de esa clase.
 * Ejemplo: */

let bicicleIn: Bicicle;
bicicleIn = new Bicicle('Orbea','H230','oreTXT');

/**Una vez que una variable o constante tiene un objeto instanciado de la clase, on la notación del punto se pueden acceder a sus métodos. Por ejemplo, añadimos las
 * siguientes instrucciones: */

bicicleIn.setStock(200, 20);
console.log(bicicleIn.getAvailableStock());

/**Algrabar y transpilar el programa, no obtendremos ninguún tipo de error. Podemos comprobar en la consola del navegador el resultado.
 * 
 * Por supuesto, si durante el desarrollo incumplimos cualquiera de las reglas que marcamos respecto al tipado de datos en la clase "Bicicle", TypeScript lanzará
 * errores que podremos visualizar en la terminal. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Visibilidad de los miembros en TypeScript:
 * Otra de las demandas de la comunidad de JavaScript respecto a la programación orientada a objetos ha sido siempre el acceso a los miembros de una clase, ya que en este
 * lenguaje son siempre públicos y hay que recurrir a mecanismos más complejos para impedir que se pueda acceder a ellos.
 * 
 * TypeScript resuelve este problema implementando la posibilidad de incluir modificadores de acceso que permiten tres posibilidades(público, privado o protegido),
 * un sistema común a otros lenguajes de programación.
 * 
 * Sin embargo, mantiene la filosofía de JavaScript, ya que, por defecto, los miembros de las clalses serán públicos; asi, no será necesario preceder su declaración con 
 * la palabra "public", salvo que se quiera especificar por motivos semánticos o por convenciones de clean code.
 * 
 * En cambio, si necesitamos que los miembros sean privados, podemos preceder su declaración con la palabra "private".
 * Ejemplo: */

class SkateBoard{
    private board:string;
    private wheels:string;
    private color: string;
    private stock: number;
    private securityStock: number;

    constructor(board:string, wheels:string, color:string,){
        this.board = board;
        this.wheels = wheels;
        this.color = color;
    }
    public setStock(stock:number, securityStock:number):void{
        this.stock = stock;
        this.securityStock = securityStock;

    }
    public getAvailableStock():number{
        return this.stock - this.securityStock;
    }
}
/**Ahora las propiedades son privadas; si quisiéramos acceder a ellas tendríamos que añadir más métodos, ya que no será posible el acceso con la notación del punto ni para
 * leer sus valores ni para modificarlos. Podemos comprobarlo añadiendo las siguiente lineas, al grabar veremos que se lanzan los errores y posteriormente podemos comentar
 * ambas líneas para que no persista el error: 
 * 
 * console.log(SkateBoardIn.name);
 * SkateBoard.wheels = 'lorem impsum'*/

/**La tercera forma de especificar la visibilidad de los miembros es "protected", en la cual los mismos solo serán visibles en la clase donde se declaran y las clases que 
 * hereden de estas. Más adelante profundizaremos en su uso al aprender el mecanismo de la herencia en TypeScript. */
