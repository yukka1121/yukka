<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="answerTxt" label="回答" :change="answerChanged()" required clearable></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
</script>
