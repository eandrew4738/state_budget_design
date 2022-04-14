<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" :height="140" />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { defineComponent } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  components: {
    Bar,
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
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
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

