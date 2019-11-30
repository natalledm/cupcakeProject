<template>
    <footer class="footer">
        <p class="copyright"> Cupcakes & Cookies 2013. Todos os direitos reservados.</p>
        <p class="privacy">Conheça a nossa <a href="">Política de Privacidade</a>.</p>
        <nav class="contact-us">
            <ul>
                <li><router-link to="/"><img src="../assets/Icons/facebook.png" class="fab fa-facebook-f" alt="facebook"></router-link></li>
                <li><router-link to="/"><img src="../assets/Icons/linkedin.png" class="fab fa-linkedin-in" alt="facebook"></router-link></li>
                <li><router-link to="/"><img src="../assets/Icons/twitter.png" class="fab fa-facebook-f" alt="twitter"></router-link></li>
            </ul>
        </nav>
        <p class="privacy">Conheça a nossa <a href="">Política de Privacidade</a>.</p>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style lang="scss" scoped>

.footer {
    display: flex;
}

/*
.footer p {
    
}*/

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