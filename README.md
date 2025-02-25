# Classificação de Herói com Base em XP

Este projeto é uma aplicação simples em JavaScript que permite ao usuário cadastrar cinco heróis com seus respectivos valores de XP e classifica esses heróis em níveis com base nesse valor.

## 1. Array de Heróis
Um array chamado `herois` é utilizado para armazenar objetos contendo o nome e o XP dos heróis. Cada herói inserido é representado como um objeto `{ nome: nome, xp: xp }`.

## 2. Função escolherheroi
Essa função é responsável por solicitar ao usuário o nome e o XP de cinco heróis. Para cada herói, a função usa o `prompt` para capturar as informações e, em seguida, armazena os dados no array `herois`. Um loop `for` é utilizado para garantir que cinco heróis sejam cadastrados.

## 3. Função determinarNivel
A função `determinarNivel` recebe o valor de XP como argumento e utiliza uma estrutura de decisão `if-else` para classificar o herói em diferentes níveis, como "Ferro", "Bronze", "Prata", "Ouro", entre outros, com base no valor de XP.

## 4. Laço de Repetição
Após os dados dos heróis serem inseridos, o código utiliza um laço `for` para percorrer o array de heróis e calcular o nível de cada herói chamando a função `determinarNivel`. O resultado é exibido no console com o nome do herói e seu nível.
