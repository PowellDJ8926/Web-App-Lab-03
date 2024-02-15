<script>

function popupfunction(x)

{

document.getElementById('popup'+x).style.display='block';

document.getElementById('fade'+x).style.display='block';

}



function popupclose(x)

{

document.getElementById('popup'+x).style.display='none';

document.getElementById('fade'+x).style.display='none';

}
function showcart()

{

document.getElementById('cart').style.display='block';



}


function addItem(n)

{

document.getElementById('cart').innerHTML += n;



}



</script>