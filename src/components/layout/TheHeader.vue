<template>
  <div class="navbar-light bg-light fixed-top">
    <nav class="navbar navbar-expand-md py-0">
      <div class="container-fluid">
        <a class="navbar-brand"
          ><img
            src="../../assets/noga-holding-logo-2x.png"
            width="135"
            height="53"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navContent">
          <div class="navbar-nav me-auto mb-lg-0 pageTitle">
            <ul>
              <li>
                <h6 class="mb-0">
                  <i class="fas fa-cubes pe-2"></i>State Budget Monitoring
                </h6>
              </li>
              <li>
                <ul class="trail-items">
                  <li><router-link to="Home">Home</router-link></li>
                  <li>
                    <a>State Budget Monitoring</a>
                  </li>
                  <li>Crude Oil</li>
                </ul>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav d-flex mb-lg-0">
            <li class="nav-item">
              <router-link to="Home" class="nav-link"
                ><i class="fa-solid fa-house pe-1"></i>Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="Profile" class="nav-link">
                <i class="fas fa-user pe-1"></i>Profile</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><i class="fas fa-question-circle pe-1"></i>Help</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="header-scroller mb-1">
      <div class="container">
        <nav class="nav d-flex justify-content-between">
          <router-link class="p-2" to="Overall">OVERALL</router-link>
          <router-link class="p-2" to="crudeOil">CRUDE OIL</router-link>
          <router-link class="p-2" to="AbuSafa">ABU SAAFA</router-link>
          <a class="p-2">GAS SALES</a>
          <a class="p-2">BLING</a>
          <a class="p-2">SUBSIDIES</a>
          <a class="p-2">DIVIDENDS</a>
          <a class="p-2">OTHER</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-light {
  background-color: #dddddd !important;
}

a {
  color: rgba(0, 0, 0, 0.55);
}

ul {
  list-style: none;
  margin-bottom: 0;
  padding-left: 1.7rem;

  h6 {
    color: $primary-color;
  }

  .trail-items {
    li {
      display: inline;
      font-size: 12px;

      a {
        text-decoration: none;
      }
    }
    li + li:before {
      padding: 5px;
      color: $dark-color;
      content: "\203A";
    }
  }
}

.nav-item {
  a {
    font-size: 13px;
  }
}
</style>