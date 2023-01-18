<template>
  <b-container class="bv-example-row pt-2">
    <b-row class="mb-5">
      <b-col md="4" xs="12" class="services-list" order-xs="2" order-md="0">
        <b-card class="list-header list-card" no-body header="OUR SERVICES">
          <b-list-group flush>
            <b-list-group-item variant="primary" href="#"
              >TOURS AND CHARTERS</b-list-group-item
            >
            <b-list-group-item variant="primary" href="#"
              >SHUTTLE SERVICE</b-list-group-item
            >
            <b-list-group-item variant="primary" href="#"
              >AIRPORT TRANSFERS</b-list-group-item
            >
            <b-list-group-item variant="primary" href="#"
              >TORONTO SIGHT SEEING</b-list-group-item
            >
            <b-list-group-item variant="primary" href="#"
              >NIAGARA FALLS SIGHTSEEING</b-list-group-item
            >
            <b-list-group-item variant="primary" href="#"
              >LIMOUSINE SERVICE
            </b-list-group-item>
            <b-list-group-item variant="primary" href="#"
              >WINERY TOURS
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col md="8" order-xs="1">
        <Carousel />
      </b-col>
    </b-row>
    <CardDeck />
  </b-container>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CardDeck from "../components/CardDeck.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    CardDeck,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.attachRight {
  text-align: right;
}
.list-header {
  color: red;
  font-weight: bolder;
}
.bv-example-row {
  padding-right: 0px;
  padding-left: 6px;
}
@media only screen and (max-width: 600px) {
  .list-card {
    text-align: center;
  }
}
</style>
