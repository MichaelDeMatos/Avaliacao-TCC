<template>
  <div class="col-12">
    <h4>Alunos cadastrados</h4>
    <div class="table-responsive-sm">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Código</th>
            <th scope="col">Curso</th>
            <th scope="col">Tema</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, index) in alunos" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ aluno.nome }}</td>
            <td>{{ aluno.código }}</td>
            <td>{{ aluno.curso }}</td>
            <td>{{ aluno.tema }}</td>
            <td>
              <AppButton
                style="width: 5rem; height: auto"
                :isPrimary="true"
                :isSecondary="false"
                text="Avaliar"
                iconClass="fa fa-check"
                :onClick="onAvaliar"
              />
            </td>
          </tr>
        </tbody>
      </table>
          <p
            v-if="alunos.length === 0"
            style="text-align: center; color: red"
          >Não há dados cadastrados!</p>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue';
// import AlunosDataService from '@/services/AlunosDataService';

export default {
  data() {
    return {
      alunos: [{}],
    };
  },
  components: {
    AppButton,
  },
  methods: {
    retrieveAlunos() {

    },
    onAvaliar() {
      this.$router.push({ name: 'form-avaliacao' });
    },
  },
  mounted() {
    this.retrieveAlunos();
  },
};
</script>

<style scoped>
th {
  text-align: center;
}
tbody tr:hover {
  background: rgb(253, 239, 238);
  cursor: pointer;
}

</style>
