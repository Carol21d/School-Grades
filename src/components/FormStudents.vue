<script setup>
let students = [];
function addStudent() {
   this.students.push(this.newRow)
   
}
 </script>

<template>
    <div class="header"><h1>School Grades</h1></div>
    <div class="header-container">
      <form>
         <label for="nameStudent">Name  </label>
         <input type="text" id="name" v:model="newRow.name">
         <label for="courseStudent"> Course</label>
         <input type="text" id="course" v:model="newRow.course">
         <label for="noteStudent"> Score</label>
         <input type="text" id="score" v:model="newRow.score">
         <button type="submit" @click="addStudent">Add+</button>

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
            <tr v-for="student in students" :key="student.name">
               <td>{{ student.name }}</td>
               <td>{{ student.course }}</td>
               <td>{{ student.score }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<style scoped>

</style>


         




