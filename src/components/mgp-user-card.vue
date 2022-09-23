<template>
    <div>
        <div class="cardContainer">
            <img :src="getPhoto" />
            <ul>
                <li>
                    <h3>Name</h3>
                    <h1>{{getName}}</h1>
                </li>
                <li>
                    <h3>Email</h3>
                    <h1>{{this.user.email}}</h1>
                </li>
                <li>
                    <h3>Age</h3>
                    <h1>{{this.user.dob.age}}</h1>
                </li>
                <li>
                    <h3>Country</h3>
                    <h1>{{this.user.location.country}}</h1>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MgpUserCard",
        props:{
            user: Object
        },
        computed: {
            getPhoto(){
                return this.user.picture.large
            },
            getName(){
                return `${this.user.name.first} ${this.user.name.last}`
            }
        },
        beforeCreate(){

        },
        created(){

        },
        beforeMount(){

        },
        mounted(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeUnmount(){

        },
        unmounted(){

        }
    }
</script>

<style scoped>
    .cardContainer{
        width: 400px;
        padding: 30px;
        border: solid 0.5px;
        box-sizing: border-box;
    }
    @keyframes pulsing{
        from{ box-shadow: peachpuff 0 0 10px 1px; }
        to{ box-shadow: peachpuff 0 0 15px 2px; }
    }
    img{
        height: 150px;
        width: 150px;
        border: 0.5px solid white;
        border-radius: 50%;
        margin-bottom: 10px;
        animation: pulsing alternate-reverse infinite 1.2s linear;
    }
    ul{
        padding: 0;
        margin: 0;
        text-align: left;
        list-style: none;
    }
    li{
        border-bottom: 1px solid;
        padding-left: 5px;
        padding-right: 5px;
    }
    h3{
        color: peachpuff;
    }
    h1{
        font-size: 1rem;
        overflow-x: auto;
    }
</style>