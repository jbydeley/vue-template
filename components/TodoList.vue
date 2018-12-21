<template>
	<div class="m-todo-list">
		<input class="m-todo-list_input"
			type="text"
			v-model="todo"
			@keypress.enter.prevent="addTodo"
			:placeholder="placeholder">
		
		<button class="m-todo-list_add" @click="addTodo">Add Todo</button>

		<ul class="m-todo-list_todos">
			<li v-for="todo in todos" :key="todo">{{todo}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['placeholder'],
		data() {
			return {
				todo: '',
				todos: []
			}
		},
		methods: {
			addTodo() {
				this.todos = [this.todo, ...this.todos]
				this.todo = ''
			}
		}
	}
</script>