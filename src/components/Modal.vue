<template> 
<transition name="modal">
 <div class="modal modal-mask" style="display: block">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      
      <div class="modal-body text-center" v-html="message">
      </div>
      
    <div class="modal-footer">
        <button type="button" @click="startTurn" class="btn btn-primary mx-auto">Go!</button>
    </div>
    </div>
  </div>
</div>
</transition> 
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["startTurn"])
  },
  computed: {
    ...mapGetters([
      "getWhomTurn",
      "getRoundNumber",
      "getTeam1Name",
      "getTeam2Name",
      "getLastTurnPoints"
    ]),
    message() {
      if (this.getWhomTurn == 1 && this.getRoundNumber == 0) {
        return (
          "<h2>Let's start the game! Team <strong>" +
          this.getTeam1Name +
          "</strong> is playing now!</h2>"
        );
      } else if (this.getWhomTurn == 1) {
        return (
          "Team " +
          this.getTeam2Name +
          " got <strong>" +
          this.getLastTurnPoints +
          "</strong> points from last round. <br>" +
          "<h2>Team <strong>" +
          this.getTeam1Name +
          "</strong> is playing now!</h2>"
        );
      } else {
        return (
          "Team " +
          this.getTeam1Name +
          " got <strong>" +
          this.getLastTurnPoints +
          "</strong> points from last round. <br>" +
          "<h2>Team <strong>" +
          this.getTeam2Name +
          "</strong> is playing now!</h2>"
        );
      }
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(196, 196, 196);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-dialog {
  -webkit-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
  top: 50%;
  margin: 0 auto;
}
</style>