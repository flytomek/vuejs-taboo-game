import Vue from 'vue'
import Vuex from 'vuex'
import {
  router
} from '../main'

Vue.use(Vuex);

console.log(router);

export const store = new Vuex.Store({
  state: {
    settings: {
      timePerRound: 45000,
      maximumPoints: 10,
      team1Name: "1",
      team2Name: "2"
    },
    team1Points: 0,
    team2Points: 0,
    roundNumber: 0,
    whomTurn: 1,
    isRoundCompleted: false,
    showModal: true,
    timeLeft: 0,
    lastTurnPoints: 0,
    nextQuestion: 2,
    winner: null
  },
  mutations: {
    updateTimePerRound(state, payload) {
      state.settings.timePerRound = payload.target.value;
    },
    updateMaximumPoints(state, payload) {
      state.settings.maximumPoints = payload.target.value;
    },
    updateTeam1Name(state, payload) {
      state.settings.team1Name = payload.target.value;
    },
    updateTeam2Name(state, payload) {
      state.settings.team2Name = payload.target.value;
    }
  },
  getters: {
    isStartGameButtonDisabled: state => {
      if (state.settings.team1Name.length < 3 || state.settings.team2Name.length < 3) {
        return true;
      }
      return false;
    },
    isNextQuestionButtonDisabled: state => {
      return (state.nextQuestion == 0) ? true : false;
    },
    getNextQuestion: state => {
      return state.nextQuestion;

    },
    getTeam1Name: state => {
      return state.settings.team1Name;
    },
    getTeam2Name: state => {
      return state.settings.team2Name;
    },
    getTeam1Points: state => {
      return state.team1Points;
    },
    getTeam2Points: state => {
      return state.team2Points;
    },
    getModalState: state => {
      return state.showModal;
    },
    getTimeLeft: state => {
      return state.timeLeft;
    },
    getWhomTurn: state => {
      return state.whomTurn;
    },
    getRoundNumber: state => {
      return state.roundNumber;
    },
    getLastTurnPoints: state => {
      return state.lastTurnPoints;
    },
    getWinner: state => {
      if (state.winner == 0) {
        return "It's a DRAW!";
      } else if (state.winner == 1) {
        return state.settings.team1Name;
      } else if (state.winner == 2) {
        return state.settings.team2Name;
      }
    }
  },
  actions: {
    startTurn: (context) => {
      context.state.showModal = false;
      context.state.lastTurnPoints = 0;
      context.state.nextQuestion = 2;

      setTimeout(() => {
        if (context.state.whomTurn == 2) { // only if whole round is completed
          context.state.roundNumber++;
          if (context.state.team1Points >= context.state.settings.maximumPoints && context.state.team2Points >= context.state.settings.maximumPoints) {
            if (context.state.team1Points > context.state.team2Points) {
              context.state.winner = 1;
              router.push('/results');
            } else if (context.state.team1Points < context.state.team2Points) {
              context.state.winner = 2;
              router.push('/results');
            } else {
              context.state.winner = 0;
              router.push('/results');
            }
          } else {
            if (context.state.team1Points >= context.state.settings.maximumPoints) {
              context.state.winner = 1;
              router.push('/results');
            }
            if (context.state.team2Points >= context.state.settings.maximumPoints) {
              context.state.winner = 2;
              router.push('/results');
            }
          }
        }
        clearInterval(refreshIntervalId);
        (context.state.whomTurn == 1) ? context.state.whomTurn = 2: context.state.whomTurn = 1;
        context.state.timeLeft = '-';
        context.state.showModal = true;
        console.log(context.state.lastTurnPoints);
      }, context.state.settings.timePerRound);

      context.state.timeLeft = context.state.settings.timePerRound / 1000;

      var refreshIntervalId = setInterval(() => {
        context.state.timeLeft--;
      }, 1000);

    },
    addPoint: (context) => {
      (context.state.whomTurn == 1) ? context.state.team1Points++: context.state.team2Points++;
      context.state.lastTurnPoints++;
    },
    removePoint: (context) => {
      (context.state.whomTurn == 1) ? context.state.team1Points--: context.state.team2Points--;
      context.state.lastTurnPoints--;
    },
    removeNextQuestion: (context) => {
      context.state.nextQuestion--;
    }
  }
});
