<template>
    <div>
        <div class="todoListwrapper">
            <div 
                v-if="newTodosCount" 
                class="loadMoreSection" 
                @click="loadMoreClicked">
                New tasks have arrived! ({{ newTodosCount }})
            </div>
            <TodoItem 
                :todos="todos" 
                :type="type" 
            />
            <div 
                v-if="olderTodosAvailable" 
                class="loadMoreSection" 
                @click="loadOlderClicked">
                Load older tasks
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import TodoFilters from "../components/TodoFilters";
export default {
    components: {
        TodoItem, TodoFilters
    },
    data: function() {
        return {
            olderTodosAvailable: true,
            newTodosCount: 1,
            limit: 7,
            todos: [
                {
                    id: "1",
                    title: "This is public todo 1",
                    is_public: true,
                    user: {
                        name: "someUser1"
                    }
                },
                {
                    id: "2",
                    title: "This is public todo 2",
                    is_completed: false,
                    is_public: true,
                    user: {
                        name: "someUser2"
                    }
                },
                {
                    id: "3",
                    title: "This is public todo 3",
                    is_public: true,
                    user: {
                        name: "someUser3"
                    }
                },
                {
                    id: "4",
                    title: "This is public todo 4",
                    is_public: true,
                    user: {
                        name: "someUser4"
                    }
                }
            ],
            type: "public"
        }
    },
    mounted() {
    },
    methods: {
        loadMoreClicked: function() {
        },
        loadOlderClicked: function() {
        },
    }
}
</script>
