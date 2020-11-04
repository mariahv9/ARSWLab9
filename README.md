### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/en-us/free/search/?&ef_id=Cj0KCQiA2ITuBRDkARIsAMK9Q7MuvuTqIfK15LWfaM7bLL_QsBbC5XhJJezUbcfx-qAnfPjH568chTMaAkAsEALw_wcB:G:s&OCID=AID2000068_SEM_alOkB9ZE&MarinID=alOkB9ZE_368060503322_%2Bazure_b_c__79187603991_kwd-23159435208&lnkd=Google_Azure_Brand&dclid=CjgKEAiA2ITuBRDchty8lqPlzS4SJAC3x4k1mAxU7XNhWdOSESfffUnMNjLWcAIuikQnj3C4U8xRG_D_BwE). Al hacerlo usted contará con $200 USD para gastar durante 1 mes.

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/postman.png)

6. Cree una nueva Function que resuleva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memoization. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.

**Función Memorizada**

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/memoF.png)

* Ejecución Inicial con valor 10

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/inicio10.png)

* Ejecución Final con valor 10

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/fin10.png)

* Ejecución Inicial con valor 30

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/inicio30.png)

* Ejecución Final con valor 30

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/fin30.png)

* Diagrama de la ejecución memorizada

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/memomemo.png)

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/ejecucionMemo.png)

**Preguntas**

* ¿Qué es un Azure Function?
* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe

Realizamos la instalación de newman en nuestra máquina y ejecutamos el comando.

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/proof1.png)

**Resultados**

* Primera Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/1.png)

* Segunda Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/2.png)

* Tercera Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/3.png)

* Cuarta Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/4.png)

* Quinta Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/5.png)

* Sexta Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/6.png)

* Séptima Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/7.png)

* Octava Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/8.png)

* Novena Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/9.png)

* Décima Ejecución

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/10.png)

Se puede observar que los tiempos de ejecución son similares y durante la ejecución no hubo errores.

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/10est.png)

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/new.png)

![](https://github.com/mariahv9/ARSWLab9/blob/main/resources/ejecuciones.png)

## Construido con 

* [Javascript](https://www.javascript.com/)
* [Postman](https://www.postman.com/) 
* [Azure Microsoft](https://azure.microsoft.com/) 

## Reviewed

Diego Alfonso Prieto Torres

## Authors

* **Alan Yesid Marin Mendez** - [PurpleBooth](https://github.com/Elan-MarMEn)
* **Maria Fernanda Hernandez Vargas** - [PurpleBooth](https://github.com/mariahv9)


Students of Systems Engineering of Escuela Colombiana de Ingenieria Julio Garavito 
