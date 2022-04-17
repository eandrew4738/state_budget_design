<template>
  <div class="container-fluid px-3 pb-3">
    <button
      class="btn btn-sm filterBtn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasFilter"
      aria-controls="offcanvasFilter"
    >
      Filter
    </button>
    <div class="row">
      <div class="col-lg-9 px-lg-0">
        <div class="col-lg-12 p-3 bg-white">
          <div class="p-3 bg-lightGrey">
            <div class="row">
              <div class="col-md-4">
                <h4>State Budget Monitoring Overall Status</h4>
                <p class="f-12">
                  State Budget Monitoring Module provides the status of budget
                  on a real time basis with the following portfolio structure
                  which has been provided in details on the above menu
                </p>
                <base-spinner v-if="loading"></base-spinner>
                <donut-chart
                  v-if="!loading"
                  :chartData="donutChartDatas"
                ></donut-chart>
                <p class="text-center mt-3">2021 State Budget Forecast</p>
              </div>
              <div class="col-md-8">
                <div class="bg-grey p-3">
                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <h6><b>BUDGET vs ACTUAL</b></h6>
                      <div class="row">
                        <div class="col-lg-8">
                          <div class="p-3 bg-light">
                            <div class="card-header bg-light p-0 mb-3">
                              <div class="row">
                                <div class="col-lg-6">
                                  <p class="mb-0 f-14"><b>Revenue</b></p>
                                  <p class="mb-0 f-12">(Updated in november)</p>
                                </div>
                                <div class="col-lg-6 f-14 text-end">
                                  Show: 3 Years 5 Years
                                </div>
                              </div>
                            </div>
                            <base-spinner v-if="loading"></base-spinner>
                            <bar-line-chart
                              v-if="!loading"
                              :chartData="barChartDatas"
                            ></bar-line-chart>
                          </div>
                        </div>
                        <div
                          class="
                            col-lg-4
                            text-center
                            d-flex
                            flex-column
                            align-items-center
                            justify-content-center
                          "
                        >
                          <div class="col-lg-12 mt-3 mb-4">
                            <p class="mb-0 border-bottom f-12">BUDGET</p>
                            <span class="f-12 text-dark"
                              ><b>{{ budget }}</b></span
                            >
                          </div>
                          <div class="col-lg-12">
                            <p class="mb-0 border-bottom f-12">
                              Year End Forcast
                            </p>
                            <span class="f-12 text-dark pe-2"
                              ><b>{{ forcast }}</b></span
                            >
                            <span class="f-12 text-success"
                              ><b>
                                <i class="fa-solid fa-caret-up f-14"></i>
                                2.5%</b
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <h6><b>VARIANCE BREAKDOWN</b></h6>
                      <p class="mb-0 f-12">
                        <i class="fas fa-circle pe-1 text-success"></i>Not
                        Started yet
                      </p>
                      <p class="mb-0 f-12">
                        <i class="fas fa-circle pe-1 text-warning"></i>On
                        Target/Ahead
                      </p>
                      <p class="mb-0 f-12">
                        <i class="fas fa-circle pe-1 text-danger"></i>Behind
                        Schedule
                      </p>
                      <base-spinner v-if="loading"></base-spinner>
                      <base-table
                        v-if="!loading"
                        :variance="varianceTable"
                      ></base-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 sidebar">
        <div class="h-100 p-2 layout-style bg-white">
          <side-bar @filter-data="getData"></side-bar>
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
      <side-bar @filter-data="getData"></side-bar>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SideBar from "../ui/SideBar.vue";
import BarLineChart from "../ui/BarLineChart.vue";
import DonutChart from "../ui/DonutChart.vue";
import BaseTable from "../ui/BaseTable.vue";
import { defineComponent } from "@vue/runtime-core";
import * as staticData from "./staticData.data";

@Options({
  components: {
    SideBar,
    BarLineChart,
    DonutChart,
    BaseTable,
  },
  props: {
    msg: String,
  },
  mounted() {
    this.getData("2022");
  },
  methods: {
    getData(year: any) {
      this.loading = true;
      setTimeout(() => {
        const data = this.staticData.datas.filter(
          (find: any) => find.field === year
        );
        this.barChartDatas = data[0].barChartDatas;
        this.donutChartDatas = data[0].donutChartDatas;
        this.varianceTable = data[0].varianceTable;
        this.loading = false;
      }, 3000);
    },
  },
})
export default class CrudeOil extends Vue {
  msg!: string;
  budget = "USD 3.745 million";
  forcast = "USD 3.900 million";
  barChartDatas = {};
  donutChartDatas = {};
  varianceTable = [{}];
  staticData = staticData;
  loading = false;
}
</script>