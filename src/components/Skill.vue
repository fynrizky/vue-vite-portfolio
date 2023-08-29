<template>
   <div
    id="skill"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <div class="title">Skills</div>
    <div class="tab">
      <div
        class="tab-item"
        :class="tab == 'all' ? 'active' : ''"
        @click="tab = 'all'"
      >
        ALL
      </div>
      <div
        class="tab-item"
        :class="tab == 'backend' ? 'active' : ''"
        @click="tab = 'backend'"
      >
        Back-End
      </div>
      <!-- <div
        class="tab-item"
        :class="tab == 'backendfw' ? 'active' : ''"
        @click="tab = 'backendfw'"
      >
        BE-FW
      </div> -->
      <div
        class="tab-item"
        :class="tab == 'frontend' ? 'active' : ''"
        @click="tab = 'frontend'"
      >
        Front-End
      </div>
      <div
        class="tab-item"
        :class="tab == 'frontendfw' ? 'active' : ''"
        @click="tab = 'frontendfw'"
      >
        FE-FW
      </div>
      <div
        class="tab-item"
        :class="tab == 'database' ? 'active' : ''"
        @click="tab = 'database'"
      >
        Database
      </div>
      <div
        class="tab-item"
        :class="tab == 'lib' ? 'active' : ''"
        @click="tab = 'lib'"
      >
        Library
      </div>
      <div
        class="tab-item"
        :class="tab == 'tools' ? 'active' : ''"
        @click="tab = 'tools'"
      >
        Tools
      </div>
    </div>
    <div class="content mt-2">
      <div
        class="
          row row-cols-5
          g-2
          align-items-lg-stretch
          justify-content-center
          mb-2
        "
      >
        <!-- {{skill.backend}} -->
        <!-- Back-End  -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'backend' ? 'd-flex ' : 'd-none'"
          v-for="i in skill.backend"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center"
            @click="getContent(i.name)"
          >
            <img 
              :src="i.icon"
              :alt="i.icon"
              loading="lazy"
            />
          </div>
        </div>

        <!-- BE-Framework  -->
        <!-- <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'backendfw' ? 'd-flex ' : 'd-none'"
          v-for="i in skill.backendfw"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center"
            @click="getContent(i.name)"
          >
            <img
              :src="i.icon"
              :alt="i.icon"
              loading="lazy"
            />
          </div>
        </div> -->

        <!-- {{ skill.frontend }} -->
        <!-- Front-End Basic  -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'frontend' ? 'd-flex' : 'd-none'"
          v-for="i in skill.frontend"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center p-2"
            @click="getContent(i.name)"
            v-if="tab == 'all' || tab == 'frontend'"
          >
            <img :src="i.icon" :alt="i.icon" />
          </div>
        </div>
        
        <!-- Front-End Framework -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'frontendfw' ? 'd-flex' : 'd-none'"
          v-for="i in skill.frontendfw"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center p-2"
            @click="getContent(i.name)"
            v-if="tab == 'all' || tab == 'frontendfw'"
          >
            <img :src="i.icon" :alt="i.icon" />
          </div>
        </div>
       
        <!-- Database -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'database' ? 'd-flex' : 'd-none'"
          v-for="i in skill.database"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center p-2"
            @click="getContent(i.name)"
            v-if="tab == 'all' || tab == 'database'"
          >
            <img :src="i.icon" :alt="i.icon" />
          </div>
        </div>

        <!-- Library  -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'lib' ? 'd-flex' : 'd-none'"
          v-for="i in skill.library"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center p-2"
            @click="getContent(i.name)"
            v-if="tab == 'all' || tab == 'lib'"
          >
            <img :src="i.icon" :alt="i.icon" />
          </div>
        </div>
        
        <!-- Tools  -->
        <div
          class="col animate__bounceIn"
          :class="tab == 'all' || tab == 'tools' ? 'd-flex' : 'd-none'"
          v-for="i in skill.tool"
          :key="i"
          :style="{ animationDelay: (index + 1) * 200 + 'ms' }"
        >
          <div
            class="skill-icon animated align-items-center p-2"
            @click="getContent(i.name)"
            v-if="tab == 'all' || tab == 'tools'"
          >
            <img :src="i.icon" :alt="i.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="wiki-overlay" v-if="wiki" @click="wiki = !wiki"></div>
  <div class="position-fixed p-3 wiki" :class="wiki ? 'active' : ''">
    <div class="d-flex justify-content-between">
      <h6 class="wiki-title">{{ shortDesc.name }}</h6>
      <div class="text-end" @click="wiki = !wiki">
        <i class="fa-solid fa-times"></i>
      </div>
    </div>
    <hr class="my-0 mb-2" />
    <p class="wiki-content" v-html="shortDesc.desc"></p>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "skillComp",
  data() {
    return {
      tab: "all",
      skill: {
        backend: [
          {
            name: "PHP",
            icon: new URL('../assets/img/icon/back-end/php-1.svg', import.meta.url).href,
          },
          {
            name: "Node.js",
            icon: new URL('../assets/img/icon/back-end/nodejs.svg', import.meta.url).href,
          },
          {
            name: "Go_(programming_language)",
            icon: new URL('../assets/img/icon/back-end/golang.svg', import.meta.url).href,
          },
          
        ],
        // backendfw: [
        //   {
        //     name: "Express.js",
        //     icon: new URL('../assets/img/icon/back-end/express.svg', import.meta.url).href,
        //   },
        //   {
        //     name: "Laravel",
        //     icon: new URL('../assets/img/icon/back-end/laravel2.svg', import.meta.url).href,
        //   },
        // ],
        frontend: [
          {
            name: "JavaScript",
            icon: new URL('../assets/img/icon/front-end/javascript-1.svg', import.meta.url).href,
          },
          {
            name: "Sass_(style_sheet_language)",
            icon: new URL('../assets/img/icon/front-end/sass-1.svg', import.meta.url).href,
          },
        ],
        frontendfw: [
          {
            name: "Bootstrap_(front-end_framework)",
            icon: new URL('../assets/img/icon/front-end/bootstrap-5.svg', import.meta.url).href,
          },
          {
            name: "Tailwind_CSS",
            icon: new URL('../assets/img/icon/front-end/tailwind-css.svg', import.meta.url).href,
          },
        ],
        database:[
          {
            name: "MySQL",
            icon: new URL('../assets/img/icon/back-end/mysql-4.svg', import.meta.url).href,
          },
          {
            name: "Firebase",
            icon: new URL('../assets/img/icon/back-end/firebase-1.svg', import.meta.url).href,
          },
        ],
        library:[
          // {
          //   name: "JQuery",
          //   icon: new URL('../assets/img/icon/front-end/jquery.svg', import.meta.url).href,
          // },
        {
          name: "Redux_(JavaScript_library)",
          icon: new URL('../assets/img/icon/tools/redux.svg', import.meta.url).href,
        },
      ],
      tool: [
          {
            name: "TypeScript",
            icon: new URL('../assets/img/icon/tools/typescript.svg', import.meta.url).href,
          },
          {
            name: "Web_server",
            icon: new URL('../assets/img/icon/tools/laragon.svg', import.meta.url).href,
          },
         
        ],
      },
      wiki: false,
      shortDesc: {
        name: "",
        desc: "",
      },
    };
  },
  methods: {
    async getContent(skill) {
      this.loading();
      try {
        const response = await axios.get(
          "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&formatversion=2&exsentences=3&titles=" +
            skill +
            "&origin=*&format=json",
          {
            timeout: 6500,
          }
        );
        console.log(response.data)
        this.wiki = true;
        this.shortDesc.name = response.data.query.pages[0].title;
        this.shortDesc.desc = response.data.query.pages[0].extract;

      } catch (e) {
        console.log(e.response);
      }
      Swal.close();
    },
    loading() {
      Swal.fire({
        width: "100px",
        allowOutsideClick: false,
      });
      Swal.showLoading();
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.swal2-container.swal2-center > .swal2-popup {
  background: rgb(255, 255, 255) !important;
  border-radius: 15px !important;
}
#skill {
  margin-top: -30px;
  padding: 50px 20px 50px 20px;
  cursor: pointer;
  background: var(--color-8);
  z-index: 0;
  // opacity: 0.2;
}
.title {
  color: var(--text-color-5) !important;
}
.tab {
  position: relative;
  width: 100%;
  padding: 10px 0;
  height: auto;
  overflow: auto;
  display: flex;
}
.tab::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/* Track */
.tab::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(150, 220, 183);
  border-radius: 10px;
}
/* Handle */
.tab::-webkit-scrollbar-thumb {
  background: rgb(218, 218, 218);
  border-radius: 10px;
}
.tab-item {
  background: var(--color-6);
  color: var(--text-color-7);
  font-weight: bold;
  padding: 5px 20px;
  margin-right: 8px;
  display: inline;
  white-space: nowrap;
  border-radius: 40px;
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.tab-item.active {
  background: var(--color-4);
  color: var(--text-color-1);
}
.skill-card {
  width: 20% !important;
  margin-right: 10px;
}
.skill-icon {
  padding: 0px 10px;
  background: var(--color-6);
  // background-image: linear-gradient(15deg, var(--secondary), var(--primary));
  border-radius: 10px;
  min-height: 80px;
  display: flex;
}

.skill-icon img {
  width: 100%;
  align-items: center;
  padding: 5px;
  transition: all 0.3s;
  transform-origin: center center;
}

.skill-icon.animated img {
  animation: up-bottom 1s ease-in-out alternate infinite;
}

.skill-icon.animated{
  transition : transform 0.3s ease-in-out;
}
.skill-icon.animated:hover{
  transform: scale(1.2);
}


.wiki-overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #31678966;
  z-index: 99998;
  transition: all 0.3s ease-in;
}
.wiki {
  background: var(--background);
  top: 0;
  margin-left: -350px;
  width: 350px;
  height: 100vh;
  overflow: auto;
  opacity: 0;
  z-index: 99999;
  transition: all 0.3s ease-in;
}
.wiki.active {
  opacity: 1;
  margin-left: 0;
}
.wiki-title {
  font-size: 1.4em;
}
.wiki-content > h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1.2em;
}
</style>