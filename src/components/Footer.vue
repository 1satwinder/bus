<template>
  <b-row class="mb-5 footer-row">
    <b-col sm class="footer-col footer-col-1">
      <b-row>
        <b-col class="fotter-logo" cols="5">
          <img src="../assets/maple-leaf.png" width="60" height="70"
        /></b-col>
        <b-col cols="7" class="fotter-name">
          <div>
            <h2>Executive</h2>
            <h5>Minibus Services</h5>
          </div></b-col
        >
      </b-row>
      <ul>
        <li>Operated by E.M.S Copyright © 2000-2023</li>
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
  padding-top: 10px;
}
.fotter-logo{
  text-align: right;
  padding-right: 0;
}
.fotter-name{
  text-align: left;
  padding-left: 0 !important
}
h2,h5{
  color: white;
}

@media only screen and (max-width: 600px) {
  .footer-col-2 {
    margin-top: 0px;
  }
  .footer-row {
    margin-right: 3px;
    margin-left: 3px;
  }
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: white;
}
.second-list {
  margin-top: 35px;
}
</style>