<template>
  <v-app>
    <header>
      <span>{{ title }} </span>
    </header>
    <main>
      <Wallet/>
    </main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Wallet from './components/Wallet.vue'
 
@Component({
  name: 'app',
  components: {
    Wallet
  }
})

export default class App extends Vue {
  private title = 'My NEM wallet'
  mounted () {}
}
</script>
 
<style>
body {
  margin: 0;
}
 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
 
main {
  text-align: center;
  margin-top: 40px;
}
 
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}
 
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
