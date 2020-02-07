<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type whar you have to do"
      v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTodoItem: ''
    }
  },
  methods:{
    /* 단일 책임 원칙
       단일 책임 원칙이란 함수 하나가 하나의 기능만 담담하도록 설계하는 객체 지향 프로그래밍의 디자인패턴
    */
    addTodo(){
      if(this.newTodoItem !== ""){
        var value = this.newTodoItem && this.newTodoItem.trim();
        localStorage.setItem(value, value);
        this.$emit('addTodo', value);
        this.clearInput();
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height:  50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9em;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
