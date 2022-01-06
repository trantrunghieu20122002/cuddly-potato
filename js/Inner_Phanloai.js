

// Hiển thị phân loai sản phẩm
function Phanloai(i,str)
{
    document.getElementById("image__introduce-id").style.display='none';
    document.getElementById("image__introduce-id2").style.display='none';
    document.getElementById("image__introduce-id3").style.display='none';
    document.getElementById("sale").style.display='none';
    document.getElementById("span_all").style.display='none';
    document.getElementById("sale0").style.display='none';
    document.getElementById("span_all2").style.display='none';

    displayProduct(i);// Sanpham.js
    display_button(i,str);// Sanpham.js
    
 
}