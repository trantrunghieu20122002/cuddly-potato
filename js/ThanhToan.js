

function Thanhtoanhoadon()
{
    var arr=  JSON.parse(localStorage.getItem('product_cart'));
    if(arr.length==0)
    {
      alert("Vui lòng mua thêm sản phẩm");
      window.location="index.html?1";
    }
    else
    {
  var s= ' <tr class="cart_table-row">'
                        +'<th class="cart_table-column-TT">STT</th>'
                        +'<th class="cart_table-column-TT">Image</th>'
                        +'<th class="cart_table-column-TT">Tên Sản Phẩm</th>'
                        +'<th class="cart_table-column-TT">Giá</th>'
                       +'<th class="cart_table-column-TT">Số lượng</th>'
                    +'</tr>';
    document.getElementById('ThanhToan_SanPham-table-id').innerHTML=s;
    for(i=0;i<arr.length;i++)
    {
        s =s + ' <tr class="cart_table-row">'
        +'<td class="cart_table-column">'+(i+1)+'</td>'
        +'<td class="cart_table-column"><img src="'+arr[i].img+'"</td>'
        +'<td class="cart_table-column">'+arr[i].name+'</td>'
        +'<td class="cart_table-column">'+arr[i].price+' Vnd</td>'
        +'<td class="cart_table-column">'+arr[i].SL+'</td>'
        +'</tr>';
        document.getElementById('ThanhToan_SanPham-table-id').innerHTML=s;
    }
     var Sum = 0;
    for(i=0;i<arr.length;i++)
    { 
      Sum+=arr[i].price*arr[i].SL;
    }
    document.getElementById('TongTien').innerHTML='Tổng Tiền: '+Sum+' Vnd';



    var x =  new Date();
    var date=x.getDate();
    var month = x.getMonth();
    var year = x.getFullYear();
    var datesignup1 = ''+date+'-'+(month+1)+'-'+year+'';
    var x =JSON.parse(localStorage.getItem("flag"));
    var user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("name-TT").value=user[x[0].value].fullname;
    document.getElementById("phone-TT").value=user[x[0].value].phone;
    document.getElementById("address-TT").value=user[x[0].value].address;
    document.getElementById("day-TT").value=datesignup1;
    console.log(datesignup1);
   var a= document.getElementById("select-TT").value;
   console.log(a);

  }
}