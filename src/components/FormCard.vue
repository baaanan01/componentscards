<template>
    <div class="box1">
        <h3>Information</h3>
        <form>
          <label for="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" required /><br />
          <label for="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" /><br />
          <h4>important question</h4>
          <textarea class="formmmm" placeholder="your favourite beer..." name="message" rows="3" cols="20"></textarea><br />
          <input class="rainbow rainbow-1" type="submit" value="Submit" />
          <input class="btn" type="reset" value="Reset" />
        </form>
      </div>
</template>

<script>
export default {
  name: "FormCard",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Poppins");

.btn {
  font-family: Poppins;
  background-color: rgb(252, 186, 186);
  color: black;
  border-radius: 4px;
  padding: 8px 16px;
  border: 0;
  margin: 10px;
}
.btn:hover {
  /*Чтобы при наведении курсора блок увеличивался, мы воспользуемся свойством transform и зададим ему значение scale(1.2).
   При этом блок увеличится на 20 процентов с сохранением своих пропорций: */
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.3);
  /* при наведении на кнопку меняется цвет  */
  background-color: #b81010;
  color: rgb(255, 253, 253);
}
.rainbow {
  font-family: Poppins, sans-serif;
  background-color: #343a40;
  color: rgb(255, 253, 253);
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 16px;
  border: 0;
  margin: 10px;
}

.rainbow-1:hover {
  background-image: linear-gradient(
    90deg,
    #00c0ff 0%,
    #ffcf00 49%,
    #fc4f4f 80%,
    #00c0ff 100%
  );
  animation: slidebg 5s linear infinite;
}
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}

.follow {
  margin-top: 40px;
}

.follow input {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
}

</style>