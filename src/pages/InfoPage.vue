<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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

/* CSS flexbox — модуль макета гибкого контейнера — представляет собой способ компоновки элементов, в основе лежит идея оси.
Flexbox состоит из гибкого контейнера (flex container) и гибких элементов (flex items). 
Гибкие элементы могут выстраиваться в строку или столбик, а оставшееся свободное пространство распределяется между ними различными способами.*/

.wrapper {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  grid-template-columns: repeat(2, 1fr);
  display: flex;
  /* flex-wrap: wrap;  flex-wrap задаёт правила вывода flex-элементов —  в одну строку или в несколько, с переносом блоков.  */
  justify-content: center; /*CSS свойство  justify-content определяет, как браузер распределяет пространство между и вокруг элементов контента
                               вдоль главной оси flex контейнера, или вдоль строчной оси grid контейнера. */
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
/* .box1 {
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  grid-row: 1/2;
  border: 1px solid;
  flex: 1 1 100px;
  margin: 0 5px;
  background: #ffffff;
  box-shadow: 0 4px 38px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}

.img {
  margin-top: 10px;
  width: 150px;
  height: 150px; /* Ширина и высота 
  border-radius: 50%;  Превращаем в круг
  background-size: auto 150px;  Высота фотографии равна высоте элемента 
} */
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

/* .box2 {
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;   
  grid-row: 1 / 2;
  border: 1px solid;
  flex:  1 1 100px;
  margin: 0 5px
} */

/* перенос работает и без медиа если есть flex-wrap
 @media (max-width: 500px) {
  .grid>div:not(.head) {
    width: 100%;
  }
  .grid>div:not(.head):nth-child(odd) {
    order: 2;
  }
} 
:nth-child() находит один или более элементов,
основываясь на их позиции среди группы соседних элементов.
*/
</style>

