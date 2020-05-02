<template>
  <v-app>
    <v-form>
      <v-container>
        <h1>問題１</h1>
        <p>{{questionlist[questionNumber]}}</p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="answerTxt" label="回答" :change="answerChanged()" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <nuxt-link to="/answer">答え</nuxt-link>
          </v-col>
        </v-row>
        <v-row>
          <b-button @click="check('check')">回答へ</b-button>
        </v-row>
        <v-row>
          <v-btn :disabled="isPush" class="ma-2" tile color="indigo" dark @click="pushBtn()">回答する</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      questionNumber: 0,
      questionlist: ["1+2=?", "日本の首都は", "令和の前の元号は"],
      answerTxt: "",
      isPush: false
    };
  },
  methods: {
    pushBtn: function() {
      this.isPush = true;
      console.log(this.isPush);
      this.questionNumber++;
    },
    check: function(txt) {},
    answerChanged: function() {
      console.log(this.answerTxt);
      if (this.answerTxt.length > 0) {
        this.isPush = false;
      } else {
        this.isPush = true;
      }
    }
  }
};
</script>

