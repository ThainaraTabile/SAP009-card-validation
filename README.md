# Cartão de Crédito Válido - Livraria Aventuras Literárias 

## Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto)
* [2. Considerações gerais](#3-considerações-gerais)
* [4. Marco: Critérios de Aceitação Mínimos do Projeto](#4-marco-critérios-de-aceitação-mínimos-do-projeto)
* [5. Marco Opcional: Mostrar a franquia do cartão](#5-marco-opcional-mostrar-a-franquia-do-cartão)
* [6. Considerações técnicas](#6-considerações-técnicas)
* [7. Objetivos de aprendizagem](#7-objetivos-de-aprendizagem)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Para considerar o feedback do projeto](#9-para-considerar-o-feedback-do-projeto)

*** 

## 1. Resumo do projeto

Este projeto extra foi desenvolvido individualmente, com duração de 1 sprint durante o Bootcamp da Laboratória, com o objetivo de fixar o as ferramentas e metodologias utilizada nos projetos anteriors.

Neste projeto, criei um aplicativo da Web simulando a compra de produtos da loja Aventuras Literárias, para finalizar a compra o usuário precisa informar os dados do cartão de crédito.

A interface permite ao usuário validar o número de um cartão de crédito, sendo necessário preencher também os campos de nome, data de vencimento e CVV do cartão. 

 O usuário preenche os campos do formulário, que simultaneamente são exibidos em um elemento ao lado que simula um cartão de crédito e inclusive exibe a franquia do cartão (com base nos dois primeiros dígitos). A função `maskiFy` oculta todos os dígitos de um cartão, exceto os quatro últimos. Enquanto a função `isValid` realiza a validação do cartão após o usúario clicar no botão `concluir compra`



### Objetivos gerais deste projeto são os seguintes

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprenda sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github)

## 2. Considerações gerais

**Algoritmo de Luhn** 

É uma forma comum de validar números de cartão de crédito e débito. O algoritmo é bastante simples e pode ser implementado em várias linguagens de programação.

Aqui está uma explicação do algoritmo:

Comece da direita para a esquerda, começando com o segundo dígito a partir da direita (o último dígito é o dígito de verificação).
Multiplique cada segundo dígito por 2.
Se o resultado da multiplicação for maior que 9, some os dígitos do resultado. Por exemplo, se o dígito for 6 e for multiplicado por 2, o resultado será 12, então some os dígitos 1 + 2 = 3.
Some todos os dígitos (incluindo o dígito de verificação) juntos.
Se o total for um múltiplo de 10, o número é válido.

**Método maskify** 

É utilizado para ocultar os dígitos do número do cartão, exibindo apenas os 4 últimos dígitos. Isso é feito por motivos de segurança, para evitar que terceiros possam ter acesso ao número completo do cartão.

O método `maskify` consiste em substituir todos os dígitos do número do cartão, exceto os 4 últimos, por um caractere especial, como o símbolo de asterisco (*), por exemplo. Dessa forma, o número é exibido como **** **** **** 1234, por exemplo.



**2. Testes unitários dos métodos.**
Os métodos `validator` (`isValid` e `maskify`) devem ser cobertos por testes unitários.

**3. Código do seu projeto enviado para seu repositório e interface "implantada".**
O código final deve estar um repositório no GitHub. A interface, ou página da web,
deve ser "implantada" (acessível online publicamente) usando o GitHub Pages.

**4. Um README contendo uma definição de produto.**
No README, conte-nos como você pensou sobre os usuários e qual foi o seu
processo para definir o produto final em nível de experiência e interface.
Estas perguntas servem de guia:

* Quem são os principais usuários do produto
* Quais são os objetivos desses usuários em relação ao seu produto
* Como você acha que o produto que você está criando está resolvendo seus
  problemas

Com esses requisitos atendidos, você pode agendar um feedback do projeto com
um coach.


## 6. Considerações técnicas

A lógica do projeto foi implementada inteiramente em JavaScript. Nesse
projeto **NÃO** está permitido usar bibliotecas ou frameworks, só vanilla
JavaScript.

Para iniciar este projeto você terá que fazer um _fork_ e _clone_ desse
repositório, que contém um _boilerplate_ com testes. Um _boilerplate_ é a
estrutura básica de um projeto que serve como ponto de partida com arquivos
iniciais e configuração básica de dependências e testes.

Os testes unitários devem cobrir no mínimo de 70% dos _statements_, _functions_
e _lines_, e um mínimo de 50% de _branches_. O _boilerplate_ já contem o setup e
configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.



O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` com respeito a uma guia de estilos. Ambas tarefas são executadas
automaticamente antes de executar os testes quando usamos o comando `npm run
test`.
No caso do `JavaScript` estamos usando o `eslint` que está configurado no
arquivo `.eslintrc` que contem o mínimo de informação como versão do
JavaScript/ECMAScript, o ambiente (_browser_ nesse caso) e as [regras
recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
Nas regras/guias de estilo usaremos das recomendações padrão tanto para o
`eslint` quanto `htmlhint`.

#### Deploy

Disponibilizar os projetos e colocá-los "no ar" vai ser parte cotidiana do
ciclo de desenvolvimento em produtos de tecnologia.

Para este projeto, utilizaremos o Github Pages para essa finalidade.
O comando `npm run deploy` pode te auxiliar nessa tarefa e você pode também
consultar a [documentação oficial](https://docs.github.com/pt/pages).










 

