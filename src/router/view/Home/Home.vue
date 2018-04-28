<template>
  <ul>
    <li v-for="item in list">{{item.label}}</li>
  </ul>
</template>
<script>
export default {
  name: 'Home',
  data() {
    console.log('aaaaaaaaaaaa')
    return {
      list: [
        { label: 'vue' },
        { label: 'rect' },
        { label: 'angular' },
        { label: 'python' },
      ]
    }
  }
}
</script>
