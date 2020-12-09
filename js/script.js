var app= new Vue(
  {
    el:"#root",
    data: {
      imageIndex:0,
      images:[
        "https://www.pronerding.it/wp-content/uploads/2019/08/lulu-copertina-.jpg",
        "https://www.pronerding.it/wp-content/uploads/2019/08/janna-copertina-.jpg",
        "https://www.pronerding.it/wp-content/uploads/2019/08/karma-copertina-.jpg",
        "https://www.pronerding.it/wp-content/uploads/2019/08/syndra-copertina-.jpg"
      ],
      autoplay:""
    },

    created:function(){
      this.autoplay = setInterval(
        () => this.nextImage(),5000
      )
    },

    methods:{
      nextImage: function(){
        clearInterval(this.autoplay);
        this.imageIndex ++;
        if (this.imageIndex==this.images.length){
          this.imageIndex=0
        }
      },
      prevImage: function(){
        clearInterval(this.autoplay);
        this.imageIndex --;
        if (this.imageIndex== -1){
          this.imageIndex= this.images.length -1;
        }
      },

      dotsclick: function(index){
        (this.imageIndex = index)
      }
    }
  }
);
