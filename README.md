# ispc_2
Repositorio grupal - 2do año Desarrollo Web y Aplicaciones Digitales
(https://github.com/AngelesMary/Proyecto-Full-stack  --- PADEL CLUB PROYECTO FULLSTACK - REPO ANTERIOR)

La “consultora ISPC”, solicita  en esta oportunidad, incorporar un módulo de e-commerce para comercializar sus productos y/o servicios online.
Se propone la distribución de los siguientes Sprints:

SPRINT 0 ---  Fecha Inicio = 10/04/2023 -  Fecha de Fin = 21/04/2023.
 - Se les solicitará el proyecto que han trabajado y aplicado todos los contenidos dados en el módulo de la cursada previa (HTML5, CSS3, BOOTSTRAP, JAVASCRIPT) para extraer recursos necesarios y asi continuar desde ese punto con las nuevas solicitudes.
- Definir Scrum Master inicial y registrarse cada integrante faltante dentro del repositorio a trabajar. 
- Revisar documentación IEEE830 si está completa y retomar desde allí para esta nueva etapa seguir documentando los avances.
- Revisar la estructura web Semántica, responsive (RWD)
- Definir requerimientos para el nuevo módulo a desarrollar e-commerce (colocarlos en el Product Backlog del Project)
- Plantear Historias de Usuarios y Tareas dependientes de las US para incorporarlas en el repositorio remoto GitHub. (Issues y Milestones) - Tener en cuenta la redacción adecuada para las US y nomenclatura, ej “#US01 Como usuario quiero ingresar al carrito para poder comprar”  
- Definir tareas dentro de las Historias de Usuario (GITHUB) ej dentro de las ISSUES  #TK01 revisar IEEE830.


SPRINT 1 ---  Fecha Inicio = 24/04/2023 -  Fecha de Fin = 08/05/2023

Punto inicial de Implementación FRONTEND
- Convertir los archivos .html del proyecto previo, en una SPA en Angular con módulos (Layouts/Shared y Pages son un ejemplo) con sus componentes correspondientes. (HOME, REGISTRO, LOGIN, DASHBOARD)
- Crear módulos y componentes para la tienda virtual o ecommerce. (PRODUCTO o SERVICIOS, PRODUCTO INDIVIDUAL, COMPRA).
- Incorporar la navegabilidad de la aplicación mediante Routing con Angular.

Diseño del BACKEND
- Subir en la carpeta documentación las tablas actualizadas de la base de datos: 
Diseño conceptual al que ya hemos visto como DER: Diagrama Entidad-Relación.
Diseño Lógico que consta de la Normalización y el Modelo Relacional.
Diseño Físico que es el script legible de la DB en MySQL.
- Crear un Diagrama de Clases y Casos de Uso para facilitar el modelado en POO.

GESTION DE PROYECTO
- Subir al repo grupal en GitHub, mediante comandos GIT desde el local, pueden crearla en una branch por desarrollador para que cada uno tenga una copia, o directamente crear una branch FEATURE, para actualizar los cambios que no se encuentran aún en condiciones de incorporarse a la branch DEVELOP.
- En GitHub, mediante la sección WIKI deben reflejar los avances individuales y de equipo en relación a Scrum (Ceremonias, roles, historias de usuarios, etc). Actualizar IEEE830.


SPRINT 2 ---  Fecha Inicio = 08/05/2023 -  Fecha de Fin = 21/05/2023

FRONTEND
El goal de este sprint es construir un frontend dinámico. Por ello, se requiere crear servicios que provean los datos a los componentes. Para lograrlo, los servicios deben  consumir una API Rest de prueba (Ej. https://www.npmjs.com/package/json-server).

Se requiere:

Crear servicios que consuman un API Rest de prueba. Para realizar las peticiones http, utilizar el servicio de HttpClient. 
Inyectar a los componentes los correspondientes servicios a fin de que los componentes puedan acceder a los datos y mostrarlos en pantalla. Incluye enlace de datos (Data binding).
Incorporar la programación reactiva (asincrónica) mediante observables para la comunicación entre servicios y componentes.

BACKEND
Establecer el modelo de base de datos del primer sprint en Django usando clases.
Establecer el sistema de usuarios en Django-Admin (registro, login y roles)
Crear un ABM (CRUD) de productos/servicios utilizando el panel de control de Django.


