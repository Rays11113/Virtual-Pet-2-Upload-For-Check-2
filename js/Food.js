class Food {
    constructor (){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage ("Images/Milk.png")
    }
   getFoodStock () {
   return this.foodStock;
   }

   updateFoodStock () {
       this.foodStock = foodStock;
   }

   deductFood () {
    if (this.foodStock>0) {
        this.foodStock = this.foodStock-1;
    }}
    getFedTime(lastFed){
      this.lastFed = lastFed;
    }
   display () {
       var x = 80; 
       var y = 100;
      image (this.image, 700, 200, 50, 50)

      if (foodStock!= 0) {
       for(var i =0; i<this.foodStock;i++){
           if (i%10 === 0){
               x = 80; 
               y = y + 50; 
           }
           image (this.image,x,y,50,50);
           x = x+30;
       }
      }
   }
}