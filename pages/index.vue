<template>
   <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="苦労せず大きな利益を得る事"
            single-line
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label=""
            single-line
          ></v-text-field>
        </v-col>        
      </v-row>  
      <v-row align="center">
        <v-col class="text-center" cols="12" sm="4">
          <div class="my-2">
            <v-btn depressed large @click="$router.push('answer')">answerへ</v-btn>
          </div>
        </v-col>
      </v-row>  
    </v-container> 
   </v-form>

</template>

<script>
</script>

<style>
</style>
