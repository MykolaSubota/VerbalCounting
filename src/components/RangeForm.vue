<template>
  <div class="w-75 pb-3">
    <label for="range" class="form-label">{{ minValue }}</label>
    <input
      v-model="value"
      type="range"
      :min="minValue"
      :max="maxValue"
      step="1"
      class="form-range w-75"
      id="range"
    /><label for="range" class="text-end form-label">{{ maxValue }}</label
    ><br class="pb-2" />
    <label for="range" class="form-label"> {{ labelRange }} {{ value }}</label>
  </div>
</template>

<script>
export default {
  props: {
    maxValue: Number,
    minValue: Number,
    labelRange: String,
  },
  data() {
    return {
      value: parseInt((this.maxValue - this.minValue) / 2),
    };
  },
};
</script>
