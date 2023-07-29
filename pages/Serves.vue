<template>
  <div class="">  
    
     <div class="rounded-r-3xl h-fit bg-accent2-500 shadow-light-lg">
   <div class="bg-center" style="background-repeat:no-repeat;;background-image:url(https://res.cloudinary.com/micakindev/image/upload/v1684590368/micakin/web/hero4_bfqjxr.webp);">
    <div class="bg-gradient-to-r  from-black to-transparent ">
      <div class="py-16 sm:py-20 lg:py-24 container mx-auto px-4 sm:px-6">
        <div class="py-7 sm:py-10"></div>
        <div class="p-6 sm:p-10 lg:p-20 flex flex-col gap-4">
          <h1 class="text-3xl lg:text-5xl font-bold text-white">Our Services</h1>
          <p class="text-white">Check out the projects we have laid our hands on over a period of time</p>
        </div>
      </div>
    </div>
   </div>
  </div>
    
   
    </div>
</template>

<script >
        import gucci from '../assets/images/shoe.jpg'
    import shoe2 from '../assets/images/shoe2.jpeg'  
 
    export default {
        data(){
            return{
                tools: [
                    {
                    id : 1,
                    colour:'yellow',
                    shoe:'yellow',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },
                    
                     {
                    id : 2,
                    colour:'yellow',
                    shoe:'yellow',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: shoe2
                    },

                     {
                    id : 3,
                    colour:'red',
                    shoe:'yellow',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },
                    {
                    id : 4,
                    colour:'yellow',
                    shoe:'red',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },

                     {
                    id : 4,
                    colour:'yellow',
                    shoe:'red',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },

                     {
                    id : 4,
                    colour:'yellow',
                    shoe:'red',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },

                     {
                    id : 4,
                    colour:'yellow',
                    shoe:'red',
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    img: gucci
                    },
                   
                ],
            }
        }
    }

</script>

<style>

    .bg{
        background-image: url(../assets/images/BACK.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .fill{
        
       filter: drop-shadow(5px 6px 8px #000);
   
    }
    
</style>