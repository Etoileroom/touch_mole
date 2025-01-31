
let hei;
let wid;
let cri=[771/6,771/2,3855/6];
let cric=[1080/6,1080/2,1080*5/6];
let cr=[1080/3,2160/3];
let c=[1080/6,1080/3,1080/2,2160/3,5400/6];
let count=0;
let count2=0;
let point=[0,0];
let N=0;
let time=60;
let color=["#FF0000","#FFA500","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF"];
let normal;
let normal2;
let special;
let rainbow;
let damage;
let FCA=0;
let FCB=0;
let FCC=0;
let FCD=0;
let FCE=[0,0,0];
let FCF=[0,0,0];
let FCG=[0,0,0];
let FCH=[0,0,0];
let change;
let retry;
let home;
let top1=0;
let top1d;
let top2=0;
let top2d;
let top3=0;
let top3d;
let spoint=[0,0,0,0];
let ccount=0;
let percent;
let hanmer=false;
let pb;
let a=false;
let njudge=false;
let sjudge=false;
let rjudge=false;
let djudge=false;
function setup(){
	//createCanvas(windowWidth,windowHeight);
	createCanvas(1080,771);
    frameRate(60);
    normal=new Mato(random(cric),random(cri));
    normal.color="#b8883b";
    normal.eyecolor="#000000";
    normal2=new Mato(random(cric),random(cri));
    normal2.color="#b8883b";
    normal2.eyecolor="#000000";
    special=new Mato(random(cr),random(cri));
    special.color="#f2ea5a";
    special.eyecolor="#ffff00";
    rainbow=new Mato(random(c),random(cri));
    rainbow.color=random(color);
    rainbow.eyecolor=random(color);
    damage=new Mato(random(c),random(cri));
    damage.color="#000000";
    damage.eyecolor="#ff0000";
    change=true;
    home=true;
    space=true;
}
function touchStarted(){
  for(let touch of touches){
    hanmer=true
    if(change==false&&750<=touch.x&&1070>=touch.x&&675<=touch.y&&755>=touch.y){
    retry=true;
    FCC=0
}
if(change==false&&750<=touch.x&&1070>=touch.x&&580<=touch.y&&660>=touch.y){
    N+=1;
    point[N]=0;
    time=60;
    home=true;
    change=true;
    spoint=[0,0,0,0];
    
}
if(change==true&&home==true&&540<=touch.x&&955>=touch.x&&600<=touch.y&&720>=touch.y){
    hanmer=false
    N+=1;
    point[N]=0;
    spoint=[0,0,0,0];
    ccount=0
    normal.move();
    normal2.move();
    special.x=random(cr);
    special.y=random(cri);
    rainbow.x=30000;
    rainbow.y=30000;
    damage.x=random(cr);
    damage.y=random(cri);
    FCC=0;
    home=false;
    
}
if(change==true&&home==false&&a==true){
    ccount+=1
}
    if(a==true&&((abs(normal.x-touch.x+50)<95&&abs(normal.y-touch.y-45)<110)||(abs(normal.x-touch.x)<75&&abs(normal.y-touch.y)<75))){
        point[N]+=1
        normal.move();
        spoint[0]+=1
        njudge=true;
    }
    if(a==true&&((abs(normal2.x-touch.x+50)<95&&abs(normal2.y-touch.y-45)<110)||(abs(normal2.x-touch.x)<75&&abs(normal2.y-touch.y)<75))){
        point[N]+=1
        normal2.move();
        spoint[0]+=1
        njudge=true;
	FCE[1]=touch.x+50
	FCE[2]=touch.y-50
    }
    if(a==true&&((abs(special.x-touch.x+50)<95&&abs(special.y-touch.y-45)<110)||(abs(special.x-touch.x)<75&&abs(special.y-touch.y)<75))){
        point[N]+=2
        special.x=random(cr);
        special.y=random(cri);
        spoint[1]+=1
        sjudge=true;
	FCF[1]=touch.x+50
	FCF[2]=touch.y-50
    }
    if(a==true&&((abs(rainbow.x-touch.x+50)<95&&abs(rainbow.y-touch.y-45)<110)||(abs(rainbow.x-touch.x)<75&&abs(rainbow.y-touch.y)<75))){
        point[N]+=5
        rainbow.x=random(cr);
        rainbow.y=random(cri);
        spoint[2]+=1
        rjudge=true;
	FCG[1]=touch.x+50
	FCG[2]=touch.y-50
    }
    if(a==true&&((abs(damage.x-touch.x+50)<95&&abs(damage.y-touch.y-45)<110)||(abs(damage.x-touch.x)<75&&abs(damage.y-touch.y)<75))){
        point[N]-=3
        damage.x=random(cr);
        damage.y=random(cri);
        spoint[3]-=1
        djudge=true;
	FCH[1]=touch.x+50
	FCH[2]=touch.y-50
    }
    }}
    function draw(){
        if(FCA%3<=0){
            rainbow.color=random(color);
            rainbow.eyecolor=random(color);
        }
        FCA+=1;
        if(change==true&&home==true){
        background(100,180,20);
        fill("#bff25d");
        rect(1390,130,475,520,20);
        fill(255);
        rect(540,600,415,120,20);
        textFont("DotGothic16",[30]);
        //textSize(50);
        text("↖(最後10秒に出現)",200,580);
        text("直近のハイスコア",1435,200);
        textSize(50);
        text("・制限時間は60秒",450,250);
        text("・命中率が高いとボーナス",450,200);
        textSize(150);
        text("もぐらたたき",0,120);
        textSize(100);
        text("・　 =1点",0,225);
        text("・　 =2点",0,375);
        text("・　 =5点",0,525);
        text("・　 =-3点",0,675);
        fill(0);
        text("スタート",550,700);
        textSize(75);
        fill("#e6b422");
        if(top1<=0){text("No1.ー",1435,320);}else{text("No1."+top1+"点",1435,320);}
        fill("#bec1c3");
        if(top2<=0){text("No2.ー",1435,440);}else{text("No2."+top2+"点",1435,440)}
        fill("#9a6229");
        if(top3<=0){ text("No3.ー",1435,560);}else{text("No3."+top3+"点",1435,560);}
        normal.x=150;
        normal.y=200;
        normal.display();
        special.x=150;
        special.y=350;
        special.display();
        rainbow.x=150;
        rainbow.y=500;
        rainbow.display(); 
        damage.x=150;
        damage.y=650;
        damage.display();  
        fill(0,128);
        circle(150,500,150);
    }
    
        if(change==true&&home==false){
            FCC+=1
    background(100,180,20);
    fill(255);
    textSize(500)
    text(""+Math.ceil((180-FCC)/60),width/2-150,height/2+100);
    if(FCC%180<=0){a=true;FCC=0}
    if(a==true){
        background(100,180,20);
    noStroke();
    fill(227,171,128);
    for(hei=771/6;hei<=771;hei+=771/3){
    for(wid=1080/6;wid<=1080;wid+=1080/3){
        circle(wid,hei,200);}}
    for(hei=771/6;hei<=771;hei+=771/3){
    for(wid=1080/3;wid<=2160/3;wid+=1080/3){
        fill("#e19f47");
                circle(wid,hei,200);}}
  if(FCA%60<=0){
    normal.move();
    normal2.move();
      time-=1;
  }
  if(FCA%30<=0){
    damage.x=random(c);
    damage.y=random(cri);
  }
  if(FCA%40<=0){
    special.x=random(cr);
  special.y=random(cri);}
    if(time<=10&&FCA%6<=0){
        rainbow.x=c[count];
        rainbow.y=cri[count2];
        count+=1;
        if(count>4){
            count=0
            count2+=1
            if(count2>2){count2=0}}}
  normal.display();
  normal2.display();
  special.display();
  rainbow.display();
  damage.display();
  fill(255);
  textSize(100);
  text(""+point[N]+"点",10,100);
  textSize(50);
  text("残り時間",10,200);
  text(time+"秒",60,250);
      for(let touch of touches){
  if(hanmer==false){
  fill("#bba828");
  rect(touch.x-10,touch.y-10,20,100)
  fill("#55585f");
  rect(touch.x-35,touch.y-10,70,30);}
  if(hanmer==true){
      FCB+=1
    fill("#bba828");
    rect(touch.x-35,touch.y+35,100,20);
    fill("#55585f");
    rect(touch.x-65,touch.y+10,30,70);
    if(FCB%7<=0){hanmer=false}
  }
  fill("#FFFFCF");
if(njudge==true){
    FCE[0]+=1;
    text("+1",FCE[1],FCE[2]);
    if(FCE[0]%30<=0){
        njudge=false;
        FCE[0]=0;
    }}
if(sjudge==true){
        FCF[0]+=1;
        text("+2",FCF[1],FCF[2]);
        if(FCF[0]%30<=0){
            sjudge=false;
            FCF[0]=0;
        }}
 if(rjudge==true){
        FCG[0]+=1;
        text("+5",FCG[1],FCG[2]);
        if(FCG[0]%30<=0){
           rjudge=false;
           FCG[0]=0;
            }}
            if(djudge==true){
                FCH[0]+=1;
                fill("#CF0000")
                text("-3",FCH[1],FCH[2]);
                if(FCH[0]%30<=0){
                    djudge=false;
                    FCH[0]=0;
                }}}
}

        }
  if(time<=0&&change==true){
    a=false;
      FCD+=1
    background(100,180,20);
    fill(255);
    textSize(250)
    text("終了",width/2-250,height/2-100)
    fill(125,255,255);
    rect(0,height/2-20,((width/60)*(FCD%60)),40)
    if(FCD%60<=0){
    percent=floor(((spoint[0]+spoint[1]+spoint[2])/ccount)*100)
    if(percent>0){
      pb=abs(Math.round(point[N]*(percent/100)))
    }else{pb=0}
      top1d=top1;
      top2d=top2;
      top3d=top3;
      point[N]+=pb
          if(point[N]>top1){
            top1=point[N];
            top3=top2d;
            top2=top1d;
    }else if(point[N]>top2){
        top2=point[N]
        top3=top2d;
    }else if(point[N]>top3){
        top3=point[N]}
    point.push(0);
    change=false;
    FCD=0
}
    }
  if(change==false){
    background(100,180,20);
    textSize(50);
    fill(255);
    text("✕"+spoint[0]+"="+spoint[0]+"点",150,100);
    text("✕"+spoint[1]+"="+spoint[1]*2+"点",150,250);
    text("✕"+spoint[2]+"="+spoint[2]*5+"点",150,400);
    text("✕"+spoint[3]*-1+"="+spoint[3]*3+"点",150,550);
    text("計"+(spoint[0]+spoint[1]*2+spoint[2]*5+spoint[3]*3)+"点",120,630);
    textSize(40);
    text("命中率:"+percent+"%",75,700);
    text("命中率ボーナス:"+pb+"点",0,750);
    normal.x=75;
    normal.y=75;
    normal.display();
    special.x=75;
    special.y=225;
    special.display();
    rainbow.x=75;
    rainbow.y=375;
    rainbow.display(); 
    damage.x=75;
    damage.y=525;
    damage.display();  
    fill(0,128);
        circle(75,375,150);
    fill("#bff25d");
    rect(1390,130,475,520,20);
    fill(255);
    textSize(100);
    text("Score",width/2-50,height/2-300);
    text(point[N]+"点",width/2+50,height/2-200);
    rect(750,675,320,80,20);
    rect(750,580,320,80,20);
    textSize(50);
    text("直近のハイスコア",1435,200);
    textSize(75);
        fill("#e6b422");
        if(top1<=0){text("No1.ー",1435,320);}else{text("No1."+top1+"点",1435,320);}
        fill("#bec1c3");
        if(top2<=0){text("No2.ー",1435,440);}else{text("No2."+top2+"点",1435,440)}
        fill("#9a6229");
        if(top3<=0){ text("No3.ー",1435,560);}else{text("No3."+top3+"点",1435,560);}
        fill(0);
    textSize(80);
    text("リトライ",750,750);
    text("ホーム",800,650);
    if(retry==true){
        ccount=0
        N+=1;
        point[N]=0;
        spoint=[0,0,0,0];
        time=60;
        point[N]=0;
        normal.move();
        normal2.move();
        special.x=random(cr);
        special.y=random(cri);
        rainbow.x=1080
0;
        rainbow.y=1080
0;
        damage.x=random(cr);
        damage.y=random(cri);
        change=true;
        retry=false;
        
    }
    }
  }
    class Mato{
        constructor(x,y,color){
        }
        move(){
            this.x=random(cric);
            this.y=random(cri);
        }
        display(){
            stroke(0);
            fill(this.color);
            circle(this.x,this.y,150);
            fill(255);
            ellipse(this.x-30,this.y-10,20,50);
            ellipse(this.x+30,this.y-10,20,50);
            fill(this.eyecolor);
            ellipse(this.x-25,this.y-10,10,30);
            ellipse(this.x+25,this.y-10,10,30);
            fill(236,184,138);
            ellipse(this.x,this.y+20,50,40);
            fill(116,66,41);
            ellipse(this.x,this.y+20,20,21);
            if(this.color=="#000000"){
                stroke(255);
            }
            line(this.x-20,this.y+20,this.x-70,this.y+20);
            line(this.x-20,this.y+20,this.x-70,this.y);
            line(this.x-20,this.y+20,this.x-70,this.y+40);
            line(this.x+20,this.y+20,this.x+70,this.y+20);
            line(this.x+20,this.y+20,this.x+70,this.y);
            line(this.x+20,this.y+20,this.x+70,this.y+40);
            stroke(0);
        }
    }
