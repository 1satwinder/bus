<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car4.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car5.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="395"
            src="../assets/carouselImages/car6.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide> -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 strech-image carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car7.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car8.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100 carousel-img"
            width="1024"
            height="395"
            src="../assets/carouselImages/car9.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .carousel-img {
    object-fit: fill;
    height: 280px;
    width: 100%;
  }
}
</style>