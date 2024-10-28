<script lang="ts">
import DetalhesReceita from '~/components/DetalhesReceita.vue';

export default {
  components: { DetalhesReceita },
  data() {
    return {
      receita: null as { id: number; nome: string; descricao: string; ingredientes: string[] } | null
    };
  },
  async asyncData({ params }) {
    // Exemplo de dados; aqui você pode buscar a receita de uma API usando o `params.id`
    const receitas = [
      { id: 1, nome: "Receita 1", descricao: "Deliciosa receita 1", ingredientes: ["Ingrediente A", "Ingrediente B"] },
      { id: 2, nome: "Receita 2", descricao: "Deliciosa receita 2", ingredientes: ["Ingrediente C", "Ingrediente D"] }
    ];

    return {
      receita: receitas.find(receita => receita.id === parseInt(params.id))
    };
  }
};
</script>

<template>
  <div v-if="receita">
    <DetalhesReceita :receita="receita" />
  </div>
  <p v-else>Receita não encontrada.</p>
</template>

<style scoped>
/* Estilos para a página de detalhes */
</style>
