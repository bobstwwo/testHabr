<template>
  <label :for="uuid">{{ label }}</label>
  <input v-if="isInd" :id="uuid" v-bind="$attrs" :placeholder="label" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" class="base-input"
    :aria-describedby="error ? `${uuid}-error` : null" aria-invalid="true">
  <p v-if="error" :id="`${uuid}-error`" class="base-input-error" aria-live="assertive">{{ error }}</p>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    isInd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uuid: 1
    }
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  width: 95%;
  height: 28px;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 1px 4px;
  font-size: 14px;
  margin: 6px 0 0 0;

  &:hover {
    border-color: grey;
  }

  @media (min-width:480px) {
    height: 32px;
    width: 350px;
  }

  @media (min-width:1024px) {
    height: 40px;
    width: 500px;
  }

  &-error {
    color: red;
  }
}
</style>
