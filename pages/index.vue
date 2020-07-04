<template>
  <v-app>
    <v-form>
      <v-container>
        <p>問題</p>
        <p>{{ questionlist[questionNumber] }}</p>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="answerTxt"
              label="回答"
              :change="answerChanged()"
              required
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn :disabled="isPush" class="ma-2" tile color="indigo" dark @click="pushBtn()">ボタン</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="red lighten-2" dark v-on="on">回答へ</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title></v-card-title>
          <v-card-text>
            <p>{{ answerlist[questionNumber] == answerTxt ? '正解' : '不正解' }}</p>
            <p>{{ answerTxt }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog(next)">次へ</v-btn>
            <v-btn color="primary" text @click="dialog(back)">戻る</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
import firebase from "~/plugins/firebase";

export default {
  name: "Form",
  data() {
    return {
      questionNumber: 0,
      questionlist: [
        "苦労せず大きな利益を得ること",
        "出歩いたり、行動したりすれば、思わぬ事にぶつかるといゆこと",
        "小さく弱い者にも意地はあるから、馬鹿にできないといゆこと",
        "大き物は小さい物の代わりもできる",
        "強いものが何かを得て、さらに強くなる事",
        "ほんのわずかな物でも積り重なれば、大きなものになること",
        "秘密にしても、漏れやすいと言うこと",
        "何度失敗してもくじけず、そのたびに立ち上がって頑張る様子",
        "何の手応えもないこと",
        "何もしゃべらなくても、目を見れば相手の感情はわかるということ",
        "1876年、大政奉還後に倒幕派によって出された新政府の樹立や幕府・将軍の廃止などを発表した宣言をなんと言いますか",
        "１８６８年から１８６９年にかけて続いた、新政府軍と旧幕府軍との間の一連の戦いをなんと言いますか",
        "戊辰戦争の最後の戦いをなんと言いますか",
        "五稜郭の戦いが行われた場所はどこですか",
        "戊辰戦争中に（１８６８年）に天皇が神に誓うと言う形で出された、政治の方針をなんと言いますか",
        "五箇条の御誓文の翌日に出された、庶民に対する決まりをなんと言いますか",
        "明治時代初期に行われた、近代国家形成のための政治改革をなんと言いますか",
        "維新三傑と呼ばれる人物の内薩長同盟締結時の長州藩の代表者を務め、明治政府でも重要な役職についた人物は誰ですか",
        "維新三傑と呼ばれる人物の内、薩摩藩出身であり、西郷隆盛や板垣退助らが政府を去った後、明治政府の中心人物として大きな力を持った人物は誰ですか",
        "明治政府では薩摩藩や長州藩など一部の藩の出身者が重要な地位を独占して政治を行いました。このような政治をなんと言いますか"
      ],
      answerNumber: 0,
      answerlist: [
        "ぬれてに粟",
        "犬も歩けば棒にあたる",
        "いっすの虫にも五部の魂",
        "大は小を兼ねる",
        "鬼に金棒",
        "ちりも積もれば山となる",
        "壁に耳あり障子に目あり",
        "七転び八起き",
        "ぬかに釘",
        "目は口程にものを言う",
        "王政復古の大号令",
        "戊辰戦争",
        "五稜郭の戦い",
        "函館",
        "五箇条の御誓文",
        "明治維新",
        "五榜の掲示",
        "木戸孝允",
        "大久保利通",
        "藩閥政治"
      ],
      answerTxt: "",
      dialog: false,
      isPush: false
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init: function() {
      const db = firebase.firestore();
      const dbUser = db.collection("japanese");

      console.log("call");
      dbUser.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      });
    },
    pushBtn: function() {
      this.isPush = true;
      console.log(this.isPush);
      this.questionNumber++;
    },

    check: function(txt) {},
    answerChanged: function() {
      console.log(this.answerTxt);
      if (this.answerTxt) {
        this.isPush = false;
      } else {
        this.isPush = true;
      }
    }
  }
};
</script>
