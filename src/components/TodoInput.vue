<template>
    <div class="formInput">
        <input 
            v-model="newTodo" 
            class="input" 
            placeholder="What needs to be done?"
            @keyup.enter="addTodo"
        >
        <i class="downArrow fa fa-angle-right" />
    </div>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            newTodo: '',
        }
    },
    methods: {
        addTodo: function () {
        // insert new todo into db
        },
    }
}
</script>
