<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :value="value"
      id="check"
      :checked="is_checked"
    />
    <label class="form-check-label" for="check">{{ labelChackbox }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    labelChackbox: String,
    is_checked: Boolean,
  },
};
</script>
