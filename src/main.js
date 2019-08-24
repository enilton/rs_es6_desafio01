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

    /*
    4.2 Desestruturação em parâmetros
    
    Na seguinte função:
    
    function mostraInfo(usuario) {  
        return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    
    mostraInfo({ nome: 'Diego', idade: 23 })
    
    Utilize a desestruturação nos parâmetros da função para buscar o nome 
    idade do usuárioseparadamente e a função poder retornar apenas:
     
    return `${nome} tem ${idade} anos.`;
    */

    function mostraInfo (usuario) {
        const { nome, idade } = usuario;
        console.log(`${nome} tem ${idade} anos.`);        
    };

    mostraInfo ({ nome: 'Diego', idade: 23 });

    /*

    5º Exercício
    Utilizando o operador de rest/spread (...) realize as seguintes 
    operações:

    5.1 Rest
    A partir do array: */

        const arr2 = [1, 2, 3, 4, 5, 6]
    /*    
    defina uma variável x que recebe a primeira posição do vetor e outra 
    variável y que recebe todo restante dos dados.
    
    
    */

    const [ a, ...b]  = arr2;

    console.log(a); //1
    console.log(b); // [2, 3, 4, 5, 6

    /*
    Crie uma função que recebe inúmeros parâmetros e retorna a soma de 
    todos eles:*/
    
    function soma (...params) {
        return params.reduce((total, next) => total + next);
    }

    console.log(soma(1, 2, 3, 4, 5, 6)); //21
    console.log(soma(1, 2)); // 3
    
    /*5.2 Spread
    
    A partir do objeto e utilizando o operador spread:
    */
        const usuario = {  
            nome: 'Diego',  
            idade: 23,  
            endereco: {    
                cidade: 'Rio do Sul',    
                uf: 'SC',    
                pais: 'Brasil',  
            }
        };
        
      /*  
        Crie uma variável usuario2 que contenha todos os dados do usuário 
        porém com nome Gabriel.
      */  
        
      const usuario2 = {
          ...usuario, nome: 'Gabriel'
      }

      console.log(usuario2);
       /* 
        Crie uma variável usuario3 que contenha todos os dados do usuário 
        porém com cidade Lontras.
       */

      const  { endereco2 } = usuario;

      const endereco3 = {
          ...endereco2, cidade: 'Lontras'
      };

      const usuario3 = {
           ...usuario, endereco : endereco3
     };

       console.log(usuario3);

     /*
     6º Exercício
     
     Converta o seguinte trecho de código utilizando Template Literals:
     */
        const usuario6 = 'Diego';
        
        const idade6 = 23;
     /*    
        console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
     */

     console.log(`O usuário ${usuario6} possui ${idade6} anos`);

     /*
     
     7º exercício
     
     Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte 
     objeto:
    */
        const nome7 = 'Diego';
        const idade7 = 23;
    /*    
        const usuario = {  
            nome: nome,  
            idade: idade,  
            cidade: 'Rio do Sul',
        };
    
     */

     const usuario7 = { 
         nome7,
         idade7,
         cidade: 'Rio do Sul'
     }

     console.log(usuario7);