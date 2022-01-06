// hiển thị sản phẩm theo phân loại
function displayProduct(j)
{
    var temp=JSON.parse(localStorage.getItem('product2'));
    var k=Number(j);
    var i;
    var count=0;
       switch(k)
       {
           case 1:
               var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='Nam' && count<6)
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
               break;
            case 2:
               var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='Nữ' && count<6)
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
                break;
            case 3:
                var s="";
               for(i=0;i<temp.length;i++)
               {
                   if(temp[i].gender=='kid' && count<6)
                   {
                       count++;
                       s=s+inner(i);
                       document.getElementById("vuong").innerHTML=s;
                   }
               }
                break;
       }
}
// Lọc ra danh sách sản phẩm thõa mãn điều kiện
function ListProduct(str)
{
    var temp = JSON.parse(localStorage.getItem('product2'));
    var arr = [];
    var j=0;
           for(i=0;i<temp.length;i++)
           {
               if(temp[i].gender==str)
               {
                  arr[j]=temp[i];
                  j++;
               }
           }
    return arr;
}
// tạo mảng các nút để phân trang sản phẩm
function indexButton(str)
{
   var arr = ListProduct(str);
            var arr_button=[];
               for(i=0;i<arr.length/6;i++)
               {
                  arr_button[i]=i+1;
               }

    return arr_button;
}
// hiển thị các nút
function display_button(k,str)
{   
    var s="";
    var arr_button1= indexButton(str);
               for(i=0;i<arr_button1.length;i++)
               {
                   s=s+'<button id="span_button-index'+(i+1)+'" onclick=display_Product_Next('+(i+1)+','+k+',"'+str+'",'+arr_button1.length+')>'+(i+1)+'</button>';
                   document.getElementById('span_button').innerHTML=s;
               }     
}
// Hiển thị sản phẩm ở các nút tiếp theo
function display_Product_Next(j,k,str,n)
{
    var i;
    for(i=0;i<n;i++)
    {
        document.getElementById('span_button-index'+(i+1)+'').style.backgroundColor='white';
    }
    document.getElementById('span_button-index'+j+'').style.backgroundColor='red';
    var arr = ListProduct(str);
    console.log(j);
    var x = j*6;
    var s="";
    for(i=x-6;i<x && i<arr.length;i++)
    {
        s=s+inner2(i,arr);
        document.getElementById('vuong').innerHTML=s;
    }
}
function inner2(j,arr1)
{
   var arr=arr1;
   var s="";
   var i=j;
             var s = '<div class="content__item" > <img src="'+arr[i].img+'">';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá: '+arr[i].price+' Vnd </div>';
            s=s+'<button class="content__button" onclick="showgiohang('+arr[i].productId+')" > Mua hàng </button> </div>';
   return s;
}