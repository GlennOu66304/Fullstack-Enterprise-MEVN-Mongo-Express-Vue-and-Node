<template>



<div class="container my-16 w-full  mx-auto">
    
    <div class="max-w-xs mx-auto ">
        <h2 class="text-center text-lg text-gold"> Reset Your Password </h2>

        <div class="w-full bg-white shadow mt-5 rounded-sm  p-8">
           <text-input

           type="password"

           name="password"


           :value:="model.password"

           v-model="model.password"
           
          v-validate="'required|min:6'"

           :error="errors.first('password')"

           placeholder="Enter your new password"
           />


       <btn 

       label="Reset Password"

       :disabled="loading"

       :loading="loading"

       @click="resetPassword"

       />
            
        </div>

    </div>

     </div>

</template>

<script>

import formMixin from '@client/mixins/form'

import { POST_RESET_PASSWORD } from '@store/auth/actions'


export default {

    mixins: [formMixin],
    
    data: () => ({
        model: {

           password:''

        }

    }),

    methods:{

        resetPassword(){
        
        this.$validator.validate().then(isValid => {

         if(! isValid) {

             return
         }
  
        this.toggleLoading()


         
         this.$store.dispatch(POST_RESET_PASSWORD, {
              ...this.model,
              token: this.$route.params.token

         })


         .then(response => {

         
         this.toggleLoading()


        this.$route.push('/')


         })

         .catch( error => {
            
            this.toggleLoading()


            Object.keys(error.response.data).forEach(field => {


                this.errors.add({
                   
                   field,

                   msg:error.response.data[field]



                })


            })


         })


        })


        }
       
    }


}
</script>