let nome= document.getElementById('nome')
let especie=document.getElementById('especie')
let idade=document.getElementById('idade')

let data=JSON.parse(sessionStorage.getItem('data'))

console.log(data)

sessionStorage.clear()

if (data.name=='')
    nome.innerHTML='Sem nome'
else{
    nome.innerHTML=data.name
}
    

especie.innerHTML= 'Espécie: '+ data.species

if (data.plant_date==''){
    idade.innerHTML='Sem dados'
}

else{
    date=new Date(data.plant_date)

    decorrido=Date.now()-date
    decorrido=Math.floor(decorrido/(1000*3600*24))

    idade.innerHTML= decorrido + ' dias'
}


function deletarPlanta(){
    let id=eval(localStorage.getItem('id'))
    for (let i=1; i<=id; i++){
        let data_i=JSON.parse(localStorage.getItem(i.toString()))
        if (data_i.name==data.name && data_i.plant_date==data.plant_date && data_i.species==data.species){
            localStorage.removeItem(i.toString())
            
            for (j=i+1;j<=id;j++)
            {
                let data_j=JSON.parse(localStorage.getItem(j.toString()))
                localStorage.removeItem(j.toString())
                localStorage.setItem((j-1).toString(),JSON.stringify(data_j))
            }
            id-=1
            localStorage.setItem('id',id.toString())
            return
        }

    }
}