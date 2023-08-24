<template>
    <div
    id="contactForm"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    >
    <div 
    class="container-contact" >
        <div class="row title-contact title">
            Contact
        </div>
        <div class="title-contact-form">
            Contact Form
        </div>
         <div class="ex-icon-contact">
          <!-- <i class=""> -->
            <img src="../assets/img/bgbatik.webp" width="300" alt="">
          <!-- </i> -->
        </div>
        <div class="row form-contact">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="Name">Name</label>
                    <input type="text" id="name" class="form-control" autocomplete="off" v-model="form.name" placeholder="Your Name" >
                    <div v-if="!form.name ? errors.errname : ''" class="alert alert-danger">{{ errors.errname }}</div>
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" id="email" class="form-control" autocomplete="off" v-model="form.email" placeholder="Your Mail" >
                    <div v-if="!form.email ? errors.erremail : ''" class="alert alert-danger">{{ errors.erremail }}</div>
                </div>
                <div class="form-group">
                    <label for="Desc">Desc</label>
                    <textarea rows="3" id="desc" class="form-control" v-model="form.desc" placeholder="Desc" />
                    <div v-if="!form.desc ? errors.errdesc : ''" class="alert alert-danger">{{ errors.errdesc }}</div>
                </div>
                
                    <button v-if="!isLoad" class="btn btn-success btn-lg form-control contact-button" type="submit"> Save</button>
                    <button v-if="isLoad" class="btn btn-secondary btn-sm form-control contact-button" disabled>
                        <div role="status" class="spinner-border">
                            <span class="sr-only"></span>
                        </div>
                    </button>
                
            </form>
        </div>
    </div>
        <!-- footer -->
        <div class="container-footer">
            <footer class="my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="https://www.instagram.com/_fynrizky/" class="nav-link px-2 text-muted">@_fynrizky</a></li>
                </ul>
                <p class="copy-2023 text-center text-muted">&copy; 2023 Rizky Fiyannur</p>
            </footer>
        </div>
    </div>

</template>
<script>
import db from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
export default {
    name: "contactForm",
    data() {
      return {
        form: {
            name: '',
            email: '',
            desc: '',
        },
        isLoad: false,
        errors: {
            errname: '',
            erremail: '',
            errdesc: '',
        },
      };
    },
    methods: {
        resetErr() {
            this.errors = {
                errname: this.errname,
                erremail: this.erremail,
                errdesc: this.errdesc
            }
        },
        resetInput() {
            this.form = {
                name: this.name,
                email: this.email,
                desc: this.desc
            }
        },
        async handleSubmit(){
            if (!this.form.name || !this.form.email || !this.form.desc) {
                // this.errors = {};

                if (!this.form.name) {
                this.errors.errname = "Name is required";
                }
                if (!this.form.email) {
                this.errors.erremail = "Email is required";
                }
                if (!this.form.desc) {
                this.errors.errdesc = "Message is required";
                }

                return;
            }

            this.isLoad = true ;

            try{
               const data = await collection(db,'userMessages');
               
               await addDoc(data, {
                    name: this.form.name,
                    email: this.form.email,
                    desc: this.form.desc,
                });

                this.isLoad = false;

                Swal.fire({
                    title: 'success!',
                    text: 'Successfully sent message !',
                    icon: 'success',
                });

                setTimeout(() => {
                    Swal.close();
                    this.resetInput();
                    this.resetErr();
                }, 5000)
                
                

            }catch(error) {
                this.isLoad = false;

                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                })
            }
        },
    },
    created() {},
}
</script>
<style lang="scss">
#contactForm .container-contact{
    position: relative;
    background: var(--color-7);
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    border-bottom-left-radius:50px;
    border-bottom-right-radius:50px;
    margin-top: -10px;
    // min-height: 80vh;
    padding-top: 40px;
    box-shadow: 0px -2px 12px 5px rgb(0,0,0,0.5);
    z-index: 1;
}

    .row.title-contact{
        position: relative;     
        // background-color: red;
        width : 10vh;
        padding-top : 3px;
        margin-left: 20px;
        // opacity: 0.4;
    }
    .ex-icon-contact{
        position: absolute;
        right: 150px;
        top: 80px;
        font-size: 8em;
        -webkit-transform: rotate(50deg) scale(-1, 1) !important;
        transform: rotate(50deg) scale(-1, 1) !important;
        opacity: 0.2;
        //color: var(--color-5);
        z-index: -1;
    }
    .title-contact-form{
        // background-color: red;
        position: relative;
        font-weight: 600;
        font-size: 25px;
        margin: auto 30%;
        padding-left: 3vh;
    }
    .row.form-contact{
        opacity: .8;
        padding : 40px;
        margin-top : -40px;
        .form-group{
            margin-bottom: 20px;
        }
        
    }
        .container-footer{

            footer{
                .nav.nav-item, a{                
                    color: var(--text-color-2) !important;
                    font-size: 22px;
                    font-weight: 600;
                }
            
            p, .copy-2023{
                
                color: var(--text-color-2) !important;
                font-size: 14px;
                font-weight: 600;
                padding-bottom: 15px;
            }
        }
    }
</style>