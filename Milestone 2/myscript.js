let app = new Vue({
    el: "#app",
    data: {
      albums: [],
    },
  
    mounted() {
      axios
        .get("http://localhost/php-ajax-dischi/Milestone%202/database.php")
        .then((response) => {      
          this.albums = response.data;
          console.log(this.albums);
        })

        .catch((error) => {
          console.log(error);
        });
    },
  });