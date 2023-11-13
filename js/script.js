const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      message: "Hello World!",
      mySrc:
        "https://images.pexels.com/photos/18457182/pexels-photo-18457182/free-photo-of-animale-albero-giungla-fauna-selvatica.jpeg",
      myClass: "d-hidden",
    };
  },

  methods: {
    showImg: function () {
      this.myClass = "active";
    },
    clearImg: function () {
      this.myClass = "d-hidden";
    },
  },
});

app.mount("#app");
