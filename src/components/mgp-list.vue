<template>
    <div>
        <h1>Todo</h1>
        <ul>
            <MgpListItem 
                v-for="(task, idx) in tasks" :task="task" :key="idx" 
                @changed-task-status="chagedTaskStatus($event)" />
        </ul>
    </div>
</template>

<script>
    import MgpListItem from './mgp-list-item.vue';
    import {Task} from '../models/task'

    export default {
    name: "MGPList",
    data() {
        return {
            tasks: [
                new Task("Never gonna give you up"),
                new Task("Never gonna let you down", true),
                new Task("Never gonna run around and desert you"),
            ]
        }
    },
    methods:{
        chagedTaskStatus: function($event){
            console.log($event)
        }
    },
    components: { MgpListItem }
}
</script>

<style scoped>
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
    }
</style>