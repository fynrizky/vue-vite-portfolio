<template>
    <div
    id="portfolio"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    >
        <div class="p-card">
            <div class="row title-ptf title">
                Portfolio
            </div>
            
            <div class="row mb-2 mx-2">
                <div class="col-12">
                <div class="detail-img" >
                  <a :href="detail.link" target="_blank">
                    <img
                    :src="getImageUrl(detail.img)"
                    class="w-100"
                    style="border-radius: 15px"
                    />
                  </a>
                </div>
                <div class="p-title">{{ detail.title }}</div>
                <div class="p-label">{{ detail.cat }}</div>
                <div class="p-description">
                    {{ detail.desc }}
                </div>

                <div class="p-tech justify-content-between">
                    <div class="text">Tools</div>
                    <div class="p-icon">
                    <div class="float-end">
                        <div class="d-flex">
                        <i class="circle" v-for="i in detail.tech" :key="i">
                            <img :src="getImageTechUrl(i)" />
                        </i>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        <!-- Splide -->
            <Splide
                :options="{
                autoplay: true,
                perPage: 2,
                width: '100%',
                interval: 4000,
                gap: 10,
                type: 'loop',
                arrows: false,
                pagination: false,
                padding: { left: 0, right: 40 },
                }"
            >
                <SplideSlide
                class="position-relative overflow-hidden shadow-sm mx-3"
                v-for="i in list"
                :key="i"
                >
                <div class="card-list" @click="chekDetail(i)">
                    <div class="img-sum position-relative overflow-hidden">
                      <img :src="getImageUrl(i.img)" class="w-100"/>
                    <div class="title-sum text-center">
                        <p class="my-0">{{ i.title }}</p>
                    </div>
                    </div>
                </div>
                </SplideSlide>
        </Splide>
      <!-- end splide -->

        </div>
    </div>
</template>
<script>

export default {
  name: "portfolioComp",
  components: {},
  data() {
    return {
      detail: {
        title: "Quran-Murotal",
        cat: "Front-end Web Development",
        img: "fynrizky-ngaji-quran.png",
        desc: "made using redux and typescript. request data to the server using axio, displays surah, listens to murotal and has a bookmark as marker.",
        link: "https://fynrizky-ngaji-quran.vercel.app",
        tech: [
          "front-end/tailwind-css.svg",
          "front-end/javascript-1.svg",
          "front-end/react-js.svg",
          "back-end/nodejs.svg",            
          "tools/redux.svg",
          "tools/typescript.svg",
        ],
      },
      list: [
        {
          title: "Quran-Murotal",
          cat: "Front-end Web Development",
          img: "fynrizky-ngaji-quran.png",
          desc: "made using redux and typescript. request data to the server using axio, displays surah, listens to murotal and has a bookmark as marker.",
          link: "https://fynrizky-ngaji-quran.vercel.app",
          tech: [
            "front-end/tailwind-css.svg",
            "front-end/javascript-1.svg",
            "front-end/react-js.svg",
            "back-end/nodejs.svg",            
            "tools/redux.svg",
            "tools/typescript.svg",
          ],
        },
        {
          title: "Personal-Website",
          img: "fynrizky-vue.png",
          cat: "Fullstack Web Development",
          desc: "Made using Vue Vite. Request and can display weather conditions, mobile first, responsive. using firebase for backend.",
          link: "https://fynrizky-vue.vercel.app",
          tech: [
            "back-end/firebase-1.svg",
            "front-end/javascript-1.svg",
            "front-end/vue-js.svg",
            "front-end/sass-1.svg",
            "front-end/css-3.svg",
            "front-end/bootstrap-5.svg",
          ],
        },
       
      ],
    };
  },
  methods: {
    chekDetail(i) {
      this.detail = i;
    },
    getImageUrl(imgFileName) {
      if(imgFileName){
        return new URL(`../assets/img/portfolio/${imgFileName}`, import.meta.url).href;
      }
    },
    getImageTechUrl(technology) {
      if(technology){
        return new URL(`../assets/img/icon/${technology}`, import.meta.url).href;
      }
    },
  },

}
</script>
<style lang="scss">
    #portfolio  {
        position: relative;
        z-index: 0;
        background: var(--color-7) ;
        padding-top: 40px;
        // padding-bottom: 40px;
        margin-top: -30px;
        min-height: 100vh;
        border-top-left-radius:50px;
        border-top-right-radius:50px;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        background-color: white;
        box-shadow: 0px -2px 12px 5px rgb(0,0,0,0.5) ;
    }
    .p-card .title-ptf{
    margin-left: 20px;
    }
    
.p-slide img {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s;
}

.p-slide img:hover {
  transform: scale(1.1);
}

.ription {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 70%;
  background: var(--color-4);
  color: var(--text-color-4);
  margin: auto;
  z-index: 9;
  padding: 20px;
  font-size: 1em;
  border-radius: 0 0 10px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.card-pt:hover .ription {
  bottom: 0;
}

.detail-img {
  position: relative;
  overflow: hidden;
  height: 250px;
  border-radius: 15px;
}

.detail-img img {
  object-fit: cover;
  object-position: top;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.detail-img:hover img {
  transform: scale(1.1);
}

.p-title {
  font-size: 1.1em;
  font-weight: 600;
  margin: 15px 0 10px 0;
}

.p-label {
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 5px;
}

.p-description {
  font-size: 0.9em;
  margin-bottom: 10px;
}

.p-tech {
  display: flex;
  align-items: center;
  background: var(--color-2);
  border-radius: 15px;
  margin-top: 15px;
}

.p-tech .text {
  padding-left: 10px;
  font-size: 0.8em;
}

.p-icon {
  background: var(--color-1);
  padding: 5px 10px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
}

.circle {
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 30px;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle img {
  width: 60%;
}

.card-list {
  background: var(--color-5);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}

.img-sum {
  height: 80px;
}

.img-sum img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  // border-radius: 10px;
  // animation: slide 3s ease-in-out alternate infinite;
}

.title-sum {
  position: absolute;
  background: var(--color-1);
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: all 0.3s;
}

.title-sum p {
  font-size: 0.8em !important;
  padding: 10px;
  line-height: 15px !important;
  color: var(--text-color-1);
}

.img-sum:hover .title-sum {
  left: 0;
}
</style>