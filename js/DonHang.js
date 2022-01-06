// tạo ra mảng để quản lý đơn hàng
function create()
{
    if(localStorage.getItem('DonHang')===null)
    {
    var arr = [];
    localStorage.setItem('DonHang',JSON.stringify(arr));
    }
}
// Thêm một đơn hàng vào mảng
function ThemDonHang()
{
    alert("Da Dat hang");
    var name1=document.getElementById("name-TT").value;
    var phone1 = document.getElementById("phone-TT").value;
    var address1 = document.getElementById("address-TT").value;
    var date1= document.getElementById("day-TT").value;
    var method1=document.getElementById("select-TT").value;
    var user= JSON.parse(localStorage.getItem("user"));
    var arr=JSON.parse(localStorage.getItem("DonHang"));
    var id;
    var madon=0;
    for(i=1;i<user.length;i++)
    {
        if(user[i].fullname==name1)
        {
            id=user[i].id;
            break;
        }
    }
    var le=arr.length;
        if(arr.length==0)
        {
            madon=10001;
        }
        else
        {
            madon=arr[le-1][0].MaDon + 1;
        }
    var giohang = JSON.parse(localStorage.getItem("product_cart"));
    var a = [{MaDon:madon},{ID:id,name:name1,phone:phone1,address:address1,method:method1,date:date1},giohang,{TrangThai:"Đang xử lý"}];
    console.log(a);
    arr.push(a);
    localStorage.setItem("DonHang",JSON.stringify(arr));
    window.location="index.html?1";
    giamsoluong(); // giảm số lượng sản phẩm trong mảng .. cartjs.js
    product_cart_default(); // khởi tạo lại mảng giỏ hàng
}