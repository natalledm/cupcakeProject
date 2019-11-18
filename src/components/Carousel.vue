<template>
    <div class="carousel-container">
    <p>Hey! </p>
        <div class="carousel slide" id="carouselExample" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExample" data-slide-to="1"></li>
                <li data-target="#carouselExample" data-slide-to="2"></li>
                <li data-target="#carouselExample" data-slide-to="3"></li>
                <li data-target="#carouselExample" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="" alt="First slide" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Banner images/01.jpg" alt="Second slide" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Banner images/02.jpg" alt="Third slide" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Banner images/03.jpg" alt="Fourth slide" class="d-block">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Banner images/04.jpg" alt="Fifth slide" class="d-block">
                </div>
            </div>
            <a href="#carouselExample" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a href="#carouselExample" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: 'Carousel'
}
</script>

<style lang="scss" scoped>

</style>