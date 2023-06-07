<template>
  <div >
    <img alt="logo" src="./assets/logo.png">
  <Student></Student>
  <hr>
  <Scholl></Scholl>
  </div>
</template>

<script>

import Student from './components/Student.vue'
import Scholl from './components/Scholl.vue'

export default {
  name: 'App',
  components: {
    Student,
    Scholl
    
  }
}
</script>

