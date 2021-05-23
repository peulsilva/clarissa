class Data{
    constructor(name,species,plant_date,image){
        this.name=name
        this.species=species
        this.plant_date=plant_date
        this.image=image
        
    }
    
}

class DB{
    constructor(){
        if (localStorage.getItem('id')===null)
            localStorage.setItem('id', '0')
    }

    getId(){
        let id=localStorage.getItem('id')
        id=eval(id)+1
        id=id.toString()
        localStorage.setItem('id',id)
        return id
    }
    gravar(data){
        if (this.validarDados(data)){
            let id=this.getId()
            console.log(id)
            localStorage.setItem(id,JSON.stringify(data))
        }
        else{
            alert('Dados inválidos ou já inseridos')
        }

        
    }
    
    validarDados(data){
        let id=eval(localStorage.getItem('id'))
        console.log('id= ',id)
        if (data.name=='' || data.species=='')
            return false
        for (let i=1; i<=id; i++){
            let data_i=JSON.parse(localStorage.getItem(i.toString()))
            console.log('i= ', i)
            console.log('data_i= ', data_i)
            if (data_i.name===data.name && data_i.species===data.species){
                return false
            }

        }
        return true
    }
}

db=new DB()

function gravarDados(){
    
    let nome = document.querySelector('.nome').value
    let species=document.querySelector('.species').value
    let date=document.querySelector('.date').value
    let img=document.querySelector('.img').value
    
    let data=new Data(nome, species,date, img)
    db.gravar(data)

}