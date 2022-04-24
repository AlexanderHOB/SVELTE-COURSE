# 1. Base Syntax & Core Features

Con esto, si usamos el botón Incrementar, veremos que muestra el mensaje correcto. Lo que hace **el símbolo `$` es avisar a *Svelte* que esta sentencia es reactiva** y el framework detectará dentro de esa declaración qué variables se están usando (en este caso `counter`) de forma que, cada vez que se actualice ese valor, pasará a ejecutar de nuevo la sentencia.

```jsx
<script>
	 let counter = 2;

	 $: isEvenMessage = counter % 2 === 0 ? 'Is Even' : 'Is Odd'

		// usando $, podemos añadir declaraciones completas si
		 $: {
		   if (counter > 9) {
		     counter = 9
		   }
		 }
		 const handleClick = () => counter++
		</script>
```

**A Outputting HTML Content**

```jsx
@html 
//example
<p>{**@html** description}</p>
//Alert with XSS
```