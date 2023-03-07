<template>
  <div class="page">
    <PartialsPageTitle title="Gerenciar Plano" />

    <b-container id="manage">
      <b-row>
        <b-col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde
            aut iure necessitatibus illo aliquam libero ullam quis ea incidunt
            maxime accusamus eius voluptate praesentium accusantium tempore,
            laboriosam deleniti. Cumque.
          </p>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col>
          <b-tabs>
            <b-tab title="Usuários" active>
              <b-table
                :busy="!users.fetched"
                :items="users.users"
                :fields="fields"
                responsive
                striped
                borderless
                hover
              >
                <template #cell(actions)="row">
                  <b-button-group size="sm">
                    <b-dropdown variant="outline-secondary" size="sm" no-caret>
                      <template #button-content>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </template>
                      <b-dropdown-item href="#">
                        Editar
                      </b-dropdown-item>
                      <b-dropdown-item href="#">
                        Desativar
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-button-group>
                </template>
                <template #table-busy>
                  <div class="text-center text-danger my-5">
                    <b-spinner variant="warning" type="grow" label="Spinning" />
                  </div>
                </template>
              </b-table>
            </b-tab>
            <b-tab title="Departamentos">
              <p>Departamentos</p>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import useUsersStore from '@/store/users'

export default {
  layout: 'dashboard',

  setup () {
    const users = useUsersStore()

    return {
      users
    }
  },
  data () {
    return {
      fields: [
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'Email' },
        { key: 'department', label: 'Setor' },
        { key: 'cargo', label: 'Cargo' },
        { key: 'actions', label: 'Ações' }
      ]
    }
  },

  head () {
    return {
      title: 'Gerenciar Plano'
    }
  },

  mounted () {
    if (!this.users.fetched) {
      this.users.fetchUsers()
    }
    this.users.fetched = false
  }
}
</script>

<style>
#manage .nav-tabs {
  border-bottom: 1px solid #ffb703;
}

#manage .nav-item {
  background-color: #f4f4f4;
  font-weight: 700;
  margin-left: 3px;
  border-radius: 5px 5px 0 0;
}

#manage .nav-item a {
  color: #023047;
  padding: 10px 30px;
  border: #ffb703;
}

#manage .nav-item .active {
  background-color: #ffb703;
  color: #f4f4f4;
  border-radius: 5px 5px 0 0;
}

#manage .tab-content {
  padding-top: 10px;
  border: 1px solid #ffb703;
  border-radius: 0px 0px 6px 6px;
  border-radius: 0 0 5px 5px;
  padding: 20px;
}
</style>
