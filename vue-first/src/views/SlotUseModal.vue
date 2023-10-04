<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <modal-layout>
        <template v-slot:header>
            <h1>타이틀</h1>
        </template>
        <template v-slot:default>
            <p>컨텐츠1</p>
            <p>컨텐츠2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </modal-layout>
</template>
<script>
import ModalLayout from '../components/SlotModalLayout.vue';

export default {
    name: 'SlotUse',
    components: {
        'modal-layout': ModalLayout
    },
    data() {
        return {
            sampleData: ''
        };
    },
    setup() {

    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {}
}
</script>
