<template>
<div>
   <NavigationHeade></NavigationHeade>
  <div class="rounded-r-3xl bg-accent2-500 shadow-light-lg">
   <div class="bg-center" style="background-repeat:no-repeat;;background-image:url(https://res.cloudinary.com/micakindev/image/upload/v1684590368/micakin/web/hero4_bfqjxr.webp);">
    <div class="bg-gradient-to-r  from-black to-transparent ">
      <div class="py-16 sm:py-20 lg:py-24 container mx-auto px-4 sm:px-6">
        <div class="py-7 sm:py-10"></div>
        <div class="p-6 sm:p-10 lg:p-20 flex flex-col gap-4">
          <h1 class="text-3xl lg:text-5xl font-bold text-white">Case Studies</h1>
          <p class="text-white">Check out the projects we have laid our hands on over a period of time</p>
        </div>
      </div>
    </div>
   </div>
  </div>


   
    <NavigationFooter></NavigationFooter>
  </div>
</template>

<script>
  import pic1 from "../assets/images/pic1.jpg"
import pic9 from "../assets/images/uoa.jpg"
import pic2 from "../assets/images/pic2.jpg"
import pic3 from "../assets/images/pic3.jpg"
import pic4 from "../assets/images/pic4.jpg"
import pic5 from "../assets/images/pic5.jpg"
import pic6 from "../assets/images/pic6.jpg"
import pic7 from "../assets/images/pic7.jpg"
import pic8 from "../assets/images/pic8.jpg"

export default {
     
        data(){
            return{
                tools: [
                    {
                    id : 1,
                    img:pic5,
                    header:'Osun State Government Website',
                    description:'The official website was redesigned from scratch using content management system',
                    
                    },
                    
                     {
                    id : 2,
                    header:'Odori',
                    description:'A B2C Ordering Platform',
                    img: pic6,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },

                     {
                    id : 3,
                    header:'Osun State Government Staff Portal',
                    description:'The official website was redesigned from scratch using content management system',
                    img: pic7,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },
                    
                     {
                    id : 4,
                    header:'Tola Studio Website',
                    description:'Portfolio website for a brand identity designer',
                    img: pic8,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },
                      {
                    id : 5,
                    header:'GTN Website and Data Directory',
                    description:'Green Tempo Nigeria website design and Lagos green directory portal',
                    img: pic1,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },

                    {
                    id : 6,
                    header:'Dafotglobal Official Website',
                    description:'Business website for a consultancy group',
                    img: pic2,
                   
                    
                    },

                     {
                    id : 7,
                    header:'UNDP-OSSH Application Platform',
                    description:'Portal development for application and screening during 2022 UNDP-OSSH Programme',
                    img: pic9,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },

                    {
                    id : 8,
                    header:'Tojum',
                    description:'A landing page web design for a hospitality company in Nigeria',
                    img: pic3,
                    name:'gucci',
                    price:'100$',
                    cnumber:'3',
                    
                    },
                   
                ],

              
            }
        },



components: {
  },
    }

</script>

<style>
  
</style>