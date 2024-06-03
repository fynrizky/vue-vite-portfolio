<template>
    <div 
        id="education"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
    >
        <div class="title">School</div>
        <Splide>
            <SplideSlide>
                <div class="edu-card">
                    <div class="school">
                        <h4>Institut Teknologi <br> Dan Bisnis Swadharma</h4>
                        <h5>Information System</h5>
                    </div>
                    <div class="year">2015-2020</div>
                    <div class="edu-img">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="edu-card">
                    <div class="school">
                        <h4>SMK NEGERI 56 </h4>
                        <h5>Technical Light Vehicle <br> (Automotive)</h5>
                    </div>
                    <div class="year">2009-2012</div>
                    <div class="edu-img">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
   export default {
    name: "education",
   }
</script>

<style lang="scss">
    #education {
        position: relative;
        padding: 20px;
        background: var(--color-6);
        border-radius: 0 0 40px 40px;
        box-shadow: 0px 12px 10px -5px rgb(0, 0, 0, 0.5);
        z-index: 1;
    }
    .edu-content {
        position: relative;
        width: 100%;
        padding-bottom: 20px;
        overflow: auto;
        display: flex;
    }
    .edu-card {
        position: relative;
        // background: var(--color-1);
        background: linear-gradient(-45deg, var(--color-5), var(--color-1));
        transition: all 0.4s;
        color: var(--text-color-1);
        box-shadow: var(--color-2);
        // min-width: 60%;
        border-radius: 20px;
        padding: 10px 50px;
    }
    .edu-card::before{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../assets/img/pattern.jpg);
        background-size: 50%;
        border-radius: 20px;
        opacity: 0.1;
    }

    .school{
        min-height: 50px;
    }
    .school h4 {
        font-size: 1.2em;
        margin-bottom: 0;
    }
    .school h5 {
        font-size: 1em;
        // margin-bottom: 0;
    }

    .year{
        background: var(--color-1);
        display: inline;
        padding: 5px 10px;
        border-radius: 20px;
        color: var(--text-color-2);
        font-size: 0.7em;
    }
    .edu-img{
        position: absolute;
        right: -20px;
        bottom: 0px;
        font-size: 6em;
        transform: rotate(-40deg);
        opacity: 0.1;
        color: var(--text-color-1);
        transition: all 0.3s ease-in-out;
    }

    .edu-card:hover .edu-img, .edu-img:hover{
        transform: rotate(-20deg);
    }
</style>
