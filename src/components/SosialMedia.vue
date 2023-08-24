<template>
    <div id="sosmed">
      <div class="title text-end">Social Media</div>
      <div class="row align-items-center g-2">
        <div class="col-7">
          <div class="sosmed-icon">
            <i :class="desc.icon"></i>
          </div>
          <div class="sosmed-card">
            <label class="d-block">{{ desc.type }}</label>
            <div class="sosmed-name">{{ desc.name }}</div>
            <button class="sosmed-btn shadow mt-3" @click="redirect(desc.link)">
              {{ desc.button }} <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        <div class="col-5">
          <div class="row row-cols-3 g-2">
            <div class="col" @click="checkTab('email')">
              <div class="icon" :class="tabIcon == 'email' ? 'active' : ''">
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div class="col" @click="checkTab('ig')">
              <div class="icon" :class="tabIcon == 'ig' ? 'active insta' : ''">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div class="col" @click="checkTab('fb')">
              <div class="icon" :class="tabIcon == 'fb' ? 'active fbblue' : ''">
                <i class="fa-brands fa-facebook-f"></i>
              </div>
            </div>
            <div class="col" @click="checkTab('linkedin')">
              <div class="icon" :class="tabIcon == 'linkedin' ? 'active linkedin' : ''">
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div class="col" @click="checkTab('github')">
              <div class="icon" :class="tabIcon == 'github' ? 'active github' : ''">
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
            <div class="col" @click="checkTab('twitter')">
              <div class="icon" :class="tabIcon == 'twitter' ? 'active twitter' : ''">
                <i class="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "socialMedia",
    data() {
      return {
        desc: {
          icon: "fa-solid fa-envelope",
          type: "Email",
          name: "fiyaniky25@gmail.com",
          link: "mailto:fiyaniky25@all-inedu.com",
          button: "Send a Email",
        },
        tabIcon: "email",
      };
    },
    methods: {
      checkTab(n) {
        this.tabIcon = n;
        if (n == "email") {
          this.desc.icon = "fa-solid fa-envelope";
          this.desc.type = "Email";
          this.desc.name = "fiyaniky25@gmail.com";
          this.desc.link = "mailto:fiyaniky25@all-inedu.com";
          this.desc.button = "Send a Email";
        } else if (n == "ig") {
          this.desc.icon = "fa-brands fa-instagram";
          this.desc.type = "Instagram";
          this.desc.name = "@_fynrizky";
          this.desc.link = "https://www.instagram.com/_fynrizky/";
          this.desc.button = "Follow";
        } else if (n == "fb") {
          this.desc.icon = "fa-brands fa-facebook-f";
          this.desc.type = "Facebook";
          this.desc.name = "Rizky Fiyannur";
          this.desc.link = "https://web.facebook.com/rizpoint/";
          this.desc.button = "Add to Friend";
        } else if (n == "linkedin") {
          this.desc.icon = "fa-brands fa-linkedin";
          this.desc.type = "Linkedin";
          this.desc.name = "Rizky Fiyannur";
          this.desc.link =
            "https://www.linkedin.com/in/rizky-fiyannur-a91952150/";
          this.desc.button = "Follow";
        } else if (n == "github") {
          this.desc.icon = "fa-brands fa-github";
          this.desc.type = "Github";
          this.desc.name = "Rizky Fiyannur";
          this.desc.link = "https://github.com/fynrizky/";
          this.desc.button = "Visit Now";
        } else if (n == "twitter") {
          this.desc.icon = "fa-brands fa-x-twitter";
          this.desc.type = "Twitter";
          this.desc.name = "Rizky Fiyannur";
          this.desc.link = "#";
          this.desc.button = "Follow";
        }
      },
      redirect(link) {
        window.open(link, "_blank");
      },
    },
    created() {},
  };
  </script>
  
  <style lang="scss">
  #sosmed {
    position: relative;
    transition: all 0.4s;
    // background: var(--color-5);
    background-image: linear-gradient(200deg, var(--color-1), var(--color-5));
    color: var(--text-color-5);
    margin-top: -30px;
    padding: 100px 20px 30px 20px;
    border-radius: 40px 40px 40px 40px;
    box-shadow: 5px 12px 10px -5px rgb(0, 0, 0, 0.5);
    z-index: 3;
  }
  .col-7 {
    position: relative;
    margin-top: -100px;
  }
  .sosmed-card label {
    font-size: 0.8em;
  }
  .sosmed-icon {
    position: absolute;
    right: 15px;
    font-size: 2.5em;
    bottom: -15px;
    z-index: 0;
    opacity: 0.1;
    // color: var(--text-color-1);
  }
  .sosmed-name {
    position: relative;
    z-index: 1;
    font-size: 1.1em;
  }
  .sosmed-btn {
    background: var(--color-6);
    color: var(--text-color-6);
    padding: 5px 15px;
    font-size: 0.8em;
    border: 0;
    border-radius: 20px;
  }
  .icon {
    width: 100%;
    background: var(--color-6);
    color: var(--text-color-6);
    box-shadow: var(--color-3);
    padding: 7px 10px;
    text-align: center;
    border-radius: 10px;
    font-size: 1.3em;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  .icon.icon i {
    transition: all 0.2s ease-in-out;
  }
  .icon.active {
    background: var(--color-4);
    color: var(--text-color-4);
  }
  .icon.fbblue{
    background: var(--fbblue-c);
  }
  .icon.insta{
    background: var(--insta-c);
  }
  .icon.twitter{
    background: var(--twitter-c);
  }
  .icon.github{
    background: var(--github-c);
  }
  .icon.linkedin{
    background: var(--linkedin-c);
  }
  .icon.icon.active i {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  </style>