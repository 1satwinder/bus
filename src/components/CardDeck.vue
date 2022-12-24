<template>
  <div>
    <b-card-group class="card-group" deck>
      <b-card>
        <b-card-img
          class="card-image"
          :height="150"
          :src="require('../assets/insurance.png')"
        ></b-card-img>
        <b-card-text>
          Count on all-inclusive rates — that's all taxes, tips, and tolls —
          confirmed before booking.
        </b-card-text>
      </b-card>

      <b-card>
        <b-card-img
          class="card-image"
          :height="150"
          :src="require('../assets/customer.png')"
        ></b-card-img>
        <b-card-text>
          Stay flexible and in charge of your schedule. It’s quick and easy for
          you to cancel or make changes to any ride.
        </b-card-text>
      </b-card>

      <b-card>
        <b-card-img
          class="card-image"
          :height="150"
          :src="require('../assets/guarantee.png')"
        ></b-card-img>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "CardDeck",
};
</script>
<style scoped>
.card-image {
  width: 200px;
  margin-bottom: 30px;
}
.card-body{
  text-align: center;
}
.card-text{
  font-weight: 500
}
.card-group{
  margin:0;
  padding: 0;
}
</style>
