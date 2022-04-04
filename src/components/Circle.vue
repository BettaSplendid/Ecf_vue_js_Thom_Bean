<template>
  <section>
    <div class="da_form">
      {{ error_field }}
      <div class="da_form_input">
        <label for="da_form_input_radius">Entrez le radiant ici: </label>
        <input
          type="number"
          id="da_form_input_radius"
          v-model="answer_radius"
          @input="Calcul"
          min="0"
          step="1"
          :placeholder="'test'"
        />
      </div>
      <div class="da_form_input">
        <input @click="HandleInput" type="submit" value="submit" />
      </div>
    </div>
    <div class="da_result">
      <table>
        <thead></thead>
        <tr>
          <td>Périmètre du cercle</td>
          <td>Aire du cercle</td>
          <td>Volume de la sphère</td>
        </tr>
        <tr>
          <td>{{ perimeter }} cm</td>
          <td>{{ answer_area }} cm2</td>
          <td>{{ answer_volume }} cm3</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useCircleStore } from "../stores/circle";

const storeStore = useCircleStore();

let answer_radius = ref();
let answer_area = ref(0);
let answer_volume = ref(0);
let perimeter = ref(0);
let error_field = ref("");

answer_radius.value = storeStore.getRadius;

function HandleInput() {
  console.log("HandleInput");
  answer_radius.value++;
  answer_area.value++;
  answer_volume.value++;
  console.log(answer_radius.value);
  console.log(answer_area.value);
  console.log(answer_volume.value);
}

function Calcul() {
  console.log("Calcul");
  console.log("Radius : " + answer_radius.value);

  error_field.value = "";

  if (isNaN(answer_radius.value) || answer_radius.value == "") {
    error_field.value = "Pas un nombre!";
    return;
  }

  answer_radius.value = Math.floor(Math.abs(answer_radius.value));

  if (!Number.isInteger(answer_radius.value)) {
    error_field.value = "Pas un entier!";
    return;
  }

  perimeter.value = answer_radius.value * 2 * Math.PI;
  answer_area.value = Math.PI * (answer_radius.value * answer_radius.value);
  answer_volume.value = (4 / 3) * Math.PI * Math.pow(answer_radius.value, 3);
}
</script>

<style >
.da_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table {
  border: 1px solid black;
  width: 100%;
}

tr {
  border: 1px solid black;
}

td {
  border: 1px solid black;
}

.da_result {
  background-color: crimson;
  width: 80vw;
  padding: 10vh;
}

.da_form {
  background-color: aquamarine;
  width: 80vw;
  padding: 10vh;
}

input {
  width: 100%;
}
</style>