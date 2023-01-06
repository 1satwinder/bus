<template>
  <div class="container">
    <img
      src="./assets/homeImagenew.jpg"
      class="top-image"
      fluid
      alt="Responsive image"
    />
    <hr class="separater" />
    <div id="nav">
      <b-navbar toggleable="lg" class="navbarclass" type="dark" variant="info">
        <b-navbar-brand href="#">Executive Minibus Services </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/">
                <b-button variant="light">HOME</b-button>
              </router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/aboutus">
                <b-button variant="light">ABOUT US</b-button>
              </router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/services">
                <b-button variant="light">SERVICES</b-button>
              </router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/clients">
                <b-button variant="light">CLIENTS</b-button>
              </router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/contactus">
                <b-button variant="light">CONTACT US</b-button>
              </router-link></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <Footer class="mb-5"></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Footer },
};
</script>

<style scoped>
* {
  font-family: "Times New Roman";
}
img {
  width: 100%;
  height: 120px;
}
.navbarclass {
  background-color: #00345b !important;
}

.separater {
  margin: 0.5px;
}
.container {
  background: #F1F6F5;
}
</style>

