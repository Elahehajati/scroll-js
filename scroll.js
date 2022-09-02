let _main=document.getElementsByTagName('main')[0]
let sec=document.querySelector('main>section')
let st
let st1=0
let img1= document.querySelector('img:nth-of-type(1)')
let _hieght=(sec.clientHeight)-(_main.clientHeight)
// const styless = window.getComputedStyle(img1)
// const right=parseInt(styless.right)
let leftimg1=document.querySelector('img:nth-of-type(1)').offsetLeft
let topimg1=document.querySelector('img:nth-of-type(1)').offsetTop
let leftimg2=document.querySelector('img:nth-of-type(2)').offsetLeft
let topimg2=document.querySelector('img:nth-of-type(2)').offsetTop
let leftimg3=document.querySelector('img:nth-of-type(3)').offsetLeft
let topimg3=document.querySelector('img:nth-of-type(3)').offsetTop
let leftimg4=document.querySelector('img:nth-of-type(4)').offsetLeft
let topimg4=document.querySelector('img:nth-of-type(4)').offsetTop
// console.log(leftimg1)
window.addEventListener('resize' , ()=>{
    leftimg1=document.querySelector('img:nth-of-type(1)').offsetLeft
    topimg1=document.querySelector('img:nth-of-type(1)').offsetTop
    leftimg2=document.querySelector('img:nth-of-type(2)').offsetLeft
    topimg2=document.querySelector('img:nth-of-type(2)').offsetTop
    leftimg3=document.querySelector('img:nth-of-type(3)').offsetLeft
    topimg3=document.querySelector('img:nth-of-type(3)').offsetTop
    leftimg4=document.querySelector('img:nth-of-type(4)').offsetLeft
    topimg4=document.querySelector('img:nth-of-type(4)').offsetTop
})
_main.addEventListener('scroll' , ()=>{
  st=_main.scrollTop
  stt=(st*100)/_hieght
  leftimg11=document.querySelector('img:nth-of-type(1)').offsetLeft
  topimg11=document.querySelector('img:nth-of-type(1)').offsetTop
  leftimg22=document.querySelector('img:nth-of-type(2)').offsetLeft
  topimg22=document.querySelector('img:nth-of-type(2)').offsetTop
  leftimg33=document.querySelector('img:nth-of-type(3)').offsetLeft
  topimg33=document.querySelector('img:nth-of-type(3)').offsetTop
  leftimg44=document.querySelector('img:nth-of-type(4)').offsetLeft
  topimg44=document.querySelector('img:nth-of-type(4)').offsetTop
  leftimg11p=(leftimg11*100)/leftimg1
  topimg11p=(topimg11*25)/topimg1
  leftimg22p=(leftimg22*100)/leftimg2
  topimg22p=(topimg22*25)/topimg2
  leftimg33p=(leftimg33*100)/leftimg3
  topimg33p=(topimg33*25)/topimg3
  leftimg44p=(leftimg44*100)/leftimg4
  topimg44p=(topimg44*25)/topimg4
if(stt<=20){
    document.querySelector('span:nth-of-type(1)').style.top=(stt*5)+'%'
  document.querySelector('span:nth-of-type(2)').style.bottom=(stt*5)+'%'
  document.querySelector('span:nth-of-type(3)').style.top=(stt*5)+'%'
  document.querySelector('span:nth-of-type(4)').style.bottom=(stt*5)+'%'    
}
if(st>=st1){
    if(stt>=16 && stt<=37){
    if(stt>=30 && stt<=37){
        if(topimg11p>=5){
            document.querySelector('img:nth-of-type(1)').style.top=(topimg11p-(2.8))+'%'
            // console.log(topimg11)
        }
    }
    if(leftimg11p>=4){
    document.querySelector('img:nth-of-type(1)').style.left=(leftimg11p-(1.07))+'%'
    }
}
    if(stt>=38 && stt<=58){
    if(stt>=51 && stt<=58){
        if(topimg22p<=50){
            document.querySelector('img:nth-of-type(2)').style.top=(topimg22p+(2.8))+'%'
            console.log(topimg11)
        }
    }
    if(leftimg22p>=4){
    document.querySelector('img:nth-of-type(2)').style.left=(leftimg22p-(1.07))+'%'
    }
}
    if(stt>=58 && stt<=79){
    if(stt>=72 && stt<=79){
        if(topimg33p>=5){
            document.querySelector('img:nth-of-type(3)').style.top=(topimg33p-(2.2))+'%'
            console.log(topimg11)
        }
    }
    if(leftimg33p>=65){
    document.querySelector('img:nth-of-type(3)').style.left=(leftimg33p-(0.6))+'%'
    }
}
    if(stt>=79 && stt<=100){
    if(stt>=93 && stt<=100){
        if(topimg44p<=45){
            document.querySelector('img:nth-of-type(4)').style.top=(topimg44p+(2.2))+'%'
            // console.log(topimg11)
        }
    }
    if(leftimg44p>=75){
    document.querySelector('img:nth-of-type(4)').style.left=(leftimg44p-(0.6))+'%'
    }
}
}else if(st<st1){
    if(stt<=37 && stt>=16){
    if(stt<=37 && stt>=30){
        if(topimg11p>=0 && topimg11p<=25){
            document.querySelector('img:nth-of-type(1)').style.top=(topimg11p+(2.8))+'%'
            // console.log(topimg11)
        }
    }

    if(leftimg11p>=0){
    document.querySelector('img:nth-of-type(1)').style.left=(leftimg11p+(1.9))+'%'
    // console.log(topimg11p)
    }
}
    if(stt<=58 && stt>=37){
        console.log(topimg22p)
    if(stt<=58 && stt>=51){
        if(topimg22p>=25 && topimg22p<=100){
            document.querySelector('img:nth-of-type(2)').style.top=(topimg22p-(4))+'%'
            console.log(topimg22p)
        }
    }
    if(leftimg22p>=0){
    document.querySelector('img:nth-of-type(2)').style.left=(leftimg22p+(1.9))+'%'
    // console.log(topimg11p)
    }
}
    if(stt<=79 && stt>=58){
        // console.log(topimg22p)
    if(stt<=79 && stt>=72){
        if(topimg33p>=0 && topimg33p<=25){
            document.querySelector('img:nth-of-type(3)').style.top=(topimg33p+(2.2))+'%'
            // console.log(topimg22p)
        }
    }
    if(leftimg33p>=0){
    document.querySelector('img:nth-of-type(3)').style.left=(leftimg33p+(0.6))+'%'
    // console.log(topimg11p)
    }
}
    if(stt<=100 && stt>=79){
        // console.log(topimg22p)
    if(stt<=100 && stt>=93){
        if(topimg44p>=25 && topimg44p<=100){
            document.querySelector('img:nth-of-type(4)').style.top=(topimg44p-(2.2))+'%'
            // console.log(topimg22p)
        }
    }
    if(leftimg44p>=0){
    document.querySelector('img:nth-of-type(4)').style.left=(leftimg44p+(0.6))+'%'
    // console.log(topimg11p)
    }
}

}
st1=st
})