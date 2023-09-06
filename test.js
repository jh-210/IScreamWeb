function ClickBtn(x)
{
    if(x=='t1')
    {
        var img = document.getElementById('T1');
        var btn = document.getElementById('T1_Click_Button');
    }
    else
    {
        var img = document.getElementById('T2');
        var btn = document.getElementById('T2_Click_Button');
    }

    btn.style.visibility = 'hidden';
    img.style.opacity = 100;
}