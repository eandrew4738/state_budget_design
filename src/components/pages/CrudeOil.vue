<template>
  <div class="container-fluid p-3">
    <button
      class="btn btn-primary btn-sm filterBtn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasFilter"
      aria-controls="offcanvasFilter"
    >
      Filter
    </button>
    <div class="row">
      <div class="col-lg-9">
        <div class="col-lg-12 p-3" style="background-color: #f3eded">
          <div class="row">
            <div class="col-lg-4">
              <h4>State Budget Monitoring Overall Status</h4>
              <p>
                State Budget Monitoring Module provides the status of budget on
                a real time basis with the following portfolio structure which
                has been provided in details on the above menu
              </p>
              <donut-chart
                :chartData="chartDatas"
                :chartOptions="{ responsive: true }"
              ></donut-chart>
            </div>
            <div class="col-lg-8">
              <div class="bg-grey p-3">
                <div class="row">
                  <div class="col-lg-12">
                    <h6>BUDGET vs ACTUAL</h6>
                    <div class="row">
                      <div class="col-lg-8">
                        <bar-line-chart
                          :chartData="chartDatas"
                          :chartOptions="{ responsive: true }"
                        ></bar-line-chart>
                      </div>
                      <div class="col-lg-4"></div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <h6>VARIANCE BREAKDOWN</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 sidebar">
        <div class="border p-2">
          <side-bar></side-bar>
        </div>
      </div>
    </div>
  </div>
  <div
    class="offcanvas offcanvas-end filter-Section"
    tabindex="-1"
    id="offcanvasFilter"
  >
    <div class="offcanvas-body">
      <side-bar></side-bar>
    </div>
  </div>
</template>
<script>
import SideBar from "../ui/SideBar.vue";
import BarLineChart from "../ui/BarLineChart.vue";
import DonutChart from "../ui/DonutChart.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "CrudeOil",
  components: {
    SideBar,
    BarLineChart,
    DonutChart,
  },
  data() {
    return {
      chartDatas: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12],
          },
        ],
      },
    };
  },
});
</script>
<style scoped>
.bg-grey {
  background-color: #dddddd !important;
}
</style>