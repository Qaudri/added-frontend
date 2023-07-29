<template>
 <div>
  <NavigationHeade></NavigationHeade>
  <div class="bg-center" style="background-repeat:no-repeat;;background-image:url(https://res.cloudinary.com/micakindev/image/upload/v1684590368/micakin/web/hero4_bfqjxr.webp);">
    <div class="bg-gradient-to-r from-accent2-600 to-transparent">
      <div class="py-16 sm:py-20 lg:py-24 container mx-auto px-4 sm:px-6">
        <div class="py-7 sm:py-10"></div>
        <div class="p-6 sm:p-10 lg:p-20 flex flex-col gap-4">
          <h1 class="text-3xl lg:text-5xl font-bold text-white">About Micakin</h1>
          <p class="text-white">Micakin helps you accelerate digital transformation easily</p>
        </div>
      </div>
    </div>
  </div>

  <div  class="bg-center" style="background-repeat:no-repeat;background-image:url(https://res.cloudinary.com/micakindev/image/upload/v1684739518/micakin/web/micakin-what-we-do_bhkfxz.jpg);">
    <div class="bg-black bg-opacity-30 py-56"></div>

    <div class="bg-[#fff4f0]">
      <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-10 xl:gap-32 rounded-3xl items-center">
          <div class="flex flex-col gap-10">
            <h1 class="text-xl lg:text-2xl font-medium p-6 rounded-3xl bg-white"> We are a team of creative professionals who are passionate about providing exceptional services to help businesses accelerate digital transformation. Our agency specializes in a wide range of services including web development, UI/UX design, presentation design, cloud backup and maintenance, consulting, and training. </h1>

            <div class="text-lg flex flex-col gap-5">
              <p> At our core, we believe that every business deserves a unique approach tailored to their specific needs. We take the time to understand your brand, your goals, and your audience to develop customized solutions that ensure your success. </p>
              <p> Our team of experts has a wealth of experience and knowledge to help you optimize your operations and drive revenue growth. Whether you need a new website, want to enhance your user experience, or need help with data security and backup, we have the expertise to help. </p>
            </div>
          </div>
            <img src="https://res.cloudinary.com/micakindev/image/upload/v1684740930/micakin/web/2_vvl9ri.jpg" class="rounded-3xl" width="100%" height="100%">
        </div>
      </div>
    </div>
  </div>

   <div class=" container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div class="w-full ">
            <h1 class="text-3xl text-center sm:text-4xl text-secondary-900 font-bold"> Core Services</h1>
            <div  class="grid lg:grid-cols-2 gap-8  mt-10 md:gap-10">

                <div class="bg-white flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row p-6 sm:p-12 transition h-fit duration-500 rounded-2xl relative shadow-light border border-gray-200">
                    <img src="https://res.cloudinary.com/micakindev/image/upload/v1684590354/micakin/web/icons/web2_kfsdge.svg" alt="Web Development \ Design icon" class="shrink-0 w-16 h-16 sm:w-28 sm:h-28 flex items-center">
                    <div class="">
                        <h1 class="font-bold sm:text-xl">Web Development & Design</h1>
                        <p class="text-black text-opacity-70 mt-3">We offer top-notch web development services to help your business succeed online. Whether you need a simple brochure website or a complex e-commerce platform, or a data-driven portal development we can help</p>
                    </div>
                </div>

                <div class="bg-white flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row p-6 sm:p-12 transition h-fit duration-500 rounded-2xl relative shadow-light border border-gray-200">
                    <img src="https://res.cloudinary.com/micakindev/image/upload/v1684590354/micakin/web/icons/ui2_zkjcku.svg" alt="Web Development \ Design icon" class="shrink-0 w-16 h-16 sm:w-28 sm:h-28 flex items-center">
                    <div class="">
                        <h1 class="font-bold sm:text-xl">UI/UX Design</h1>
                        <p class="text-black text-opacity-70 mt-3">You can get an appealing and easy-to-use user interface design for your next project, we are committed to delivering high-quality UI/UX design services that help our clients achieve their business goals.</p>
                    </div>
                </div>

              <div class="bg-white flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row p-6 sm:p-12 transition h-fit duration-500 rounded-2xl relative shadow-light border border-gray-200">
                    <img src="https://res.cloudinary.com/micakindev/image/upload/v1684590354/micakin/web/icons/presentation2_wutcdb.svg" alt="Presentation Design icon" class="shrink-0 w-16 h-16 sm:w-28 sm:h-28 flex items-center">
                    <div class="">
                        <h1 class="font-bold sm:text-xl">Presentation Design</h1>
                        <p class="text-black text-opacity-70 mt-3">We are a goto for your presentation slides designs and layouts, we understand that presentations are an important part of your brand’s identity. We can help you design your next presentation deck to help you elevate your brand’s presence and make a lasting impact on your audience.</p>
                    </div>
                </div>

                <div class="bg-white flex flex-col gap-6 md:flex-row lg:flex-col xl:flex-row p-6 sm:p-12 transition h-fit duration-500 rounded-2xl relative shadow-light border border-gray-200">
                    <img src="https://res.cloudinary.com/micakindev/image/upload/v1684590351/micakin/web/icons/cloud2_zhveab.svg" alt="Cloud Backup and Maintenance icon" class="shrink-0 w-16 h-16 sm:w-28 sm:h-28 flex items-center">
                    <div class="">
                        <h1 class="font-bold sm:text-xl">Cloud Backup and Maintenance</h1>
                        <p class="text-black text-opacity-70 mt-3">With our cloud backup and maintenance services, you can rest easy knowing that your data is always safe and secure, and your systems are always running at their best. Contact us today to learn more about how we can help protect your agency's data.</p>
                    </div>
                </div>

               
               
            </div>
        </div>
    </div>



   <NavigationFooter></NavigationFooter>
 </div>
</template>

<script>

export default {
  data() {
    return {
      loadingState: false,
      password_error: false,
      form: {
        email: '',
        username: '',
        password: ''
      },

      users: [

      ]
    }
  },

  methods: {
    registerUser(){
      this.loadingState = true
      // const newUsers = this.users.forEach(user => {
      //   if (user.email !== form.email) {
      //     if (user.username !== form.username) {
      //       if(form.password >= 8){
      //         this.users.push({
      //           email: form.email,
      //           username: form.username,
      //           password: form.password,
      //         })

      //         localStorage.setItem('users', JSON.stringify(this.users))
      //       } else {
      //         this.password_error = true
      //       }
      //     } else {
      //       console.log('this username already exists')
      //     }
      //   } else {
      //     console.log('this email already exists')
      //   }
      // });

      setTimeout(() => {
        this.$router.push({path: '/dashboard'})
      }, 1000);
    }
  },



 
}
</script>

<style>

</style>