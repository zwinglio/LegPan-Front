<template>
  <div class="app">
    <section id="menu" class="bg-dark py-3">
      <b-container>
        <b-row>
          <b-col>
            <img src="~/assets/img/logo_light.svg" alt="Logo LegPlan">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="login-form" class="py-4">
      <b-container>
        <b-row align-v="center" align-h="center" style="height: 50vh">
          <b-col lg="8">
            <b-card no-body class="overflow-hidden">
              <b-row no-gutters align-v="center" align-h="center">
                <b-col
                  md="4"
                  class="text-center"
                  style="background-color: #f1f1f1"
                >
                  <b-card-img
                    src="~/assets/img/logo_color.svg"
                    alt="Image"
                    class="rounded-0 w-75"
                    style="padding: 15vh 0"
                  />
                </b-col>
                <b-col md="8">
                  <b-card-body title="Login">
                    <b-card-text>
                      <form action="#">
                        <!-- crie dois inputs, e-mail e senha -->
                        <b-form-group
                          id="input-group-1"
                          label="E-mail:"
                          label-for="input-1"
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            required
                            placeholder="Digite seu e-mail"
                          />
                        </b-form-group>
                        <b-form-group
                          id="input-group-2"
                          label="Senha:"
                          label-for="input-2"
                        >
                          <b-form-input
                            id="input-2"
                            type="password"
                            required
                            placeholder="Digite sua senha"
                          />
                        </b-form-group>
                        <NuxtLink to="/dashboard" class="btn btn-primary">
                          Entrar
                        </NuxtLink>
                      </form>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
