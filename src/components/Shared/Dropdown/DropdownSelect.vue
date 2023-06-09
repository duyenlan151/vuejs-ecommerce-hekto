<template>
  <div class="relative" v-click-outside="clickedOutside">
    <span
      @click="clickInside"
      class="flex items-center py-2 bg-white px-4 border border-gray-10 cursor-pointer"
    >
      Sort By
      <i-arrowdown />
    </span>
    <ul
      v-show="showOptions"
      @click.self="handleSelf()"
      class="dropdown-menu min-w-[150px] absolute text-gray-700 right-0 bg-white top-[110%] shadow-xl"
    >
      <li
        v-for="(item, index) in data"
        :key="index"
        @click="handleClick(item)"
        class="bg-white cursor-pointer"
      >
        <span
          class="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
        >
          {{ item.label }}
        </span>
        <!-- {{ item.name }} -->
      </li>
    </ul>
  </div>
</template>

<script>
import IArrowdown from "@/Icons/IArrowdown.vue";
export default {
  components: { IArrowdown },
  props: {
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "Enter text here.",
    },
    data: {
      type: Array,
      required: true,
    },
    inputClass: {
      type: String,
      required: false,
      default:
        "border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:shadow-outline",
    },
    dropdownClass: {
      type: String,
      required: false,
      default:
        "absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md",
    },
  },

  data() {
    return {
      showOptions: false,
      chosenOption: "",
      searchTerm: "",
    };
  },

  computed: {
    searchResults() {
      return this.data.filter((item) => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },

  methods: {
    clickInside() {
      this.showOptions = !this.showOptions;
    },

    reset() {
      this.$emit("input", "");
      this.chosenOption = "";
    },

    handleInput(evt) {
      this.$emit("input", evt.target.value);
      this.searchTerm = evt.target.value;
      this.showOptions = true;
    },

    handleClick(item) {
      this.$emit("input", item.name);
      this.$emit("chosen", item);
      this.chosenOption = item.name;
      this.showOptions = false;
    },

    clickedOutside() {
      this.showOptions = false;

      if (!this.chosenOption) {
        this.$emit("input", "");
      }
    },
  },
};
</script>

<style scoped>
.mh-48 {
  max-height: 10rem;
}
</style>