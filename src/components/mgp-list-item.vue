<template>
    <li>
        <span>{{task.description}}</span>
        <input type="checkbox" v-model="localTask.isDone" @change="changedTaskStatus">
    </li>
</template>

<script>
    import {Task} from '../models/task'
    export default {
        name: "MgpListItem",
        props: {
            task: Task
        },
        data(){
            return{
                localTask: Task
            }
        },
        // watch:{
        //     isDone(){
        //         this.$emit("changed-task-status", this.isDone)
        //     }
        // },
        methods:{
            changedTaskStatus: function(){
                this.$emit("changed-task-status", this.localTask.isDone)
            }
        },
        emits:[
            "changed-task-status"
        ],
        created(){
            this.localTask = this.task
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        border-bottom: solid 0.5px white;
        padding: 3px;
    }
</style>