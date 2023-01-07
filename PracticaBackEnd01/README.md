# Práctica BackEnd "El amarre"

Un modo de preguntar a tu amor platónico si quiere ser parte de tu vida con el menor esfuerzo posible.

Práctica para mejorar el codificar con javaScript.

Veremos el procedimiento en apartados separados según la complejidad de lo requerido, comencemos:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles-dist.css"></link>
    <title>Amarre</title>
  </head>
  <body>
    <div class="modo_sexy">
      <h1>MODO SEXY ACTIVADO</h1>
    </div>
    
    <video width="720" type="video/mp4" src="img/QuieresSerMiNovia.mp4" controls autoplay loop muted>
      NO SE PUEDE VER ESTE VIDEO
    </video>
    <h2>DI QUE SÍ</h2>
    <button id="btn_si">SÍ</button>
    <button id="btn_no">no</button>
  </body>
  <footer>
    <script src="index.js"></script>
  </footer>
</html>
```

Con esto tenemos terminado el HTML básico por el momento

## Revisemos

En estos momentos tenemos algunos atributos:

### `controls`
Con este atributo para `<audio></audio>` como para `<video></video>`el navegador ofrecerá controles para permitir al usuario controlar la reproducción de vídeo, incluido el volumen, la búsqueda y la pausa/reanudación de la reproducción.

Se puede utilizar el atributo `controlslist` para ayudarle al explorador a seleccionar qué controles mostrar papara el elemento video y el explorador muestre su propio conjunto de controles (es decir, cuando se especifique el atributo `controls`). los valores permitidos són: `nodownload`, `nofullscreen`, `noremoteplayback` y `disablepictureinpicture` si se desea deshabilitar el modo Picture-In-Picture (y el control).

### `autoplay`
Que se puede utilizar tanto para `<audio></audio>` como para `<video></video>` que incorporan un reproductor multimedia que admite la reproducción de video y/o audio en el documento
### `loop`
Es un atributo booleano, si se lo coloca, el navegador reproducirá automáticamente el video al principio una vez termine este

### `muted`
Debemos saber que hoy en día no se puede reproducir video automáticamente si no tiene la propiedad de muted.

Otro atributo booleano que indica la configuración predeterminada del audio contenido en el video. Si se configura, el audio se silenciará inicialmente. Su valor predeterminado es `false`, lo que significa que el audio se reproducirá cuando se reproduzca el video.

---

## CSS

Enchulemos un poco nuestra página.

```CSS
body{
  box-sizing: border-box;
  background-color: #554488;
}

button{
  cursor: pointer;
}

h1{
  color: azure;
}

h2{
  color: violet;
}
.modo_sexy{
  height: 1080px;
  position: absolute;
  display: flex;
  width: 100%;
}

#btn_si{
  background-color: forestgreen;
  border-color: cadetblue;
  color: azure;
  font-size: xx-large;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;

}
```
Con esto hecho, el `<h1></h1>` en estos momentos se encuentra sobre el video, sin embargo esperamos cambiarlo con JS más adelante.

---

## JavaScript

Ahora daremos interactividad a nuestra página dándole funcionalidad a nuestros botones de SI y no.

Lo que queremos es: Si dice que SÍ activar el modo sexy y que muestre todo en rojo, con el texto de modo sexy activado y reproduzca la canción hot "/img/MarvinGaye-SexualHealing.mp3".
Con el no, queremos que se mueva y que no se pueda clickear sobre él, por si acaso...

En JavaScript haremos:

```js
// bueno, primero necesitamos que se mueva

function moverPosicionRandom(elm){
  // Posición absoluta para que se pueda mover a todos lados.
  elm.style.position = 'absolute';

  // los style en posición tienen left, right, top and botton
  // si lo queremos mover random debemos especificar 2 valores cruzados
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';// lo * por el tamaño de la ventana ``innerHeight`` es decir saca la medida de la altura del área del navegador. `offsetHeight` nos dá la altura del elemento incluyendo paddings y borders, lo hacemos para que no se salga de la pantalla.
  
  elm.style.top = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px'; // lo mismo que el anterior pero a lo ancho.
}
```
Esto nos queda.
```js
function moverPosicionRandom(elm){
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
```
Ahora los botones:

```js
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
// Veamos que document.getElementsByClassName dice Elements, lo que significa que trabaja con varias clases pero como solo tenemos uno agarraremos el primero es decir el vslor 0
let divModoSexy = document.getElementsByClassName("modo_sexy")[0];

// Al btnNo le colocaremos un addEventListener(), lo que hace es escuchar cuando pase algo, y que debe pasar ('mouseenter') que cuando entre el mouse pase la función(e) que moverá de manera random con nuestro moverPosicionRandom indicando a quien con e.target

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)})

```
El documento js queda:

```js
function moverPosicionRandom(elm){
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexy = document.getElementsByClassName("modo__sexy")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});

```
Ahora, que es lo que hicimos¿?

Primero creamos una función `function moverPosicionRandom` que recibe un elemento `(elm){}` que puede ser cualquier cosa, pero esperamos un elemento de DOM, de html, cambiaremos su posición a absoluto `elm.style.position = 'absolute';` y generaremos números aleatorios empezando posicionalmente por el top `elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';` y multiplicados por la resta del tamaño de la ventana, aqui vemos la altura y en este otro `elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';` el ancho de nuestro elemento para que no se salga concatenando `px` para eso.

Recordemos que concatenar en JavaScript con el `+` y este más lo convertiría en `string`, recordemos que JS es de tipado dinámico.

Mas abajo de este código tenemos variables para obtener los elementos por su `id` `document.getElementById` con `("btn_si")` `("btn_no")` y nuestro layout del `("modo__sexy")` pero como lo colocamos como clase y no como `id` entonces utilizamos `getElementsByClassName()` pero este nos da un `array` un arreglo, lo hacemos funcionar simplemente llamando al primer elemento `[0]` y listo, con esto terminamos la preparación para nuestros eventos.

Ya solo agregamos el comportamiento que esperamos de nuestro botón no `btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});`.

Ahora que pasa si nos dice que sí:

```js
btnSi.addEventListener('click', function(e) {
  alert('sabía que me aceptarías. TE AMO!!! 💕')
  
  divModoSexy.style.display = 'block';
  
});
```

Con esto enviaremos un mensaje de alerta `alert()` con la leyenda `'sabía que me aceptarías. TE AMO!!! 💕'` y para ir un poco más allá `divModoSexy.style.display = 'block'`, el `block` muestra nuestro archivo, pero existen 2 tipos de `display` más, `hidden` lo esconde pero sigue existiendo, si le queremos colocar algo encima y no está como `position: absolute;` no nos lo permitirá y `none`, con este desaparece el elemento 

1.47.47

2.00.00