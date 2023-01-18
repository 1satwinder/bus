<template>
  <div class="form-container mt-4">
    <b-form
      name="service-request-form"
      @submit="onSubmit"
      @reset="onReset"
      data-netlify="true"
      netlify
      method="POST"
      data-netlify-honeypot="bot-field"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="service-request-form" />
      <b-input-group id="input-group-1" prepend="First Name*">
        <b-form-input
          name="firstName"
          id="input-1"
          v-model="formData.firstName"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Last Name*" class="mt-2">
        <b-form-input
          name="lastName"
          id="input-2"
          v-model="formData.lastName"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Telephone *" class="mt-2">
        <b-form-input
          id="input-3"
          name="telephone"
          v-model="formData.telephone"
          type="tel"
          minlength="10"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="Fax" class="mt-2">
        <b-form-input
          id="input-4"
          name="fax"
          v-model="formData.fax"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-group-1" prepend="E-Mail Address *" class="mt-2">
        <b-form-input
          id="input-5"
          name="email"
          v-model="formData.email"
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
          name="selectedService"
          v-model="formData.selectedService"
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
          name="isPrepareQuote"
          v-model="formData.isPrepareQuote"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          name="isPrepareQuote"
          v-model="formData.isPrepareQuote"
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
          name="selectedSize"
          v-model="formData.selectedSize"
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
          id="input-9"
          name="numOfPeople"
          v-model="formData.numOfPeople"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-10" class="mt-2" prepend="Meet and Greet? :">
        <b-form-radio
          name="selectedMeet"
          v-model="formData.selectedMeet"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          v-model="formData.selectedMeet"
          name="selectedMeet"
          class="mt-2 ml-2"
          value="No"
          >No</b-form-radio
        >
      </b-input-group>

      <b-input-group id="input-11" class="mt-2" prepend="Coordinator(s) :">
        <b-form-radio
          v-model="formData.selectedCoordinator"
          name="selectedCoordinator"
          class="mt-2 ml-4"
          value="Yes"
          >Yes</b-form-radio
        >
        <b-form-radio
          v-model="formData.selectedCoordinator"
          name="selectedCoordinator"
          class="mt-2 ml-2"
          value="No"
          >No</b-form-radio
        >
      </b-input-group>

      <b-input-group id="input-12" class="mt-2" prepend="Special Needs?:*">
        <b-form-input
          name="specialNeeds"
          v-model="formData.specialNeeds"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="input-13" class="mt-2" prepend="Hours of Charter*:">
        <b-form-input
          id="input-13"
          name="hours"
          v-model="formData.hours"
          type="number"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="needs-input" class="mt-2" prepend="Pick up Location*:">
        <b-form-input
          id="input-1"
          name="location"
          v-model="formData.location"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group id="needs-input" class="mt-2" prepend="City:">
        <b-form-input
          id="input-1"
          name="city"
          v-model="formData.city"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-2" prepend="Departure Date and Time *:">
        <b-form-datepicker
          id="example-datepicker-1"
          name="depDate"
          v-model="formData.depDate"
          class="pt-2 pt-2"
          placeholder=""
        ></b-form-datepicker>
        <b-form-timepicker
          v-model="formData.depTime"
          name="depTime"
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
          v-model="formData.destinationAddress"
          name="destinationAddress"
          type="text"
          required
        ></b-form-input>
      </b-input-group>

      <b-input-group class="mt-2" prepend="Return Date and Time * :">
        <b-form-datepicker
          id="example-datepicker-2"
          name="RetDate"
          v-model="formData.RetDate"
          class="pt-2 pt-2"
          placeholder=""
        ></b-form-datepicker>
        <b-form-timepicker
          v-model="formData.RetTime"
          name="RetTime"
          locale="en"
          placeholder=""
        ></b-form-timepicker>
      </b-input-group>

      <b-form-group id="needs-input" class="mt-2" label=" Comments*:">
        <b-form-textarea
          id="textarea"
          name="comments"
          v-model="formData.comments"
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
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        telephone: "",
        fax: "",
        email: "",
        selectedService: "",
        isPrepareQuote: "",
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
      },
      services: [
        { text: "SELECT ONE", value: null, disabled: true },
        "Airport Transfer",
        "Toronto Sightseeing",
        "Niagara Falls Sightseeing",
        "Winery Tours",
        "Hourly Charter",
        "Pick up and drop off only",
      ],
      sizes: [{ text: "Select One", value: null }, "14 Pax", "11 Pax", "7 Pax"],
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    onSubmit(event) {
      event.preventDefault();
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "service-request-form",
            ...this.formData,
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.formData.firstName = "";
      this.formData.lastName = "";
      this.formData.telephone = "";
      this.formData.fax = "";
      this.formData.email = "";
      this.formData.selectedService = "";
      this.formData.isPrepareQuote = "";
      this.formData.selectedSize = "";
      this.formData.numOfPeople = "";
      this.formData.selectedMeet = "";
      this.formData.selectedCoordinator = "";
      this.formData.specialNeeds = "";
      this.formData.hours = "";
      this.formData.depDate = "";
      this.formData.depTime = "";
      this.formData.RetDate = "";
      this.formData.RetTime = "";
      this.formData.location = "";
      this.formData.city = "";
      this.formData.comments = "";
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