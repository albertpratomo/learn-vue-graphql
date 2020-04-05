<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light removeMarBottom">
            <div class="navbar-brand navBrand">GraphQL Tutorial App</div>
            <div 
                id="navbarNav" 
                class="collapse navbar-collapse navBarAlign">
                <button 
                    v-if="isAuthenticated" 
                    class="login-btn" 
                    @click="logout">Log out</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            isAuthenticated: false
        };
    },
    beforeCreate() {
        this.$auth.renewTokens();
    },
    methods: {
        logout() {
            this.$auth.logOut();
            this.$router.push({ path: "/" });
        },
        handleLoginEvent(data) {
            this.isAuthenticated = data.loggedIn;
        }
    },
};
</script>
