<template>
    <div id="personal">
      <div class="intro">
        <div class="nameandtyped">Hy, I'm Rizky Fiyannur<br /></div>
        
        <VueWriter
          :array="[
            'Front-End?',
            'Bootstrap', 
            'Javascript', 
            'SCSS, Tailwind',
            'Vue/React',
            'Back-End?',
            'PHP, Nodejs',
            'Database?',
            'Mysql'

          ]"
          :eraseSpeed="40"
          :typeSpeed="50"
          :delay="3000"
          class="nameandtyped"
        />
      </div>
      
      <div class="card border-0">
        <div class="card-body">
            <div class="photo-profile">
                <img src="../assets/img/pp2.png" width="200px" class="rounded" alt="">
            </div>
          <div class="profil">
            <div class="desc">
              I'm a Web developer, I'm interested in Front-End and Back-End.
              I have basic knowledge of HTML, CSS, Javascript, PHP and Nodejs and Database Mysql.
              I am also interested in the field of Data Analysis.
              <!-- My motivation for learning is that I want  to be a developer who is behind the scenes where technology is created.  -->
            </div>
            <div class="foto">
              <!-- <img src="@/assets/img/hafidz.webp" alt="" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "personal-vue",
    data() {
      return {};
    },
    created() {},
  };
  </script>
  
  <style lang="scss">
  #personal {
    position: relative;
    transition: all 0.4s;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;
    z-index: 4;
  }
  .nameandtyped{
    color: var(--text-color-7);
  }
  .card .card-body .photo-profile{
    position: relative;
    margin: auto 55%;
    top: 122px;
    left: 2vh;
    right: 0;
    bottom: 0;    
    z-index: 1;
    margin-top: -200px;
  }
  .card {
    transition: all 0.4s;
    background: var(--color-1);
    color: var(--text-color-1);
    background: linear-gradient(-45deg, var(--color-5), var(--color-1));
    border-radius: 20px;
    position: relative;
    top: 20px;
  }
  .card::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/img/pattern.jpg");
    background-size: 20%;
    border-radius: 20px;
    opacity: 0.1;
    background-attachment: fixed;
  }
  .name {
    font-size: 1.5em;
    margin-bottom: -10px;
  }
  .intro {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .profil {
    position: relative;
    display: flex;
  }
  .desc {
    width: 60%;
    font-size: 0.8em;
  }
  .foto {
    position: relative;
    // overflow-x: hidden;
    width: 20%;
  }
  .foto img {
    position: absolute;
    bottom: -15px;
    right: -10px;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    .foto img {
      width: 120%;
    }
  }
  </style>