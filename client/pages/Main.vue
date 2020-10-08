<template>

<div>

<div class="h-2 w-full bg-gold-light"></div>

<div class="w-full h-12  flex items-center justify-between px-6">

<router-link to= "/" class="no-underline text-gold"> Mevn</router-link>


<div v-if="!auth">

<router-link class=" no-underline text-brown" to="/auth/login">Sign In</router-link>

<router-link class=" no-underline  text-brown border-2 p-2 hover:text-brown-darkest hover:border-brown-darkest rounded-full border-brown ml-3" to="/auth/register">Join Now</router-link>


</div>

<div v-else>

    <span class="cursor-pointer text-brown hover:text-brown-darkest" @click="unsetAuth"> Logout </span>

</div>

</div>


<router-view></router-view>


</div>




</template>