<template>
  <div class="container">
        <div class="row text-center">
            <div class="col">
                <h2>And the winner is: {{ getWinner }}</h2>
                <br>
                <router-link tag="button" role="button" class="btn btn-success btn-lg btn-block btn-game" to="/settings">Play again</router-link>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWinner"])
  }
};
</script>

