<template>
  <div class="hello">
    <h1 class="hh">info page</h1>
    <div class="wrapper">
      <div class="box1">
        <img class="img" alt="spike" src="https://i.pinimg.com/564x/a9/b5/b6/a9b5b624f317efc409c7054c675b957d.jpg" width="250"/>
        <p>Spike Spiegel<br />Space Cowboy</p>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {}
};
</script>

<style scoped>
</style>
