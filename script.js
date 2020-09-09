
function generate()
{
    var img= document.createElement('img');
    img.setAttribute('src','http://thecatapi.com/api/images/get?format=src&type=gif');
    img.setAttribute('height','200');
    img.setAttribute('width','200');
    img.setAttribute('class','rounded-circle');
    document.getElementById('gen_cat').appendChild(img);
}
function reset()
{
    document.getElementById('gen_cat').remove();
}
                                    