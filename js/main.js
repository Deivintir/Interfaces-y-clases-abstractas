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
let articleIn = {
    sku: 'A231',
    description: 'lorem ipsum sit amet',
    price: 25,
};
let motorbikeIn = {
    marca: 'Honda',
    modelo: 'GSX',
    color: 'naranja',
};
let newPlane = {
    passengers: 350,
    crew: 8,
    name: 'Boeing 747',
};
let carIn = {
    marca: 'Renault',
    modelo: 'meganne',
    motor: 1600,
    matricula: 1800,
};
let newTruck = {
    marca: 'Scania',
    modelo: 'L11',
    motor: 8800,
    matricula: 6543,
};
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
    constructor(marca, modelo, montaje) {
        this.marca = marca;
        this.modelo = modelo;
        this.montaje = montaje;
    }
    setStock(stock, securityStock) {
        this.stock = stock;
        this.securityStock = securityStock;
    }
    getAvailableStock() {
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
let bicicleIn;
bicicleIn = new Bicicle('Orbea', 'H230', 'oreTXT');
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
class SkateBoard {
    constructor(board, wheels, color) {
        this.board = board;
        this.wheels = wheels;
        this.color = color;
    }
    setStock(stock, securityStock) {
        this.stock = stock;
        this.securityStock = securityStock;
    }
    getAvailableStock() {
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
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Getters y setters en TypeScript:
 * Aunque, como hemos visto en nuestro ejemplo de clase "SkateBoard", podemos establecer métodos "get" y "set" para nuestras propiedades, exisen unos accesores específicos
 * de TypeScript para las propiedades de las clases que usan las palaras "get" y "set" seguidas del nombre de la propiedad y un paréntesis.
 *
 * Un ejemplo de estos métodos podemos implementarlo modificando nuestra clase SkateBoard de la siguente manera: */
class Helicopter {
    constructor(name, model, crew, fuel) {
        this._name = name;
        this.model = model;
        this.crew = crew;
        this.fuel = fuel;
    }
    setStock(stock, securityStock) {
        this.stock = stock;
        this.securityStock = securityStock;
    }
    getAvailableStock() {
        return this.stock - this.securityStock;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
/**El uso de estos accesores implica las siguientes particularidades:
 *  -Como usan el nombre de la propiedad, para no obtener un error por uso duplicado del identificador se ha de cambiar el nombre de la propiedad. Normalmente se mantiene
 * su nombre precedido de guión bajo; en nuestro caso, lo hemos cambiado por "_name".
 *  En el accesor "set" no se indica el tipo de retorno "void".
 *  -La transpilación debe hacerse a ECMAScript2015 o superior.
 *
 * Este último punto es un aspecto destacado de  TypeScrip: en el proceso de compilación se puede determinar a qué especificación de ECMAScript convertir el archivo, y se
 * lleva a cabo mediante el parámetro " --target". Podemos comprobarlo en la terminal y tecleamos el siguiente comando:
 *
 * tsc ts/maints --outFile js/main.js --target ES2015 --watch
 *
 * es importante tener en cuenta que, si transpilamos a una versión específica de ECMAScript, debemos estar seguros de que el entorno de ejecución, sea un navegador u otro
 * destino, tiene compatibilidad con esa versión, ya que nuestro archivo JavaScript estará escrito con instrucciones para esa versión y podría no tener compatibilidad al 100%
 * para todas las funcionalidades
 *
 * Con estas condiciones, podremos usar nuestros accesores "set" y "get"; por ejemplo, podemos añadir al archivo main.js las siguientes líneas al final del código anterior: */
let helicopterIn;
helicopterIn = new Helicopter('Augusta Bell', 'SH-60', 'dos', 100);
helicopterIn.name = 'SH-80';
console.log(helicopterIn.name);
/**La salida por consola nos imprimirá el nuevo valor de la propiedad "name" del objeto "helicopterIn".
 *
 * Y, paradójicamente, comprobaremos que la sintaxis de estos accesores nos proporciona una manera similar a como se accede a las propiedades públicas sin tener que invocar a
 * métodos. Esta particularidad sintáctica, junto con las condiciones de implementación, ha provocado que los accesores "get" y "set" no se usen frecuentemente en TypeScript;
 * la mayoría de los desarrolladores declaran los métodos, como el caso de "setStock()" y "getAvailableStock()", pero es interesante conocer esta opción porque puede aparecer
 * en algunas librerías que usan TypeScript. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Miembros estáticos en TypeScript:
 * Desde ECMAScript 2015, una propiedad o un método de una clase en JavaScript pueden ser declarados como estáticos para acceder a ellos sin necesidad de llamarlos desde un
 *  objeto instanciado de esa clase. Esta funcionalidad, común en otros lenguajes destinados a la programación orientada a objetos, permite modularizar código que posteriormente
 * podrá ser usado en otra clase o directamente desde la clase.
 *
 * Para declarar estáticos estos miembros, se precederán de la palabra reservada "static", perteneciente a ECMAScript-2015; pero, además, en TypeScript podrán añadirse los
 * modificadores de acceso como "public", "private" o "protected". Vamos a explicarlo de manera práctica.
 * Ejemplo: */
class MessageDate {
    static getMessageDate(date) {
        return this.days[date.getDay()] + ','
            + date.getDay() + '/'
            + date.getMonth() + '/'
            + date.getFullYear();
    }
}
MessageDate.days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];
let birthDay = new Date(1990, 9, 10);
let message = MessageDate.getMessageDate(birthDay);
console.log(message);
/**Esta clase dispone de dos miembros estáticos, la propiedad "days" y el método "getMessageDate()"; como se puede observar, ambos son precedidos por la palabra "static". En la
 * propiedad "days", el motivo de declararla estática es que pueda ser usada por otro miemebro estático, el método "getMessageDate"; y este a su vez declarado estático para que
 * pueda usarse sin necesidad de instanciar un objeto de esa clase.
 *
 * De hecho, como podemos comprobar, si queremos utilizar la funcionalidad de ese método cuando declaramos una variable "message", simplemente llamamos a la clase "MessageDate" y,
 * con la notación del punto, invocamos el método con su correspondiente argumento, sin tener que declarar ningún objeto.
 *
 * Al ejecutar el programa en el navegador, podemos comprobar la funcionalidad en la consola; en este caso, un mensaje que devuelve los valores formateados de una fecha.
 *
 * Y para comprobar que el miembro estático no podrá ser invocado desde un objeto de esa clase, podemos añadir el siguiente código: */
let birthDayMessage = new MessageDate();
//birthDayMessage.getMessageDate(1984,10,29); //<-Descomentar esta línea para ver el error.
/**Aunque podemos instanciar un objeto de la clase "MessageDate" en la variable "birthDayMessage" incluso sin tener constructor en la clase, cuando en la siguiente línea intentamos
 * invocar al método estático sobre el objeto, TypeScript nos devuelve un error; por tanto, debemos tener presente que solo podrán ser usados en la clase o en clases que hereden
 * de esta.
 *
 * Las clases con miembros estáticos son cada vez más utilizadas en TypeScript/JavaScript,ya que, con la llegada de los módulos en ECMAScript2015, permiten modularizar nuestras
 * aplicaciones en archivos independientes que, mediante este mecanismo de exportación e importación, dan a los desarrolladores la posibilidad de utilizar la lógica declarada en un
 * método estático en todos aquellos ficheros en los que se necesiten, lo que mejora notablemente el mantenimiento evolutivo de las soluciones de software en este lenguaje. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**Clases abstractas en TypeScript:
 * Las clases abstractas son aquellas cuyos miembros no proporcionan una implementación del código; simplemente describen su firma, es decir, el conjunto de la declaración
 * y parámetros, y sirven como clases base para ser extendidas en otras clases en las que esos miembros sean definidos.
 *
 * Por tanto, su funcionalidad en lo que respecta a su uso en herencia de clases es similar a la de las interfaces que vimos anteriormente; y se usará uno u otro mecanismo
 * dependiendo de los casos de uso o, en mayor medida, de las preferencias de los equipos del proyecto. En el caso de TypeScript, sintácticamente tanto la clase abstracta
 * como sus miembros abstractos son precedidos por la palabra "abstract".
 * Ejemplo: */
class Price {
}
/**En esta clase abstracta "Price", hemos declarado un método abstracto "setPrice" en el que definimos los parámetros y su tipo, asi como su retorno (en este caso, void),
 * pero no declaramos el cuerpo del método ni su lógica, ya que esta parte se definirá en las clases que usen esta clase, como veremos mas adelante.
 *
 * Otra particularidad que debemos tener en cuenta es que las clases abstractas no permitirán la instancia de objetos de esa clase. Si, por ejemplo, añadimos al código
 * anterior la siguiente línea, podremos comprobarlo: */
//let laptopPrice = new Price(); //<- Descomentar esta línea para ver el error
/**Si guardamos el archivo, TypeScript lanzará un error en el linter y la terminal indicándonos que no es posible instanciar objetos de una clase abstracta. */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------- */ 
