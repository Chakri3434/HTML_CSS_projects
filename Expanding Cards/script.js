function displayImage(n) {
  let req=document.querySelector(`.flex-child-${n}`);
  req.classList.add('active');

  for(let i=1;i<=5;i++) {
    let reeq=document.querySelector(`.flex-child-${i}`);
    if (i!==n){
      reeq.classList.remove('active');
    }
  }
}
