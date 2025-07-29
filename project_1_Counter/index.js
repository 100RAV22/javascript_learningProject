let cnt = 0;
let cntInc = 0;
let cntDec = 0;

const count = document.getElementById("count");
const incCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");

function inc(){
    cnt++;
    cntInc = (cntInc >= 10) ? 0 : cntInc + 1;
    update();
}
function dec(){
    cnt = cnt > 0 ? cnt-1 : 0;
    cntDec = (cntDec >= 10) ? 0 : cntDec + 1;
    update();
}
function update(){
    count.textContent = cnt;
    incCount.textContent = cntInc;
    decCount.textContent = cntDec;
}
