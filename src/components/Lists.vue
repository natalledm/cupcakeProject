<template>
   <div class="lists">
 
 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <link rel="stylesheet" type="text/css" media="screen" href="style.css">
		<link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link href="https://fonts.googleapis.com/css?family=Signika:300,400,600,700" rel="stylesheet">
		
<title>Cupcakes & Cookies</title>
</head>

<body>


<h2 class="titles second-title">Conheça algumas opções de doces</h2>

<!--from here I changed the names of all div and ul class="" I can easily change it back in case we need it! -->

   <div class="grid">
	<div class="grid grid1">

            <h3 class="title">Opção X</h3>
            <p class="text">
			Tart marzipan tart pastry cake jelly-o.<br>
			sugar plum pudding macaroon <br>
			liquorice I love. Pastry desert cookie<br>
			tart. I love I love topping danish.<br><br>
            </p>
                <ul class="grid-list">
						<li>Candy cane cheesecakes;</li>
						<li>Apple pie wafer;</li>
						<li>Tiramisu cupckake;</li>
						<li>Lemon drops faworki;</li>
                </ul>
            </br>
            <button class="button-see-more"><i class="fas fa-plus-circle"></i>veja mais</button>
        </div>
       
            
        <div class="grid grid2">
        <h3 class="title">Opção Y</h3>
            <p class="text">
			Halvah wypas pudding I love candy<br>
			toffee. Jelly beans chupa chups<br>
			pudding danish I love donut. I love<br>
			danish bonbon jelly-o I love gummies<br>
			cotton candy marzipan danish. Donut<br>
			sweet pastry jujubes croissant.
            </p>
			
			<ul class="grid-list">
                <li>Tootsie roll cheesecakes;</li>
                <li>Chupa chups wafer;</li>
                <li>Danish marzipan;</li>
            </ul>
            </br/>
            <button class="button-see-more"><i class="fas fa-plus-circle"></i>veja mais</button>
        </div>
		
      <div class="grid grid3">
            <h3 class="title">Opção Z</h3>
            <p class="text">
			Licorice toffee marzipan lemon drops<br>
			chocolate cake ice cream.
            </p>
			
            <ul class="grid-list">
                <li>Chocolate cheesecakes;</li>
                <li>Chupa chups ice cream;</li>
                <li>Swedish marzipan;</li>
                <li>Brownie pie gummi bear</li>
            </br>
            </ul>
            <button class="button-see-more"><i class="fas fa-plus-circle"></i>veja mais</button>
      </div>

<div class="button-and-text">
        <button class="button-test"><i class="fas fa-heart"></i> Faça um teste!</button>
        <h3 class="text-motivation"> Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget est lorem ipsum dolor.</h3>
</div>

<!-- </div> -->

</body>
</html>

    </div> 
</template>

<script>
export default {
    name: 'Lists'
}

</script>

<style lang="scss">

* {
  box-sizing: border-box;

margin: 0;

  padding: 0;
}

.body {
    font-family: Signika;
    background-color: #fff1f5;
    color: rgb(238, 36, 97);
}

@font-face {

    font-family: 'SignikaLight';
  
    font-style: normal;
  
    font-weight: 400; /* Do I need to specify eg. font-weight for different titles here (eg.700 for h2 etc) How to write this the best way??*/
  
    src: local("Signika-Light"), url(http://themes.googleusercontent.com/static/fonts/signika/v3/koFYE26bhT88HgRA8f4vbRsxEYwM7FgeyaSgU71cLG0.woff) format("woff");
  
  }

.h2 {

}

.grid {
    width: 100%;
    margin: 0px;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-rows: auto; 
}

.grid-list {
    display: grid;
    display: -ms-grid;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: 1fr;
    grid-template-rows: 1fr;
    align-self: start;
}

.h3 {

}

ul { list-style-type: none; 
}

ul li:before {
  content: '✓';
}

.text {
    margin-block-start: 0;
    width: 80%;
}

.grid-list > li {
list-style-position: outside;

}

/* todo 22.11.2019::: CSS + rounded corners for buttons + resize CHECK Natalles code for this CSS */
/* ASK - do we need a common line around carousel + lists + footer?*/

.button-see-more {
    color: white;
    background-color: rgb(238, 36, 97);
    border-radius: 25px;
    width: 120px;
    height: 36px;
}

.button-see-more i {
    color: white;
    padding-right: 5%;
}

.button-and-text {
    display: flex;
    flex-direction: row;
    padding: 20px;
}

.button-test {
    font-size: 24px;
    color: white;
    background-color: rgb(238, 36, 97);
    border-radius: 50px;
    width: 275px;
    height: 79px;
    padding: 10px;
}

.button-test i {
    color: rgb(238, 36, 97);
    border-radius: 50%;
    background-color: white;
    padding: 10px;
}

.text-motivation {
    font-style: italic;
    padding-left: 20px;
    font-weight: 300;
    font-size: x-large;
    margin-block-start: 0.5em;
}

</style>