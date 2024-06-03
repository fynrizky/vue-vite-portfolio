<template>
    <div id="resume" :class="loading? ' pt-4' : ''">
        <transition name="fade">
        <div class="" v-if="loading">
            <div class="d-flex align-content-between align-items-center w-100 px-2">
                <div class="w-50"></div>
                <div class="w-50 px-3">
                    <div class="form-check form-switch float-end" style="position: relative; z-index: ;10000001">
                        <i :style="status? 'color: black; font-size: 20px;' : 'color: yellow; font-size:20px;'" :class="status ? 'fa fa-moon icon-i': 'fa fa-sun icon-i'"></i>
                        <input class="form-check-input pointer"
                            v-model="status"
                            type="checkbox"
                            role="switch"
                            @change="checkStatus"/>
                    </div>  
                </div>
            </div>
            <v-personal />
            <v-sosmed />
            <v-exp />
            <v-education />
            <v-skill />
            <v-portfolio />
            <v-contact />
            <!-- <v-hw msg="Rizky" /> -->
        </div>
    </transition>    
    </div>
</template>
<script>
// import HelloWorld from '../components/HelloWorld.vue';
import VPersonal from '../components/Personal.vue';
import VSosmed from '../components/SosialMedia.vue';
import VExperience from '../components/Experience.vue';
import VEducation from '../components/Education.vue';
import VSkill from '../components/Skill.vue';
import VPortfolio from '../components/Portfolio.vue';
import VContact from '../components/ContactForm.vue';
export default {
    name : "App",
    components: {
        // "v-hw" : HelloWorld,
        "v-personal" : VPersonal,
        "v-sosmed" : VSosmed,
        "v-exp" : VExperience,
        "v-education" : VEducation,
        "v-skill" : VSkill,
        "v-portfolio" : VPortfolio,
        "v-contact" : VContact,
    },
    data(){
        return{
            loading: false,
            mode:"",
            status: true,
        };
    },
    methods: {
        
        checkStatus() {
            if(this.status){
                document.documentElement.setAttribute("data-theme","light");
            }else{
                document.documentElement.setAttribute("data-theme","dark");
            }
        },
    },
    created() {
        document.title = "Web Profile - Rizky";

        setTimeout(
            function(){
                this.loading = true;
            }.bind(this),
            1000
        );
    },

}
</script>
<style lang="scss">
    .fade-enter-active {
        transition: all 1.5s ease-in-out;
    }
    .fade-enter-from {
        transform: translateY(40px);
        opacity: 0;
    }
    #resume{
        position: relative;
        // background: var(--color-6);
    }
    .form-check{
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .icon-i{
        position: absolute;
        left: 16px;
        bottom: 0;
    }
    .form-check-input:checked {
        background-color: hsl(131, 49%, 58%);
        border-color: #61c974;
        
    }
    #app{
        // background-color: var(--text-primary-color);
        margin: 0;
    }
    
    
</style>