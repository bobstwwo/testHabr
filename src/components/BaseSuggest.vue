<template>
    <BaseInput label="Пользователь или компания" type="text" v-model="suggestValue" :error="errorValue"
        :isInd="selectedIndexs.length === 0" />
    <div v-if="selectedIndexs.length > 0" class="suggest-selected-root">
        <SuggestSelected v-for="(sld, index) in selectedIndexs" :key="index" :name="options[sld].alias"
            @removeSuggest="removeSuggest(index)" />
    </div>
    <div class="suggest-options">
        <component v-for="(option, index) in options" :key="index" @click="addSuggest(index)"
            :is="option.type === 'user' ? 'SuggestPerson' : 'SuggestCompany'"
            :img="option.avatar ?? 'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=1380&t=st=1675123570~exp=1675124170~hmac=3861a1f61255822563e6667238b47cea4dd4d3a164ee29ffcabaa9bf4e17cebf'"
            :name="option.name ?? option.alias" :alias="'@' + option.alias">

        </component>
    </div>
</template>

<script>
import BaseInput from './BaseInput.vue';
import SuggestPerson from './SuggestPerson.vue';
import SuggestCompany from './SuggestCompany.vue';
import SuggestSelected from './SuggestSelected.vue';
import suggestAPI from '../api/suggestAPI';

export default {
    name: 'BaseSuggest',
    components: {
        BaseInput,
        SuggestCompany,
        SuggestSelected,
        SuggestPerson
    },
    data() {
        return {
            errorValue: '',
            inputValue: '',
            timeout: null,
            options: [],
            selectedIndexs: []
        }
    },
    computed: {
        suggestValue: {
            get() {
                return this.inputValue
            },
            set(val) {
                if (this.timeout) clearTimeout(this.timeout)
                this.timeout = setTimeout(() => {
                    this.inputValue = val
                }, 500)
            }
        },
    },
    watch: {
        async inputValue(value) {
            if (value.trim().length >= 3) {
                const result = await suggestAPI(value);

                if (result.isError) {
                    this.errorValue = result.errorText;
                } else {
                    this.options = result.data;
                    this.errorValue = ''
                }
            } else if (value == '') {
                this.options = []
                this.errorValue = ''
            }
        }
    },
    methods: {
        addSuggest(index) {
            if (!this.selectedIndexs.includes(index)) {
                this.selectedIndexs.push(index);
            }
        },
        removeSuggest(index) {
            if (index > -1 && index <= this.selectedIndexs.length - 1) {
                this.selectedIndexs.splice(index, 1);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.suggest-options {
    margin: 8px 0 0 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    max-height: 256px;
    overflow-y: scroll;

}

.suggest-selected-root {
    width: 95%;
    height: 28px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 1px 4px;
    font-size: 14px;
    margin: 6px 0 0 0;
    display: flex;
    align-items: center;
    overflow-x: scroll;

    &:hover {
        border-color: grey;
    }

    @media (min-width:480px) {
        height: 32px;
        width: 350px;
    }

    @media (min-width:1024px) {
        height: 40px;
        width: 500px;
    }
}
</style>
