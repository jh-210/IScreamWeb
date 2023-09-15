var P1Steps=0;

var P2Steps=0;
var P2Steps_=0;

var P4Image = 0;
var P5Image = 0;

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

function BacktoP3()
{
    location.replace('Page3.html');
}

function SetP4_Img()
{
    var urlParameter = window.location.search;
    var param = new URLSearchParams(urlParameter).get('P4Image');
    var num = Number(param);
    ImageSwitch(num);
}

function GotoP4_Img()
{
    location.replace('Page4_1.html?P4Image='+P4Image);
    setTimeout(ImageSwitch(0), 300);
}

function ImageSwitch(num)
{
    P4Image=P4Image+num;

    var btn_back_off = document.getElementById('back_off');
    var btn_back_on = document.getElementById('back_on');
    var btn_go_off = document.getElementById('go_off');
    var btn_go_on = document.getElementById('go_on');

    var Img1 = document.getElementById('P4_Img1');
    var Img2 = document.getElementById('P4_Img2');
    var Img3 = document.getElementById('P4_Img3');
    var Img4 = document.getElementById('P4_Img4');

    var Img1_ = document.getElementById('P4_Img1_');
    var Img2_ = document.getElementById('P4_Img2_');
    var Img3_ = document.getElementById('P4_Img3_');
    var Img4_ = document.getElementById('P4_Img4_');

    Img1.style.visibility='hidden';
    Img2.style.visibility='hidden';
    Img3.style.visibility='hidden';
    Img4.style.visibility='hidden';

    if(Img1_ != null)
    {
        Img1_.style.visibility='hidden';
        Img2_.style.visibility='hidden';
        Img3_.style.visibility='hidden';
        Img4_.style.visibility='hidden';
    }

    if(P4Image==0)
    {
        btn_back_off.style.visibility='visible';
        btn_back_on.style.visibility='hidden';
        btn_go_off.style.visibility='hidden';
        btn_go_on.style.visibility='visible';
        
        Img1.style.visibility='visible';
        if(Img1_!=null) Img1_.style.visibility='visible';
    }
    else if(P4Image == 3)
    {
        btn_back_off.style.visibility='hidden';
        btn_back_on.style.visibility='visible';
        btn_go_off.style.visibility='visible';
        btn_go_on.style.visibility='hidden';

        Img4.style.visibility='visible';
        if(Img4_!=null) Img4_.style.visibility='visible';
    }
    else
    {
        btn_back_off.style.visibility='hidden';
        btn_back_on.style.visibility='visible';
        btn_go_off.style.visibility='hidden';
        btn_go_on.style.visibility='visible';
        if(P4Image == 1)
        {
            Img2.style.visibility='visible';
            if(Img2_!=null) Img2_.style.visibility='visible';
        }
        else
        {
            Img3.style.visibility='visible';
            if(Img3_!=null) Img3_.style.visibility='visible';
        }
    }

    console.log(P4Image);
}

function BacktoP4()
{
    location.replace('Page4.html?P4Image='+P4Image);
}

function ClickInfo(info)
{
    var info_ = document.getElementById(info);

    if(info_ != null)
    {
        if(info_.style.visibility == 'hidden')
        {
            info_.style.visibility = 'visible';
        }
        else info_.style.visibility = 'hidden';
    }
}

function ImageSwitch_P5(num)
{
    P5Image = P5Image+num;

    var btn_back_off = document.getElementById('back_off');
    var btn_back_on = document.getElementById('back_on');
    var btn_go_off = document.getElementById('go_off');
    var btn_go_on = document.getElementById('go_on');

    var Img1 = document.getElementById('P5_Img1');
    var Img2 = document.getElementById('P5_Img2');
    var Img3 = document.getElementById('P5_Img3');

    var Img1_ = document.getElementById('P5_Img1_');
    var Img2_ = document.getElementById('P5_Img2_');
    var Img3_ = document.getElementById('P5_Img3_');

    Img1.style.visibility='hidden';
    Img2.style.visibility='hidden';
    Img3.style.visibility='hidden';

    if(Img1_ != null)
    {
        Img1_.style.visibility='hidden';
        Img2_.style.visibility='hidden';
        Img3_.style.visibility='hidden';
    }

    if(P5Image==0)
    {
        btn_back_off.style.visibility='visible';
        btn_back_on.style.visibility='hidden';
        btn_go_off.style.visibility='hidden';
        btn_go_on.style.visibility='visible';
        
        Img1.style.visibility='visible';
        if(Img1_!=null) Img1_.style.visibility='visible';
    }
    else if(P5Image == 2)
    {
        btn_back_off.style.visibility='hidden';
        btn_back_on.style.visibility='visible';
        btn_go_off.style.visibility='visible';
        btn_go_on.style.visibility='hidden';

        Img3.style.visibility='visible';
        if(Img3_!=null) Img3_.style.visibility='visible';
    }
    else
    {
        btn_back_off.style.visibility='hidden';
        btn_back_on.style.visibility='visible';
        btn_go_off.style.visibility='hidden';
        btn_go_on.style.visibility='visible';
        Img2.style.visibility='visible';
        if(Img2_!=null) Img2_.style.visibility='visible';
    }
}

function GotoP5_Img(num)
{
    location.replace('Page5_1.html?P5Image='+num);
    setTimeout(ImageSwitch(0), 300);
}

function SetP5_Img()
{
    var urlParameter = window.location.search;
    var param = new URLSearchParams(urlParameter).get('P5Image');
    var num = Number(param);
    ImageSwitch_P5(num);
}

function BacktoP5()
{
    location.replace('Page5.html');
}

function test()
{
    alert('test');
}