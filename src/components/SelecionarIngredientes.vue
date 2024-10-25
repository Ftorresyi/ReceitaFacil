<script lang="ts">
import { obterCategorias } from '@/http';
import { defineComponent } from 'vue';
import ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import SuaLista from './SuaLista.vue';

//Ouvir o evento ingredienteSelecionado e atualizar a lista de ingredientes selecionados. 
//Este componente será responsável por passar os ingredientes selecionados para SuaLista

export default defineComponent({
    components: { CardCategoria, SuaLista },
    data() {
        return {
            categorias: [] as ICategoria[], // Lista de categorias
            ingredientesSelecionados: {} as Record<string, number> // Objeto para contagem de ingredientes selecionados
        };
    },
    methods: {
        atualizarIngredientes(ingrediente: string) {
            if (this.ingredientesSelecionados[ingrediente]) {
                // Incrementa a contagem do ingrediente
                this.ingredientesSelecionados[ingrediente] += 1;
            } else {
                // Adiciona o ingrediente com contagem 1
                this.ingredientesSelecionados[ingrediente] = 1;
            }
        },
        removerIngrediente(ingrediente: string) {
            // Remove o ingrediente completamente da lista
            delete this.ingredientesSelecionados[ingrediente];
        },
        isSelecionado(ingrediente: string) {
            return this.ingredientesSelecionados[ingrediente] > 0;
        }
    },
    async created() {
        // Carrega as categorias com ingredientes
        this.categorias = await obterCategorias();
    }
});
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes"> Ingredientes </h1>

        <p class="paragrafo-lg intrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
            <br>
            <br>
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
                <CardCategoria 
                :categoria="categoria" 
                @ingredienteSelecionado="atualizarIngredientes"
                :ingredientesSelecionados="ingredientesSelecionados" />
            </li>
        </ul>

        <!-- Passa ingredientes selecionados para SuaLista e ouve o evento de remoção-->
        <SuaLista :ingredientes="ingredientesSelecionados" @removerIngrediente="removerIngrediente"/>

        <p class="dica">
            *Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p>
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>