# 🎹🧡 Studio Sol - Desafio

## 📃 Sobre o projeto

Este é um projeto baseado no teste para o cargo de **Desenvolvedor Front-End**, na empresa **Studio Sol**.
O objetivo do teste é criar uma aplicação de adivinhação de um determinado número, chamada **Qual é o número?**.

### 🛠️ Funcionamento da aplicação

O projeto contém 4 componentes, são eles: **Header.js**, **InfoMessage.js**, **Leds.js** e **Footer.js**.

No componente **Header.js** são encontrados o título e o divider.

No componentes **InfoMessage.js** é encontrada a mensagem informativa ao usuário sobre os palptes digitados.

No componente **Leds.js** é feito um map na div com os sete segmentos, com um array recebido com os valores que ativam ou não os leds.

No componente **Footer.js** são encontrados o input que o usuário irá digitar o seu palpite e o botão enviar. Há um botão de nova partida que inicia oculto e aparece apenas quando o usuário acerta o palpite ou caso haja algum erro no momento da requisição.

O arquivo **App.js** contém funções e estados que são passados como props para os componentes filhos. Nele, há um **useEffect** que executa a função getNumber(), que realiza a requisição e retorna um número.

O **input** contém um limite de **3 caracteres** e uma função de verificação de caracteres que permite que **apenas números** sejam digitados. Essa função é chamada no onKeyPress.

Ao clicar no botão de **enviar**, a função **verifiyNumber()** é chamada e faz uma **validação**, caso o valor do input esteja vazio. Nesse caso, a borda do input ficar vermelha, representando um erro e não é feita mais nenhuma outra ação. Caso o input contenha um valor, as validações de comparação entre o valor digitado pelo usuário e o número obtido na requisição são feitos e o valor do input é setado para seu **estado inicial**. Em todos os casos, uma **mensagem de informação é setada** e a função **handleChangeLed()** é chamada, recebendo **dois parâmetros**: o n**úmero digitado pelo usuário** e uma **palavra representativa** que será utilizada para adicionar uma **classe responsável por colorir o led** de acordo com a situação.

As palavras são:
**"success"**: colore o led de **verde**;
**"error"**: colore o led de **vermeho**;
**"active"**: colore o led de **cinza**.

A função **handleChangeLed()** recebe dois parâmetros: o número digitado pelo usuário e uma palavra representativa que será utilizada para adicionar uma claase responsável por colorir o led de acordo com a situação.

No início da função, o número digitado pelo usuário é passado para **string** e um **array vazio é criado** para receber os objetos referentes a cada número.

Um **for** percorre cada caractere do número digitado e chama a função **handleIdentifyNumber()**, que fazer a **verificação do número**. Quando o número é identificado, um **push** desse objeto ocorre no array criado inicialmente. Essa função **retorna o array** com as informações de cada caractere do número digitado pelo usuário.

Caso o jogador dê o **palpite correto ou haja um erro na requisição**, o botão de **nova partida** aparece e ao ser clicado, a função **handleNewGame()** é chamada, setando o número obtido pela requisição para vazio, setando a informação ao usuário para vazio, chamando a função handleChangeLed() com os parâmetro "0" e "active para iniciar o jogo com os leds formando o número zero e chamando a função **getNumber()** para obter um **novo número**.

### 🌟 Layout do projeto

![image](https://user-images.githubusercontent.com/56731050/165933261-5355e953-5a57-48dc-a6d0-23ddbff5c285.png)
![image](https://user-images.githubusercontent.com/56731050/165933330-404c47a8-a8e8-4920-beea-b01973c3f514.png)
![image](https://user-images.githubusercontent.com/56731050/165933403-c17d59df-73db-43e7-b159-859128bffc49.png)
![image](https://user-images.githubusercontent.com/56731050/165933471-ad413359-2522-44e4-adf6-bdbfc71d35f1.png)

### ⚙️ Tecnologias utilizadas

- ReactJS
- HTML
- CSS
- Javascript
- Styled-Components **(permite escrever códigos CSS dentro do Javascript - CSS-in-JS)**
- React Testing Library **(utilizado para testes unitários)**

### 🔎 Outras informações

O projeto foi criado pensando na **responsividade**, possibilitando ao usuário a utilização da aplicação partindo de qualquer **dispositivo**! 📱💻

Para executar o projeto, execute o comando `npm start`, acessando em http://localhost:3000 . </br>
Para executar os testes do projeto, execute o comando `npm run test`.

### 🙋‍♀️ Autor

**Mariana Alvares da Silva Pinto** - _Desenvolvedora Front-end_ </br>
✉️ **E-mail**: mariana11areal@hotmail.com </br>
📞 **Telefone/Whatsapp:** (24) 999987-7010 </br>
📌 **Link para acessar o projeto:** https://studio-sol-desafio.vercel.app/
