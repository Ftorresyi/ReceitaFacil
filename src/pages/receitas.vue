<script lang="ts">
import ListaReceitas from '~/components/ListaReceitas.vue';

export default {
  components: { ListaReceitas },
  data() {
    return {
      receitas: [
        { id: 1, nome: "Receita 1", descricao: "Deliciosa receita 1" },
        { id: 2, nome: "Receita 2", descricao: "Deliciosa receita 2" }
      ]
    };
  },
  methods: {
    verDetalhes(receitaId: number) {
      this.$router.push({ name: 'detalhes', params: { id: receitaId } });
    }
  }
};
</script>

<template>
  <div>
    <h2>Lista de Receitas</h2>
    <ListaReceitas :receitas="receitas" @mostrarDetalhes="verDetalhes" />
  </div>
</template>

<style scoped>
/* Estilos específicos para a lista de receitas */
</style>
