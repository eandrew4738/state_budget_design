<template>
  <div class="navbar-light bg-light fixed-top">
    <nav class="navbar navbar-expand-md py-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
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
                  <li><a href="#">Home</a></li>
                  <li><a href="#">State Budget Monitoring</a></li>
                  <li>Crude Oil</li>
                </ul>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav d-flex mb-lg-0">
            <li class="nav-item">
              <a class="nav-link"><i class="fa-solid fa-house pe-1"></i>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> <i class="fas fa-user pe-1"></i>Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fas fa-question-circle pe-1"></i>Help</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="header-scroller">
      <div class="container">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2" href="#">OVERALL</a>
          <a class="p-2" href="#">CRUDE OIL</a>
          <a class="p-2" href="#">ABU SAAFA</a>
          <a class="p-2" href="#">GAS SALES</a>
          <a class="p-2" href="#">BLING</a>
          <a class="p-2" href="#">SUBSIDIES</a>
          <a class="p-2" href="#">DIVIDENDS</a>
          <a class="p-2" href="#">OTHER</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

ul .trail-items li {
  display: inline;
  font-size: 13px;
}

ul .trail-items li + li:before {
  padding: 5px;
  color: rgba(0, 0, 0, 0.55);
  content: "\203A";
}

ul .trail-items li a {
  text-decoration: none;
}

.nav-item a {
  font-size: 13px;
}

.header-scroller {
  height: 2.2rem;
  overflow-y: hidden;
  background-color: aqua;
}

.header-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.header-scroller .nav a {
  text-decoration: none;
  font-size: 15px;
}
</style>