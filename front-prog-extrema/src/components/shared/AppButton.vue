<template>
  <button
    class="button"
    :class="{primary: isPrimary, secondary: isSecondary}"
    @click="onClick"
  >
  <i :class="iconClass"></i> {{text}} </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    isPrimary: Boolean,
    isSecondary: Boolean,
    iconClass: String,
    text: String,
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  border-radius: 4px;
  height: 48px;
  width: 272px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  line-height: 24px;
  text-align: center;
  border: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
}

.primary {
  color: rgb(255, 255, 255);
  background: rgb(54, 187, 28);
}

.secondary {
  color: rgb(255, 255, 255);
  background: rgb(218, 21, 21);
}

.primary:hover {
  background: rgb(26, 128, 6);
}

.secondary:hover {
  background: rgb(170, 17, 6);
}
</style>
