<template>
  <div class="form">
    <form class="form-avaliacao" novalidate="true">
    <p v-if="errors.length" style="color: red">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
      </ul>
    </p>
      <div>
        <span id="title">Avaliar Aluno</span>
        <div
          style="width: 100%;
          border: 0.025rem solid #e7e7e7;
          margin-top: 12px; margin-bottom: 16px;"
        ></div>
      </div>
      <div class="form-row">

      </div>

      <div class="form-row">
        <div class="form-group col-sm-12 col-md-6 col-xl-6 col-lg-6">
        <AppSelectNota label="Teste"></AppSelectNota>
        </div>

        <div class="form-group col-sm-12 col-md-6 col-xl-6 col-lg-6">

        </div>
      </div>
      <section class="section-footer-menu-layer" style="white-space: nowrap">
        <div class="mr-1 ml-3" style="display: inline-block; width: 46%;">
          <AppButton
            style="width: 100%"
            :isPrimary="false"
            :isSecondary="true"
            text="Cancelar"
            :onClick="onCancelar"
          />
        </div>
        <div class="mr-5 ml-4" style="display: inline-block; width: 46%;">
          <AppButton
            style="width: 100%"
            :isPrimary="true"
            :isSecondary="false"
            text="Salvar"
            :onClick="onSubmit"
          />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue';
import AppSelectNota from '@/components/shared/AppSelectNota.vue';

export default {
  data() {
    return {
      form: {

      },
      errors: [],
    };
  },
  components: {
    AppButton,
    AppSelectNota,
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      // this.checkForm();
    },

    onCancelar() {
      this.$router.push({ name: 'list-alunos' });
    },

  },
  mounted() {},
};
</script>

<style scoped>
.form-avaliacao {
  font-size: 16px;
  padding: 15px 30px;
  border-radius: 4px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.form-avaliacao fieldset {
  margin: 24px 0 0 0;
}
.form-avaliacao legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}

.section-footer-menu-layer {
  display: block;
  border-top: 0.025rem solid #e7e7e7;
  padding-top: 16px;
  padding-bottom: 16px;
  height: 72px;
}

#title {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  color: #444444;
}
</style>
