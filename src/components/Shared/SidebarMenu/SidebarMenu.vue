<template>
  <div
    :class="[
      'md:hidden max-w-[380px] w-[90%] h-screen fixed top-0 left-0 z-50 bg-white shadow-md z-[1000] bg-palette-card origin-left overflow-y-auto  transition-transform duration-300 ease-out ',
      show ? ' translate-x-0' : ' -translate-x-full',
    ]"
  >
    <div class="">
      <div
        class="flex items-center justify-between p-3 border border-b border-primary"
      >
        <h1 class="text-3xl font-bold mr-20">Hekto</h1>
        <span @click="$emit('onClose')">
          <i-close />
        </span>
      </div>
      <div class="p-3">
        <!-- {session?.user?.name && (
            <Link
              class="py-3 text-base block text-ellipsis max-w-full overflow-hidden whitespace-nowrap"
              href={'/user/profile'}
              onClick={onClose}
            >
              Hello, {session?.user?.name}
            </Link>
          )} -->
        <a
          v-for="link in links"
          :key="link.id"
          class="py-3 text-base block"
          :href="link.path"
        >
          {{ link.name }}
        </a>

        <!-- <Link
            class="py-3 text-base block flex items-center"
            href={session?.user?.name ? '/#' : '/login'}
            onClick={() =>
              session?.user?.name
                ? (signOut({ callbackUrl: '/' }), dispatch(cleanAllCart()))
                : onClose()
            }
          >
            {session?.user?.name ? <MdLogin size={20} /> : <MdLogout size={20} />}
            <span class="ml-2">{session?.user?.name ? 'Logout' : 'Login'}</span>
          </Link> -->
      </div>
    </div>
  </div>
</template>

<script>
import IClose from "@/Icons/IClose.vue";
import { links } from "@/utils/sample-data";
export default {
  components: { IClose },
  props: {
    show: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      links,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>