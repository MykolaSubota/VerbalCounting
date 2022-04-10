<template>
  <div class="home">
    <div
      class="card shadow-lg p-3 mb-5 bg-white rounded w-40 position-absolute top-50 start-50 translate-middle"
    >
      <div class="card-body text-start">
        <h2 class="pb-3 font-weight-bold">Привет!</h2>
        <p class="pb-4">
          Добро пожаловать на 24 тренировочный день.<br />
          Ваш последний результат - решено 10 из 25.<br />
          Общая точность 80%.
        </p>
        <h5>Настройки</h5>
        <form>
          <range labelRange="Длительность" minValue="1" maxValue="15" />
          <range labelRange="Сложность" minValue="1" maxValue="10" />
          <checkbox labelChackbox="Суммирование" :is_checked="true" value="+" />
          <checkbox labelChackbox="Разность" :is_checked="false" value="-" />
          <checkbox labelChackbox="Умножение" :is_checked="false" value="*" />
          <checkbox labelChackbox="Деление" :is_checked="true" value="/" />
          <checkbox
            labelChackbox="Возведение в степень"
            :is_checked="true"
            value="*"
          />
          <div class="text-end">
            <button type="button" class="btn btn-light">Play!</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Range from "@/components/RangeForm.vue";
import Checkbox from "@/components/CheckboxForm.vue";

export default {
  name: "HomeView",
  components: {
    Range,
    Checkbox,
  },
};
</script>
