<header>
  <h1 align="center">Fashion Store</h1>
</header>
<div>
   <div>
     <h2>API<h2/>
     <p>Usaremos a api</p>
     <ul>
       <li>
         <a href="https://github.com/Kenzie-Academy-Brasil-Developers/fashion-store-api" target="_blank">Documentação</a>
       </li>
       <li>
         <a href="https://fashion-store-api.onrender.com/" target="_blank">URL base</a>
       </li>
     </ul>
   </div>
  <div>
    <h2>Escolhas de Estilização<h2/>
      <ul>
        <li>
          Tailwind CSS
        </li>
      <ul/>
  </div>
  <div>
    <h1>Instruções do Projeto</h1>

<p>Sua aplicação precisa atender uma loja com funcionalidades de administrador. Vamos começar com as rotas públicas, aquelas que não exigem autenticação:</p>

<h2>Tela de cadastro:</h2>
<p>Os usuários devem ser capazes de se cadastrar, fornecendo os seguintes campos: nome, e-mail, senha e confirmação de senha.<br>
Ao cadastrar um usuário, a senha precisa atender aos seguintes requisitos:</p>
<ul>
  <li>Deve conter pelo menos uma letra maiúscula;</li>
  <li>Deve conter pelo menos uma letra minúscula;</li>
  <li>Deve conter pelo menos um caractere especial;</li>
  <li>Deve conter pelo menos um número;</li>
  <li>Deve ter no mínimo 8 caracteres.</li>
</ul>
<p>A aplicação deve validar se a senha digitada coincide com a confirmação de senha.</p>

<h2>Tela de login:</h2>
<p>Deve ser possível fazer login informando o e-mail e a senha cadastrados.<br>
Após o login ser concluído com sucesso, o usuário deve ser redirecionado para a tela de administração.</p>

<h2>Tela de produtos:</h2>
<p>Deve haver um banner inicial e, abaixo dele, devem ser exibidos os produtos em destaque, que são todos os produtos retornados pela API.<br>
Os usuários devem poder clicar em um produto e ser redirecionados para uma tela que mostra informações detalhadas sobre o mesmo.<br>
Na tela de produtos, deve haver um botão para acessar o carrinho.<br>
Dentro do carrinho, todos os produtos e o total da compra devem ser listados.<br>
Caso o carrinho esteja vazio, uma mensagem informativa deve ser exibida.</p>

<h2>Tela de produto específico:</h2>
<p>Nessa tela, deve ser exibido o caminho no site, por exemplo: Início > Produto X.<br>
A imagem do produto deve ser mostrada ao lado do nome, descrição e valor. Além disso, deve haver a opção de adicionar o produto ao carrinho.<br>
Abaixo do produto, deve ser exibida a seção "Veja também", que não deve incluir o produto atual.</p>

<h2>Tela autenticada:</h2>
<p>Na tela de administração, os produtos cadastrados devem ser listados, com opções para remover, editar e adicionar novos produtos.<br>
Ao selecionar a opção de adicionar um novo produto ou editar um existente, um modal deve ser aberto. Esse modal deve permitir o fechamento ao clicar no "X", clicar fora da tela ou pressionar a tecla "Esc".<br>
Ao excluir um produto, uma mensagem de confirmação deve ser exibida.</p>

<h2>Requisitos técnicos</h2>
<p>Embora seja um projeto que oferece mais liberdade em relação ao conteúdo, é importante atender a alguns requisitos técnicos.</p>
<ul>
  <li>É necessário que o sistema seja desenvolvido em Typescript em toda a aplicação;</li>
  <li>É necessário que o sistema faça uso da ContextAPI.</li>
</ul>
<p>Além disso, é preciso utilizar uma biblioteca de estilo/componente, como tailwind, scss, stitches, radix, chackra UI ou Styled-Components.<br>
Gostaríamos de ressaltar que este projeto tem como objetivo o trabalho em grupo, mas também explorar novas tecnologias e, embora o uso do Styled-Components seja permitido, seria bastante interessante ver o grupo se arriscando e experimentando outras bibliotecas mencionadas acima.</p>
  </div>
  <ul>
    <h1>bibliotecas usadas</h1>
    <li>
      <h2>React Icons</h2>
      <p>npm i react-icons</p>
      <a href="https://react-icons.github.io" target="_blank">Doc - React Icons</a>
    </li>
    <li>
      <h2>React Hook Form</h2>
      <p>npm i react-hook-form</p>
      <a href="https://react-hook-form.com" target="_blank">Doc - Home | React Hook Form - Simple React forms validation</a>
    </li>
    <li>
      <h2>Axios</h2>
      <p>npm i axios</p>
      <a href="https://axios-http.com" target="_blank">Doc - Getting Started | Axios Docs</a>
    </li>
    <li>
      <h2>React Router Dom</h2>
      <p>npm i react-router-dom</p>
      <a href="https://reactrouter.com" target="_blank">Doc - Home v6.14.1 | React Router</a>
    </li>
    <li>
      <h2>Zod</h2>
      <p>npm i zod</p>
      <a href="https://github.com/colinhacks/zod" target="_blank">Doc - Zod | Documentation</a>
    </li>
    <li>
      <h2>React-Toastify</h2>
      <p>npm i react-toastify</p>
      <a href="https://fkhadra.github.io/react-toastify" target="_blank">Doc - React-toastify | React-Toastify</a>
    </li>
    <li>
      <h2>Tailwind CSS</h2>
      <p>Install Tailwind CSS with Vite</p>
      <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a>
    </li>
    <li>
      <h2>DaisyUI</h2>
      <p>Install daisyUI as a Tailwind CSS plugin</p>
      <a href="https://daisyui.com" target="_blank">DaisyUI - Tailwind CSS Components</a>
    </li>
  </ul>
  <div>
    <ul>
      <h2>Membros do Grupo<h2/>
      <li>
      Tech Lead - Marcelino Gutiérrez
      </li>
      <li>
      Luis Eduardo Fernandes Borges
      </li>
      <li>
     Virgynia Lopes Baccan
      </li>
      <li>
        Alvaro Paiva
      </li>
    </ul>
      <div>
        <h2>Link do <a href="https://fashion-store-entrega-template-grupo2.vercel.app/" target="_blank">Vercel</a></h2>
      </div>
  </div>
</div>
