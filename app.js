Vue.component = ('todo-footer',{
  template : '<p>This is another global child conponent</p>'
})

new Vue({
  el: '#app',
  data:{
    message:'This is a parent component'
  },
  components :{
    'todo-list' : '<p>This is another local child components</p>'
  }
});
