<template>
  <div class="bg-white h-[50px]">
    <div class="container mx-auto">
      <div
        class="md:flex justify-between items-center py-3 text-sm text-black-500 lg:px-0 px-2 hidden"
      >
        <div class="flex-1 w-50">
          <a href="mailto:loanduyen151@gmail.com" class="mr-5">
            loanduyen151@gmail.com
          </a>
          <a href="tel:12345)67890">(12345)67890</a>
        </div>
        <div class="flex items-center w-50">
          <span class="ml-4">English</span>
          <span class="ml-4">USD</span>
          <a href="/whislist" class="ml-4 flex items-center">
            Whislist
            <span class="ml-1">
              <!-- <AiOutlineHeart /> -->
            </span>
          </a>
          <!-- {session?.user?.name ? (
              <div class="ml-4 flex items-center cursor-pointer">
                <Dropdown
                  label={
                    <p class="mt-[1px] flex flex-cols items-center text-ellipsis">
                      <span class="flex-1 mr-1">
                        <AiOutlineUser />
                      </span>
                      <span class="text-ellipsis max-w-[100px] overflow-hidden whitespace-nowrap mt-[2px]">
                        {session?.user?.name}
                      </span>
                    </p>
                  }
                >
                  <Link
                    class="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block"
                    href="/user/profile"
                  >
                    Profile
                  </Link>
                  <li
                    onClick={logoutClickHandler}
                    class="bg-white hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
                  >
                    Logout
                  </li>
                </Dropdown>
              </div>
            ) : (
              <Link href="/login" class="ml-4 flex items-center">
                Login
                <span class="ml-1">
                  <AiOutlineUser />
                </span>
              </Link>
            )} -->
          <div
            onClick="{handleToggleCart}"
            class="cursor-pointer relative ml-2 inline-block"
          >
            <i-shopping-cart />
            <span
              class="absolute -top-2 -right-3 px-[6px] py-[2px] text-xs text-red-100 transform bg-red-600 rounded-full"
            >
              {{ cartItemsCount }}
            </span>
          </div>
        </div>
      </div>

      <sidebar-menu :show="show" @on-close="toggleShow" />

      <div
        v-if="show"
        @click="toggleShow"
        class="md:hidden animate-fadeEntering fixed inset-0 z-40 bg-black/60 transition-transform ease-in-out duration-500 opacity-100"
      ></div>

      <div
        class="md:hidden text-center justify-between py-2 px-3 flex items-center border-b border-primary"
      >
        <span @click="toggleShow">
          <i-menu />
        </span>
        <h1 class="text-3xl font-bold">
          <a href="/">Hekto</a>
        </h1>
        <div
          onClick="{handleToggleCart}"
          class="cursor-pointer relative ml-2 inline-block"
        >
          <i-shopping-cart />
          <span
            class="absolute -top-2 -right-3 px-[6px] py-[2px] text-xs text-red-100 transform bg-red-600 rounded-full"
          >
            {{ cartItemsCount }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IShoppingCart from "@/Icons/IShoppingCart.vue";
import SidebarMenu from "../SidebarMenu/SidebarMenu.vue";
import IMenu from "@/Icons/IMenu.vue";
export default {
  name: "TopNavbar",
  components: {
    IShoppingCart,
    SidebarMenu,
    IMenu,
  },
  data() {
    return { show: false, cartItemsCount: 0 };
  },

  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>