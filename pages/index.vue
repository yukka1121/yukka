<template>
  <v-app>
   <v-form>
    <v-container>
       <h1>問題１</h1>
       <p>苦労せず大きな利益を得る事</p>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="answerTxt" label="回答" required></v-text-field>
        </v-col>
      </v-row>  
      <v-row>  
        <v-col cols="12" sm="6">
          <nuxt-link to="/answer">答え</nuxt-link>
         </v-col>
      </v-row>
      <v-row>
          <b-button @click="check(answer)">回答へ </b-button>
      </v-row> 
      <v-row>         
      <button v-bind:disabled="isPush"  @click="pushBtn()">ボタン</button>
      </v-row>  
    </v-container> 
   </v-form>
  </v-app>

</template>
<script>
  export default {
    name: 'Form',
    date: function () {
      return {
        isPush:false,
      }
    } ,

    methods : {
          pushBtn : function(){
          this.isPush = true;
        }
      }
}

</script>

