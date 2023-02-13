<script setup></script>
<template>
  <div class="wrapper">
    <form @submit.prevent="addStudent()" class="wrapper__form">
      <input type="text" placeholder="Name of Student" />
      <input type="text" placeholder="Subject" />
      <input type="number" placeholder="Score" />
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
        <tr v-for="student in students">
          <td>{{ student.name }}</td>
          <td>{{ student.subject }}</td>
          <td>{{ baremo(student.score) }}</td>
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
