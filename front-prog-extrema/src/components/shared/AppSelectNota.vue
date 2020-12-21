<template>
  <div>
    <div class="label">
      <label :for="id">{{ label }}</label>
    </div>
    <v-select
      label="nota"
      :reduce="(opcao) => opcao.valor"
      :options="notas"
      @input="setSelected"
    ></v-select>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import vSelect from 'vue-select';

export default {
  name: 'AppSelectNota',
  props: {
    id: String,
    label: String,
    value: Number,
    notas: {
      type: Array,
      required: true,
    },
  },
  components: {
    vSelect,
  },
  methods: {
    setSelected(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>
.label {
  width: 272px;
  height: 40px;
  border-radius: 0px;
  color: rgb(68, 68, 68);
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 10px 0px;
}
</style>
