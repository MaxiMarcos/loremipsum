ORM => Nos ayuda a conectarnos con la base de datos, a través de un lenguaje "intermedio", que no es de SQL, si no más sencillo.

Sequelize => ORM de NOde.js, basado en promesas y puede ser utilizado para MySQL, por ejemplo. Para conectarnos a una BD:
* const {Sequalize} = require('sequelize')

MÓDELOS => 

MÈTODOS DE BUSCADOR (Model Querying - FInders) =>
* findAll => Nos busca todos los proyectos.
* findByPk => Busca un elemento en particular, mediante su Pk.
* findOne => Busca un solo elemento.
* findOrCreate => Busca un elemento, y si no existe lo crea.
* findAndCountAll

RELACIONES/ASOCIACIONES => 
RAW QUERIES => 

// RUTA, CONTROLADOR Y SERVICIO // => Necesarios para definir un EndPoint


* PASSPORT => Middleware Externo
Sirve para hacer validaciones y que estas no tengan que estar en el cuerpo.
function miMiddleware(req, res, next) => cuando hay aprobación funciona el Next.

------------------------------------------------------------------------------------------------

Algunos MÓDULOS importantes:
Globals, HTTP, Fyle Steam, Process, Timers, y Módulos importados/exportados(require/exports) dentro del proyecto.

