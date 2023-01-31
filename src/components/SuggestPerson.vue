<template>
    <div class="suggest-person">
        <img class="suggest-person__img" :src="img" />
        <div class="suggest-person__info">
            <div class="suggest-person__name">{{ name }}</div>
            <div class="suggest-person__alias">{{ alias }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuggestPerson',
    props: {
        name: {
            type: String,
            default: ''
        },
        alias: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>
.suggest-person {
    display: flex;
    padding: 12px 12px;

    &:first-child,
    &:last-child {
        border-radius: 4px;
    }

    &:hover {
        cursor: pointer;
        background-color: lightgrey;
    }

    &__img {
        width: 40px;
        height: 40px;
    }

    &__info {
        margin: 0 0 0 8px;
    }

    &__name {
        font-weight: 600;
    }

    &__alias {
        opacity: 0.5;
    }
}
</style>
