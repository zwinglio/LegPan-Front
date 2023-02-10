<script>
export default {
  layout: 'dashboard',
  head () {
    return {
      title: 'Gerenciar Plano'
    }
  },
  methods: {
    rotate (event) {
      /* take the arrow in the button and rotate it */
      const arrow = event.target
      arrow.classList.toggle('rotate')
    }
  }
}
</script>

<template>
  <div class="page">
    <PartialsPageTitle title="Gerenciar Plano" />
    <section id="gerenciar">
      <b-container>
        <b-row class="my-4">
          <b-col>
            <div
              class="perspective-title d-flex justify-content-between align-items-center align-items-middle"
            >
              <b-button v-b-toggle.objective-id pill variant="link" size="sm">
                <img
                  class="arrow-close"
                  src="~/assets/img/icon_seta.svg"
                  alt=""
                  @click="rotate"
                >
              </b-button>
              <h4 class="flex-grow-1 ml-3">
                Promover a Participação População nas Ações
              </h4>
              <b-button v-b-toggle.sidebar-edit pill variant="link" size="sm">
                <img src="~/assets/img/dots.svg" alt="">
              </b-button>
            </div>
            <b-collapse id="objective-id" visible>
              <div class="objective">
                <div class="objective-title">
                  <h5>Testes</h5>
                  <hr>
                </div>
                <div class="objective-initiatives">
                  <ul>
                    <li>Teste 1</li>
                    <li>Teste 2</li>
                    <li>Teste 3</li>
                  </ul>
                </div>
              </div>
            </b-collapse>
          </b-col>
        </b-row>

        <b-row class="my-4">
          <b-col>
            <div
              class="perspective-title d-flex justify-content-between align-items-center align-items-middle"
            >
              <b-button v-b-toggle.objective-id pill variant="link" size="sm">
                <img
                  class="arrow-close"
                  src="~/assets/img/icon_seta.svg"
                  alt=""
                  @click="rotate"
                >
              </b-button>
              <h4 class="flex-grow-1 ml-3">
                Promover a Participação População nas Ações
              </h4>
              <b-button v-b-toggle.sidebar-edit pill variant="link" size="sm">
                <img src="~/assets/img/dots.svg" alt="">
              </b-button>
            </div>
            <b-collapse id="objective-id" visible>
              <div class="objective">
                <div class="objective-title">
                  <h5>Testes</h5>
                  <hr>
                </div>
                <div class="objective-initiatives">
                  <ul>
                    <li>Teste 1</li>
                    <li>Teste 2</li>
                    <li>Teste 3</li>
                  </ul>
                </div>
              </div>
            </b-collapse>
          </b-col>
        </b-row>
      </b-container>
      <b-sidebar
        id="sidebar-edit"
        title="Editar Perspectiva"
        backdrop-variant="dark"
        right
        shadow
        backdrop
        width="400px"
      >
        <form action="#" class="px-4">
          <b-form-group label="Nome da Perspectiva" label-for="input-1">
            <b-form-input
              id="input-1"
              type="text"
              required
              placeholder="Digite o nome da perspectiva"
            />
          </b-form-group>
          <b-form-group label="Descrição da Perspectiva" label-for="input-2">
            <b-form-textarea
              id="input-2"
              rows="3"
              max-rows="6"
              placeholder="Digite a descrição da perspectiva"
            />
          </b-form-group>
          <b-button type="submit" variant="primary">
            Salvar
          </b-button>
        </form>
      </b-sidebar>
    </section>
  </div>
</template>

<style>
.perspective-title {
  color: #ffffff;
  background: #ffb703;
  border-radius: 15px;
  padding: 5px 20px;
  border: 2px solid rgba(255, 183, 3, 0.38);
}

.objective {
  border: 2px solid rgba(255, 183, 3, 0.38);
  border-radius: 15px;
  margin: 20px 30px;
  padding: 20px;
}

.objective hr {
  border: 1px solid #ffb703;
  margin-left: 0;
}

.objective ul {
  margin-top: 10px;
  margin-left: 15px;
  list-style: none;
  padding: 0;
}

.objective ul li {
  border-radius: 15px;
  margin-bottom: 5px;
}

.objective ul li:before {
  content: "→";
  font-weight: 700;
  display: inline-block;
  width: 1em;
  margin-right: 5px;
}

button {
  outline: none;
  padding: 10px 10px !important;
}

/** rotate arrow */
.arrow-open {
  transform: rotate(0deg);
}

.rotate {
  transform: rotate(-90deg);
}

</style>
