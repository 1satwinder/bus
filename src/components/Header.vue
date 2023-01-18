<template>
    <div class="hi">
      <div class="news">
        <div>
          <div class="company-logo">
            <img src="../assets/maple-leaf.png" width="60" height="70" />
            <div>
              <h2>Executive</h2>
              <h5>Minibus Services</h5>
            </div>
          </div>
          <div class="god">
            <h6 class="text-center">OWNED BY GOD</h6>
            <h6>Operated by Executive Minibus Services</h6>
          </div>
        </div>
  
        <div class="image-box">
          <img src="../assets/nathan.jpg" width="230" height="138" />
        </div>
        <div class="top-right-text">
          <h5>WE SPECIALIZE IN SMALL GROUPS TOURS</h5>
          <h5 class="text-right">AND CHARTERS</h5>
          <h5 class="text-right">AND SHUTTLE SERVICE</h5>
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
    box-shadow: 0 0 5px 10px #10446b;
    /* box-shadow: 0 0 5x 10px #10446b inset;
    padding: 5px; */
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
  .top-right-text{
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
  </style>