var url = window.location.href;
var url2 = window.location.href;
var x = url2;
var id = url.split('?');
 if(id[0]==url2)
 {
    id=0; 
 }
 else
 {
     id=parseInt(id[1]);
 }
document.getElementById('giohang').style.display='none';
// hàm hiển thị 
function showgiohang(j)
{
    var i;
    var y=j;
    var arr =JSON.parse(localStorage.getItem('flag'))
    if(arr[0].value==-1)
    {
        alert("Vui lòng đăng nhập tài khoản trước khi mua hàng");
    }
    else{
    var temp = JSON.parse(localStorage.getItem('product2'));
    for( i=0;i<temp.length;i++)
    {
        if(temp[i].productId==y)
        {
            document.getElementById('giohang__image-id').innerHTML='<img src="'+temp[i].img+'" >';
            document.getElementById('giohang__content-item-gender-id').innerHTML="Giới tính: "+temp[i].gender;
            document.getElementById('giohang__content-item-name-id').innerHTML="Giày: "+ temp[i].name;
            document.getElementById('giohang__content-item-price-id').innerHTML="Giá:"+ temp[i].price+" Vnd";
            document.getElementById('giohang__content-item-soluongcon-id').innerHTML="Số lượng còn lại: "+ temp[i].soluong;
            document.getElementById('giohang__content-item-add-id').innerHTML='<button onclick="add('+y+')"> Thêm vào giỏ hàng</button>';//cartjs.js
        }
    }
   var x = document.getElementById('giohang');
   if(x.style.display=='none')
   {
       x.style.display='block';
   }
   else
   {
       x.style.display='none';
   }
}
}
// Hàm tăng số lượng sản phẩm
function TangSL()
{
    var y =document.getElementById('SoLuongId').value;
    y = Number(y);
    if(y>=0)
    {
    document.getElementById('SoLuongId').value=y+1;
    }
}
// Hàm giảm số lượng sản phẩm
function GiamSL()
{
    var y =document.getElementById('SoLuongId').value;
    y = Number(y);
    if(y>1)
    {
    document.getElementById('SoLuongId').value=y-1;
     }
}
function closeGioHang()
{
    document.getElementById('giohang').style.display='none';
}


// 
function displaysize()
{
     var x= document.getElementById("giohang__content-item-displaydetail-id");
    var s="";
    s=s+'<img src="../Bang-size-giay-Nike-6.jpg"> ';
    x.innerHTML=s;
}
function displayinfo()
{
    var x= document.getElementById("giohang__content-item-displaydetail-id");
    var s="";
    s=s+'✔️ Hoàn tiền 100% nếu nhận sản phẩm không giống hình.'
   +' ✔️ Đổi ngay hàng mới nếu nhận hàng bị lỗi, hỏng từ phía nhà sản xuất. Hỗ trợ đổi size nếu các bạn đi không vừa. '
   +' ✔️ FreeShip đổi trả toàn quốc.'
   + ' ✔️  Mọi vấn đề xin liên hệ với số : 0434384384734'
   +'</br>Lưu ý: Liên lạc ngay với chúng tôi ngay sau khi nhận hàng'
   +""
   +'</br>Cảm ơn các bạn đã đến với chúng tôi.';
   x.innerHTML=s;
}