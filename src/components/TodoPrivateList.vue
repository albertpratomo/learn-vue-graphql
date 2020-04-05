<template>
    <div>
        <div class="todoListwrapper">
            <div v-if="$apollo.queries.todos.loading">
                Loading...
            </div>

            <div v-if="error">
                {{ error }}
            </div>
            
            <TodoItem 
                :todos="filteredTodos" 
                :type="type" 
            />
        </div>

        <TodoFilters 
            :remaining-todos="remainingTodos" 
            :filter-results="filterResults" 
            :filter-type="filterType"
            :type="type"
            :clear-completed="clearCompleted"
        />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import TodoItem from "../components/TodoItem";
import TodoFilters from "../components/TodoFilters";

export default {
    components: {
        TodoItem, TodoFilters
    },
    data() {
        return {
            type: "private",
            filterType: "all",
            error: null,
        }
    },
    apollo: {
        todos: {
            query: gql`
                query getMyTodos {
                    todos(where: { is_public: { _eq: false} }, order_by: { created_at: desc }) {
                        id
                        title
                        created_at
                        is_completed
                    }
                }
            `,
            error(error) {
                this.error = JSON.stringify(error.message);
            }
        },
    },
    computed: {
        remainingTodos: function() {
            const activeTodos = this.todos !== undefined ? this.todos.filter((todo) => todo.is_completed !== true) : []
            return activeTodos.length
        },
        filteredTodos: function() {
            if (this.filterType === 'all') {
                return this.todos
            } else if(this.filterType === 'active') {
                return this.todos.filter((todo) => todo.is_completed !== true);
            } else if (this.filterType === 'completed') {
                return this.todos.filter((todo) => todo.is_completed === true);
            }
        }
    },
    methods: {
        filterResults: function(type) {
            if (type === 'active') {
                this.filterType = "active";
            } else if(type === 'completed') {
                this.filterType = "completed";
            } else {
                this.filterType = "all";
            }
        },
        clearCompleted: function() {
            const isOk = window.confirm("Are you sure?");
            if (isOk) {
                // Remove all the todos that are completed
            }
        }
    },
}
</script>
