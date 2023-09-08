var P1Steps=0;

var P2Steps=0;
var P2Steps_=0;

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
    
    button.style.visibility = 'hidden';
    
    P2Steps+=1;
    console.log(P2Steps);
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
            if(P2Steps_<2) P2Steps_++;
        }
        else info.style.visibility='hidden';
    }
    else if(btn=='C5_B')
    {
        info = document.getElementById('C5_T_info');
        if(info.style.visibility=='hidden')
        {
            info.style.visibility='visible';
            if(P2Steps_<2) P2Steps_++;
        }
        else info.style.visibility='hidden';
    }
}

function GotoP3()
{
    if(P2Steps>14 && P2Steps_==2)
    {
        P2Steps=0;
        P2Steps_=0;
        location.replace('Page3.html');
    }
    P2Steps++;
}

function GotoP4()
{

}

function test()
{
    alert('test');
}