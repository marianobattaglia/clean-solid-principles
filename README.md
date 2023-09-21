# clean-solid-principles

Referencia: [Principios SOLID y Clean Code](https://meli.udemy.com/course/solid-clean/learn/lecture/31413140#overview)

# Sección 1 - Introducción

### Instalaciones recomendadas - Curso de principios SOLID y CleanCode

Instalaciones Necesarias

- [Visual Studio Code](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=Instalaciones%20Necesarias-,Visual%20Studio%20Code,-Node)
- [Node](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=Visual%20Studio%20Code-,Node,-opcional%20%2D%20Yarn)

Yarn (opcional):
`npm install --global yarn`
- [Google Chrome](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=install%20%2D%2Dglobal%20yarn-,Google%20Chrome,-Extensiones%20de%20VSCode)

Extensiones de VSCode
- [Activitus Bar](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=Extensiones%20de%20VSCode-,Activitus%20Bar,-Tema%20que%20estoy)

Tema VSCode:
- [Tokyo Night](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=usando%20en%20VSCode%3A-,Tokyo%20Night,-Iconos)
- [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Instalaciones adicionales
- [TypeScript importer](https://gist.github.com/Klerith/5bd148b2e16325752219b68995ddf91b#:~:text=Instalaciones%20adicionales-,TypeScript%20importer,-LeonelChavez%20commented%20on)

# Sección 2 - Clean Code y Deuda Técnica
### Temas principales: 
- ¿Qué es la deuda técnica?
- ¿Cómo se paga la deuda técnica?
- Refactorización
- Nombres de variables
- Nombres para funciones
- Ejercicios de refactorización
- Principio DRY

### Deuda Técnica

Falta de calidad en algún nuestro código, que genera una deuda que repercutirá en costos futuros (mantenimientos, refactorización, comprensión y transferencia de código). 

Puede ser falta de documentación, pruebas, refactorización, etc. 

Tipos: 
- Imprudente y deliberada: El dev actúa de forma consciente e imprudente. Proyecto de poca calidad y poco escalable. 
- Imprudente e inadvertida: Se genera por desconocimiento o falta de experiencia. Generalmente por jr o falso sr. 
- Prudente y deliberada: Sabemos que la tenemos, y sabemos que mientras más tiempo esperamos peor. 
- Prudente e inadvertida: Nos damos cuenta que está cuando avanzamos con el proyecto. En este momento consideramos si vale la pena rehacer o mantenerlo como está.

La deuda técnica se paga refactorizando nuestro código. 

La mala calidad del código la termina pagando alguien (dev, cliente, etc.).

### Clean Code

Aquel que se ha escrito para que otra persona o tú mismo lo entienda en el futuro. 

Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que se lee un libro bien escrito. 

### Pronombres pronunciables y Expresivos

Los nombres de las palabras deben estar escritas en inglés y deben ser pronunciables. 

#### Nombres según tipos de datos
Tienen que ser descriptivos. 

**Arrays**: 
```JavaScript
// malo
const fruit = ['manzana', 'platano', 'fresa'];

// regular 
const fruitlist = ['manzana', 'platano', 'fresa'];

// bueno 
const fruit = ['manzana', 'platano', 'fresa'];

// mejor
const fruitNames = ['manzana', 'platano', 'fresa']
```

**Bools**:
```JavaScript
// malo
const open = true;
// bueno 
const isOpen = true;
```

**Numbers**: 
```JavaScript
// malo
const fruits = 3;
// bueno
const maxFruits = 3;
const minFruits = 3;
const totalFruits = 3;
```

**Functions**:
```JavaScript
// malo
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailIfFieldsValid();
// mejor
createUser();
updateUser();
sendEmail();
```

**Clases**: 
El nombre de la clase da sentido lógico a la misma. 
Deben estar formados por un sustantivo o frases
No deben ser genéricos
Usar UpperCamelCase
Debe poder responder:
- ¿Qué hace exactamente la clase?
- ¿Cómo realizará cierta tarea exactamente esta clase?
- ¿Hay algo específico sobre su ubicación?
```JavaScript
// malos 
class Manager {};
class Data {};
```

### Funciones
El nombre de la función debe representar lo que hace la misma. No puede hacer demasiadas cosas. 
Es recomendable que no tenga mas de 3 parametros. 
Cuando son muchos podemos crear una interface para que quede mas limpio. 

**Otras recomendaciones**: 
- Simplicidad
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 líneas de código.
- Evitar el uso del “else” a menos de que sea estrictamente necesaria
- Prioriza el uso de la condición ternaria

### Principio DRY

DRY: Don’t Repeat Yourself
- Simplificar es evitar tener duplicidad de código
- Simplifica las pruebas
- Centralizar procesos
- Aplicar el principio DRY, usualmente lleva a refactorizar

# Sección 3 - Clean Code - Clases y Comentarios
### Principio de Responsabilidad Unica
Cada clase debe tener un propósito, no se debe extender por demás ya que tendremos que inicializar propiedades que no necesitamos para el propósito de la clase. Se pueden implementar interfaces/protocolos y clases que agrupan los constructores de otras clases.

**Definición de Wikipedia**: 
En programación orientada a objetos, se suele definir como principio de diseño que cada clase debe tener una única responsabilidad, y que esta debe estar contenida únicamente en la clase. Así:
Una clase debería tener solo una razón para cambiar
Cada responsabilidad es el eje del cambio
Para contener la propagación del cambio, debemos separar las responsabilidades.
Si una clase asume más de una responsabilidad, será más sensible al cambio.
Si una clase asume más de una responsabilidad, las responsabilidades se acoplan.

### Estructura recomendada de una clase

<div>
	<p align= 'center'>
		<img src="https://github.com/marianobattaglia/clean-solid-principles/assets/94753551/e4fcbf4a-6522-4480-bcf3-6509faa386e0" width="500">
	</p>
</div>

### Comentarios
- Evita usar comentarios, estos deberían ser la excepción, no la regla.
- Cuando usamos librerías de terceros, APIs, frameworks, etc, a veces es necesario dejar comentarios.
- El código debe ser auto explicativo. 

### Uniformidad en el proyecto
- Uniformidad en el proyecto, arquitectura y orden de los archivos, nombres de funciones, etc. 
- Indentación: Separación o tabulación de las líneas de código uniformemente, respetando los estándares del lenguaje y de la empresa. 

# Sección 4 - Acrónimo STUPID

## Code smells
El concepto está relacionado con la deuda técnica, y son indicios de que algo no está bien.
- Singleton: Patrón Singleton. 
- Tight Coupling: Alto acoplamiento y baja cohesión.
- Untestability: Código no testable. 
- Premature optimization: Optimizaciones prematuras. 
- Indescriptible Naming: Nombres poco descriptivos. 
- Duplication: Duplicidad de código, no aplicar el principio DRY.

### Singleton
Se refiere al patrón Singleton. Esto garantiza una única instancia de la clase a lo largo de toda la aplicación. 
- Vive en el contexto global. 
- Puede ser modificado por cualquiera y en cualquier momento. 
- No es rastreable. No sabemos exactamente dónde está.
- Difícil de testear debido a su ubicación. 


### Tight Coupling
Alto Acoplamiento: Se refiere a cuán relacionadas o dependientes son dos clases o módulos entre sí. 
- Desventajas: 
  - Un cambio en un módulo provoca un efecto dominó de los cambios en otros módulos.
  - El ensamblaje de módulos puede requerir más esfuerzo o tiempo debido a la mayor dependencia entre módulos.
  - Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes.
- Posibles soluciones:
  - Clase “A” tiene un atributo que se refiere a “B”
  - Clase “A” llama a los servicios de un objeto “B”
  - Clase “A” tiene un método que hace referencia a “B” (a través del tipo de retorno o parámetro)
  - Clase “A” es una subclase de (o implementa) la clase “B”
- Ventajas de un Bajo Acoplamiento:
  - Cambiar algo importante en una clase no debería afectar a la otra. 

### Cohesión: 
Se refiere a lo que la clase (o módulo) puede hacer. 
- Desventajas:
  - La baja cohesión significa que la clase realiza una grán variedad de acciones: es amplia, no se enfoca en lo que debe hacer. 

### Untestability
Código difícilmente testable. 
- Código con alto acoplamiento. 
- Código con muchas dependencias no inyectadas. 
- Dependencias en el contexto global (Tipo Singleton).
Debemos de tener en mente las pruebas desde la creación del código. 

### Otros Olores Horrorificos
Fuente: https://refactoring.guru/es 

**inflación**: 
- Funciones grandes. Lo que podemos hacer es dividir este método en partes más chicas, que se encarguen de tareas más pequeñas. Esto afecta al rendimiento, pero en casi todos los casos el impacto en el código es tan insignificante que no es relevante. 
- Clases grandes. A medida que el programa crece, las clases pueden crecer. El tratamiento puede ser identificar cada tarea y separarla en sub clases o módulos que lleven a cabo tareas más pequeñas. 
- Obsesión primitiva. Crear un campo primitivo es más fácil que crear un módulo/clase nuevo/a. Esto conlleva a un código más legible y mantenible. El tratamiento puede ser agruparlos de manera lógica dentro de su misma clase.
- Lista larga de parámetros. Más de 3 o 4 parámetros suele ser un problema. Un tratamiento puede ser verificar si todos los parámetros son necesarios, ver si se puede quitar alguno, ver si alguno de ellos puede ser tomado desde otro método, también se puede pasar todo el objeto en lugar de pasar 2 parametros que salgan del mismo. 

**Acopladores**: 
Feature Envy. Un método accede a los datos de otro objeto más que a sus propios datos. 
Intimidad Inapropiada.Cuando una clase utiliza métodos internos de otra clase. Cuando hay clases que pasan mucho tiempo juntas existe un problema, estas deben saber lo menos posible de otras clases. 
Cadena de mensajes. Tenemos una función “A”, que llama a “B”, que llama a “C”, etc. Su tratamiento puede ser eliminar esa cadena, tratando de hacer una comunicación directa. 
The Middle Man. Si una clase realiza una acción y esta delega la acción a otra clase, ¿Para qué existe esta clase? Las clases deben evitar el punto intermedio para no tener más funciones de las necesarias. 

# Sección 5 - Principios SOLID
Son principios (no reglas) que nos ayudan a escribir código evitando los code smells.
- S – Single Responsibility Principle (SRP)
- O – Open/Closed Principle (OCP)
- L – Liskov Substitution Principle (LSP)
- I – Interface Segregation Principle (ISP)
- D – Dependency Inversion Principle (DIP)


### S - Single Responsability Principle (SRP) - Principio de Responsabilidad Única
Nunca debería haber más de un motivo por el cual cambiar una clase o módulo. Una clase debería tener una sola responsabilidad. 
“Tener una sola responsabilidad” NO es igual a “hacer una sola cosa”. 

**Detectar violaciones**
- Nombres de clases y módulos demasiado genéricos (repository, service, etc).
- Cambios en el código suelen afectar la clase o módulo. 
- La clase involucra múltiples capas. 
- Número elevado de importaciones.
- Cantidad elevada de métodos públicos.
- Excesivo número de líneas de código.

### O - Open and Close Principle (OCP) - Principio de Abierto y Cerrado
Establece que las entidades de software (clases, módulos, métodos, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. 

Ejemplo: Supongamos que tenemos un programa que debe escribir sobre el archivo “hola.txt”, luego tenemos la necesidad de cambiar a “adios.txt”. Esto genera la necesidad de tener que modificar manualmente lo cual viola el principio OCP. En cambio, si tenemos un método llamado “writeFile(fileName: string)”, solamente tendremos que modificar el string. 

El principio de OCP también se puede lograr de muchas maneras, como el uso de la herencia o mediante patrones de diseño de composición como el patrón Strategy. 

**Detectar violaciones**
- Cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.)

### L - Liskov Substitution - Sustitución de Liskov
“Las funciones que utilizan punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo” Robert C. Martin. 

“Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema”.

### I - Interface Segregation - Segregación de Interfaz
Los clientes no deberían estar obligados a depender de interfaces que no utilicen. 
Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no utilizan. 
(Está más orientado a la programación fuertemente tipada - no es aplicable en JS) 

**Detectar violaciones**
- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad unica y sustitución de Liskov.

### D - Dependency Inversion - Inversión de dependencias
“Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones”.

- Los módulos de alto nivel no deben depender de módulos de bajo nivel.
- Ambos deberían depender de abstracciones. 
- Las abstracciones no deberían depender de detalles. 
- Los detalles deberían depender de abstracciones. 

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio. 

Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc. 

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio. 

¿Por qué? Cada cambio en un componente abstracto implica un cambio en su implementación. Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa. 

### Inyección de dependencias: 
Dependencia en programación significa que un módulo o componente requiere de otro para poder realizar un trabajo. 

En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias. 

Alto acoplamiento: UseCase tiene dependencia oculta de ExternalService. 
<div>
	<p align= 'center'>
		<img src="https://github.com/marianobattaglia/clean-solid-principles/assets/94753551/f1955ff3-b8e6-48dd-8d02-1fdc56f11404" width="500">
	</p>
</div>

Si hiciéramos la siguiente refactorización aplicando el principio de inversión de dependencias, tenemos ExternalService y lo recibimos al crear la instancia de UseCase. Ahora no tenemos dependencias ocultas. 

<div>
	<p align= 'center'>
		<img src="https://github.com/marianobattaglia/clean-solid-principles/assets/94753551/a6124c3f-6557-4cd5-a9c9-9fa98f42367e" width="500">
	</p>
</div>
