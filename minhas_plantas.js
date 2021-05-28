let id=eval(localStorage.getItem('id'))
let tabela=document.getElementById('plantas')

for (let i=1; i<=id; i++){
    var data=JSON.parse(localStorage.getItem(i.toString()))
    let tb=`<tr>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.plant_date}</td>
                <td><a href="dados_planta.html" onclick='dadosPage("${data.name}","${data.species}", "${data.plant_date}", "${data.image}")'>Ir</a></td>
            </tr>`

    tabela.innerHTML+=tb
}

function dadosPage( nome,especie, plantio,image)
{
    data={
        name:nome,
        species: especie,
        plant_date:plantio,
        image: image
    };
    sessionStorage.setItem('data', JSON.stringify(data))
}

function apagarTudo(){
    if (confirm('Tal ação não pode ser desfeita. Continuar mesmo assim?'))
        localStorage.clear()
}






