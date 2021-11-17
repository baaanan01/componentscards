<template>
  <div class="hello">
    <h1 class="hh">info page</h1>
    <div class="wrapper">
      <InfoCard/>
      <FormCard/>
    </div>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import FormCard from '@/components/FormCard.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {InfoCard,FormCard}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Poppins");

.hh{
  text-align: center;
}
.wrapper {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: center;
}
.flexbox {
  display: flex;
  margin-top: 150px;
  justify-content: center;
 
}
.new {
  font-family: Poppins, sans-serif;
}


@media only screen and (max-width: 400px) {
  .wrapper {
    flex-direction: column;  
  }
}

.btn {
  font-family: Poppins, sans-serif;
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

.container {
  margin-top: 150px;
}

.text-center {
  text-align: center;
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
