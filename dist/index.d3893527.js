class e{fieldsElements=document.querySelectorAll(".board__item");panel=document.querySelector(".panel");button=document.querySelector(".reset-button");modeSelect=document.querySelector("#mode-select");currentPlayerTag=document.getElementById("current-player");winLine=document.querySelector(".winLine");constructor(e,t,s,i,r){this.onButtonClick=t,this.button.addEventListener("click",this.handleButtonClick),this.fieldsElements.forEach((t=>{t.addEventListener("click",e)})),this.modeSelect.addEventListener("change",s),this.fieldsElements.forEach((e=>{e.addEventListener("mouseover",i)})),this.fieldsElements.forEach((e=>{e.addEventListener("mouseleave",r)}))}setCurrentPlayer=e=>{this.currentPlayerTag.innerText=`Player ${e} move`};clearCurrentPlayerBoard=()=>{this.currentPlayerTag.innerText=" "};handleButtonClick=()=>{this.resetBoard(),this.onButtonClick()};resetBoard=()=>{this.resetBoardClasses(),this.clearMessage(),this.setCurrentPlayer("X")};resetBoardClasses=()=>{this.fieldsElements.forEach((e=>{e.classList.remove("board__item--filled-X","board__item--filled-O")}))};getFieldForPosition=e=>this.fieldsElements[e];renderWinLine=(e,t=0)=>{let s={0:[0,30,50],1:[0,100,50],2:[0,170,50],3:[90,100,15],4:[90,100,50],5:[90,100,85],6:[45,100,50],7:[-45,100,50]};this.winLine.style.setProperty("display",""+(e?"block":"none")),this.winLine.style.setProperty("transform",`rotate(${s[`${t}`][0]}deg)`),this.winLine.style.setProperty("top",`calc(${s[`${t}`][1]}% / 2)`),this.winLine.style.setProperty("left",`calc(${s[`${t}`][2]}% - (420px / 2))`)};displayWinMessage=e=>{this.panel.innerHTML=`Player ${e} Win`};displayTieMessage=()=>{this.panel.innerHTML="Draw"};clearMessage=()=>{this.panel.innerHTML=" "}}class t{getMove=(e,t)=>{let s=Object.entries(e).filter((e=>" "==e[1])).map((e=>e[0]));return s[Math.floor(Math.random()*s.length)]}}const s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];class i{getMove=(e,t)=>{for(let t=0;t<=s.length-1;t++){const[i,r,a]=s[t],l=e[i],o=e[r],n=e[a];if(l===o&&" "!==l&&" "===n)return a;if(l===n&&" "!==l&&" "===o)return r;if(o===n&&" "!==o&&" "===l)return i}let i=Object.entries(e).filter((e=>" "==e[1])).map((e=>e[0]));return i[Math.floor(Math.random()*i.length)]}}new class{fields;activePlayer;gameActive;doesAIMoveFirst=!1;currentMode=null;constructor(){this.board=new e(this.handleItemClick,this.handleReset,this.handleModeChange,this.hoverItemOn,this.hoverItemOff),this.board.handleButtonClick()}validateGame=()=>{let e=!1;for(let t=0;t<=s.length-1;t++){const[i,r,a]=s[t],l=this.fields[i],o=this.fields[r],n=this.fields[a];if(" "!=l&&l===o&&l===n){e=!0,this.board.renderWinLine(e,t);break}}e?(this.gameActive=!1,this.board.displayWinMessage(this.activePlayer)):this.isBoardFull()&&(this.gameActive=!1,this.board.displayTieMessage())};isBoardFull=()=>this.fields.every((e=>" "!==e));handleModeChange=e=>{this.currentMode=this.getModeClassForName(e.target.value),this.setDefaults(!1),this.board.resetBoard()};getModeClassForName=e=>"easy"===e?new t:"hard"===e?new i:null;handleReset=()=>{this.setDefaults(!this.doesAIMoveFirst),this.AIsFirstMove()};AIsFirstMove=()=>{this.doesAIMoveFirst&&null!==this.currentMode&&this.makeMove(this.currentMode.getMove(this.fields,this.activePlayer))};handleItemClick=e=>{const{pos:t}=e.target.dataset;this.gameActive&&" "===this.fields[t]&&(this.makeMove(t),this.gameActive&&null!==this.currentMode&&setTimeout((()=>{this.makeMove(this.currentMode.getMove(this.fields,this.activePlayer))}),1e3))};hoverItemOn=e=>{const t=e.target;t.classList.contains("board__item--filled-X")||t.classList.contains("board__item--filled-O")||t.classList.add(`board__item--filled-${this.activePlayer}--H`)};hoverItemOff=e=>{const t=e.target;t.classList.remove("board__item--filled-X--H"),t.classList.remove("board__item--filled-O--H")};makeMove=e=>{this.fields[e]=this.activePlayer,this.board.getFieldForPosition(e).classList.add(`board__item--filled-${this.activePlayer}`),this.board.getFieldForPosition(e).classList.remove(`board__item--filled-${this.activePlayer}--H`),this.validateGame(),this.activePlayer="X"===this.activePlayer?"O":"X",this.isBoardFull()&&this.board.clearCurrentPlayerBoard(),this.gameActive||this.board.clearCurrentPlayerBoard(),this.gameActive&&this.board.setCurrentPlayer(this.activePlayer)};setDefaults=e=>{this.fields=Array.from(" ".repeat(9)),this.activePlayer="X",this.gameActive=!0,this.doesAIMoveFirst=void 0!==e&&e,this.board.renderWinLine(!1)}};
//# sourceMappingURL=index.d3893527.js.map