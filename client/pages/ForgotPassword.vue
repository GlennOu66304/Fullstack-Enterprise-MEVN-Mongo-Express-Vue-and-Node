<template>



<div class="container my-16 w-full  mx-auto">
    
    <div class="max-w-xs mx-auto ">
        <h2 class="text-center text-lg text-gold"> Forgot Password </h2>

        <div class="w-full bg-white shadow mt-5 rounded-sm  p-8">

           <text-input
        
           name="email"

           :value:="model.email"

           v-model="model.email"

           v-validate="'required|email'"
            :error="errors.first('email')"
           
           placeholder="Enter Your email"
           
           />


        

       <btn 

       label="Send Password Reset Link"

       :disabled="loading"

       :loading="loading"

       @click="forgotPassword"

       />
            
        </div>

    </div>

     </div>

</template>

<script>

import formMixin from '@client/mixins/form'

import { POST_FORGOT_PASSWORD} from '@store/auth/actions'


export default {

    mixins: [formMixin],
    
    data: () => ({



        model: {

           email:''


        }

    }),

    methods:{

        forgotPassword(){
        
        this.$validator.validate().then(isValid => {

         if(! isValid) {

             return
         }
  
        this.toggleLoading()


         
         this.$store.dispatch(POST_FORGOT_PASSWORD, this.model)


         .then(response => {

         
         this.toggleLoading()


       this.$router.push('/')


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