<script setup>

 </script>






<template>
    <div class="header"><h1>School Grades</h1></div>
    <div class="header-container">
      <form @submit="addStudent">
         <label for="nameStudent">Name  </label>
         <input type="text" id="name" v:model="newRow.name">
         <label for="courseStudent"> Course</label>
         <input type="text" id="course" v:model="newRow.course">
         <label for="noteStudent"> Score</label>
         <input type="text" id="score" v:model="newRow.score">
         <button type="submit">Add+</button>

      </form>
      <table>
         <thead>
            <tr>
               <td>Name</td>
               <td>Course</td>
               <td>Score</td>
            </tr>
         </thead>
         <tbody>
            <tr v-for="row in rows" :key="row.name">
               <td>{{ row.name }}</td>
               <td>{{ row.course }}</td>
               <td>{{ row.score }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<style scoped>

</style>


         




