const obj={
    greeting:"hello world",
    sayHello:function(){
        console.log(this.greeting);
    }
}

module.exports=obj;