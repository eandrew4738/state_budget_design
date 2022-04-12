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
      ...
    </div>
    <div
      class="tab-pane fade"
      id="scenarios"
      role="tabpanel"
      aria-labelledby="scenarios-tab"
    >
      ...
    </div>
    <div
      class="tab-pane fade"
      id="report"
      role="tabpanel"
      aria-labelledby="report-tab"
    >
      ...
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  padding: 0rem 1rem 0.3rem 1rem !important;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  border-color: transparent;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: transparent;
  border-bottom: 1px solid;
}

li button {
  font-size: 13px;
}
</style>