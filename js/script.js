jogadores=['Vinícius','Vitor','Felipe','Douglas',
            'Gabriel','Guilherme','Lima','Christian','Michel','Fabrício','Ramos',
            'Fagner','Guilherme','GB','Victor','Oswaldo','Jonatas'];

function comboJogadores(){
    for(var i=0;i<this.jogadores.length;i++){
        document.getElementById('listaJogadores').innerHTML +='<option value="'+this.jogadores[i]+'">'+this.jogadores[i]+'</option>';
    }
}

function preencheAdversario(){
    var adv = document.getElementById('txtAdversario').value;
    document.getElementById('lblAdversario').innerText = adv;
    document.getElementById('lblAdversario2').innerText = adv;
}

function golsJogo(){
    var jogador = document.getElementById('listaJogadores').value;
    console.log(jogador)
    document.getElementById('placarFranco').innerHTML +="<br/>"
    document.getElementById('placarFranco').innerHTML += "Jogador "+jogador+"<button id = "+jogador+" onclick='somaNossa(id)'>+</button><span id='jogador"+jogador+"'> 0</span><button id="+jogador+" onclick='subtraiNossa(id)'>-</button><br/>";
   
}

function somaDeles(){
    var gol = parseInt(document.getElementById('golDeles').innerText);
    gol++; 
    document.getElementById('golDeles').innerText =gol;
}

function subtraiDeles(){
    var gol = parseInt(document.getElementById('golDeles').innerText);
    gol--; 
    document.getElementById('golDeles').innerText =gol;
}

function somaNossa(id){

    var gol = parseInt(document.getElementById('golNosso').innerText);
    var golJogador = parseInt(document.getElementById('jogador'+id).innerText);
    gol++;
    golJogador++;
    document.getElementById('golNosso').innerText =gol;
    document.getElementById('jogador'+id).innerText =golJogador;
}

function subtraiNossa(id){
    var gol = parseInt(document.getElementById('golNosso').innerText);
    var golJogador = parseInt(document.getElementById('jogador'+id).innerText);
    gol--; 
    golJogador--;
    console.log(id)
    document.getElementById('golNosso').innerText =gol;
    document.getElementById('jogador'+id).innerText =golJogador;
}

