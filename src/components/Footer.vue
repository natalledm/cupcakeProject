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

.footer-container {
    background-color: rgb(238, 36, 97);
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    // grid-column-gap: 0px;
    // grid-row-gap: 0px;
}

.line1 { 
    padding: 10px;
    color: white;
}

.line1 p {
    margin-top: 0;
    margin-bottom: 0;
}

.line2 { 
    padding: 10px;
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