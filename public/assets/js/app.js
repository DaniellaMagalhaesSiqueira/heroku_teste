<<<<<<< HEAD
// (function(){
//     const menuToggle = document.querySelector('.menu-toggle')
//     menuToggle.onclick = function (e){
//        const body = document.querySelector('body')
//        body.classList.toggle('hide-sidebar')
//     }
// })()

//icofont-eye-blocked
// 
// (function (){
//     const botao = document.querySelector('remove_disable')
//     botao.onclick = function(e){
//         console.log('funcionando')
//         const input = document.querySelector('input.senha_funcionario')
//         input.removeAttribute('disabled')
//     }
// })

function habilitarDataParto(){
    const dataParto = document.querySelector("#data-parto")
    const checkGestante = document.querySelector("#gestante")
    if(checkGestante.checked){
        dataParto.removeAttribute("disabled")
    }else{
        dataParto.setAttribute("disabled","disabled")
    }
}

function mostrar(id){
    const elem = document.querySelector('#'+ id)
        console.log(elem.value)

}

function habilitarGestante(){
    const sexo = document.querySelector("#sexo")
    const gestante = document.querySelector("#gestante")
    
    const valorSexo = sexo.value
    if(valorSexo == "feminino") {
        gestante.removeAttribute("disabled")
    }if(valorSexo=="masculino"){
        gestante.setAttribute("disabled","true")
    }
    
}


function formatarMoeda(id) {
    let elemento = document.querySelector(id);
    let valor = elemento.value;
    
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
    
    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    
    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}


function mudarTipoInput(){
    const select = document.querySelector('#filtro_pessoa')
    const input = document.querySelector('#tipo-input')
    switch(select.value){
        case 'nome_pessoa':
        case 'nome_rede':
            input.type = 'text'
            input.removeAttribute("maxlength")
            input.setAttribute("placeholder", "nome")
            break
        case 'id_pessoa':
        case 'nis':
        case 'id_rede':
            input.type = 'number'
            input.removeAttribute("placeholder")
            break
        case 'data_nascimento':
            input.type = 'date'
            input.removeAttribute("maxlength")
            input.removeAttribute("placeholder")
            break
        case 'cpf_pessoa':
            input.type = 'text'
            input.setAttribute("maxlength", "15")
            input.setAttribute("placeholder", "Ex.000.000.000-00")
            break
        case 'referencia_familiar':
            input.type = 'text'
            input.removeAttribute("maxlength")
            input.setAttribute("placeholder", "nome")
            break
        case 'desligadas':
            input.type = 'text'
            input.setAttribute('disabled', 'disabled')
            input.value = 'Todas'
            break
        case 'publico_rede':
            createPublicoRede
            input.type = 'text'
            break
        case 'setor_rede':
            createSetorRede
            input.type = 'text'
            break
            }
        
    }
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover('show');   
    });

    let cont_add = 1
    const btn_add = document.querySelector('#add')
    const form_add = document.querySelector('#form1')
    const btn_salvar_add = document.querySelector('#salvar')
    const box_add = document.querySelector('#div-add')

    btn_add.addEventListener('click', function(){
        cont_add++
        createLabel();
        // createInput();
        creatSelect();

    })
/* <label for="encaminhamento">Encaminhamento</label> */
    function createLabel(){
        var elemento_label = document.createElement('label')
        elemento_label.setAttribute('for', 'enc_'+cont_add)
        elemento_label.textContent = 'Encaminhamento'
        box_add.appendChild(elemento_label)
    }
    
    function createInput(){
        const elemento_input = document.createElement('input')
        elemento_input.setAttribute('type', 'text')
        elemento_input.setAttribute('name', 'enc_'+cont_add)
        elemento_input.setAttribute('id', 'enc_'+cont_add)
        elemento_input.setAttribute('autocomplete', 'off')
        elemento_input.setAttribute('class', 'form-control')
        elemento_input.textContent = 'Encaminhamento<br>'
        box_add.appendChild(elemento_input)
    }

    // function createPublicoRede(){
    //     const elemento_select = document.createElement('select')
    //     elemento_select.setAttribute('name', 'publico_rede')
    //     elemento_select.setAttribute('class', 'form-control')
    //     elemento_select.innerHTML = '<option value="null">P??blico Alvo</option>'
    //     + '<option value="null" selected disabled>P??blico Alvo</option>'
    //     + '<option value="Crian??as" <?= $publico_rede === "Crian??as" ? "selected":""?>>Crian??as</option>'
    //     + '<option value="Adolescentes" <?= $publico_rede === "Adolescentes" ? "selected":""?>>Adolescentes</option>'
    //     + '<option value="Crian??as/Adolescentes" <?= $publico_rede === "Crian??as/Adolescentes" ? "selected":""?>>Crian??as/Adolescentes</option>'
    //     + '<option value="Idosos" <?= $publico_rede === "Idosos" ? "selected":""?>>Idosos</option>'
    //     + '<option value="Mulheres" <?= $publico_rede === "Mulheres" ? "selected":""?>>Mulheres</option>'
    //     + '<option value="Adultos" <?= $publico_rede === "Adultos" ? "selected":""?>>Adultos</option>'
    //     + '<option value="Pessoas com Defici??ncia" <?= $publico_rede === "Pessoas com Defici??ncia" ? "selected":""?>>Pessoas com Defici??ncia</option>'
    //     + '<option value="Diverso" <?= $publico_rede === "Diverso" ? "selected":""?>>Diverso</option>'
    //     const box = document.querySelector('#box-rede')
    //     box.appendChild(elemento_select)
    // }
    // function createSetorRede(){
    //     const elemento_select = document.createElement('select')
    //     elemento_select.setAttribute('name', 'setor_rede')
    //     elemento_select.setAttribute('class', 'form-control')
    //     elemento_select.innerHTML = '<option value="null">Setor</option>'
    //     + '<option value="null" selected disabled>Setor</option>'
    //     + '<option value="Educa????o" <?= $setor_rede === "Educa????o" ? "selected":""?>>Educa????o</option>'
    //     + '<option value="Sa??de" <?= $setor_rede === "Sa??de" ? "selected":""?>>Sa??de</option>'
    //     + '<option value="Pol??ticas P??blicas/Defesa de Direitos" <?= $setor_rede === "Pol??ticas P??blicas/Defesa de Direitos" ? "selected":""?>>Pol??ticas P??blicas/Defesa de Direitos</option>'
    //     + '<option value="Trabalho/Renda" <?= $setor_rede === "Trabalho/Renda" ? "selected":""?>>Trabalho/Renda</option>'
    //     + '<option value="Cultura" <?= $setor_rede === "Cultura" ? "selected":""?>>Cultura</option>'
    //     + '<option value="Ensino/Pesquisa" <?= $setor_rede === "Ensino/Pesquisa" ? "selected":""?>>Ensino/Pesquisa</option>'
    //     + '<option value="Esporte/Lazer" <?= $setor_rede === "Esporte/Lazer" ? "selected":""?>>Esporte/Lazer</option>'
    //     + '<option value="Enfrentamento ?? Pobreza" <?= $setor_rede === "Enfrentamento ?? Pobreza" ? "selected":""?>>Enfrentamento ?? Pobreza</option>'
    //     + '<option value="Cooperativa/Inclus??o Produtiva" <?= $setor_rede === "Cooperativa/Inclus??o Produtiva" ? "selected":""?>>Cooperativa/Inclus??o Produtiva</option>'
    //     + '<option value="Associa????o de Moradores" <?= $setor_rede === "Associa????o de Moradores" ? "selected":""?>>Associa????o de Moradores</option>'
    //     + '<option value="ONG" <?= $setor_rede === "ONG" ? "selected":""?>>ONG</option>'
    //     + '<option value="Seguran??a P??blica" <?= $setor_rede === "Seguran??a P??blica" ? "selected":""?>>Seguran??a P??blica</option>'
    //     + '<option value="Jur??dico" <?= $setor_rede === "Jur??dico" ? "selected":""?>>Jur??dico</option>'
    //     const box = document.querySelector('#box-rede')
    //     box.appendChild(elemento_select)
    // }

    function creatSelect(){
        const elemento_select = document.createElement('select')
        elemento_select.setAttribute('name', 'enc_'+ cont_add)
        elemento_select.setAttribute('id', 'enc_'+ cont_add)
        
        
        elemento_select.innerHTML = '<option value="null" selected disabled>Selecione o destino do encaminhamento</option>'
        + '<option value="Rede de Prote????o B??sica">Rede de Prote????o B??sica</option>'
        + '<option value="Inclus??o no CAD ??nico" >Inclus??o no CAD ??nico</option>'
        + '<option value="Atuliaza????o do CAD ??nico" >Atuliaza????o do CAD ??nico</option>'
        + '<option value="Rede de Prote????o Especial" >Rede de Prote????o Especial/CREAS</option>'
        + '<option value="??rea da Sa??de">??rea da Sa??de</option>'
        + '<option value="??rea da Educa????o">??rea da Educa????o</option>'
        + '<option value="Pol??ticas P??blicas">Pol??ticas P??blicas</option>'
        + '<option value="Defesa de Direitos">Defesa de Direitos</option>'
        + '<option value="Trabalho e Renda">Trabalho e Renda</option>'
        + '<option value="Cultura">Cultura</option>'
        + '<option value="Ensino e Pesquisa">Ensino e Pesquisa</option>'
        + '<option value="Esporte e Lazer">Esporte e Lazer</option>'
        + '<option value="Enfrentamento ?? Pobreza">Enfrentamento ?? Pobreza</option>'
        + '<option value="Inclus??o Produtiva">Inclus??o Produtiva</option>'
        + '<option value="Associa????es/ONGs">Associa????es/ONGs</option>'
        elemento_select.setAttribute('class', 'form-control')
        box_add.appendChild(elemento_select)
      
    }

    form_add.addEventListener('submit', function(){
        const hidden = document.querySelector('#contador')
        // hidden.setAttribute('value', cont_add)
        hidden.value = cont_add
    })

//     form1.addEventListener('submit', function(){
//         serialize(document.forms[0])
        
//     })

// function serialize(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=form.elements.length-1;i>=0;i=i-1){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=form.elements[i].options.length-1;j>=0;j=j-1){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")}

=======

(function(){
    const menuToggle = document.querySelector('.menu-toggle')
    menuToggle.onclick = function (e){
       const body = document.querySelector('body')
       body.classList.toggle('hide-sidebar')
    }
})()

function confirmacaoDesligamento(){
    const ok = confirm("Tem certeza que deseja desligar este funcion??rio?")
    if(ok){
        alert("Funcion??rio Desligado")
    }
}
//icofont-eye-blocked
// 
(function (){
    const botao = documento.querySelector('#remove_disable')
    botao.onclick = function(e){
        console.log('funcionando')
        const input = document.querySelector('input.senha_funcionario')
        input.removeAttribute('disabled')
    }
})
>>>>>>> 396e841a7fb422ccc9ad32fddea073ce75c4e97f
