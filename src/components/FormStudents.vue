<script setup>
import console from "console";
import { ref } from "vue";

let students = ref([]);
// let name = ref();
// let course = ref();
// let score = ref();
let newRow = { name: "", course: "", score: "" };

function addStudent() {
  students.push({
   name:newRow.name,
   course:newRow.course,
   score:newRow.score
  });
  console.log("hola");
}
</script>

<template>
  <div class="header"><h1>School Grades</h1></div>
  <div class="header-container">
    <form class="form-container">
      <label for="nameStudent">Name </label>
      <input type="text" id="name" v:model="name" />
      <label for="courseStudent"> Course</label>
      <input type="text" id="course" v:model="course" />
      <label for="noteStudent"> Score</label>
      <input type="text" id="score" v:model="score" />
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
<style lang="scss" scoped></style>
