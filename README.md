# World Clock

## Descrição
World Clock é um projeto desenvolvido como parte do roadmap de desenvolvimento fullstack, na etapa 3 - NPM. O projeto consiste em um relógio mundial que exibe a hora de diferentes fusos horários e permite ao usuário selecionar a localização desejada para atualizar o horário exibido.

## Tecnologias Utilizadas
- **HTML**: Estrutura da página.
- **CSS**: Estilização do layout.
- **JavaScript**: Lógica do relógio e interatividade.
- **Day.js**: Manipulação de data e hora.
- **MicroModal**: Gerenciamento de modal para seleção de fuso horário.

## Funcionalidades
- Exibe a hora e data da localização atual.
- Permite ao usuário selecionar um fuso horário diferente por meio de um modal.
- Atualiza automaticamente a hora a cada segundo.
- Utiliza a biblioteca Day.js para manipulação de fuso horário e formato de data.

## Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/Otavinhopx/3-World_Clock_NPM_packages
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd world-clock
   ```
3. Abra o arquivo `index.html` no navegador.

## Estrutura do Projeto
```
world-clock/
├── assets/
│   ├── icon.png
├── style.css
├── index.html
├── script.js
```

## Dependências
As seguintes bibliotecas externas são utilizadas no projeto:
- **Day.js** para manipulação de datas e fusos horários.
- **MicroModal** para exibir o modal de seleção de fuso horário.

Os arquivos dessas dependências são carregados via CDN:
```html
<script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/utc.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/timezone.js"></script>
```

## Preview

[![image.png](https://i.postimg.cc/nLLs4tCV/image.png)](https://postimg.cc/dhztFp2g)
[![image.png](https://i.postimg.cc/g2zrpPyy/image.png)](https://postimg.cc/PP7db9RN)

## Autor
Projeto desenvolvido por Otávio Augusto e Miguel Alves.
