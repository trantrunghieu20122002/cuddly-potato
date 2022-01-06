
function createUser(){
    var arrayUser = [
        {
            id:0,username: 'admin',
            password: 'admin',
            fullname: 'Trần Trung Hiếu',
            address: 'Quận 8, TPHCM',
            phone: '19001000' ,
            birthday:'2002-12-20' ,
            datesignup: '23-11-2020'
        }
    ];
	if(localStorage.getItem('user' )=== null){
        localStorage.setItem('user',JSON.stringify(arrayUser));
    }
    
}
function ShowListUser() {
    document.getElementById('display_Product').style.display='none';
    document.getElementById("display_order").style.display='none';
    let arr = JSON.parse(localStorage.getItem('user'));
    var s='<tr class="wrapper_table_row">'+
    '<th style="margin-left: 30px;">STT</th>'+
    '<th>Mã khách hàng</th>'+
    '<th>Họ Và Tên</th>'+
    '<th>Tên tài khoản</th>'+
    '<th>Số điện thoại</th>'+
    '<th>Ngày sinh</th>'+
    '<th>Ngày đăng ký</th>'+
    '<th>Tùy chọn</th>'+
     '</tr>'; 

     for(i=0;i<arr.length;i++)
     {
         s=s+
         '<tr>'+
         '<td style="margin-left: 32px;">'+(i+1)+'</td>'+
         '<td>'+arr[i].id+'</td>'+
         '<td>'+arr[i].fullname+'</td>'+
         '<td>'+arr[i].username+'</td>'+
         '<td>'+arr[i].phone+'</td>'+
         '<td>'+arr[i].birthday+'</td>'+
         '<td>'+arr[i].datesignup+'</td>'+
         '<td><button onclick=deleteUser('+i+')><i class="fas fa-window-close"></i></button></td>'+
         '</tr>';
         
     }
     document.getElementById('wrapper_table-id').innerHTML=s;
     /*
    user.forEach((userItem, index) => {
        let userID = index;
        index++;
        tableContent += `<tr>
            <td>${index}</td>
            <td>${userItem.fullname}</td>
            <td>${userItem.username}</td>
            <td>${userItem.email}</td>
            <td>${userItem.phone}</td>
            <td>${userItem.birthday}</td>
            <td style="text-align:center">
                <a href="#" onclick='onEditUser(${userID})' onclick='editUser()' ><i class="far fa-edit"></i></a> | <a href="#" onclick='deleteUser(${userID})'><i class="far fa-trash-alt"></i></a>
            </td>
        </tr>`;
    })
    document.getElementById('infoUser-table').innerHTML = tableContent;
    */
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone) {
  // var re = /^0(1\d{9}|9\d{8})$/;
  var re=/^0[0-9]{9}$/;
    return re.test(phone);
}
function addUser()
{ 
    var arr= JSON.parse(localStorage.getItem('user'));
    var password_check = document.getElementById('mat_khau');
    var password_check2 = document.getElementById('mat_khau_lai');
    var username1 = document.getElementById('ten_dang_nhap');
    var fullname1 = document.getElementById('ten');
    var phone_number1 = document.getElementById('phonenumber');
    var address1 = document.getElementById('address');
    var email1 = document.getElementById('email');
    var birthday1 = document.getElementById('birthday');
    var ID=0;
    var x =  new Date();
    var date=x.getDate();
    var month = x.getMonth();
    var year = x.getFullYear();
    var datesignup1 = ''+date+'-'+(month+1)+'-'+year+'';
    var flag = false;
        if (fullname1.value=="") {
            document.getElementById('error-fullname').innerHTML = "!Vui lòng nhập họ và tên";
            flag=false;
        } else if (fullname1.value.length < 2) {
            document.getElementById('error-fullname').innerHTML = '!Họ và tên tối thiểu 2 ký tự';
            fullname1 = '';
            flag=false;
        }
        else {
            document.getElementById('error-fullname').innerHTML = '';
            flag = true;
        }

        if (address1.value=="") {
            document.getElementById('error-address').innerHTML = "!Vui lòng nhập địa chỉ";
            flag=false;
        }
        else {
            document.getElementById('error-address').innerHTML = '';
            flag = true;
        }

        if (birthday1.value=="") {
            document.getElementById('error-birthday').innerHTML = "!Vui lòng nhập ngày sinh";
            flag=false;
        }
        else {
            document.getElementById('error-birthday').innerHTML = '';
            flag = true;
        }

        if (username1.value=="") {
            document.getElementById('error-username').innerHTML = "!Vui lòng nhập tên tài khoản";
            flag=false;
        } else if (username1.value.length < 3) {
            document.getElementById('error-username').innerHTML = '!Tên tài khoản tối thiểu 3 ký tự';
            flag=false;
            username1 = '';
        }
        else {
            document.getElementById('error-username').innerHTML = '';
            flag = true;
        }
        if (password_check.value=="") {
            document.getElementById('error-password').innerHTML = "!Vui lòng nhập mật khẩu";
            flag=false;
        } else if (password_check.value.length < 8 ){
            document.getElementById('error-password').innerHTML = '!Mật khẩu tối thiểu 8 ký tự';
            flag = false;
            password = '';
        }
        else {
            document.getElementById('error-password').innerHTML = '';
            flag = true;
        }
    
        if (password_check2.value=="") {
            document.getElementById('error-repassword').innerHTML = "!Vui lòng nhập lại mật khẩu";
            flag=false;
        } else if (password_check.value != password_check2.value) {
            document.getElementById('error-repassword').innerHTML = '!Mật khẩu nhập lại không đúng';
            flag=false;
            repassword = '';
        }
        else {
            document.getElementById('error-repassword').innerHTML = '';
            flag = true;
        }
    
        if (email1.value == "") {
            document.getElementById('error-email').innerHTML = "!Vui lòng nhập email";
            flag=false;
        } else if (!validateEmail(email1.value)) {
            document.getElementById('error-email').innerHTML = '!Email không đúng định dạng';
            flag=false;
            email1 = '';
        }
        else {
            document.getElementById('error-email').innerHTML = '';
            flag = true;
        }

        if (phone_number1.value == "") {
            document.getElementById('error-phonenumber').innerHTML = "!Vui lòng nhập số điện thoại";
            flag=false;
        }
        else if(!validatePhone(phone_number1.value))
        {
            document.getElementById('error-phonenumber').innerHTML = "!Số điện thoại không đúng định dạng";
            flag=false;

        }
        else {
            document.getElementById('error-phonenumber').innerHTML = '';
            flag = true;
        }
        
        if(arr.length == 1){
            ID = 1000 + arr[0].id;
        }
        // else{
        //     ID = arr[arr.length-1].id + 1;
        // }
    if(flag==true)
    {
        alert("Đăng ký thành công");
        window.location = "index.html";
        var arrayUser = {id:ID, username:username1.value , password:password_check.value, fullname:fullname1.value, address:address1.value, phone:phone_number1.value,birthday:birthday.value, datesignup:datesignup1};
        arr.push(arrayUser);
        localStorage.setItem('user',JSON.stringify(arr));  
        ShowListUser();
    }
}      
function deleteUser(k)
{
    var i = Number(k);
    console.log(i);
    var arr=  JSON.parse(localStorage.getItem('user'));
    for(j=i;j<arr.length-1;j++)
    {
        arr[j]=arr[j+1];
    }
    arr.splice(arr.length-1,5);
    localStorage.setItem('user',JSON.stringify(arr));
    ShowListUser();
}