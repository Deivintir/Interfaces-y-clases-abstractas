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
