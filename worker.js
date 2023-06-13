function worker() {
  const now = new Date().getTime();
 let s=0
  while (s<1500) {
    if(new Date().getTime() > now+s*1000){
    console.log("a",s)
      s+=1
    }
  }
}

worker();
