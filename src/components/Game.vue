<template>
<div>
    <modal v-if="getModalState"></modal>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" role="button"><i class="fas fa-users"></i> {{ getTeam1Name }} <span class="badge badge-primary">{{ getTeam1Points }}</span></a>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" role="button"><span class="clock">{{ getTimeLeft }}</span></a>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" role="button"><i class="fas fa-users"></i> {{ getTeam2Name }} <span class="badge badge-primary">{{ getTeam2Points }}</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <div class="row text-center">
            <div class="col">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                           {{ card.keyword }}  
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="value in card.values" class="list-group-item bg-light">{{ value }}</li>
                        </ul>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col">
                            <button @click="removePoint(); getNewCard()" type="button" class="btn btn-danger btn-block btn-game"><i class="fas fa-minus-circle"></i></button>
                        </div>
                        <div class="col">
                            <button :disabled="isNextQuestionButtonDisabled" @click="removeNextQuestion(); getNewCard()" type="button" class="btn btn-info btn-block btn-game-next">Next ({{ getNextQuestion }})</button>                          
                        </div>
                        <div class="col">
                            <button @click="addPoint(); getNewCard();" type="button" class="btn btn-success btn-block btn-game"><i class="fas fa-check-circle"></i></button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { db } from "../firebase";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "app",
  data() {
    return {
      card: {
        keyword: "",
        values: []
      }
    };
  },
  computed: {
    ...mapGetters([
      "getTeam1Name",
      "getTeam2Name",
      "getTeam1Points",
      "getTeam2Points",
      "getModalState",
      "getTimeLeft",
      "getNextQuestion",
      "isNextQuestionButtonDisabled"
    ])
  },
  methods: {
    ...mapActions(["addPoint", "removePoint", "removeNextQuestion"]),
    getNewCard() {
      let index = Math.floor(Math.random() * this.cards.length);
      this.card.keyword = this.cards[index].keyword;
      this.card.values = this.cards[index].values.split(",");
    }
  },
  components: {
    Modal
  },
  firebase: {
    cards: {
      source: db.ref("cards"),
      readyCallback: function() {
        this.getNewCard();
      }
    }
  }
};
</script>