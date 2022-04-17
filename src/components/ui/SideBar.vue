<template>
  <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="filter-tab"
        data-bs-toggle="tab"
        data-bs-target="#filter"
        type="button"
        role="tab"
        aria-controls="filter"
        aria-selected="true"
      >
        Filter
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="scenarios-tab"
        data-bs-toggle="tab"
        data-bs-target="#scenarios"
        type="button"
        role="tab"
        aria-controls="scenarios"
        aria-selected="false"
      >
        Scenarios
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="report-tab"
        data-bs-toggle="tab"
        data-bs-target="#report"
        type="button"
        role="tab"
        aria-controls="report"
        aria-selected="false"
      >
        Reports
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="filter"
      role="tabpanel"
      aria-labelledby="filter-tab"
    >
      <div class="py-3">
        <button
          v-for="year in years"
          :key="year.id"
          type="button"
          @click="getData(year)"
          :class="selectedYear === year ? 'activeBtn' : ''"
          class="btn btn-outline-primary mb-2 w-100"
        >
          {{ year }}
        </button>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="scenarios"
      role="tabpanel"
      aria-labelledby="scenarios-tab"
    >
      ...Scenarios...
    </div>
    <div
      class="tab-pane fade"
      id="report"
      role="tabpanel"
      aria-labelledby="report-tab"
    >
      ...Reports...
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  emits: ["filter-data"],
  methods: {
    getData(Year: any) {
      this.selectedYear = Year;
      this.$emit("filter-data", Year);
    },
  },
})
export default class SideBar extends Vue {
  years = ["2022", "2021"];
  selectedYear = "2022";
}
</script>

<style lang="scss" scoped>
.nav-tabs {
  font-size: 14px;
  .nav-item {
    .active {
      color: $dark-color !important;
      background-color: transparent;
      border-color: transparent !important;
      border-bottom: 2px solid $muted-color !important;
    }
    .nav-link {
      color: $muted-color;
      padding: 0rem 1rem 0.3rem 1rem !important;
      &:hover,
      &:focus {
        border-color: transparent;
      }
    }
  }
}
.activeBtn {
  background-color: $primary-color !important;
  color: $white-color;
  pointer-events: none;
}
</style>