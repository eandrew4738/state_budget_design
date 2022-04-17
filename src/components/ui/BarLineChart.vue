<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" :height="140" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
@Options({
  components: {
    Bar,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
})
export default class BarLineChart extends Vue {
  chartOptions = {
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
  };
}
</script>

