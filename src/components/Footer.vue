<template>
  <b-row class="mb-5 footer-row">
    <b-col sm class="footer-col footer-col-1">
      <img src="../assets/companylogo.jpg" class="mb-3 mt-3" />
      <ul>
        <li>© 2006-2022</li>
        <li class="pb-2">All rights reserved</li>
      </ul>
    </b-col>
    <b-col sm class="footer-col footer-col-2">
      <ul class="second-list">
        <li>Tel: (416) 779-1605</li>
        <li>Toll Free: 1 (855) 779-1605</li>
        <li>e-mail: info@executiveminibus.com</li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer-col {
  text-align: center;
  background-color: #00345b !important;
  margin-top: 30px;
}
@media only screen and (max-width: 600px) {
    .footer-col-2 {
    margin-top: 0px;
  }
  .footer-row{
    margin-right: 3px;
    margin-left: 3px
  }
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white
}
.second-list{
    margin-top: 35px;
}
</style>