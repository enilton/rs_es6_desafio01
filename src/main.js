/*
*
*
Exercícios: Módulo 01

1º exercício
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
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
*
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

let rocketseaters = usuarios.filter(usuario => {
    return usuario.empresa === 'Rocketseat';
});

console.log(rocketseaters);           
           
           
/*          2.3 Utilizando o find:
            Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
*/            
let googlers = usuarios.find(usuario => {
    return usuario.empresa === 'Google';
})            

console.log(googlers);            
            
/*            2.4 Unindo operações
            Multiplique a idade de todos usuários por dois e depois realize 
            um filtro nos usuários que possue mno máximo 50 anos:
            // Resultado:[  
                { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },  
                { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },]
*/
usuarios.map(usuario => {
    usuario.idade = usuario.idade * 2;
})

console.log(usuarios);

let resultado = usuarios.filter(usuario => {
    return usuario.idade < 50;
})

console.log(resultado);


/* 3º exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:// 

        3.1 const arr = [1, 2, 3, 4, 5];
        arr.map(function(item) {  
            return item + 10;
        });
*/
const arr = [1,2,3,4,5];
arr.map(item => item + 10);
console.log(arr);

        // 3.2// Dica: Utilize uma constante pra function
        
/*const usuario = { nome: 'Diego', idade: 23 };

usuario.map(item =>
    console.log(item.idade)
);*/

        //3 .3 
            /*function mostraUsuario(nome = 'Diego', idade = 18) { 
                return { nome, idade };
            }

            mostraUsuario(nome, idade);
            mostraUsuario(nome);
            */

//const nome = "Diego";
//const idade = 23;

        // 3.4
        /* const promise = function() {  
            return new Promise(function(resolve, reject) {
                return resolve();
            })
        }
        */

const promisse = () => { 
    return new Promisse((resolve, reject) => { return resolve });
};

/*
    4º exercício
    4.1 Desestruturação simples
    A partir do seguinte objeto:
    */
    const empresa = {  
        nome: 'Rocketseat', 
        endereco: {    
            cidade: 'Rio do Sul',    
            estado: 'SC',  
        }
    };
    /*
    Utilize a desestruturação para transformar as propriedades nome, 
    cidade e estado em variáveis, nofim deve ser possível fazer o seguinte:
    
    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC
    */
   
    const { nome, endereco } = empresa;

    const { cidade, estado } = endereco;

    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC

    
