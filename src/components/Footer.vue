<template>
    <footer class="footer-container">
        <div class="line1">
            <p class="copyright"> Cupcakes & Cookies 2013. All rights reserved.</p>
            <p class="privacy">Read our <a href="">Privacy Policy</a>.</p>
        </div>
        <div class="line2">
            <nav class="contact-us">
                <ul>
                    <li><router-link to="/"><img src="../assets/Icons/facebook.png" alt="facebook"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/linkedin.png" alt="facebook"></router-link></li>
                    <li><router-link to="/"><img src="../assets/Icons/twitter.png" alt="twitter"></router-link></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

@font-face {
    font-family: 'SignikaLight';
    font-style: normal;
    font-weight: 400;
    src: local("Signika-Light"), url('../assets/Fonts/Signika-Light.ttf') format("woff");
}

.footer-container {
    background-color: rgb(238, 36, 97);
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-family: 'SignikaLight';
    padding: 40px 10px;
}

.line1 { 
    color: white;
    font-style: italic;
}

.line1 p {
    margin-top: 0;
    margin-bottom: 0;
}

.line1 a {
    color: white;
}

.contact-us li {
    padding: 5px;
}


@media (min-width: 768px) and (max-width: 1023px) {
    // tablet
    .footer {
        padding: 10px;
    }
}

@media (min-width: 1024px) {
    .footer {
        padding: 10px;
    }
}

nav {
    ul {
        padding: 0px;
        margin: 0px;
        overflow: hidden;
    }
}

nav li {
    list-style-type: none;
    float: left;
}
</style>