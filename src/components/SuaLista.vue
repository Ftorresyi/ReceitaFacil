<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        ingredientes: { type: Object as PropType<Record<string, number>>, required: true }
    },
    methods: {
        removerIngrediente(ingrediente: string) {
            this.$emit('removerIngrediente', ingrediente);
        }
    }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua lista:
        </span>

        <ul v-if="Object.keys(ingredientes).length" class="ingredientes-sua-lista">
            <li v-for="(quantidade, ingrediente) in ingredientes" :key="ingrediente">
                <Tag :texto="`${ingrediente} (${quantidade})`" :ativa="true" />
                
                <!-- Exibe o ingrediente com a quantidade e o botão de remoção -->
                <v-icon
                    color="red darken-1"
                    @click="removerIngrediente(ingrediente)"
                    class="icon-lixeira"
                >
                    mdi-delete
                </v-icon>
            </li>
        </ul>

        <p v-else class="paragrafo lista-vazia">
            <!-- <img src="/imagens/lista-vazia.png" alt="Ícone de pesquisa"> -->
            Sua lista está vazia, selecione ingredientes para iniciar.
        
        </p>
    
    </section>
</template>

<style scoped>
.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}
</style>