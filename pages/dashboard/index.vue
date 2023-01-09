<script>
export default {
  layout: "dashboard",
  head() {
    return {
      title: "Dashboard",
    };
  },

  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Tarefa 1",
          description: "Descrição da tarefa 1",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 2,
          name: "Tarefa 2",
          description: "Descrição da tarefa 2",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 3,
          name: "Tarefa 3",
          description: "Descrição da tarefa 3",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 4,
          name: "Tarefa 4",
          description: "Descrição da tarefa 4",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 5,
          name: "Tarefa 5",
          description: "Descrição da tarefa 5",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 6,
          name: "Tarefa 6",
          description: "Descrição da tarefa 6",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 7,
          name: "Tarefa 7",
          description: "Descrição da tarefa 7",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 8,
          name: "Tarefa 8",
          description: "Descrição da tarefa 8",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 9,
          name: "Tarefa 9",
          description: "Descrição da tarefa 9",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 10,
          name: "Tarefa 10",
          description: "Descrição da tarefa 10",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
        {
          id: 11,
          name: "Tarefa 11",
          description: "Descrição da tarefa 11",
          status: "Em andamento",
          deadline: "2020-10-10",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="dashboard">
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h1>Visão geral</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h2>Últimas atualizações</h2>
            <b-table striped hover small :items="tasks"></b-table>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h2>Tarefas próximas do fim</h2>
            <b-table striped hover small :items="tasks"></b-table>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
