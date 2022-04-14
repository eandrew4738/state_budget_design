<template>
  <div class="position-relative">
    <div class="donut-text">
      <ul>
        <li class="pe-2">
          <p class="mb-0">Budget</p>
          <p class="mb-0 text-gold">$1.9bn</p>
        </li>
        <li>
          <p class="mb-0">Forecast</p>
          <p class="mb-0 text-gold">$1.9bn</p>
        </li>
      </ul>
      <i class="fa-solid fa-arrow-trend-up"></i>
    </div>
    <Doughnut :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { defineComponent } from "vue";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default defineComponent({
  components: {
    Doughnut,
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.donut-text {
  font-size: 14px;
  width: 100%;
  height: 40px;
  position: absolute;
  top: 46%;
  left: 0;
  margin-top: -20px;
  line-height: 19px;
  text-align: center;

  ul {
    list-style: none;
    padding-left: 0px;
    margin-bottom: 0px;

    li {
      display: inline-table;

      .text-gold {
        color: #b8860b;
      }
    }
  }

  i {
    font-size: 50px;
  }
}

@media only screen and (max-width: 1024) {
  i {
    font-size: 40px;
  }
}

@media only screen and (max-width: 768px) {
  .donut-text {
    font-size: 12px;
    i {
      font-size: 35px;
    }
  }
}
</style>

