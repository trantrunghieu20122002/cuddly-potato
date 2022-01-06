
function TimKiemSanPham()
{
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("span_all2").style.display='none';
    var data=document.getElementById("timkiem");
    var arr=JSON.parse(localStorage.getItem('product2'));
    var arrnew=[];
    var j=0;
    var s="";
    var flag=false;
    var count=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].name.includes(data.value)==true)
        {
           arrnew[j]=arr[i];
           if(count<6)
           {
            s=s+inner(i);
            count++;
           }
           j++;
           flag=true;
        }
    }
    if(flag==false){
        alert("Không tìm thấy kết quả");
        window.location="index.html?1";
    }
    else
    {
    document.getElementById("vuong").innerHTML=s;
    var arrbutton=indexButton2(arrnew);
    var s2="";
    var str=data.value;
    for(i=0;i<arrbutton.length;i++)
    {
        s2=s2+'<button id="span_button-index'+(i+1)+'" onclick=display_Product_Next2('+(i+1)+',"'+str+'",'+arrbutton.length+')>'+(i+1)+'</button>';
        document.getElementById('span_button').innerHTML=s2;
    }
}
}
// Lọc danh sách
function TimKiemListProduct(str)
{
    var arr=JSON.parse(localStorage.getItem('product2'));
    var j=0;
    var str1=str;
    var arrnew=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].name.includes(str1)==true)
        {
           arrnew[j]=arr[i];
           j++;
        }
    }
    return arrnew;
}
// danh sách nút
function indexButton2(arrnew)
{
   var arr = arrnew;
            var arr_button=[];
               for(i=0;i<arr.length/6;i++)
               {
                  arr_button[i]=i+1;
               }

    return arr_button;
}
// Hiển thị sản phẩm ở các nút tiếp theo
function display_Product_Next2(j,str,n)
{
    var i;
    var arr=TimKiemListProduct(str);
    for(i=0;i<n;i++)
    {
        document.getElementById('span_button-index'+(i+1)+'').style.backgroundColor='white';
    }
    document.getElementById('span_button-index'+j+'').style.backgroundColor='red';
    console.log(j);
    var x = j*6;
    var s="";
    for(i=x-6;i<x && i<arr.length;i++)
    {
        s=s+inner3(i,arr);
        document.getElementById('vuong').innerHTML=s;
    }
}
function inner3(j,arr1)
{
   var arr=arr1;
   var s="";
   var i=j;
             var s = '<div class="content__item" > <img src="'+arr[i].img+'">';
              s=s+'<div class="content__name" > '+arr[i].name+' </div> <div class="content__price" >Giá: '+arr[i].price+' Vnd </div>';
            s=s+'<button class="content__button" onclick="showgiohang('+arr[i].productId+')" > Mua hàng </button> </div>';
   return s;
}