<template>
    <ul>
        <li 
            v-for="todo in todos" 
            :key="todo.id">
            <div 
                v-if="todo.is_public" 
                class="userInfoPublic">
                @{{ todo.user.name }}
            </div>
            <div 
                v-if="type === 'private'" 
                class="view">
                <div 
                    v-if="todo.is_completed" 
                    class="round">
                    <input
                        id="todo.id"
                        type="checkbox"
                        checked="true"
                    >
                    <label 
                        htmlFor="todo.id"
                        @click="handleTodoToggle(todo)"/>
                </div>
                <div 
                    v-else 
                    class="round">
                    <input
                        id="todo.id"
                        type="checkbox"
                    >
                    <label 
                        htmlFor="todo.id"
                        @click="handleTodoToggle(todo)"/>
                </div>
            </div>
            <div class="labelContent">
                <strike 
                    v-if="todo.is_completed" 
                    class="todoLabel">
                    <div>
                        {{ todo.title }}
                    </div>
                </strike>
                <div v-else>
                    {{ todo.title }}
                </div>
            </div>
            <button 
                v-if="type === 'private'" 
                class="closeBtn" 
                @click="handleTodoDelete(todo)"> x </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['todos', 'type'],
    methods: {
      handleTodoToggle: function (todo) { // eslint-disable-line
        // update todo data in db here
        },
      handleTodoDelete: function(todo) { // eslint-disable-line
        // delete todo from db
        }
    }
}

</script>
