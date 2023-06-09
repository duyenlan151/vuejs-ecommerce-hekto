<template>
  <section class="bg-bg-color">
    <div class="container mx-auto py-10 lg:px-0 px-4">
      <h4 class="text-blue-1 text-3xl">Ecommerce Acceories & Fashion item</h4>
      <div class="text-primary font-lato-light leading-7">
        About {{ totalDocs || 0 }} results
      </div>
      <div class="ml-auto flex justify-end items-center py-2">
        <div class="flex items-center px-4">
          <p class="pr-3">View:</p>
          <span
            :class="`pr-2 cursor-pointer opacity-50 ${
              type === ETypeView.COL && '!opacity-100'
            }`"
            @click="onChangeFilters('view', ETypeView.COL)"
          >
            <i-col />
          </span>
          <span
            :class="`pr-2 cursor-pointer opacity-50 ${
              type === ETypeView.ROW && '!opacity-100'
            }`"
            @click="onChangeFilters('view', ETypeView.ROW)"
          >
            <i-row />
          </span>
        </div>
        <!-- {/* Sort */} -->
        <dropdown-select
          :data="itemsList"
          v-model.trim="formData.client"
          @chosen="(data) => onChangeFilters('sort', data)"
          placeholder="Search for state..."
        />
      </div>
      <div class="flex justify-between mt-2">
        <div class="max-w-[250px] basis-full lg:block hidden">
          <!-- {/* Filter */} -->
          <!-- <ProductFilters /> -->
          <product-filters />
        </div>

        <div class="flex-1 basis-full lg:ml-3 w-full justify-self-end">
          <!-- <FilterViewer /> -->
          <filter-viewer />
          <!-- {/* Product List */} -->
          <div
            v-if="loading"
            :class="`grid justify-center items-center mx-auto gap-4 grid-cols-1 ${ProductViewType[type]}`"
          >
            <product-item-skeleton
              v-for="item in new Array(6).fill('')"
              :key="item"
            />
          </div>
          <div
            v-else
            :class="`grid justify-center items-center mx-auto gap-4 grid-cols-1 ${ProductViewType[type]}`"
          >
            <product-item-secondary
              v-for="product in products"
              :key="product._id"
              :_id="product._id"
              :name="product._id"
              :description="product.description"
              :images="product.images"
              :slug="product.slug"
              :rating="product.rating"
              :title="product.title"
              :price="product.price"
            />
          </div>
          <!-- {/* Pagination */} -->
          <!-- <Pagination
              totalCount={products?.totalDocs || 0}
              currentPage={Number(page) || 1}
              pageSize={products?.limit}
            /> -->
        </div>
      </div>
    </div>
    <!-- <div
        class="trasform translate-x-full ${
          showOverlayFilter && '!-translate-x-full'
        } w-[280px] lg:hidden bg-white h-full max-w-full overflow-x-hidden fixed z-50 top-0 left-full transition-transform duration-300 ease-out outline-none focus:outline-none"
      >
        <ProductFilters />
      </div> -->
    <!-- {showOverlayFilter && (
        <div
          onClick={handleOverlayFilter}
          class="md:hidden animate-fadeEntering fixed inset-0 z-40 bg-black/60 transition-transform ease-in-out duration-500 opacity-100"
        ></div>
      )} -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { STATE } from "@/store/modules/master";
import ProductItemSecondary from "./ProductItem/ProductItemSecondary.vue";
import { ETypeView, ProductViewType, itemsList } from "./ProductListPage.props";
import ICol from "@/Icons/ICol.vue";
import IRow from "@/Icons/IRow.vue";
import ProductFilters from "./ProductFilters.vue";
import DropdownSelect from "../Shared/Dropdown/DropdownSelect.vue";
import FilterViewer from "./Filters/FilterViewer.vue";
import ProductItemSkeleton from "./ProductItem/ProductItemSkeleton.vue";
export default {
  components: {
    ProductItemSecondary,
    ICol,
    IRow,
    ProductFilters,
    DropdownSelect,
    FilterViewer,
    ProductItemSkeleton,
  },

  data() {
    return {
      itemsList,
      formData: {
        client: "",
      },
      ETypeView,
      ProductViewType,
      type: [ETypeView.COL, ETypeView.ROW].includes(
        String(this.$route.query.view)
      )
        ? this.$route.query.view
        : ETypeView.COL,
    };
  },

  setup() {},

  watch: {
    $route(to, from) {
      const {
        query: { view, price, rating, sort },
      } = this.$route;
      this.type = view;
    },
  },

  computed: {
    ...mapGetters("products", [
      STATE.getAllProducts,
      STATE.getTotalDocs,
      STATE.getLoading,
    ]),

    products() {
      return this[STATE.getAllProducts];
    },

    loading() {
      return this[STATE.getLoading];
    },

    totalDocs() {
      return this[STATE.getTotalDocs];
    },
  },

  methods: {
    onChangeFilters(key, data) {
      let result = data;
      switch (key) {
        case "view":
          // this.type = data;
          break;
        case "sort":
          this.sort = data?.value;
          result = data?.value;
          break;
        default:
          break;
      }

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          [key]: result,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>