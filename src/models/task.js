class Task{
    constructor(description = "", isDone = false){
        this.description = description
        this.isDone = isDone
    }

    toggleIsDone(){
        this.isDone = !this.isDone
    }
}

export {Task}