<template>
    <div class="suggest-selected">
        <div class="suggest-selected__name">
            {{ name }}
        </div>
        <div @click="$emit('removeSuggest')" class="suggest-selected__remove">
        </div>
    </div>
</template>

<script>

export default {
    name: 'SuggestSelected',
    props: {
        name: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>
.suggest-selected {
    height: 60%;
    background-color: lightseagreen;
    color: white;
    padding: 4px 6px;
    border-radius: 4px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin: 0 6px 0 0;
    }

    &__remove {
        position: relative;
        width: 12px;
        height: 12px;
        margin: 0 0 0 8px;

        &:hover {
            cursor: pointer;
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 12px;
            height: 2px;
            background-color: white;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 12px;
            height: 2px;
            background-color: white;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }
    }
}
</style>
