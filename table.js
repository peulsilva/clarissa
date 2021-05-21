let id=eval(localStorage.getItem('id'))
let tabela=document.getElementById('plantas')

for (let i=1; i<=id; i++){
    var data=JSON.parse(localStorage.getItem(i.toString()))
    let tb=`<tr>
                <td>${data.name}</td>
                <td>${data.species}</td>
                <td>${data.plant_date}</td>
                <td><a href="index.html" onclick='dadosPage("${data.name}","${data.species}", "${data.plant_date}")'>Ir</a></td>
            </tr>`

    tabela.innerHTML+=tb
}

function dadosPage( nome,especie, plantio)
{
    data={
        name:nome,
        species: especie,
        plant_date:plantio
    };
    sessionStorage.setItem('data', JSON.stringify(data))
}






