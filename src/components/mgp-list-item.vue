<template>
    <li>
        <span>{{task.description}}</span>
        <input type="checkbox" v-model="isDone" @change="changedTaskStatus">
    </li>
</template>

<script>
    export default {
        name: "MgpListItem",
        props: {
            task: Object
        },
        data(){
            return{
                isDone: null
            }
        },
        // watch:{
        //     isDone(){
        //         this.$emit("changed-task-status", this.isDone)
        //     }
        // },
        methods:{
            changedTaskStatus: function(){
                this.$emit("changed-task-status", this.isDone)
            }
        },
        emits:[
            "changed-task-status"
        ],
        created(){
            this.isDone = this.task.isDone
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

    span{

    }
</style>