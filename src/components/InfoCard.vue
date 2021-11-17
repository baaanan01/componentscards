<template>
      <div class="box1">
        <img class="img" alt="spike" src="https://i.pinimg.com/564x/a9/b5/b6/a9b5b624f317efc409c7054c675b957d.jpg" width="250"/>
        <p>Spike Spiegel<br />Space Cowboy</p>
      </div>
</template>
<script>
export default {
  name: "InfoCard",
};
</script>
<style scoped>

.img {
  margin-top: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: auto 150px; /* Высота фотографии равна высоте элемента */
}

</style>