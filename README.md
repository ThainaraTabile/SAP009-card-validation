# Cartão de Crédito Válido - Livraria Aventuras Literárias 

## Índice

- [Cartão de Crédito Válido - Livraria Aventuras Literárias](#cartão-de-crédito-válido---livraria-aventuras-literárias)
  - [Índice](#índice)
  - [1. Resumo do projeto](#1-resumo-do-projeto)
  - [2. Considerações gerais](#2-considerações-gerais)

*** 

## 1. Resumo do projeto

Este projeto extra foi desenvolvido individualmente, com duração de 1 sprint durante o Bootcamp da Laboratória, com o objetivo de fixar o as ferramentas e metodologias utilizada nos projetos anteriors.

Neste projeto, criei um aplicativo da Web simulando a compra de produtos da loja Aventuras Literárias, para finalizar a compra o usuário precisa informar os dados do cartão de crédito.

A interface permite ao usuário validar o número de um cartão de crédito, sendo necessário preencher também os campos de nome, data de vencimento e CVV do cartão. 

 O usuário preenche os campos do formulário, que simultaneamente são exibidos em um elemento ao lado que simula um cartão de crédito e inclusive exibe a franquia do cartão (com base nos dois primeiros dígitos). A função `maskiFy` oculta todos os dígitos de um cartão, exceto os quatro últimos. Enquanto a função `isValid` realiza a validação do cartão após o usúario clicar no botão `concluir compra`


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



**3. Testes unitários dos métodos.**
Os testes unitários dos métodos `validator` (`isValid` e `maskify`) cobriram 100% dos statements, functions e lines e branches.

**4.  Interface "implantada".**
 A interface foi implantada utilizando o GitHub Pages e pode ser acessada na seguinte url: .




 

