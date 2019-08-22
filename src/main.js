/*
*
*
Exercícios: Módulo 01

1º exercícioPara testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".A classe usuário deve receber dois parâmetros no método 
construtor, e-mail e senha, e anotá-losem propriedades da classe. A classe "Admin" por sua vez não recebe 
parâmetros mas deverepassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" 
comotrue na classe.Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin 
queretorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não
*/

class Usuario {
    constructor (email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }
}


    const User1 = new Usuario('email@teste.com', 'senha123');
    const Adm1 = new Admin('email@teste.com', 'senha123');    
    console.log(User1.isAdmin()) //false
    console.log(Adm1.isAdmin()) // true

/*
    2º exercício
    A partir do seguinte vetor e utilizando os métodos de array (map, 
        reduce, filter e find):
    */    
        const usuarios = [  
            { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
            { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
            { nome: 'Lucas', idade: 30, empresa: 'Facebook' },];
    /*        
        2.1 Utilizando o map: 
        Crie uma variável que contenha todas idades dos usuários: 
        [23, 15, 30]
*/        
    
let idades = [];

usuarios.map (usuario => {
    idades.push(usuario.idade);
})

console.log(idades);
        
        
        
/*        2.2 Utilizando o filter:
           Crie uma variáveis que tenha apenas os usuários que trabalham 
           na Rocketseat e com mais de 18anos: 
           [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
*/           
           
           
           
           
/*           2.3 Utilizando o findCrie uma variável que procura por um usuário que trabalhe na empresa Google: undefined2.4 Unindo operações
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos:// Resultado:[  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },]
*/