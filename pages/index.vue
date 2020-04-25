<template>
  <v-app>
　 <v-container >
    <v-card
     class="mx-auto"
     max-width="344"
  >
    　<v-card-text>
      <div>問題</div>
      <p class="display-1 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    　</v-card-text>
    　<v-card-actions>  
        <v-row align="center">
         <v-col class="text-center" cols="12" v-for="n in 4" :key="n">
          <div class="my-2">
            <v-btn depressed large>Normal</v-btn>
          </div>
         </v-col>
        </v-row>  
    　</v-card-actions>
  　</v-card>
  </v-container> 
  </v-app>
</template>

<script>
</script>

<style>
.container {
  margin: 0 auto;
  width: 100px;
  min-height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
