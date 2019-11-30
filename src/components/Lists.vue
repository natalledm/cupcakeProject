<template>

    <div class="lists">

<!--from here I changed the names of all div and ul class="" I can easily change it back in case we need it! -->

        <div class="grid">
            <h2 class="titles second-title">Conheça algumas opções de doces</h2>

            <h3 class="title">Opção X</h3>
            <p class="text">
                Tart marzipan tart pastry cake jelly-o.
                sugar plum pudding macaroon 
                liquorice I love. Pastry desert cookie
                tart. I love I love topping danish.
            </p>
                <ul class="grid-list">
                    <li>Candy cane cheesecakes;</li>
                    <li>Apple pie wafer;</li>
                    <li>Tiramisu cupckake;</li>
                    <li>Lemon drops faworki;</li>
                </ul>

            <button class="button-see-more"><router-link to="/"><img src="../assets/Icons/file.png" alt="recipes">see more</router-link></button>
        </div>

        <div class="grid grid2">
            <h3 class="title">Option Y</h3>

            <p class="text">
                Halvah wypas pudding I love candy
                toffee. Jelly beans chupa chups
                pudding danish I love donut. I love
                danish bonbon jelly-o I love gummies
                cotton candy marzipan danish. Donut
                sweet pastry jujubes croissant.
            </p>
            <ul class="grid-list">
                <li>Tootsie roll cheesecakes;</li>
                <li>Chupa chups wafer;</li>
                <li>Danish marzipan;</li>
            </ul>

            
            <button class="button-see-more"><i class="fas fa-plus-circle"></i>veja mais</button>=======
            <button class="button-see-more"><router-link to="/"><img src="../assets/Icons/file.png" alt="recipes">see more</router-link></button>

        </div>
            
        <div class="grid grid3">
            <h3 class="title">Option Z</h3>
            <p class="text">
                Licorice toffee marzipan lemon drops
                chocolate cake ice cream.
            </p>
            <ul class="grid-list">
                <li>Chocolate cheesecakes;</li>
                <li>Chupa chups ice cream;</li>
                <li>Swedish marzipan;</li>
                <li>Brownie pie gummi bear</li>

            
            </ul>
            <button class="button-see-more"><i class="fas fa-plus-circle"></i>veja mais</button>
    </div>

    <div class="button-and-text">
        <button class="button-test"><router-link to="/"><img src="../assets/Icons/heart.png" class="fas fa-heart" alt="Faça um teste!"></router-link>Faça um teste!</button>
        <h3 class="text-motivation"> Cupcake ipsum dolor sit amet carrot cake marshmallow wypas. Muffin lemon drops I love caramels chocolate bar.</h3>
            <button class="button-see-more"><router-link to="/"><img src="../assets/Icons/file.png" alt="recipes">see more</router-link></button>
        </div>
    <!---
        <div class="button-and-text">
            <button class="button-test"><router-link to="/"><img src="../assets/Icons/heart.png" alt="heart">Do a test!</router-link></button>
            <h3 class="text-motivation"> Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Eget est lorem ipsum dolor.</h3>
        </div>
    -->

    </div>
</template>

<script>
export default {
    name: 'Lists'
}

</script>

<style lang="scss"> 
/*Todo: li under p class text and rubrik.*/

.lists {
        box-sizing: border-box;

    margin: 0;

        padding: 0;
    }


    @media (min-width: 768px) and (max-width: 1023px) {
        // tablet
        .header {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 2fr;
            padding: 10px;
        }
    }

    @media (min-width: 1024px) {
        .header {
            grid-template-areas: 
                'logo . menu';
            grid-template-rows: 1fr;
            grid-template-columns: auto 1fr auto;
            padding: 20px;
        }
    }

    .body {
        background-color: #fff1f5;
        color: rgb(238, 36, 97);
    }

    @font-face {
        font-family: 'SignikaLight';
        font-style: normal;
        font-weight: 400; /* Do I need to specify eg. font-weight for different titles here (eg.700 for h2 etc) How to write this the best way??*/
        src: local("Signika-Light"), url('../assets/Fonts/Signika-Light.ttf') format("woff");
    }

    .h2 {
        color: rgb(238, 36, 97);
        font-weight: 700;
        text-align: left;
    }

    .grid {
        width: 100%;
        margin: 0px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    /*  grid-template-rows: auto;  */
    }


    .grid grid-list {
        grid-template-columns: 1fr;
        }
        /*
        display: grid;
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        -ms-grid-rows: 1fr;
        grid-template-rows: 1fr;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr; 
        align-self: start; 
    } */

    .text-motivation {
        font-family: Signika;
        color: slategray;
        font-weight: 700;
    }

    .title {
        font-family: 'SignikaLight';
        color: rgb(238, 36, 97);
        font-weight: 500;
        text-align: left;
    }

    .grid-list {
        list-style-type: none;
    }

    .grid-list li:before {
        content: '✓';
    }


    .text {
        margin-block-start: 0;
        width: 80%;
    }

    .grid-list > li {
    list-style-position: outside;

    }

    /* todo 22.11.2019::: CSS + rounded corners for buttons + resize */
    /* ASK - do we need one coherent line around Header/carousel + lists + footer?*/

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
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
    }

    .button-test {
    /* background-image: url('.assets/Icons/heart.png'); */
        font-size: 24px;
        font-weight: 550;
        text-align: center; /* this made no change, why? */
        color: whitesmoke;
        background-color: rgb(238, 36, 97);
        border-radius: 50px;
        /* width: 450px;
        height: 80px; */
        padding: 20px;
    }

    /* targeting i which I have deleted" gave an unnessecary icon? :) 
    .button-test i {
        color: rgb(238, 36, 97);
        border-radius: 50%;
        background-color: white;
        padding: 10px;
    }
    */

    .text-motivation {
        font-style: italic;
        padding-left: 20px;
        font-weight: 300;
        font-size: x-large;
        margin-block-start: 0.5em;
    }

</style>