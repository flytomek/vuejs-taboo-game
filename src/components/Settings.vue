<template>
<div class="container">
    <div class="row text-center">
        <div class="col">
            <h1>Settings</h1>
            <hr>
            <div class="form-group">
                <label for="timePerRound">Time per round</label>
                <select @input="updateTimePerRound" class="form-control form-control-lg" id="timePerRound">
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="120">120</option>
                </select>
            </div>
            <div class="form-group">
                <label for="maximumPoints">Numbers of points to win</label>
                <select @input="updateMaximumPoints" class="form-control form-control-lg" id="maximumPoints">
                    <option>10</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                </select>
            </div>
            <div class="form-group row">
                <label for="team1Name" class="col-md-4 col-form-label">Name of first team</label>
                <div class="col-md-8">
                <input @input="updateTeam1Name" type="email" class="form-control" id="team1Name" placeholder="Name...">
                </div>
            </div>
            <div class="form-group row">
                <label for="team1Name" class="col-md-4 col-form-label">Name of second team</label>
                <div class="col-md-8">
                <input @input="updateTeam2Name" type="text" class="form-control" id="team1Name" placeholder="Name...">
                </div>
            </div>
            <br>
            <router-link tag="button" :disabled="isStartGameButtonDisabled" role="button" class="btn btn-primary btn-lg btn-block btn-game" to="/game">Let's start!</router-link>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      "updateTimePerRound",
      "updateMaximumPoints",
      "updateTeam1Name",
      "updateTeam2Name"
    ])
  },
  computed: {
    ...mapGetters(["isStartGameButtonDisabled"])
  }
};
</script>