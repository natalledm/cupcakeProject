<template>
    <div class="carousel-container">
        <Slider
            animation="fade"
            v-model="sliderValue"
            :duration="5000"
            :speed="1000"
        >
            <SliderItem
                v-for="(item, index) in list"
                :key="index"
                @click="changeIndex(1);"
                :style="item.style"
            >
                <div><img :src="item.src" alt="home"></div>
            </SliderItem>
        </Slider>
    </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
    name: 'Carousel',
    components: {
        Slider,
        SliderItem
    },
    data() {
        return {
        list: [],
        sliderValue: 1
        };
    },
    methods: {
        changeIndex(index) {
        this.sliderValue = index;
        }
    },
    mounted() {
        setTimeout(
        () =>
            (this.list = [
            {
                src: require('@/assets/carousel/01.jpg'),
                style: {
                    width: "100%",
                    height: "100%"
                }, 
            },
            {
                src: require('@/assets/carousel/02.jpg'),
                style: {
                    width: "100%",
                    height: "100%"
                },
            },
            {
                src: require('@/assets/carousel/03.jpg'),
                style: {
                    width: "100%",
                    height: "100%"
                },
            },
            {
                src: require('@/assets/carousel/04.jpg'),
                style: {
                    width: "100%",
                    height: "100%"
                },
            },
            {
                src: require('@/assets/carousel/05.jpg'),
                style: {
                    width: "100%",
                    height: "100%"
                },
            },
            ]),
        30
        );
    }
}
</script>

<style lang="scss" scoped>

</style>