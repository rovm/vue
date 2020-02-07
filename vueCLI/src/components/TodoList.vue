<template>
  <section>
    <ul>
      <li v-for="todoItem in todoItems">{{todoItem}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++){
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue;
        this.todoItems.push(localStorage.key(i))
      }
    }
  }
}
</script>

<style>
</style>
