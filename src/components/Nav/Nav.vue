<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/home">Leaning</router-link>
      </div>
      <div id="navbar" :class="navbarClasses">
        <ul class="nav navbar-nav">
          <li v-for="item in list" @click="toggleNav">
            <router-link :to="item.path">{{item.label}}</router-link>
          </li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
  </nav>
</template>
<script>
export default {
  name: 'navigator',
  data() {
    return {
      show: true,
      list: [
        { label: 'Vue', path: '/Vue' },
        { label: 'Angular', path: '/Angular' },
        { label: 'React', path: '/React' },
        { label: 'Python', path: '/Python' },
      ]
    }
  },
  computed: {
    navbarClasses() {
      return [
        'navbar-collapse',
        {
          collapse: this.show
        }
      ]
    }
  },
  methods: {
    toggleNav() {
      this.show = !this.show;
    }
  }
}

</script>
