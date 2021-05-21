class Planta{
    constructor(nome, nome_cient, regada, foto){
        this.nome=nome
        this.nome_cient=nome_cient
        this.regada=regada

    }

}


girassol=new Planta('girassol', 'girassol cientifico', 13, 'ontem')
girassol_json=JSON.stringify(girassol)
girassol_obj=JSON.parse(girassol_json)
console.log(girassol_obj)

