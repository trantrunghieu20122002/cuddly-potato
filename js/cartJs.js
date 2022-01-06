
function object2(id1,img,name,price,SL,size) {
    this.productId = id1;
    this.img = img;
    this.name = name;
    this.price = price;
    this.SL = SL;
    this.size=size;
}
function Khoitaomang()
{
    if(localStorage.getItem("product_cart")==null)
    {
        var productArray2 = [];
        localStorage.setItem('product_cart',JSON.stringify(productArray2));
    }
}
// Khởi tạo mảng giỏ hàng
function product_cart_default(){
        var productArray2 = [];
        localStorage.setItem('product_cart',JSON.stringify(productArray2));
} 
// Them một sản phẩm vào giỏ hàng 
function add(k)
{
    var x = document.getElementById('SoLuongId').value;
    x=Number(x);
    var arr= JSON.parse(localStorage.getItem('product_cart'));
    var temp = JSON.parse(localStorage.getItem('product2'));
    var flag=false;
    var pos;
    var size=document.getElementsByClassName("active");
    var size1=size[0].value;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].productId==k)
        {
            flag=true;
            pos=i;
        }
    }
    if(flag==false)
    {
        alert("Đã thêm vào giỏ hàng");
    for(i=0;i<temp.length;i++)
    {
        if(temp[i].productId==k)
        {
            arr.push(new object2(temp[i].productId,temp[i].img,temp[i].name,temp[i].price,x,size1));
            break;
        }
    }
    localStorage.setItem('product_cart',JSON.stringify(arr));
    }
    else
    {
        alert("Đã thêm vào giỏ hàng");
        for(i=0;arr.length;i++)
        {
            if(arr[i].productId==k)
            {
                arr[i].SL=arr[i].SL + Number(x);
                break;
            }
        }
        localStorage.setItem('product_cart',JSON.stringify(arr));
    } 
}
// Hiển thị danh sách sản phẩm vừa mua
function displayCart()
{
    var arr=  JSON.parse(localStorage.getItem('product_cart'));

  var s= ' <tr class="cart_table-row">'
                        +'<th class="cart_table-column">STT</th>'
                        +'<th class="cart_table-column">Image</th>'
                        +'<th class="cart_table-column">Tên Sản Phẩm</th>'
                        +'<th class="cart_table-column">Giá</th>'
                        +'<th class="cart_table-column">Size</th>'
                       +'<th class="cart_table-column">Số lượng</th>'
                        +'<th class="cart_table-column">'+"Thay Doi"+'</th>'
                    +'</tr>';
    document.getElementById('cart_table-id').innerHTML=s;
    for(i=0;i<arr.length;i++)
    {
        s =s + ' <tr class="cart_table-row">'
        +'<td class="cart_table-column">'+(i+1)+'</td>'
        +'<td class="cart_table-column"><img src="'+arr[i].img+'"</td>'
        +'<td class="cart_table-column">'+arr[i].name+'</td>'
        +'<td class="cart_table-column">'+arr[i].price+' Vnd</td>'
        +'<td class="cart_table-column">'+arr[i].size+'</td>'
        +'<td class="cart_table-column">'+arr[i].SL+'</td>'
        +'<td class="cart_table-column"><button onclick=deleteProduct('+i+')><i class="fas fa-window-close"></i></button></td>'
        +'</tr>';
        document.getElementById('cart_table-id').innerHTML=s;
    }
    var Sum = 0;
    for(i=0;i<arr.length;i++)
    { 
      Sum+=arr[i].price*arr[i].SL;
    }
    document.getElementById('money').innerHTML='Tổng Tiền: '+Sum+' Vnd';
}
// Xoa một sản phẩm ở giỏ hàng
function deleteProduct(k)
{
    var i = Number(k);
    console.log(i);
    var arr=  JSON.parse(localStorage.getItem('product_cart'));
    for(j=i;j<arr.length-1;j++)
    {
        arr[j]=arr[j+1];
    }
    arr.splice(arr.length-1,6);
    localStorage.setItem('product_cart',JSON.stringify(arr));
   displayCart();
}
// Giảm số lượng sản phẩm trong mảng khi mua
function giamsoluong()
{
    var arr= JSON.parse(localStorage.getItem("product2"));
    var temp = JSON.parse(localStorage.getItem("product_cart"));
    var i;
    var j;
    for(i=0;i<temp.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(temp[i].productId==arr[j].productId)
            {
                arr[j].soluong =arr[j].soluong - temp[i].SL;
            }
        }
    }
    localStorage.setItem("product2",JSON.stringify(arr));

}