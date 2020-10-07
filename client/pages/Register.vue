<template>



<div class="container my-16 w-full  mx-auto">
    
    <div class="max-w-xs mx-auto ">
        <h2 class="text-center text-lg text-gold"> Register </h2>






        <div class="w-full bg-white shadow mt-5 rounded-sm  p-8">

           <text-input

           name="name"

           :value:="model.name"

           v-model="model.name"

           v-validate="'required'"

            :error="errors.first('name')"
           
           placeholder="Enter Your names"
           
           />


           <text-input
        
           name="email"

           :value:="model.email"

           v-model="model.email"

           v-validate="'required|email'"
            :error="errors.first('email')"
           
           placeholder="Enter Your email"
           
           />


           <text-input

           type="password"

           name="password"


           :value:="model.password"

           v-model="model.password"
           
          v-validate="'required|min:6'"

           :error="errors.first('password')"

           placeholder="Enter Your password"
           />

       <btn 

       label="Sign Up"

       :disabled="loading"

       :loading="loading"

       @click="register"

       />
            

            

        </div>

    </div>

     </div>

</template>

<script>

import { POST_REGISTER , SET_AUTH } from '@store/auth/actions'


export default {
    
    data: () => ({

    loading: false,

        model: {

           name:'',

           email:'',

           password:''

        }

    }),

    methods:{

        register(){
        
        this.$validator.validate().then(isValid => {

         if(! isValid) {

             return
         }
  
        this.toggleLoading()


         
         this.$store.dispatch(POST_REGISTER, this.model)


         .then(response => {

         
         this.toggleLoading()


         localStorage.setItem('auth', JSON.stringify(response.data))


        this.$store.commit(SET_AUTH, response.data)

         this.$router.push('/')


         })


        })


        },


        toggleLoading() {

            this.loading = !this.loading
        }
    }


}
</script>