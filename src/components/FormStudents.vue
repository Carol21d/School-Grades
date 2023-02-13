
<script setup>

</script>
<template>
  <div class="wrapper">
    <form @submit.prevent="addStudent()" class="wrapper__form">
      <input type="text" placeholder="Name of Student">
      <input type="text" placeholder="Subject">
      <input type="number" placeholder="Score">
      <button type="submit">Add</button>


    
    
    
    </form>


  </div>

</template>

<style lang="scss" scoped>
</style>