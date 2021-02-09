var app = new Vue({
  el: `#app`,
  data: {
    albums: [],
    generi: ['All']
  },
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) =>{
        this.albums = result.data.response;

        this.albums.forEach((element) => {
          if(!this.generi.includes(element.genre)){
            this.generi.push(element.genre);
          }
        });
          console.log(this.generi);
      })
  },
  methods: {
  }
});
