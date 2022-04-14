<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th class="text-center">Budget</th>
          <th class="text-center">Actual Year To Date</th>
          <th class="text-center">Forcast Year End</th>
          <th class="text-center">Variance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in variance" :key="data.id">
          <th>
            {{ data.name !== "TOTAL" ? index + 1 + ")" : "" }} {{ data.name }}
          </th>
          <td class="text-center">${{ data.budget }}</td>
          <td class="text-center">${{ data.yearToDate }}</td>
          <td class="text-center">${{ data.yearEnd }}</td>
          <td class="text-center">${{ data.variance }}</td>
          <td class="text-center">
            <i
              class="fas fa-circle pe-1 f-12"
              :class="
                data.status === 'Behind Schedule'
                  ? 'text-danger'
                  : data.status === 'On Target'
                  ? 'text-warning'
                  : 'text-success'
              "
            ></i
            >{{ data.percentage }}%
          </td>
        </tr>
        <tr>
          <td class="text-end"><i>All figures in USD million</i></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    variance: {
      type: Array,
      required: true,
    },
  },
});
</script>

