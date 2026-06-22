# Como publicar o app de Finanças e instalar no celular

Guia passo a passo, sem termos técnicos. Faça na ordem. Cada passo é rápido.

---

## O que é isso

Você vai colocar este app na internet (de graça, usando o GitHub) e depois
"instalar" ele no celular como se fosse um aplicativo normal. Funciona offline,
abre em tela cheia e tem ícone na tela inicial.

---

## 1) O que você vai publicar

Você vai enviar para a internet **só os arquivos do programa**, que estão na
pasta `finance-app`:

- `index.html` — o app em si
- `manifest.json` — faz ele virar "aplicativo" no celular
- `sw.js` — faz ele funcionar offline
- `icon.svg` — o ícone do app

> **Importante (fique tranquilo):** esses arquivos são só o *programa*, igual
> para todo mundo. **Eles NÃO têm os dados de ninguém.** Mesmo que qualquer
> pessoa veja o código publicado, ela **não vê seus gastos, seus valores, nada**.
> Os números de cada pessoa ficam guardados **só no celular (ou PC) dela** — nunca
> sobem para a internet.

---

## 2) Criar a conta e o repositório no GitHub

O GitHub é um site gratuito onde os arquivos vão morar.

1. Entre em **https://github.com** e clique em **Sign up** (cadastrar). Se já
   tiver conta, faça login.
2. Crie o cadastro com seu e-mail e uma senha. Anote o **nome de usuário** que
   você escolher — ele vai aparecer no endereço do app.
3. Já logado, clique no **+** no canto superior direito → **New repository**
   (novo repositório).
4. Em **Repository name**, escreva um nome simples, por exemplo: **minhas-financas**
5. Deixe marcado **Public** (pode deixar público — lembre: não tem dado seu ali).
6. Clique em **Create repository** (criar repositório).

### Enviar os arquivos (arrastar com o mouse)

1. Na página do repositório que abriu, clique em **Add file** → **Upload files**
   (adicionar arquivo → enviar arquivos).
2. Abra a pasta `finance-app` no seu computador.
3. **Arraste** os 4 arquivos (`index.html`, `manifest.json`, `sw.js`, `icon.svg`)
   para dentro da área indicada no site (onde diz "Drag files here").
4. Espere o site terminar de carregar os arquivos (aparece o nome de cada um).
5. Lá embaixo, clique no botão verde **Commit changes** (confirmar/salvar).

Pronto, os arquivos estão na internet. Falta só "ligar" o site.

---

## 3) Ligar o site (GitHub Pages)

1. Ainda na página do repositório, clique em **Settings** (configurações), no
   menu de cima.
2. No menu da esquerda, clique em **Pages**.
3. Em **Source** (origem), escolha **Deploy from a branch**.
4. Logo abaixo, em **Branch**, escolha **main** e deixe a pasta como **/ (root)**.
5. Clique em **Save** (salvar).
6. **Espere mais ou menos 1 minuto** e recarregue a página. Vai aparecer um aviso
   verde com o endereço do seu app, mais ou menos assim:

   **https://SEU-USUARIO.github.io/minhas-financas/**

   (troque `SEU-USUARIO` pelo nome de usuário que você criou no passo 2).

7. Clique nesse endereço para abrir e confirmar que o app aparece. **Copie esse
   endereço** — é ele que você vai usar no celular e mandar para a família.

> Se ao abrir aparecer "404" ou página vazia, espere mais 1 a 2 minutos e
> recarregue. Na primeira vez o GitHub demora um pouco para ligar.

---

## 4) Instalar no celular (vira aplicativo)

Abra o endereço do app (o do passo 3) no navegador do celular.

### Android (Chrome)
1. Abra o endereço no **Chrome**.
2. Toque nos **três pontinhos** (canto superior direito).
3. Toque em **Adicionar à tela inicial** (ou **Instalar app**).
4. Confirme. O ícone aparece na tela do celular, igual a qualquer app.

### iPhone (Safari)
1. Abra o endereço no **Safari** (precisa ser o Safari).
2. Toque no botão de **compartilhar** (o quadradinho com a setinha para cima,
   embaixo).
3. Role e toque em **Adicionar à Tela de Início**.
4. Toque em **Adicionar**. O ícone aparece na tela do iPhone.

Agora é só abrir pelo ícone. Abre em tela cheia e **funciona offline**.

---

## 5) Colocar os seus dados (backup)

Os dados não viajam sozinhos pela internet — você leva eles de um aparelho para
o outro por um arquivo de backup. Faça uma vez:

**No PC (no app antigo, onde os números já estão):**
1. Abra o app no computador.
2. Vá na aba **⚙️ Dados**.
3. Clique em **⬇️ Baixar backup (.json)**. Vai baixar um arquivo
   (algo como `backup-financeiro-...json`). Guarde ele / mande para o celular
   (por WhatsApp para você mesmo, e-mail, ou Google Drive).

**No celular (no app que você acabou de instalar):**
1. Abra o app pelo ícone.
2. Vá na aba **⚙️ Dados**.
3. Clique em **⬆️ Restaurar backup**.
4. Escolha o arquivo `.json` que você mandou.
5. Confirme. Pronto — seus números aparecem no celular.

> Cada pessoa faz o **seu próprio** backup e restaura no **seu próprio** aparelho.
> Os dados de cada um ficam só naquele celular. Um não vê o do outro.

---

## 6) Inteligência Artificial e leitura de PDF (opcional, é paga)

O app tem um **Assistente** que lê o PDF do extrato do banco e organiza tudo
sozinho. Para usar, **cada pessoa precisa colar a PRÓPRIA chave** de acesso:

1. No app, vá na aba **🤖 Assistente**.
2. Cole sua chave da API da **Anthropic** (você pega em
   **console.anthropic.com → API Keys**).
3. A chave fica guardada **só naquele aparelho** — não vai para a internet nem
   para o backup.

> **Sobre o custo:** essa parte de IA é **paga por uso** — custa **alguns
> centavos** por extrato lido. Quem **não quiser pagar** pode usar o app
> normalmente **de graça**, digitando os números na mão. Só a leitura automática
> de PDF e o assistente usam a chave paga.

---

## 7) Dica final: o mesmo endereço serve para a família toda

Você só precisa publicar **uma vez**. Depois, **o mesmo endereço**
(https://SEU-USUARIO.github.io/minhas-financas/) serve para todo mundo:
você, sua esposa, sua mãe, seu pai.

- Cada um abre o endereço no próprio celular e **instala** (passo 4).
- Cada um coloca os **próprios dados** (passo 5).
- Os dados de cada pessoa ficam **separados**, no celular de cada uma. Ninguém
  vê o do outro.

É só mandar o endereço no WhatsApp da família e pronto.
