<script setup>
import { ref } from "vue";

let students = ref([]);
let studentAdded = ref({
  name: "",
  subject: "",
  score: ""
});

function AddStudent() {
  // Verifica que ningun campo este vacio 
  //arreglo de que imprima deficiente si dejo ciertos campos vacios
  if(studentAdded.value.name.trim() === "" || studentAdded.value.subject.trim()==="" ||studentAdded.value.score.trim()){
   return alert("Los campos no pueden estar vacios");
  }

  students.value.push(studentAdded.value);
  // studentAdded.value = { name: "", subject: "", score: "" };
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

  if (score >=11) {
    return alert("nota erronea");
    
  }
}
</script>
<template>
  <div class="wrapper">
    <header><h1>School Grades</h1></header>
    <form @submit.prevent="AddStudent" class="wrapper__form">
      <input type="text" placeholder="Name" v-model="studentAdded.name" />
      <input type="text" placeholder="Subject" v-model="studentAdded.subject" />
      <input type="number" placeholder="Score" v-model="studentAdded.score" />
      <button type="submit">Add+</button>
    </form>
    <table class="wrapper__table">
      <thead>
        <tr class="table__title">
          <td>Name</td>
          <td>Subject</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody class="table__show">
        <tr v-for="student in students" :key="student.id">
          <td class="show__name">{{ student.name }}</td>
          <td class="show__subject">{{ student.subject }}</td>
          <td class="show__score">{{ baremoScore(student.score) }}</td>
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
  width: 100%;
  height: 80%;

  .wrapper__form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(43, 178, 137);
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
      padding: .5em;
      border:none;
      background-color:rgb(225, 95, 95);
      color: white;
      font-size: medium;
    }
  }

  .wrapper__table {
    display: flex;

    background-color: cadetblue;
    height: auto 0;
    width: auto 0;
    margin: 2em;

    .table__title {
      font-size: 1.3em;
      font-weight: 500;
      font-family: Georgia, "Times New Roman", Times, serif;
    }

    .table__show{
      display: flex;
      td{
        position: relative;

      }
  }
}
}
</style>
