<template>
    <header class="header">
            <router-link to="/home" class="logo"><img src="../assets/cupcake_cookies.png" alt="logo" class="logo"></router-link>
            <nav class="nav">
                <ul>
                    <li><router-link to="/home"><img src="../assets/Icons/house.png" alt="home"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/compass-arrow.png" alt="location"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/file.png" alt="bars"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/question-mark.png" alt="faq"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/person.png" alt="login" data-toggle="modal" data-target="#exampleModal"></router-link></li>
                </ul>
            </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'

}

</script>

<style lang="scss" scoped>

.header {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 10px;
}

nav {
    width: 100%;
    ul {
        padding: 0px;
        margin: 0px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
    }
}

nav li {
    list-style-type: none;
    padding-inline-start: 0;
    background-color: rgb(238, 36, 97);
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    width: 24px;
    justify-self: center;
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

    .logo {
        grid-area: logo;
    }

    .nav {
        grid-area: menu;
    }
}

</style>