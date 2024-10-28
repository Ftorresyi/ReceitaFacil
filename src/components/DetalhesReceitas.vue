<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    receita: {
      type: Object as PropType<{ id: number; nome: string; descricao: string; ingredientes: string[] }>,
      required: true
    }
  }
});
</script>

<template>
  <div>
    <h2>{{ receita.nome }}</h2>
    <p>{{ receita.descricao }}</p>
    <ul>
      <li v-for="ingrediente in receita.ingredientes" :key="ingrediente">
        {{ ingrediente }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Estilos para os detalhes da receita */
</style>
