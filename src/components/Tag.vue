<script lang="ts">

//Tag é um componente que exibe o nome de cada ingrediente.
//Ele aceita uma prop ativa para indicar se o ingrediente está selecionado, ajustando o estilo.

export default {
    props: {
        texto: { type: String, required: true },
        ativa: Boolean  //por padrão ele já é false
    }
}

</script>

<template>
    <span class="tag" :class="{ ativa: ativa }">
        {{ texto }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.tag.ativa {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>