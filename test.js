var P1Steps=0;

function ClickBtn(x)
{
    var img1 = document.getElementById('T1');
    var btn1 = document.getElementById('T1_Click_Button');
    var img2 = document.getElementById('T2');
    var btn2 = document.getElementById('T2_Click_Button');

    if(x=='t1')
    {
        btn1.style.visibility = 'hidden';
        img1.style.opacity = 100;
    }
    else
    {
        btn2.style.visibility = 'hidden';
        img2.style.opacity = 100;
    }
    P1Steps++;
    if(P1Steps >= 2)
    {
        P1Steps = 0;
        setTimeout(function() 
        { 
            img1.style.opacity = 10;
            img2.style.opacity = 10;
            btn1.style.visibility = 'visible';
            btn2.style.visibility = 'visible';
            location.replace('Page2.html'); 
            
            
        }, 3000);
    }
}

function BacktoP1()
{
    location.replace('Page1.html'); 
}

function ClickBox(btn, txt)
{
    var button = document.getElementById(btn);
    var txtImg = document.getElementById(txt);
    
    button.style.visibility = 'hidden';
    
}

function ClickText(btn)
{
    var info = null;

    if(btn=='C3_B')
    {
        info = document.getElementById('C3_T_info');
        if(info.style.visibility=='hidden')
        {
            info.style.visibility='visible';
        }
        else info.style.visibility='hidden';
    }
    else if(btn=='C5_B')
    {
        info = document.getElementById('C5_T_info');
        if(info.style.visibility=='hidden')
        {
            info.style.visibility='visible';
        }
        else info.style.visibility='hidden';
    }
}