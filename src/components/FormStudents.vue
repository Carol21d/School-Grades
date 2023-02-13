<script setup>
import { ref } from "vue";

let students = ref([]);

let studentAdded = ref({
  name: '',
  subject: '',
  score:'',
});

function addStudent() {
  
students.value.push(studentAdded.value);
  studentAdded.value = { name: '', subject: '', score:  ''};
}

function baremoScore(score) {
  if (score >= 0 && score < 3) {
    return "Muy deficiente";
  }
  if (score >= 3 && score < 5) {
    return "Insuficiente";
  }

  if (score >= 5 && score < 6) {
    return "Suficiente";
  }

  if (score >= 6 && score < 7) {
    return "Bien";
  }

  if (score >= 7 && score < 9) {
    return "Notable";
  }

  if (score >= 9 && score <= 10) {
    return "Sobresaliente";
  }

  return "La nota no esta en baremo";
}
</script>
<template>
  <div class="wrapper">
    <form @submit.prevent="addStudent()" class="wrapper__form">
      <input
        type="text"
        placeholder="Name of Student"
        v-model="studentAdded.name"
      />
      <input type="text" placeholder="Subject" v-model="studentAdded.subject" />
      <input type="number" placeholder="Score" v-model="studentAdded.score" />
      <button type="submit">Add</button>
    </form>

    <table class="wrapper__table">
      <thead>
        <tr>
          <td>Student</td>
          <td>Subject</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.subject }}</td>
          <td>{{ baremoScore(student.score) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;

  .wrapper__form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    width: auto 0;
    height: auto 0;

    input {
      display: flex;
      margin: 1em 1em;
      border: none;
      font-size: 1.2em;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    button {
      display: flex;
      margin-right: 1em;
    }
  }
}
</style>
