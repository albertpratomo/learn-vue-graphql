<template>
    <div class="overlay">
        <div class="overlay-content">
            <div class="overlay-heading">
                Welcome to the GraphQL tutorial app
            </div>
            <div class="overlay-message">
                Please login to continue
            </div>
            <div class="overlay-action">
                <button 
                    class="login-btn" 
                    @click="handleLogin">Log in</button>
            </div>
        </div>

    </div>
</template>



<script>
export default {
    name: "Home",
    data() {
        return {
            isAuthenticated: false,
        };
    },
    methods: {
        handleLoginEvent(data) {
            this.isAuthenticated = data.loggedIn;
            this.$router.push('/home');
        },
        handleLogin() {
            this.$auth.login();
        }
    },
};
</script>
