<template>
  <div>
    <!-- {{ message }} -->
    <br />
    <a v-bind:href="login">Login</a> |
    <a v-bind:href="logout">Logout</a>
    <h6><br />src with cookie</h6>
    <img v-bind:src="imgUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '/api/login',
      logout: '/api/logout',
      imgUrl: '/api/file-middleware?source=' + '/users/1/01.png',
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
