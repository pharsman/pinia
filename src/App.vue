<template>
  <div>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="useStore.double">double</button>
    <h2>{{ useStore.count }}</h2>
    <h2> This number is: {{ oddOrEven }}</h2>
  </div>
  <label for="numb">Enter Number</label>
  <input type="number" name="numb" id="numb" v-model="useStore.count">

</template>
<script setup>
import { computed, ref } from 'vue';
import { store } from '@/store/index.js'

const useStore = store()

const count = ref(0)

const plus = () => {
  useStore.plus()
}

const minus = () => {
  useStore.minus()
}

const oddOrEven = computed(() => {
  return useStore.oddOrEven
})

</script>

<style lang="scss" scoped>
* {
  @extend %main
}
input{
  margin-top: 30px;
  margin-left: 10px;
}

label{
  margin-left: 150px;
}

div {
  margin-top: 50px;
  margin-left: 100px;
  display: flex;

  button {
    background-color: rgba(255, 0, 0, 0.199);
    display: block;
    padding: 1px 6px;
    cursor: pointer;

    &:hover {
      background-color: rgb(0, 255, 170);
    }

    margin-left: 10px;
  }

  h2 {
    cursor: default;
    margin-left: 20px;

  }
}
</style>
