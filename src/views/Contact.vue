<template>
  <div class="form-container mt-4">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-input-group id="input-group-1" prepend="First Name*">
        <b-form-input
          id="input-1"
          v-model="firstName"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Last Name*" class="mt-2">
        <b-form-input
          id="input-2"
          v-model="lastName"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Telephone *" class="mt-2">
        <b-form-input
          id="input-3"
          v-model="telephone"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Fax" class="mt-2">
        <b-form-input
          id="input-4"
          v-model="fax"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="E-Mail Address *" class="mt-2">
        <b-form-input
          id="input-5"
          v-model="email"
          type="email"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group
        id="input-group-3"
        prepend="Request A Service *"
        class="mt-2"
      >
        <b-form-select
          id="input-6"
          v-model="selectedService"
          :options="services"
          required
        ></b-form-select>
      </b-input-group>

      <b-input-group
        id="input-7"
        class="mt-2"
        prepend="Is it okay if we phone you while we are preparing this quote * :"
      >
        <b-form-radio
          v-model="selectedRadio1"
          name="radio1"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          v-model="selectedRadio1"
          name="some-radios"
          class="mt-2 ml-2"
          value="No"
          >No</b-form-radio
        >
      </b-input-group>

      <b-input-group
        id="input-8"
        prepend="Size of Minibus, excluding the Driver * :"
        class="mt-2"
      >
        <b-form-select
          id="input-13"
          v-model="selectedSize"
          :options="sizes"
          required
        ></b-form-select>
      </b-input-group>

      <b-input-group
        id="input-9"
        prepend="Number of People Traveling*:"
        class="mt-2"
      >
        <b-form-input
          id="input-1"
          v-model="numOfPeople"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-10" class="mt-2" prepend="Meet and Greet? :">
        <b-form-radio
          v-model="selectedMeet"
          name="meet"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          v-model="selectedMeet"
          name="meet"
          class="mt-2 ml-2"
          value="No"
          >No</b-form-radio
        >
      </b-input-group>

      <b-input-group id="input-11" class="mt-2" prepend="Coordinator(s) :">
        <b-form-radio
          v-model="selectedCoordinator"
          name="Coordinator"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          v-model="selectedCoordinator"
          name="Coordinator"
          class="mt-2 ml-2"
          value="No"
          >No</b-form-radio
        >
      </b-input-group>

      <b-input-group id="input-12" class="mt-2" prepend="Special Needs?:*">
        <b-form-input
          v-model="specialNeeds"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-13" class="mt-2" prepend="Hours of Charter*:">
        <b-form-input v-model="hours" type="number" required></b-form-input>
      </b-input-group>

      <b-input-group id="needs-input" class="mt-2" prepend="Pick up Location*:">
        <b-form-input
          id="input-1"
          v-model="location"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="needs-input" class="mt-2" prepend="City:">
        <b-form-input
          id="input-1"
          v-model="city"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-2" prepend="Departure Date and Time *:">
        <b-form-datepicker
          id="example-datepicker-1"
          v-model="depDate"
          class="pt-2 pt-2"
          placeholder=""
        ></b-form-datepicker>
        <b-form-timepicker
          v-model="depTime"
          locale="en"
          placeholder=""
        ></b-form-timepicker>
      </b-input-group>

      <b-input-group
        id="needs-input"
        class="mt-2"
        prepend="Destination address:"
      >
        <b-form-input
          id="input-1"
          v-model="destinationAddress"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-2" prepend="Return Date and Time * :">
        <b-form-datepicker
          id="example-datepicker-2"
          v-model="RetDate"
          class="pt-2 pt-2"
          placeholder=""
        ></b-form-datepicker>
        <b-form-timepicker
          v-model="RetTime"
          locale="en"
          placeholder=""
        ></b-form-timepicker>
      </b-input-group>

      <b-form-group id="needs-input" class="mt-2" label=" Comments*:">
        <b-form-textarea
          id="textarea"
          v-model="comments"
          placeholder="Such as Special Needs, Intermediate Stops, Meet and Greet Service, etc"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button class="" type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      firstName: "",
      lastName: "",
      telephone: "",
      fax: "",
      email: "",
      selectedService: "",
      selectedRadio1: "",
      selectedSize: "",
      numOfPeople: "",
      selectedMeet: "",
      selectedCoordinator: "",
      specialNeeds: "",
      hours: "",
      depDate: "",
      depTime: "",
      RetDate: "",
      RetTime: "",
      location: "",
      city: "",
      destinationAddress: "",
      comments: "",
      services: [
        { text: "SELECT ONE", value: null, disabled: true },
        "Airport Transfer",
        "Toronto Sightseeing",
        "Niagara Falls Sightseeing",
        "Winery Tours",
        "Hourly Charter",
        "Pick up and drop off only",
      ],
      sizes: [{ text: "Select One", value: null }, "14", "11", "7", "Pax"],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.firstName = "";
      this.lastName = "";
      this.telephone = "";
      this.fax = "";
      this.email = "";
      this.selectedService = "";
      this.selectedRadio1 = "";
      this.selectedSize = "";
      this.numOfPeople = "";
      this.selectedMeet = "";
      this.selectedCoordinator = "";
      this.specialNeeds = "";
      this.hours = "";
      this.depDate = "";
      this.depTime = "";
      this.RetDate = "";
      this.RetTime = "";
      this.location = "";
      this.city = "";
      this.comments = "";
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 70%;
  margin: auto;
}
.service-card {
  text-align: right;
}
.list-heading {
  text-align: center;
}
.card-sub-heading {
  font-weight: 300;
}

@media only screen and (max-width: 600px) {
  .form-container {
    width: 100%;
  }
}
</style>