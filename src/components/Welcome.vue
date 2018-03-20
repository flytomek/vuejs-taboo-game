<template>
<div class="container">
  <div class="row">
    <div class="col">
      <router-link tag="button" role="button" class="btn btn-success btn-lg btn-block btn-game" to="/settings">New game</router-link>
      <router-link tag="button" role="button" class="btn btn-primary btn-lg btn-block btn-game" to="/rules">Rules</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>