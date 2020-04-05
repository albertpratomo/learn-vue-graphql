<template>
    <div class="sliderMenu grayBgColor">
        <div class="sliderHeader">
            Online users - {{ online_list.length }}
        </div>
        <div 
            v-for="user in online_list" 
            :key="user.user.name" 
            class="userInfo">
            <div class="userImg">
                <i class="far fa-user" />
            </div>
            <div class="userName">
                {{ user.user.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            online_list: [
                { user: { name: "someUser1" }},
                { user: { name: "someUser2" }}
            ]
        };
    },
}

</script>
