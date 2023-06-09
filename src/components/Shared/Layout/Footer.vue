<template>
  <div>
    <footer>
      <div class="bg-white py-24 lg:px-0 px-4">
        <div class="container mx-auto">
          <div class="flex lg:flex-row flex-col lg:gap-4">
            <div class="lg:w-2/5 w-full lg:pr-1 mb-4">
              <h4 class="text-4xl font-bold">Hekto</h4>

              <form
                onSubmit="{handleSubmit(onSubmit)}"
                class="max-w-[90%] bg-white border flex items-center justify-between h-[44px] rounded my-6"
              >
                <!-- <InputField
                  control={control}
                  name="emailSup"
                  required
                  placeholder="Enter Email Address"
                  class={
                    'h-full min-w-[60%] max-w-[95%] border-0 bg-transparent focus:ring-0 !outline-none flex-auto bg-white/5 px-1 text-black sm:text-sm sm:leading-6'
                  }
                /> -->
                <input
                  name="emailSup"
                  required
                  placeholder="Enter Email Address"
                  class="pl-4 h-full min-w-[60%] max-w-[95%] border-0 bg-transparent focus:ring-0 !outline-none flex-auto bg-white/5 px-1 text-black sm:text-sm sm:leading-6'"
                />
                <button
                  type="submit"
                  class="font-lato bg-pink-600 flex-none px-7 h-full rounded text-sm text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
                >
                  Sign Up
                </button>
              </form>
              <div>
                <p class="font-lato text-[15px]">Contact Info</p>
                <p class="font-lato text-[15px]">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>

            <div
              v-for="(key, i) in Object.keys(dataFooter)"
              :key="key + '-' + i"
              class="lg:w-1/5 sm:w-1/2 w-full"
            >
              <h4 class="text-xl lg:mb-10 mb-4">{{ key }}</h4>
              <a
                v-for="item in Array.from(dataFooter[key])"
                :key="item"
                class="block font-lato mb-5"
                href="/"
              >
                {{ item }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 py-4 lg:px-0 px-2 flex justify-between">
        <div class="container mx-auto flex justify-between">
          <div class="text-grey-300 font-lato">
            ©Webecy - All Rights Reserved
          </div>
          <div class="flex">
            <a
              href="https://www.facebook.com/"
              aria-label="https://www.facebook.com/"
            >
              <!-- <IFacebook /> -->
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="https://www.instagram.com/"
              class="pl-2.5"
            >
              <!-- <IInstagram /> -->
            </a>
            <a
              href="https://twitter.com/"
              aria-label="https://twitter.com/"
              class="pl-2.5"
            >
              <!-- <ITwitter /> -->
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { dataFooter } from "@/utils/sample-data";
export default {
  data() {
    return {
      dataFooter,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>