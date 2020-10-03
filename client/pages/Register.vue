<template>



<div class="container my-16 w-full  mx-auto">
    
    <div class="max-w-xs mx-auto ">
        <h2 class="text-center text-lg text-gold"> Register </h2>






        <div class="w-full bg-white shadow mt-5 rounded-sm  p-8">

           <text-input

           :value:="model.name"

           v-model="model.name"
           
           placeholder="Enter Your names"
           
           />


           <text-input

           :value:="model.email"

           v-model="model.email"
           
           placeholder="Enter Your email"
           
           />


           <text-input

           type="password"

           :value:="model.password"

           v-model="model.password"
           
           placeholder="Enter Your password"
           />

       
            

            <button class="w-full mt-3 text-sm py-3 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-lighte">

                Sign Up

                </button>

        </div>

    </div>

     </div>

</template>

<script>
export default {
    
    data: () => ({

        model: {

           name:'',

           email:'',

           password:''

        }

    })


}
</script>