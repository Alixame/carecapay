# Fluxo de autenticação (/auth) — design

## Contexto

O projeto hoje só tem a Landing Page (`app/page.tsx`). Não existe backend, banco de
dados ou lib de autenticação. Esta v1 é **apenas front-end**: telas completas,
navegação entre etapas e validação client-side, sem integração real de auth
(login com Google é um botão placeholder, sem OAuth funcional).

Referências visuais fornecidas pelo usuário: tela de e-mail única (estilo
split-screen com marketing à esquerda), wizard de cadastro em 5 passos
(E-mail, Senha, Perfil, Negócio, Conclusão) com stepper no topo e barra de
navegação fixa no rodapé (Cancelar / progresso / Continuar).

## Fluxo

1. **`/auth`** — tela única com campo de e-mail (layout split-screen: copy de
   marketing + checklist de benefícios à esquerda, card com e-mail + "Continuar
   com Google" à direita, igual à referência 3).
2. Ao submeter o e-mail, simula uma checagem assíncrona (~800ms de loading no
   botão) e **decide aleatoriamente** se o e-mail já tem conta:
   - **Tem conta → login:** mostra só o campo Senha (sem stepper de 5 passos,
     é um fluxo de 2 passos). Botão "Entrar" simula auth (~600ms) e redireciona
     para `/dashboard`.
   - **Não tem conta → cadastro:** ativa o wizard de 5 passos (stepper visível
     no topo: E-mail já concluído → Senha → Perfil → Negócio → Conclusão).
3. Todo o fluxo (login e cadastro) roda dentro do **mesmo card**, trocando de
   conteúdo via estado local (`useState`) em um único componente client
   (`AuthFlow`) — sem sub-rotas por etapa e sem refletir o passo na URL. Se o
   usuário der refresh no meio do wizard, perde o progresso; aceitável para
   esta v1 sem persistência.

## Etapas do wizard de cadastro

- **Senha:** campo senha + confirmar senha, com toggle mostrar/ocultar.
- **Perfil:** nome completo (obrigatório), telefone (opcional, com seletor de
  bandeira BR fixo).
- **Negócio:** nome da empresa (opcional), site/link (opcional), segmento
  (select).
- **Conclusão:** checklist de sucesso (conta criada, ambiente de testes,
  documentação, suporte) + CTA "Acessar dashboard" (→ `/dashboard`) + link
  "Explorar a documentação" (`href="#"`, sem rota real ainda).

## Navegação / rodapé

Barra fixa no rodapé do card, igual à referência 1: link "Cancelar" (volta
para a etapa de e-mail / limpa o estado), barra de progresso, texto
"Passo X de 5", botão "Continuar" (desabilitado até os campos obrigatórios da
etapa serem válidos).

## Pós-login / pós-cadastro

Como não existe dashboard real ainda, criamos **`/dashboard`** como
placeholder: página simples com mascote e mensagem "Em breve", só para fechar
o fluxo visualmente e servir de base futura.

## Estilo visual

Reaproveita os tokens já estabelecidos na Landing Page: cor de destaque
`#FF7A00`, texto `#19150F` / `#3B342B`, fundo `#F3EEE4`, fontes
`--font-careca-display` (Bricolage Grotesque) e `--font-careca-sans` (Hanken
Grotesk), cantos `rounded-xl`, ícones via `lucide-react`. Mascote reaproveita
os assets existentes em `public/assets/` (`careca-hero`, `careca-develop`,
`careca-business`, `careca-final-cta`), trocando a imagem conforme a etapa.

## Estrutura de arquivos

```
app/auth/page.tsx                      -> renderiza <AuthFlow />
app/dashboard/page.tsx                 -> placeholder "Em breve"
app/components/auth/AuthFlow.tsx       -> state machine (step, mode, formData)
app/components/auth/Stepper.tsx        -> régua de 5 passos (topo)
app/components/auth/WizardFooter.tsx   -> barra fixa (Cancelar/progresso/Continuar)
app/components/auth/steps/EmailStep.tsx
app/components/auth/steps/LoginPasswordStep.tsx
app/components/auth/steps/SignupPasswordStep.tsx
app/components/auth/steps/ProfileStep.tsx
app/components/auth/steps/BusinessStep.tsx
app/components/auth/steps/CompletionStep.tsx
```

## Fora de escopo (v1)

- Autenticação real (NextAuth, Supabase, API própria).
- OAuth do Google funcional.
- Persistência do progresso do wizard entre refreshes (URL state).
- Dashboard real (apenas placeholder).
- Recuperação de senha, verificação de e-mail por link mágico.
