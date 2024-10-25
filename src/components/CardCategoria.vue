<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import Tag from './Tag.vue';
//import vue from '@vitejs/plugin-vue';

export default {
    //props indica que existe uma propriedade q esta sendo usada de um componente para outro. Do outro lado o componente
    //que quiser usar essa propriedade deve usar o v-bind para se ligar a ele e usar seus atributos/variáveis
    props: {
        categoria: { type: Object as PropType<ICategoria>, required: true }
    },
    components: { Tag },
    
    methods: {
        selecionarIngrediente(ingrediente: string) {
            this.$emit('ingredienteSelecionado', ingrediente);
        }
    }
};
</script>

<template>
    <!--  {{ categoria.nome }} -->
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">

            <h2 class="paragrafo-lg categoria__nome"> {{ categoria.nome }} </h2>
        </header>
        <ul class="categoria__ingredientes">
            <!-- Cada ingrediente emite um evento de seleção ao ser clicado -->
            <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente" @click="selecionarIngrediente(ingrediente)">
                <Tag :texto="ingrediente" />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #17e04d);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color:#17e04d;
}
</style>