(function()
{
    'use strict';
    
    
    var itemlist=[
        { quantity:"3",
          name: "Packs of Soda"
        },
        {
            quantity:"10",
            name: "Candy Bars"
        },
        {
            quantity:"7",
          name: "Eggs"
        },
        {
            quantity:"10",
            name: "Bags of Chips"
        },
        {
            quantity:"10",
            name: "Brownies"
        },];
    
        angular.module("ShoppingListCheckOff",[])
           .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController',AlreadyBoughtController)
            .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

        
        /*Buy Controller */
        ToBuyController.$inject =['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService){


            var ctr1=this;
          ctr1.itemlist= ShoppingListCheckOffService.getItems();
          ctr1.Add = function(index){

            ShoppingListCheckOffService.AddItem(index);
          };
          
        }

        /* Bought Controller */
        AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
        
        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var ctr2= this;
            ctr2.itemlist=[];
    
                    ctr2.itemlist = ShoppingListCheckOffService.getBoughtItems();
            
           
        }

        /* Shopping List Service */
        function ShoppingListCheckOffService() {

            var service=this;

            //list of items
           var items=itemlist;
            var boughtlist=[];

            service.getItems=function(){

                return items;
            }

            service.getBoughtItems=function () {
                
                return boughtlist;
            };

            service.AddItem=function (index) {
                
             
                var item={
                    name:itemlist[index].name,
                    quantity:itemlist[index].quantity
                };

                boughtlist.push(item);
                items.splice(index,1)

            };

            
        }
       
})
();