# Instruções de Execução

### Requisitos
- Certifique-se de ter o Node.js instalado em sua máquina. Se ainda não estiver instalado, faça o download e instale a partir de [nodejs.org](https://nodejs.org/).
- O pacote `prompt-sync` é necessário para permitir a entrada de dados pelo terminal.

### Passos para executar o programa

1. **Instalação do pacote `prompt-sync`**:
   Abra o terminal na pasta onde o arquivo `.js` está localizado e execute o seguinte comando para instalar o pacote necessário para as interações via terminal:

   ```bash
   npm install prompt-sync

2. **Executar programa .js**:
   Abra o terminal na pasta onde o arquivo `.js` está localizado e execute o comando:

   ```bash
   node 'nome_arquivi'.js

# Lista de Exercícios

## Estruturas de Controle

### 1. Verificar se um número é par ou ímpar
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle `if`.

### 2. Classificação de idade
Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle `if-else`.

### 3. Classificação de nota
Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando `if-else if`.

### 4. Menu interativo com switch-case
Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize `switch-case` para implementar a lógica de cada opção selecionada.

### 5. Cálculo de IMC
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando `if-else`.

## Condições e Cálculos Matemáticos

### 6. Verificar e classificar um triângulo
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
- **Triângulo isósceles**: possui dois lados iguais (A=B ou A=C ou B=C).
- **Triângulo escaleno**: possui todos os lados diferentes (A≠B e B≠C).
- **Triângulo equilátero**: possui todos os lados iguais (A=B e B=C).

Para verificar se os lados fornecidos formam triângulo: A < B + C, B < A + C, e C < A + B.

### 7. Cálculo do valor total de maçãs
As maçãs custam R$ 0,30 se forem compradas menos de uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

### 8. Ordenação de dois valores
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

## Laços de Repetição

### 9. Contagem regressiva
Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop `for`.

### 10. Exibir número na tela várias vezes
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

### 11. Soma de 5 números
Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop `for`.

### 12. Tabuada de um número
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop `for`.

### 13. Média aritmética de números decimais
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e calcular a média aritmética desses números.

### 14. Cálculo do fatorial
Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop `for` ou `while`.

### 15. Sequência de Fibonacci
Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop `for`.
