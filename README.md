# 🧊 Cubo 3D Interativo - Aprendendo CSS 3D

Este projeto foi desenvolvido com o objetivo de estudar e colocar em prática os conceitos de renderização e animação de elementos 3D no navegador web. 

Através da combinação de HTML, CSS e JavaScript, foi construído um cubo 3D que responde a interações do usuário.

## 🚀 Funcionalidades

O projeto apresenta um cubo 3D centralizado na tela com as seguintes interações:
- **Animação ao focar:** O cubo fica inicialmente pausado e começa a rotacionar continuamente nos eixos X, Y e Z quando o usuário passa o cursor sobre ele (efeito `:hover`).
- **Pausa interativa:** Ao clicar no cubo, uma função JavaScript é disparada para pausar a animação por exatamente 1 segundo, retomando em seguida.
- **Pausa segurada:** Ao manter o clique pressionado (`:active`), a animação é totalmente interrompida.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação da cena (`.scene`), do cubo (um elemento `<button>`) e suas 6 faces (elementos `<div>`).
* **CSS3:** Responsável por toda a manipulação tridimensional e visual.
  * Utilização de `perspective` para simular a profundidade do cenário.
  * Uso de `transform-style: preserve-3d` para garantir que as faces filhas se posicionem no espaço 3D do elemento pai.
  * Posicionamento individual de cada face (Frente, Trás, Direita, Esquerda, Topo, Base) utilizando as propriedades `translateZ`, `rotateX` e `rotateY`.
  * Criação de uma linha do tempo de animação com `@keyframes` para o movimento contínuo de rotação.
* **JavaScript:** Manipulação do DOM para controle de estado. Adiciona temporariamente uma classe `.pausado` no cubo ao ouvir o evento de `click`, que é removida após 1000 milissegundos via `setTimeout`.

## 🧠 O que este projeto ensina?

* **Trabalhar com Eixos (X, Y, Z):** Como deslocar as faces em 100px no eixo Z e rotacioná-las em múltiplos de 90 graus para "fechar" o formato do cubo.
* **Controle de Estado de Animação CSS:** Uso da propriedade `animation-play-state` para alternar fluidamente entre `paused` e `running`.
* **Sinergia CSS & JS:** Como uma simples adição/remoção de classe via JavaScript pode criar gatilhos complexos de interface.

## 📂 Estrutura de Arquivos

* `index.html`: Contém a marcação da estrutura principal do projeto.
* `style.css`: Contém toda a folha de estilo, posicionamento 3D e animações.
* `script.js`: Contém o script que adiciona a pausa temporária à rotação.
