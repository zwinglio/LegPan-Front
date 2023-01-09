<template>
  <section id="footer">
    <b-container>
      <b-row>
        <b-col lg="3">
          <img src="~/assets/img/logo_color.svg" alt="Logo" />
        </b-col>
        <b-col>
          <p class="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consequat tortor at accumsan luctus. Pellentesque at
            dictum risus, interdum semper ex. Curabitur sit amet justo est.
            Proin elit ante, luctus at augue at, viverra ultricies metus.
          </p>
          <p class="cti">
            Desenvolvido pelo <span class="cyan">CTI</span> da Câmara Municipal
            de Parnamirim
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style>
#footer {
  border-top: #ffb703 4px solid;
  background-color: #fffaee;
  padding: 2rem 0;
}

#footer p {
  color: #696969;
}

.cti {
  color: #000000 !important;
}

.cyan {
  color: #0da2d1;
  font-weight: 700;
}
</style>
