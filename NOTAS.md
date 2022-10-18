# CONCEPTOS
- Que es el DOM?
- Que es el virtual DOM?
- Que es JSX
- que son los componentes en React
- Stateless vs Statefull
- Estado en React
- Hooks
- Styled components
- Peticiones HTTP / API's
- React Router
- Redux
- Context


# INSTALACION
Pagina oficial http//react.org
0.- Instalar node js (para crear nuestra app en React)   comand> node --version
1.- instalalar con el comando npx create-react-app my-app
2.- entrar a nuesrto proyecto cd my-app
    npm i (para reinstalar los modulos para no compartirlos) en visual studio code
3.- ingresar a la app npm run start (en la consola visual estudio code)
4.- npm i   (si extraemos el proyecto nuevamente de github, intalar nuevamente las dependencias)

# EXTENSIONES PARA VISUAL STUDIO CODE
- ES7 React
- Redux
- GraphQL
- React-Native
- snippets v3.1.
- instalar la extension de "SINGLE REACT SNIPES" en visual studio code (ayuda con TAB completar el codigo)

# NOTAS
memorisar la palabra reservada _rafce

//DATO PARA ELIMINAR PROGRAMAS CON NPM
npm ls -g --depth=0
npm uninstall -g create-react-app





# VENTAJAS DE REACT
- Fasil aprender a usar
- Componentes reutilizables
- Crear app dinamicas 
- Buen desempeño

# LOS COMPONENTES: 
- Componentes Funcionales.- son las funciones de javaScript/ES6 retorna un elemento de react (JSX), 
debe comenzar con una letra mayuscula, puede recibir valores si es necesario.

    function Saludo(props){
        return <h1>¡Hola, {props.nombre}!</h1>;
    }

# LOS PROPS:
- Argumentos que puede recibir un componente(funcion) de React.

- Componentes de clase.- Clase de ES6 (Java Script Moderno) que retorna un elemento JSX

   class Saludo extends React.Component{
       render(){
           return <h1>¡HOLA, {this.props.nombre}!</h1>;  
       }
   }

   Caracteristicas.- Debe extender react component, debe tener un metodo render() para retornar un elemento JSX, puede recibir valores si es necesario.

   # EL ESTADO:
   - Representacion en JavaScript del conjunto de propiedades de un componente y sus valores actuales.

¿PORQUE EXISTEN COMPONENTES FUNCIONALES Y COMPONENTES DE CLASE?
- Anteriormente se usaba componentes de clase para poder trabajar con "estados" de nuestros componentes, de ahi apracen los HOOKS.y ahora se puede trabajar con componentes funcionales sin problema.

# LOS HOOKS (GANCHOS):
- podemos asignar y actualizar el estado de un componente funcional en React con los Hooks.
- un hook tiene una funsion especial que te permite trabajar con estados de componentes funcionales y otros aspectos de react
- todo esto se puede hacer sin escribir un componente de clase, esto nos ayuda a escribir codigo mas conciso y fasil de entender.

# EVENT LISTENER o EVENT HANDLER:
- Funcion en JS que es ejecutada cuando ocurre un evento especifico.

# JSX
- Nos permite describir en JS como se veran los componentes usando una estructura similar a HTML (su estructura no necesariamente su estilo)

# VENTAJAS DE JSX
- Estructura es mas fasil de visualizar
- Errores y advertencias mas utiles

# ELEMENTOS EN JSX
- Son unidades mas pequeñas que los componentes en React. definen lo que se ve en la pantalla.
- En JSX, los elementos HTML se representan con etiquetas en letras minusculas.<div>,<h1>,<header>,etc

# DIFERENCIAS ENTRE COMPONENTES Y ELEMENTOS
- Los componentes en React estan hechos de elementos

# ATRIBUTOS
- Se puede agregar atributos a los elementos en JSX para especificar ciertas caracteristicas.
- No todos los atributos se escriben de la misma forma que en HTML ejemplo: "class" que se coloca "className"
o "for" que se escribe "htmlFor"
- El atributo "style" acepta un objeto JavaScript con propiedades CSS escritas en "camelCase".
ejemplo: en CSS "background-image", en JSX "backgroundImage".

    const estiloDiv = {
        color:'yellow',
        backgroundColor:'black'              
    };

    <div style = {estiloDiv}> !hola, mundo! </div>
    <div style = {{color:'blue'}}> !Hola, mundo! </div>

# REACT DOM (Document Object Model)
- paquete que facilita la interaccion y actualizacion del DOM en aplicaciones React.

# DOM (Document Object Model) 
- Representacion en el navegador de todos los elementos que conforman una pagina o aplicacion web.

# ESTRUCTURA DE UN COMPONENTE
- Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras mas complejas.

# RENDERIZAR COMPONENTES 
- <div id = 'root'></div>
- debemos importar ReactDom
  import ReactDom from 'react-dom';

# Self-Closing Tags
- Etiquetas que se cierran automaticamente, en un elemento que solo posee una etiqueta de apertura ya no contiene texto u otros elementos 

# EXPORTACION E IMPORTACION DE LOS COMPONENTES Y ESTILOS
- Cuando se crea un componente se debe importar (import React from 'react') y exportar al archivo     principal "App.js", este los recibira con un (import Testimonios from './components/Testimonios';)

Existen dos tipos de importaciones que son: 
   a) Exportaciones nombradas
   b) Exportaciones por defecto


----------------------------------------------------------------------------
# CONSTRUCCION DE NUESTRA PROMERA APP EN REACT
# PASO 1: RECONOCER LOS ELEMENTOS
# PASO 2: CREAR UN COMPONENTE
   - CREAR LA CARPETA "components" EN LA CARPETA "src"
        - CREAMOS DENTRO UN NUEVO COMPONENTE "Testimonios.js o jsx"
   - CREAR LA CARPETA "imagenes" EN LA CARPETA "src"
   - CREAR LA CARPETA "estilos" EN LA CARPETA "src"
   

# PREPARAR NUESTRO PROYECTO
- ELIMINAR DE LA CARPETA "src" "setupTests.js"
                               "reportWebVitals.js"
                               (nota no olvidar borrar del archivo "index.js")
                               "App.test.js")

- NOS VAMOS AL DOCUMENTO "App.js" QUE ES NUESTRO COMPONENTE PRINCIPAL DENTRO DE "src"
    import './App.css';
    import Testimonios from './components/Testimonios';
    <div className="App">
       DEJAMOS VACIO PARA EMPEZAR A DESARROLLAR NUESTROS ELEMNTOS CON JSX 

       Aca debo colocar todos mis componentes o hacer la llamada y previamente importarlos
       <Testimonios/>
    </div>

- NOS VAMOS AL DOCUMENTO "App.css" DENTRO DE "src" QUE ES DONDE SE ENCUENTRAN LOS ESTILOS
    (Eliminamos todos los estilos que estan en el documento)

# AGREGAMOS CSS O ESTILOS A NUESTRO PROYECTO
- CREAR LA CARPETA "estilos" EN LA CARPETA "src"
- DENTRO DE LA CARPETA "estilos" CREAMOS UN NUEVO ARCHIVO "Testimonios.css"



# ESTE VIDEO ME ESTA ENSEÑANDO REACT JS ACTUALMENTE
https://www.youtube.com/watch?v=6Jfk8ic3KVk     Time MIN:02:49:18    03:52:54