<template>
  <b-row class="my-4">
    <b-col>
      <div
        class="perspective-title d-flex justify-content-between align-items-center align-items-middle"
      >
        <b-button
          v-b-toggle="'objective-' + objective.id"
          pill
          variant="link"
          size="sm"
        >
          <img class="arrow-close" src="~/assets/img/icon_seta.svg" alt="">
        </b-button>
        <h4 class="flex-grow-1 ml-3">
          {{ objective.name }}
        </h4>
        <b-button
          v-b-toggle="'edit-objective-' + objective.id"
          variant="link"
          size="sm"
        >
          <img src="~/assets/img/dots.svg" alt="">
        </b-button>
      </div>
      <b-collapse :id="'objective-' + objective.id" visible>
        <div
          v-for="initiative in objective.initiatives"
          :key="initiative.id"
          class="initiatives"
        >
          <div class="initiatives-title">
            <h5>{{ initiative.name }}</h5>
            <hr>
          </div>
          <div class="initiatives-actions">
            <ul>
              <li v-for="action in initiative.actions" :key="action.id">
                {{ action.name }}
              </li>
            </ul>
          </div>
        </div>
      </b-collapse>
    </b-col>

    <b-sidebar
      :id="'edit-objective-' + objective.id"
      title="Editar Objetivo"
      backdrop-variant="dark"
      right
      shadow
      backdrop
      width="400px"
    >
      <form action="#" class="px-4">
        <p>{{ objective.name }}</p>
        <b-form-group label="Nome do objetivo" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
          />
        </b-form-group>
        <b-form-group label="Perspectiva" label-for="input-2">
          <b-form-select v-model="form.perspective" :selected="form.perspective" :options="perspectives" />
        </b-form-group>
        <b-button type="submit" variant="primary">
          Salvar ->
        </b-button>
      </form>
    </b-sidebar>
  </b-row>
</template>

<script>
import { usePlanStore } from '@/store/plan'

export default {
  name: 'GerenciarObjective',
  props: {
    objective: {
      type: Object,
      required: true
    }
  },
  setup () {
    const plan = usePlanStore()
    return { plan }
  },
  data () {
    return {
      form: {
        name: this.objective.name,
        perspective: this.objective.perspective_id
      }
    }
  },
  computed: {
    perspectives () {
      return this.plan.get_perspectives.map(perspective => ({
        value: perspective.id,
        text: perspective.name
      }))
    }
  }
}
</script>

<style>
.initiatives {
  border: 2px solid rgba(255, 183, 3, 0.38);
  border-radius: 15px;
  margin: 20px 30px;
  padding: 20px;
}

.initiatives hr {
  border: 1px solid #ffb703;
  margin-left: 0;
}

.initiatives ul {
  margin-top: 10px;
  margin-left: 15px;
  list-style: none;
  padding: 0;
}

.initiatives ul li {
  border-radius: 15px;
  margin-bottom: 5px;
}

.initiatives ul li:before {
  content: "→";
  font-weight: 700;
  display: inline-block;
  width: 1em;
  margin-right: 5px;
}
</style>
