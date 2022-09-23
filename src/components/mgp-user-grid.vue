<template>
    <div>
        <div v-if="!userList">
            Loading users...
        </div>
        <div class="user-list" v-else>
            <MgpUserCard 
               v-for="user in userList" :user="user" />
        </div>
    </div>
</template>

<script>
    import { getRandomUsers } from '../services/getUser';
    import MgpUserCard from './mgp-user-card.vue';

    export default {
    name: "MgpUserGrid",
    data() {
        return {
            userList: []
        };
    },
    async created() {
        this.userList = await getRandomUsers()
    },
    components: { MgpUserCard }
}
</script>

<style scoped>
.user-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
}
</style>