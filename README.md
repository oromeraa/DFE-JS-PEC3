oromeraa
Omar Romera Aller
## Ejercicio 1
Hecho. Pero he tenido lios con iniciar git en una directorio superior. Al final lo he iniciado en le mismo proyecto de Angular. He renombrado el README.md generado por Angular a README_angular.md y he creado uno nuevo llamado README.md que es el de la PEC de la asignatura. Se ha creado usando Angular actual pero con la estructura antigua que sigue el libro de la bibliografía. Es decir, sin standalone ni routing y con style CSS.
## Ejercicio 2
Juego de mesa creado y añadido al index.html. He hecho un botón para debugar el comportamiento con isOnSale.
## Ejercicio 3
Implementadas directivas. Aquí confieso que he hecho trampas y he usado una IA para crear una barra inferior de debug que me permite modificar en tiempo real variables de otros componentes con el fin de ir debugando los cambios que voy haciendo. En este caso ha sido para conmutar isOnSale pero sin estar dentro de la propia tarjeta de producto, no sé si en los siguientes ejercicios me será útil pero espero que sí para poder separar los poderes del estado.
## Ejercicio 4
Se empieza a complicar la cosa pero creo que empiezo a entender como funciona Angular. Automatiza y modulariza el código. Por otro lado no sé cómo pero se ha descontrolado git. Seguiré a partir de ahora solo tirando commits a main. 
## Ejercicio 5
Hecha navbar con enlaces a futuras opciones. He intentado usar bootstrap y he conseguido poner la navbar. El footer no acababa de salir bien. También he limpiado el código cosa de debug de los primeros ejercicios.
## Ejercicio 6
Formulario hecho con validación en todos los campos obligatorios.

La regex ^https?:://[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$ valida lo que pide exactamente el enunciado pero no valida ni la dirección propuesta ni cualquier web dirección. Faltan extensiones, caracteres especiales, www., etc... se utiliza ^https?:\/\/(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9\-]+(\.[a-zA-Z]+)?)*$ con esta nuevo regex, contemplamos muchos más casos (www., guiones en el dominio, subrutas con o sin extension)
## Ejercicio 7
