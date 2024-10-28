<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    receitas: {
      type: Array as PropType<{ id: number; nome: string; descricao: string }[]>,
      required: true
    }
  },
  methods: {
    mostrarDetalhes(receitaId: number) {
      this.$emit('mostrarDetalhes', receitaId);
    }
  }
});
</script>

<template>
  <ul>
    <li v-for="receita in receitas" :key="receita.id">
      <span>{{ receita.nome }} - {{ receita.descricao }}</span>
      <button @click="mostrarDetalhes(receita.id)">Ver Detalhes</button>
    </li>
  </ul>
</template>

<style scoped>
/* Estilos para a lista de receitas */
</style>
