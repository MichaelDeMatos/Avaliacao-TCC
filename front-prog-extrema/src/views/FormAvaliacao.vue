<template>
  <div class="form">
    <form class="form-avaliacao" novalidate="true" @change="calculaMedia">
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
      <div class="d-flex justify-content-end" style="color:red;">
        <h4 style="border: 2px solid red; padding: 1px">Nota: {{nota}}</h4>
      </div>
      <h5>Apresentação Escrita</h5>
      <div class="form-row">
        <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Conteúdo"
          id="conteudo"
          :notas="opcoesConteudoCap"
          v-model="form.conteudo"></AppSelectNota>
        </div>

        <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Redação"
          id="redacao"
          :notas="opcoesRedacao"
          v-model="form.redacao"></AppSelectNota>
        </div>

         <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Normalização"
          id="norma"
          :notas="opcoesNormalizacao"
          v-model="form.norma"></AppSelectNota>
        </div>
      </div>

      <h5>Apresentação Oral</h5>
      <div class="form-row">
        <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Capacitação de Exposição"
          id="capexp"
          :notas="opcoesConteudoCap"
          v-model="form.capexp"></AppSelectNota>
        </div>

        <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Respostas as Arguicões"
          id="resp"
          :notas="opcoesRespostas"
          v-model="form.resp"></AppSelectNota>
        </div>

         <div class="form-group col-sm-12 col-md-4 col-xl-4 col-lg-4">
          <AppSelectNota
          label="Previsão do tempo"
          id="prev"
          :notas="opcoesPrevisao"
          v-model="form.prev"></AppSelectNota>
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
        conteudo: 0,
        redacao: 0,
        norma: 0,
        capexp: 0,
        resp: 0,
        prev: 0,
      },
      nota: 0,
      errors: [],
      opcoesConteudoCap: [
        {
          nota: '0',
          valor: 0,
        },
        {
          nota: '1',
          valor: 1,
        },
        {
          nota: '2',
          valor: 2,
        },
        {
          nota: '3',
          valor: 3,
        },
        {
          nota: '4',
          valor: 4,
        },
        {
          nota: '5',
          valor: 5,
        },
      ],
      opcoesRedacao: [
        {
          nota: '0',
          valor: 0,
        },
        {
          nota: '1',
          valor: 1,
        },
        {
          nota: '2',
          valor: 2,
        },
        {
          nota: '3',
          valor: 3,
        },
      ],
      opcoesNormalizacao: [
        {
          nota: '0',
          valor: 0,
        },
        {
          nota: '1',
          valor: 1,
        },
        {
          nota: '2',
          valor: 2,
        },
      ],
      opcoesRespostas: [
        {
          nota: '0',
          valor: 0,
        },
        {
          nota: '1',
          valor: 1,
        },
        {
          nota: '2',
          valor: 2,
        },
        {
          nota: '3',
          valor: 3,
        },
        {
          nota: '4',
          valor: 4,
        },
      ],
      opcoesPrevisao: [
        {
          nota: '0',
          valor: 0,
        },
        {
          nota: '1',
          valor: 1,
        },
      ],
    };
  },
  components: {
    AppButton,
    AppSelectNota,
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(e);
      // this.checkForm();
      this.$router.push({ name: 'list-alunos' });
    },

    onCancelar() {
      this.$router.push({ name: 'list-alunos' });
    },
    calculaMedia() {
      console.log('Mudou');
      const media = (this.form.conteudo + this.form.redacao + this.form.norma
         + this.form.capexp + this.form.resp + this.form.prev) / 2;
      this.nota = media;
    },
  },
  updated() {
    this.calculaMedia();
    console.log(this.form);
  },
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
