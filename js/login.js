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
 // biến cờ để xác định tài khoản đăng nhập
function flag(){
    if(localStorage.getItem('flag')==null)
    {
        var arrflag = [{value:-1}];
        localStorage.setItem('flag',JSON.stringify(arrflag));
    }
}
function addvallue(k)
{
    var temp = JSON.parse(localStorage.getItem('flag'));
                localStorage.setItem('product_cart',JSON.stringify(arr));
} 
// kiểm tra đăng nhập 
function getLogin() {
    var userArray = JSON.parse(localStorage.getItem('user'));
    var username1 = document.getElementById('username-login-id').value;
    var password1 =document.getElementById('password-login-id').value;
    var flag=false;
    var temp;
    for (i = 0; i < userArray.length; i++) {
        if (userArray[i].username == username1 && userArray[i].password == password1 && i == 0) {
            window.location = "Admin.html";
            flag=true;
            break;
        }
        else if (userArray[i].username == username1 && userArray[i].password == password1 && i != 0) {
            window.location = 'index.html?1';
            var temp = JSON.parse(localStorage.getItem('flag'));
            temp[0].value=i;
            localStorage.setItem('flag',JSON.stringify(temp));
            flag=true;
            temp=i;
            break;
            
        }
    }
    if(flag==true)
    {
        alert("Đăng nhập thành công");
    }
    else{
        alert("Đăng nhập thất bại");
    }    
}
// Hiển thị tài khoản ở góc trên cùng
function DisplayAccount()
{
    var temp = JSON.parse(localStorage.getItem('flag'));
    var userArray = JSON.parse(localStorage.getItem('user'));
    if(id==0)
    {
        document.getElementById("DangNhap").innerHTML='<a href="DangNhap.html">Đăng nhập</a>';
        document.getElementById("DangKy").innerHTML='<a href="DangKy.html">Đăng ký</a>';
        product_cart_default();
    }
    else
    {
        if(temp[0].value!=-1 && id==1)
        {
            document.getElementById("DangNhap").innerHTML='<a href="">'+userArray[temp[0].value].username+'</a>';
            document.getElementById("DangKy").innerHTML='<a onclick="KiemTraDangSuat()">Đăng Xuất</a>';
        }
        else
        {
            document.getElementById("DangNhap").innerHTML='<a href="DangNhap.html">Đăng nhập</a>';
            document.getElementById("DangKy").innerHTML='<a href="DangKy.html">Đăng ký</a>';
            console.log(1);
        }
    }
   
}
// Kiểm tra đăng suất tài khoản
function KiemTraDangSuat()
{
    var temp= JSON.parse(localStorage.getItem("flag"));
    temp[0].value=-1;
    localStorage.setItem('flag',JSON.stringify(temp));
    window.location = 'index.html?0';
}