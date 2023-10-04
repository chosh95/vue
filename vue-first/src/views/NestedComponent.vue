<template>
    <div>
        <PageTitle title="this is nested title"/>
        <page-title title="this is two title"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';

export default {
    name: 'NestedComponent',
    components: {PageTitle},
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
