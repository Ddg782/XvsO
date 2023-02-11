// let numbers=[1,2,3,4,5,[9,8,7,6,5,4],[1,3,5,7]]
// numbers[5][0]=10
// console.log(numbers)
// console.log(numbers[5][0])
let table=document.querySelector("table")
let status=document.querySelector(".status")
let new_game=document.querySelector(".new_game")
let turn=1
let alertbox=document.querySelector(".shadow")
let playground=[
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"]
]
function checkWinner(){
    if (playground[0][0]=="x" && playground[0][1]=="x" && playground[0][2]=="x"){
        return "x"
    }
    if (playground[1][0]=="x" && playground[1][1]=="x" && playground[1][2]=="x"){
        return "x"
    }
    if (playground[2][0]=="x" && playground[2][1]=="x" && playground[2][2]=="x"){
        return "x"
    }
    if (playground[0][0]=="x" && playground[1][0]=="x" && playground[2][0]=="x"){
        return "x"
    }
    if (playground[0][1]=="x" && playground[1][1]=="x" && playground[2][1]=="x"){
        return "x"
    }
    if (playground[0][2]=="x" && playground[1][2]=="x" && playground[2][2]=="x"){
        return "x"
    }
    if (playground[0][0]=="x" && playground[1][1]=="x" && playground[2][2]=="x"){
        return "x"
    }
    if (playground[0][2]=="x" && playground[1][1]=="x" && playground[2][0]=="x"){
        return "x"
    }
    

    if (playground[0][0]=="O" && playground[0][1]=="O" && playground[0][2]=="O"){
        return "O"
    }
    if (playground[1][0]=="O" && playground[1][1]=="O" && playground[1][2]=="O"){
        return "O"
    }
    if (playground[2][0]=="O" && playground[2][1]=="O" && playground[2][2]=="O"){
        return "O"
    }
    if (playground[0][0]=="O" && playground[1][0]=="O" && playground[2][0]=="O"){
        return "O"
    }
    if (playground[0][1]=="O" && playground[1][1]=="O" && playground[2][1]=="O"){
        return "O"
    }
    if (playground[0][2]=="O" && playground[1][2]=="O" && playground[2][2]=="O"){
        return "O"
    }
    if (playground[0][0]=="O" && playground[1][1]=="O" && playground[2][2]=="O"){
        return "O"
    }
    if (playground[0][2]=="O" && playground[1][1]=="O" && playground[2][0]=="O"){
        return "O"
    }
    return false
}
function gameover(text){
    status.innerHTML=text
                table.style.pointerEvents="none"
                alertbox.style.top=0
}
table.onclick=function(event){
    let target=event.target
    if(target.tagName=="TD"){
        let column=target.cellIndex
        let row=target.parentElement.rowIndex
        if (playground[row][column]=="*"){
            if(turn%2==1){
                target.style.backgroundImage="url(cancel.png)"
                target.style.backgroundColor="red"
                playground[row][column]="x"
            }
            else{
                target.style.backgroundImage="url(circle-ring.png)"
                target.style.backgroundColor="green"
                playground[row][column]="O"
            }
            turn++
            if (checkWinner()=="x"){
                gameover("Победил крестик")
            }
            else if (checkWinner()=="O"){
                gameover("Победил нолик")
            }
            else if (checkWinner()==false && turn==10){
                gameover("Ничья")
            }
        }
        console.log(playground)
        
    }
}
new_game.onclick=function(){
    turn=1
    let tds=document.querySelectorAll("td")
    for(let td of tds){
        td.style.backgroundImage=""
        td.style.backgroundColor=""
    }
    for(let i=0;i<3;i++){
        for(let g=0;g<3;g++){
            playground[i][g]="*"
        }
    }
    status.innerHTML=""
    table.style.pointerEvents=""
    alertbox.style.top="100%"
}
/* 1) Достилизовать кнопку в окне
2) Создать два счетчика, победы нолика, победы крестика. И когда игра заканчивается в окне показать кто сколько раз выиграл
*/
