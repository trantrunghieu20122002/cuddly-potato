function setInputValue(selector, value) {
    var element = document.getElementById(selector);
    element.value = value;
}
function getInputValue(selector) {
    var element = document.getElementById(selector);
    return element.value;
}
/*--------------------------------------------user-login-register-----------------------------------------------*/
//hiển thị -> info-user
function renderListUser() {
    let userItem = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    let tableContent = `<tr>
        <td style="text-align:center">STT</td>
        <td style="text-align:center">Họ và tên</td>
        <td style="text-align:center">Tên tài khoản</td>
        <td style="text-align:center">Email</td>
        <td style="text-align:center">Số điện thoại</td>
        <td style="text-align:center">Ngày sinh</td>
        <td style="text-align:center">Tùy chọn</td>
    </tr>`;

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
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePhone(phone) {
    var re = /^0(1\d{9}|9\d{8})$/;
    return re.test(phone);
}
//save -> register
function save() {
    let fullname = getInputValue('fullname');
    let username = getInputValue('username');
    let password = getInputValue('password');
    let repassword = getInputValue('repassword');
    let email = getInputValue('email');
    let phone = getInputValue('phone');
    let birthday = getInputValue('birthday');

    if (_.isEmpty(fullname)) {
        document.getElementById('error-fullname').innerHTML = "Vui lòng nhập họ và tên";
    } else if (fullname.length < 2) {
        document.getElementById('error-fullname').innerHTML = 'Họ và tên tối thiểu 2 ký tự';
        fullname = '';
    }
    else document.getElementById('error-fullname').innerHTML = '';

    if (_.isEmpty(username)) {
        document.getElementById('error-username').innerHTML = "Vui lòng nhập tên tài khoản";
    } else if (username.length < 3) {
        document.getElementById('error-username').innerHTML = 'Tên tài khoản tối thiểu 3 ký tự';
        username = '';
    }
    else document.getElementById('error-username').innerHTML = '';

    if (_.isEmpty(password)) {
        document.getElementById('error-password').innerHTML = "Vui lòng nhập mật khẩu";
    } else if (password.length < 8) {
        document.getElementById('error-password').innerHTML = 'Mật khẩu tối thiểu 8 ký tự';
        password = '';
    }
    else document.getElementById('error-password').innerHTML = '';

    if (_.isEmpty(repassword)) {
        document.getElementById('error-repassword').innerHTML = "Vui lòng nhập lại mật khẩu";
    } else if (password != repassword) {
        document.getElementById('error-repassword').innerHTML = 'Mật khẩu nhập lại không đúng';
        repassword = '';
    }
    else document.getElementById('error-repassword').innerHTML = '';

    if (_.isEmpty(email)) {
        document.getElementById('error-email').innerHTML = "Vui lòng nhập email";
    } else if (!validateEmail(email)) {
        document.getElementById('error-email').innerHTML = 'Email không đúng định dạng';
        email = '';
    }
    else document.getElementById('error-email').innerHTML = '';

    if (_.isEmpty(phone)) {
        document.getElementById('error-phone').innerHTML = "Vui lòng nhập số điện thoại";
    } else if (!validatePhone(phone)) {
        document.getElementById('error-phone').innerHTML = 'Số điện thoại không đúng định dạng';
        phone = '';
    }
    else document.getElementById('error-phone').innerHTML = '';


    if (fullname && username && password && repassword && email && phone) {
        alert('Đăng ký thành công');
        window.location = "login.html";
        let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        user.push({
            fullname: fullname,
            username: username,
            password: password,
            email: email,
            phone: phone,
            birthday: birthday
        });
        localStorage.setItem('user', JSON.stringify(user));
        this.renderListUser();

    }
}
function deleteUser(id) {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    if (confirm('Bạn muốn xóa thông tin khách hàng này?')) {
        user.splice(id, 1);
        localStorage.setItem('user', JSON.stringify(user));
        renderListUser();
    }
}

function findUser() {
    let userArray = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    let fullnameInput = getInputValue('find-fullname');
    let usernameInput = getInputValue('find-username');
    let tableContent = `<tr>
    <td style="text-align:center">STT</td>
    <td style="text-align:center">Họ và tên</td>
    <td style="text-align:center">Tên tài khoản</td>
    <td style="text-align:center">Email</td>
    <td style="text-align:center">Số điện thoại</td>
    <td style="text-align:center">Ngày sinh</td>
    <td style="text-align:center">Tùy chọn</td>
    </tr>`;
    for (i = 0; i < userArray.length; i++) {
        if (userArray[i].fullname == fullnameInput || userArray[i].username == usernameInput) {
            tableContent += `<tr>
            <td>${i + 1}</td>
            <td>${userArray[i].fullname}</td>
            <td>${userArray[i].username}</td>
            <td>${userArray[i].email}</td>
            <td>${userArray[i].phone}</td>
            <td>${userArray[i].birthday}</td>
            <td style="text-align:center">
                <a href="#" ><i class="far fa-edit"></i></a> | <a href="#" onclick='deleteUser(${i})'><i class="far fa-trash-alt"></i></a>
            </td>
            </tr>`;
        }
        else {
            tableContent += ``;
        }
    }
    document.getElementById('infoUser-table').innerHTML = tableContent;
}

var userID;
function onEditUser(id) {
    document.querySelector('.edit-user-form-wrapper').style.display = "block";
    userID = id;
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
    setInputValue('editFullname', user[id].fullname);
    setInputValue('editUsername', user[id].username);
    setInputValue('editEmail', user[id].email);
    setInputValue('editPhone', user[id].phone);
    setInputValue('editBirthday', user[id].birthday);
}
function editUser() {

    let fullname = getInputValue('editFullname');
    let username = getInputValue('editUsername');
    let email = getInputValue('editEmail');
    let phone = getInputValue('editPhone');
    let birthday = getInputValue('editBirthday');
    if (_.isEmpty(fullname)) {
        document.getElementById('error-fullname').innerHTML = "Vui lòng nhập họ và tên";
    } else if (fullname.length < 2) {
        document.getElementById('error-fullname').innerHTML = 'Họ và tên tối thiểu 2 ký tự';
        fullname = '';
    }
    else document.getElementById('error-fullname').innerHTML = '';

    if (_.isEmpty(username)) {
        document.getElementById('error-username').innerHTML = "Vui lòng nhập tên tài khoản";
    } else if (username.length < 3) {
        document.getElementById('error-username').innerHTML = 'Tên tài khoản tối thiểu 3 ký tự';
        username = '';
    }
    else document.getElementById('error-username').innerHTML = '';

    if (_.isEmpty(email)) {
        document.getElementById('error-email').innerHTML = "Vui lòng nhập email";
    } else if (!validateEmail(email)) {
        document.getElementById('error-email').innerHTML = 'Email không đúng định dạng';
        email = '';
    }
    else document.getElementById('error-email').innerHTML = '';

    if (_.isEmpty(phone)) {
        document.getElementById('error-phone').innerHTML = "Vui lòng nhập số điện thoại";
    } else if (!validatePhone(phone)) {
        document.getElementById('error-phone').innerHTML = 'Số điện thoại không đúng định dạng';
        phone = '';
    }
    else document.getElementById('error-phone').innerHTML = '';

    if (fullname && username && email && phone) {
        let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
        user[userID] = {
            fullname,
            username,
            email,
            phone,
            birthday
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.renderListUser();
        alert('Thay đổi thành công');
    }
}
function closeEditUser() {
    document.querySelector('.edit-user-form-wrapper').style.display = "none";
}
var login = false;
function enableLoginMode() {
    login = true;
}
function disableLoginMode() {
    login = false;
}
//Lấy username + password
function getLogin() {
    let userArray = JSON.parse(localStorage.getItem('user'));
    var username = getInputValue('username-login');
    var password = getInputValue('password-login');
    for (i = 0; i < userArray.length; i++) {
        if (userArray[i].username == username && userArray[i].password == password && i == 0) {
            window.location = "admin.html";
            enableLoginMode();
        }
        else if (userArray[i].username == username && userArray[i].password == password && i != 0) {
            window.location = "main.html";
            enableLoginMode();
        }
        else {
            document.getElementById('error').innerHTML = "Đăng nhập không thành công";
            disableLoginMode();
        }
    }
}