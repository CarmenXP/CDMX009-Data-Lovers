# Data Lovers : 'New Mortys' 

## Índice

* [1. Definición del Producto](#1-definición-del-producto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. Diseño de la Interfaz de Usuario](#3-diseño-de-la-interfaz-de-usuario)
* [4. Implementación de la Interfaz de Usuario](#4-implementación-de-la-interfaz-de-usuario)
* [5. Pruebas unitarias](#5-pruebas-unitarias)

***

## 1. Definición del producto

'New Mortys' fue diseñada para que los fans de Rick and Morty puedan interactuar entre ellos a través de un chat. En primer instancia se asigna un personaje conforme la información obtenida del usuario para posteriormente con base en esta información, mostrarle aquellos "new mortys" con los que podrá comunicarse. El usuario principal son adolescentes y adultos jóvenes (+13).

\* Puedes ver la página New Morties en este [link](https://)


## 2. Historias de usuario

     Historia 1. Yo como: Usuario de la página 'New Mortys'
                Quiero: Entrar al sitio web
                Para: Comunicarme con otros fans
     
            Criterios de Aceptación 
              * El usuario debe ingresar al sitio con un login
            Definición de Terminado
              * El login se realiza a través de una cuenta en Facebook
              * El login se realiza a través de una cunenta de correo electrónico


     Historia 2. Yo como: Usuario de la página 'New Mortys'
                 Quiero: Obtener un personaje de Rick & Morty con el cual me sienta identificado
                 Para: Conocer a otros fans con similitudes en personalidad
            
            Criterios de Aceptación 
              * El usuario debe responder un formulario
              * El usuario debe enviar el formulario
            Definición de Terminado
              * Obtener valores del formulario respondido 
              * Filtrar un personaje con los valores obtenidos del formulario
              * Mostrar el personaje en pantalla
              * Filtrar los match con los valores obtenidos del formulario
              * Mostrar los match con los que puede comunicarse en pantalla
            
   
     Historia 3. Yo como: Usuario de la página 'New Mortys'
                 Quiero: Comunicarme con mis New Morties
                 Para: Suscitar lazos de amistad con otros fans de la serie

            Criterios de Aceptación 
              * El usuario debe interactuar con un "New Morty" a través del chat
              * El usuario debe seleccionar entre los "New Mortys" para chatear
            Definición de Terminado
              * Mostrar en pantalla el chat con el "New Morty" seleccionado
              * Enviar y recibir textos a través del chat
              * Mostrar en pantalla a los "New Mortys" con los que puede chatear
             

## 3. Diseño de la Interfaz de Usuario

El diseño de la interfaz se realizó primero con prototipos de baja fidelidad para realizar pruebas de testing de usabilidad y así incluir las mejoras proporcionadas por los usuarios en el prototipo de alta fidelidad.

### Prototipo de baja fidelidad

![baja fidelidad1](https://github.com/CarmenXP/CDMX009-Data-Lovers/blob/master/src/imagens/sketch1.jpg)
![baja fidelidad2](https://github.com/CarmenXP/CDMX009-Data-Lovers/blob/master/src/imagens/sketch2.jpg)

### Prototipo de alta fidelidad

![alta fidelidad](https://github.com/CarmenXP/CDMX009-Data-Lovers/blob/master/src/imagens/New%20Mortys(1).png)


### Testeos de usabilidad

Se realizó testeo con compañeras del bootcamp, las cuales nos proporcionaron información para realizar mejoras en la página web, las cuales son las siguientes:
  
  * Colocar un botón que nos retorne a la página de registro 
  * Tener más opciones de match para chatear
  * Desplazarse entre las diferentes opciones de match
  * Poder agregar más personajes al chat
  * Tener un botón de salir del chat

## 4. Implementación de la Interfaz de Usuario

1. Mostrar la data en una interfaz: 

![data en interfaz]()

2. Permitir al usuario interactuar para obtener la infomación que necesita

![formulario]()

3. Ser _responsive_

4. Que la interfaz siga los fundamentos de _visual design_


## 5. Pruebas unitarias

problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js`
