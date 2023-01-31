<template>
    <div class="suggest-company">
        <img class="suggest-company__img" :src="img" />
        <div class="suggest-company__info">
            <div class="suggest-company__name">{{ name }}</div>
            <div class="suggest-company__sign">Компания</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuggestCompany',
    props: {
        name: {
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
.suggest-company {
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

    &__sign {
        opacity: 0.5;
    }
}
</style>
