# 🎁 Amigo Secreto  

**Amigo Secreto** é um projeto desenvolvido com **Next.js, Node.js, JavaScript, TypeScript e Tailwind CSS** para facilitar a organização de sorteios de amigo secreto. Ele permite criar grupos, adicionar participantes e realizar o sorteio de forma automática, além de enviar os resultados por e-mail.  

## 🚀 Tecnologias Utilizadas  

- **Frontend & Backend:** Next.js, Node.js, TypeScript  
- **Estilização:** Tailwind CSS, Shadcn/UI, Aceternity UI  
- **Banco de Dados:** Supabase (SQL)  
- **Autenticação:** Supabase (Magic Link)  
- **Envio de E-mails:** Resend  

---

## ✨ Funcionalidades  

✅ Criar grupos de Amigo Secreto  
✅ Adicionar participantes (nome e e-mail)  
✅ Realizar o sorteio automático  
✅ Enviar o resultado por e-mail  
✅ Interface simples e responsiva  
✅ Autenticação com Supabase  
✅ Gerenciamento dos sorteios no banco de dados  
✅ Configuração de temas personalizados (Shadcn/UI)  
✅ Integração com Resend para envio de e-mails  

---

## 🏗 Estrutura do Projeto  

### **Next.js**  
✔ Criação de rotas  
✔ Criação de componentes reutilizáveis  
✔ Uso de Server Components e Server Actions  
✔ Gerenciamento de autenticação e dados com Supabase  

### **Shadcn/UI & Aceternity UI**  
✔ Instalação e configuração de componentes  
✔ Customização de temas e UI moderna  

### **Supabase**  
✔ Autenticação segura com Supabase  
✔ Suporte a Magic Link para login  
✔ Gerenciamento e persistência de dados  
✔ Conexão otimizada com Next.js  

### **Resend**  
✔ Configuração e integração no Next.js  
✔ Envio automático de e-mails com os resultados do sorteio  

---

## ⚙️ Como Rodar o Projeto  

1️⃣ **Clone o repositório:**  
```bash
git clone https://github.com/seu-usuario/amigo-secreto.git

2️⃣ Instale as dependências:
npm install

3️⃣ Configuração das variáveis de ambiente:
Crie um arquivo .env.local na raiz do projeto e adicione:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
RESEND_API_KEY=your_resend_api_key

4️⃣ Execute o projeto:
npm run dev

5️⃣ Acesse em:
http://localhost:3000 🚀

![Tela Inicial](public/tela-inicial.PNG)
![Tela Login](public/tela-login.PNG)
![Criação de Grupo](public/tela-criacao-grupos.PNG)
![Meus Grupos](public/tela-meus-grupos.PNG)


