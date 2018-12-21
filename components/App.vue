<template>
	<div>
		<h1 class="m-header">HELLO FROM {{ name }}</h1>
		<hr />
		<TodoList placeholder="Add Todo"></TodoList>
	</div>
</template>

<script>
import TodoList from './TodoList.vue'

export default {
	components: {
		TodoList
	},
	data() {
		return {
			name: 'Vue.JS'
		}
	}
}
</script>
