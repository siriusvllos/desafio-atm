# Desafio ATM para Morada.ai
Essa é minha submissão para o desafio de código do processo seletivo da empresa Morada.ai, um projeto Node.js utilizando a biblioteca Express.

## Como Executar
Para executar o projeto é necessário primeiro ter o Node.js instalado em seu ambiente de desenvolvimento. Depois, siga o passo-a-passo abaixo:
1. Instale as dependências:
    ```bash
    npm install
    ```
2. Execute o servidor:
    ```bash
    node index.js
    ```
Ao executar o servidor, ele vai estar escutando e disponível em `http://localhost:5000`.

## Endpoints
### POST /api/saque
Este endpoint descreve quais e quantas notas são necessárias para formar uma quantia a ser sacada. Para convesar com o endpoint você pode utilizar o comando _curl_:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:5000/api/saque
```
Você pode substituir o número _380_ no campo _valor_ por qualquer quantia a ser sacada.

## Testes
![print de tela dos testes realizados no terminal](./teste.jpeg)
Os testes realizados foram utilizando os valores 380, 381 e 0, que esperavam, respectivamente, o funcionamento normal da API, mensagem de erro devido a incompatibilidade com as notas disponíveis e mensagem de erro por se tratar de um valor não-positivo. Todas os testes ocorreram como o esperado.

## Principais Desafios
O funcionamento dessa API é muito similar a um outro projeto que eu tinha feito anteriormente (disponível no repositório [catinder](https://github.com/siriusvllos/catinder/blob/master/server.js), mas no qual as requisições eram feitas através de um formato diferente. Sendo assim, o desafio foi encontrar uma maneira de processar o payload como dados JSON. Isso foi feito através da linha 5 no código.
Eu também gostaria de ter feito o código em Pyton utilizando a biblioteca Flask mas eu não consegui me organizar adequadamente, por que só vi o email me convidando a enviar o desafio no domingo (30/06) a noite. Seria minha primeira vez utilizando a biblioteca então eu precisaria de mais tempo, apesar de que ainda vou tentar terminar o código até hoje a noite.
