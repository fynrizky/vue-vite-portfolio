<template>
    <div id="experience"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
    >
      <!-- <div> -->
        <div
          class="row justify-content-center"
          v-if="currentWeather?.length != 0"
        >
          <div class="col-11 m-col mt-5">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="text-start">
                <button
                  class="btn btn-city btn-sm py-1 px-3 shadow-sm me-1"
                  :class="city == 'Penjaringan Jakarta' ? 'active' : ''"
                  @click="checkLocation('Penjaringan Jakarta')"
                >
                  Penjaringan
                </button>
                <button
                  class="btn btn-city btn-sm py-1 px-3 shadow-sm"
                  :class="city == 'Sumenep' ? 'active' : ''"
                  @click="checkLocation('Sumenep')"
                >
                  Sumenep
                </button>
              </div>
              <div class="text-end" v-if="yourLocation.latitude != ''">
                <button
                  class="btn btn-city btn-sm py-1 px-3 shadow-sm"
                  :class="city == 'Location' ? 'active' : ''"
                  @click="getWetaherByLocation(yourLocation)"
                >
                  Your Location
                </button>
              </div>
            </div>
            <div class="cardexp shadow-sm border-0">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-center">
                  <div class="text-center" style="width: 40%">
                    <div class="px-3">
                      <img
                        :src="currentWeather.condition.icon"
                        alt=""
                        class="w-50"
                        style="
                          animation: up-bottom 2s ease-in-out infinite alternate;
                        "
                      />
                    </div>
                    <p class="my-0" style="text-transform: capitalize">
                      {{ currentWeather.condition.text }}
                    </p>
                  </div>
                  <div
                    class="ps-2 text-end"
                    style="width: 60%"
                    v-if="locationWeather?.length != 0"
                  >
                    <h6 class="my-0">
                      {{
                        locationWeather.region + ", " + locationWeather.country
                      }}
                    </h6>
                    <h3 class="my-0">{{ locationWeather.name }}</h3>
                    <small class="">
                      {{ customDate(locationWeather.localtime) }}
                    </small>
                  </div>
                </div>
                <Splide
                  :options="{
                    perPage: 2,
                    width: '100%',
                    gap: 15,
                    arrows: false,
                    padding: { left: 0, right: 20 },
                    pagination: false,
                  }"
                  class="mt-2"
                  v-if="nextHour?.length != 0"
                >
                  <SplideSlide
                    class="align-items-stretch d-grid"
                    v-for="i in nextHour"
                    :key="i"
                  >
                    <div
                      class="
                        shadow-sm
                        card-weather
                        my-1
                        p-2
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                      style="border-radius: 10px"
                    >
                      <div class="pe-1" style="width: 40%">
                        <img
                          :src="i.condition.icon"
                          class="w-100"
                          style="animation: slide 2s ease-in-out infinite alternate"/>
                      </div>
                      <div class="text-end" style="width: 60%">
                        <p
                          class="my-0 position-absolute"
                          style="
                            line-height: 15px;
                            font-size: 0.75em;
                            top: 15px;
                            right: 10px;
                            ">
                          <i class="fa-regular fa-clock me-2"></i>
                          {{ customTime(i.time) }}
                        </p>
                        <p
                          class="my-0 mt-3 f-status"
                          style="line-height: 15px; text-transform: capitalize"
                        >
                          {{ i.condition.text }}
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        <!-- </div> -->
        <div class="ex-icon">
          <!-- <i class=""> -->
            <img src="../assets/img/tvalhalla.png" width="300" alt="">
          <!-- </i> -->
        </div>
      </div>
  
      <div
        class="experience"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div class="title">Experience</div>
        <div class="timeline d-flex align-items-end">
          <div class="timeline-sidebar">
            <div
              class="ts-list pointer-ex"
              :class="tab == 1 ? 'active shadow-sm' : ''"
              @click="tab = 1"
            >
              <div class="ts-year">March 2023</div>
              <div class="ts-pos">Debugging a Website Employee Attendance (CodeIgniter)</div>
              <!-- <hr class="my-1" /> -->
              <!-- <div class="ts-year">2019-2021</div>
              <div class="ts-pos">Software Engineer PHP</div> -->
            </div>
            <div
              class="ts-list pointer-ex"
              :class="tab == 2 ? 'active shadow-sm' : ''"
              @click="tab = 2"
            >
              <div class="ts-year">December 2022 - March 2023</div>
              <div class="ts-pos">Develop Website Application Service Printer</div>
            </div>
            <div
              class="ts-list pointer-ex"
              :class="tab == 3 ? 'active shadow-sm' : ''"
              @click="tab = 3"
            >
              <div class="ts-year">Dec 2019 - April 2020</div>
              <div class="ts-pos">fix bug Web administration RT/RW010 penjaringan</div>
            </div>
          </div>
          <div class="timeline-content text-end">
            <transition name="slide">
              <div v-if="tab == 1">
                Freelance
                <hr class="my-1" />
                - Looking for an error in the server side data Table that doesn't appear.
                <br>
                - create access rights for each user role session.
                <br>
                - Fixed an error in the data Table in the session user role.
                <br>
                - And Notify the error that occurred to the client.
                </div>
            </transition>
  
            <transition name="slide">
              <div v-if="tab == 2">
                Freelance
                <hr class="my-1" />
                - Planning the arrangement of tables in the database MySQL
                <br>
                - Organize folder Structure.
                <br>
                - Build a website using bootstrap, php and the javascript/jquery library
                <br>
                - Create an authentication with admin level role, create crud for each page admin and display report.
                </div>
            </transition>
  
            <transition name="slide">
              <div v-if="tab == 3">
                Open Source Web Dev
                <hr class="my-1" />
                - Planning the arrangement of tables in the database MySQL
                <br>
                - Build a website using bootstrap, php and the jquery javascript library create an authentication with admin level, create crud for each menu
                  and display report.
                <br>
                - Added a popover with Ajax jQuery to view family data by number Head of Family, add cover letter, display and print cover letter
              </div>
            </transition>
          </div>
        </div>
        <div class="more-details pt-4 py-4 d-flex justify-content-center" style="margin-bottom:-40px;">
          <i @click="redirect(detaillink)" class="btn btn-secondary">More Detail >> </i>
        </div>
      </div>
    </div>

  </template>
  
  <script>
  import axios from "axios";
  // import moment from "moment";
  import moment from "moment-timezone";
  import Swal from "sweetalert2";
  export default {
    name: "experienceComp",
    data() {
      return {
        detaillink: "https://fynrizky.github.io/",
        tab: 1,
        city: "Penjaringan Jakarta",
        localtime: "",
        locationWeather: [],
        currentWeather: [],
        forecastWeather: [],
        nextHour: [],
        yourLocation: {
          latitude: "",
          longitude: "",
        },
      };
    },  
    methods: {
      loading() {
        Swal.fire({
          width: "100px",
          allowOutsideClick: false,
          showConfirmButton: false,
          html: `<div><img src="https://drive.google.com/file/d/1DvFi7BrL4E3TMCTnmn9Y0MdphjujGfvp/view?usp=drivesdk" alt=""></div>`,
          timer: 5000,
        });
        // Swal.showLoading();
      },
      customDate(d) {
        let day = d.substr(0, 10);
        return moment(day).format("LL");
      },
      customTime(d) {
        return moment(d).format("LT");
      },
      showPosition(position) {
        this.yourLocation.latitude = position.coords.latitude;
        this.yourLocation.longitude = position.coords.longitude;
      },
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      },
      checkLocation(city) {
        this.city = city;
        this.getWeather(city);
      },
      async getWeather(city = "Penjaringan Jakarta") {
        this.loading();
        try {
          const response = await axios.get(
            "https://api.weatherapi.com/v1/forecast.json?key=61d9ab06af804125b17123311221507&q=" +
              city +
              "&aqi=yes"
          );
          this.locationWeather = response.data.location;
          this.currentWeather = response.data.current;
          this.forecastWeather = response.data.forecast;
          this.nextHour = [];
          let array = this.forecastWeather.forecastday[0].hour;
    
          array.forEach((i) => {
            if (i.time_epoch > this.locationWeather.localtime_epoch) {
              this.nextHour.push(i);
            }
          });
        } catch (e) {
          console.log(e.response);
        }
        Swal.close();
      },
      async getWetaherByLocation(i) {
        this.city = "Location";
        this.loading();
        try {
          const response = await axios.get(
            "https://api.weatherapi.com/v1/forecast.json?key=61d9ab06af804125b17123311221507&q=" +
              i.latitude +
              "," +
              i.longitude +
              "&aqi=yes"
          );
          this.locationWeather = response.data.location;
          this.currentWeather = response.data.current;
          this.forecastWeather = response.data.forecast;
          this.nextHour = [];
          let array = this.forecastWeather.forecastday[0].hour;
          array.forEach((i) => {
            if (i.time_epoch > this.locationWeather.localtime_epoch) {
              this.nextHour.push(i);
            }
          });
        } catch (e) {
          console.log(e.response);
        }
        Swal.close();
      },
      redirect(link){
        window.open(link, "_blank");
      }
    },
    created() {
      this.getWeather();
      this.getLocation();
    },
  };
  </script>
  
  <style lang="scss">
  .card-weather {
    // background: linear-gradient(-45deg, var(--color-6) 20%, var(--color-4) 100%);
    background: var(--color-6);
    color: var(--text-color-6);
  }
  .cardexp{
      position: relative;
      // background: var(--color-1);
      background: linear-gradient(-45deg, var(--color-5), var(--color-1));
      transition: all 0.4s;
      color: var(--text-color-1);
      box-shadow: var(--color-2);
      // min-width: 60%;
      border-radius: 20px;
      padding: 16px 20px;
  }
  .cardexp::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/img/pattern.jpg");
    background-size: 80%;
    border-radius: 20px;
    opacity: 0.1;
    // background-attachment: fixed;
  }
  
  .f-status {
    font-size: 0.9em;
  }
  .ex-icon {
    position: absolute;
    right: -150px;
    top: 220px;
    font-size: 8em;
    -webkit-transform: rotate(-30deg) !important;
    transform: rotate(-30deg) !important;
    opacity: 0.1;
    //color: var(--color-5);
    z-index: -1;
  }
  #experience{
    background: var(--color-7);
    margin-top: -20px;
    border-radius: 0 0 40px 40px;
    box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.5);
    position: relative;
    color: var(--text-color-7);
    z-index:2;
  }
  .experience {
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    padding: 40px 20px;
  }
  .more-details{
    i{ 
    background: var(--text-color-8);
    color: var(--color-8);
    border-color: var(--color-8);
    }
  }
  .timeline {
    width: 100%;
  }
  .timeline-sidebar {
    width: 40%;
  }
  .ts-list {
    display: block;
    padding: 10px 5px 10px 15px;
    border-left: 5px solid var(--color-1);
    transition: all 0.8s ease-in-out;
    // opacity: 0.5;
  }
  .ts-list::before {
    position: absolute;
    content: "";
    border-radius: 10px;
    height: 20px;
    width: 20px;
    margin-top: -2px;
    margin-left: -27px;
    background: var(--color-1);
    transition: all 0.4s ease-in-out;
    opacity: 1;
  }
  .ts-list.active::before {
    background: var(--color-5);
  }
  .ts-list.active {
    border-right: 2px solid var(--color-3);
    font-weight: bold;
    transition: all 0.4s ease-in-out;
    opacity: 1;
    // background-image: linear-gradient(60deg, var(--four) 50%, #fff);
    // color: var(--text-color-3);
    // border-radius: 0 10px 10px 0;
  }
  .ts-year {
    font-size: 0.7em;
  }
  .ts-pos {
    font-size: 0.8em;
  }
  .timeline-content {
    padding-left: 20px;
    width: 60%;
    font-size: 0.9em;
    font-weight: bold;
  }
  .btn-city {
    background: var(--color-1);
    color: var(--text-color-4);
    padding-top: 10px;
    border-radius: 20px;
    border: 0;
    transition: all 0.3s;
  }
  .btn-city:hover {
    background: var(--color-6);
    color: var(--text-color-6);
  }
  .btn-city.active {
    background: var(--color-5);
    color: var(--text-color-5);
  }
  .exp-active {
    background: var(--four) !important;
  }
  /*
    Enter and leave animations can use different
    durations and timing functions.
  */
  .slide-enter-active {
    transition: all 0.6s ease-out;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  </style>