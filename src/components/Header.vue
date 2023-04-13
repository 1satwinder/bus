<template>
  <div class="hi">
    <div class="news">
      <div>
        <div class="company-logo">
          <img src="../assets/maple-leaf.png" width="60" height="70" />
          <div>
            <h2 class="mobile-font-title">Executive</h2>
            <h5 class="mobile-font">Minibus Services</h5>
          </div>
        </div>
        <div class="god">
          <h6 class="text-center">OWNED BY GOD <br/> Operated by Executive Minibus Services</h6>
          <!-- <h6>Operated by Executive Minibus Services</h6> -->
        </div>
      </div>

      <div class="image-box">
        <img src="../assets/square.jpg" width="230" height="130" />
      </div>
      <div class="top-right-text">
        <h5 class="text-right">
          WE SPECIALIZE IN SMALL GROUPS TOURS<br class="line-breaker"/>
          AND CHARTERS<br class="line-breaker"/>
          AND SHUTTLE SERVICE
        </h5>
      </div>
    </div>
  </div>
</template>
    
  <style scoped>
.news {
  display: flex;
  justify-content: space-around;
}
.image-box {
  /* box-shadow: 0 0 5px 10px #10446b; */
  /* filter: drop-shadow(0px 10px 0px #10446b); */
  box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8);
}
.text-right {
  text-align: right;
}
.god {
  margin-top: 5px;
  color: red;
}
.text-center {
  text-align: center;
}
.top-right-text {
  margin-top: 25px;
}
.hi {
  width: 100%;
  height: 130px;
  background: rgb(0, 52, 91);
  color: white;
}
.company-logo {
  margin-top: 7px;
  display: flex;
  flex-basis: 300px;
}
* {
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 800px) {
  .image-box {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
 .company-logo{
  margin-left: 25px;
 }
  .top-right-text {
  display: none;
}
.text-right{
  font-size: 16px;
}
.line-breaker{
  display: none;
}
}

</style>