# Guia Inteligente — Renda Extra com IA

Projeto independente que reúne Hub, Flambra, KGeN e Claru em uma experiência editorial com comparativo, análises, artigos e chamadas para cadastro. Nenhum projeto anterior ou Worker foi alterado.

## Desenvolvimento

Requer Node.js 22 ou mais recente. Não há dependências externas de npm.

```powershell
npm.cmd install
npm.cmd run build
npm.cmd test
node scripts/preview.mjs
```

Abra http://localhost:8080. Pare o preview com Ctrl+C quando terminar. Em Linux/macOS use `npm` em vez de `npm.cmd`.

## Organização

- `src/config.mjs`: fontes, destinos, convite KGeN, referência Flambra, domínio e contato.
- `src/style.css`: identidade visual responsiva.
- `src/app.js`: filtros, seletor, atribuição de campanha e eventos locais.
- `src/assets/`: imagens ilustrativas geradas para o projeto anterior, reutilizadas, e fonte Rethink Sans com licença OFL.
- `scripts/build.mjs`: geração de HTML completo, metadados, sitemap e páginas editoriais.
- `scripts/test.mjs`: integridade de páginas/links, indicação e ausência de tags herdadas.
- `dist/`: versão estática pronta para hospedagem.

Esta página editorial não requer backend nem o stack SSR dos funis individuais. Usamos HTML gerado, CSS e JavaScript para evitar dependências desnecessárias e a cadeia vulnerável reportada no SITEKGEN. Os projetos anteriores mantêm sua arquitetura.

## Destinos

- Hub Casa: https://guia-ia.hubia.workers.dev/
- Hub Trabalho: https://guia-ia.hubia.workers.dev/trabalho
- Flambra: https://guia-flambra.hubia.workers.dev/
- KGeN: https://www.kgen.quest/invite/ffcb8034
- Claru: https://iaclaru.pages.dev/
- Fonte oficial Claru: https://claru.ai/pt-br/for-annotators

O endereço público da landing independente KGeN ainda não foi confirmado. Por isso, o CTA utiliza o convite fornecido. Para mudar, atualize somente `config.destinations.kgen`. O convite original permanece na configuração.

A referência Flambra é preservada no projeto de destino. O guia novo envia o visitante à landing existente, sem substituir seu questionário. A integridade do fluxo após o cadastro nas plataformas externas não foi testada.

UTMs e gclid são mantidos durante a sessão e adicionados aos links. Os códigos de convite não são sobrescritos. Se a persistência do navegador falhar, a navegação atual continua funcionando sem armazenamento.

## Medição

Nenhuma tag Google é instalada. Não há conversão de cadastro no clique de saída deste guia. Eventos locais em dataLayer:

- `guia_platform_click`: plataforma, destino, atribuição e dispositivo.
- `guia_filter_selected`: filtro escolhido.
- `guia_finder_completed`: sugestão de leitura escolhida.

Estes eventos só ficam no navegador nesta versão. Para medir em produção, configurar uma única implementação de tags para a nova campanha, consentimento aplicável e seus próprios IDs; nunca reutilizar automaticamente conversões dos funis individuais.

## Antes de divulgar amplamente

1. Contato editorial configurado: eximiaeduc@gmail.com.
2. Reconfirmar informações oficiais do Hub. O guia atual não afirma remuneração nem kit gratuito por falta de reconfirmação oficial nesta edição.
3. Informar a URL da landing KGeN, se ela substituir o convite direto.
4. Se usar outro domínio, atualizar `siteUrl` e executar o build.
5. Manter revisão periódica das fontes; o conteúdo é documental e não simula testes de pagamento.

## Publicação

A versão de revisão é hospedada separadamente pelo Sites com acesso privado. O código e a configuração de hospedagem deste projeto não reutilizam os Workers existentes.

Para hospedar a versão estática manualmente em outro Worker, use `wrangler.jsonc`:

```powershell
npm.cmd run build
npx wrangler deploy
```

O nome fixo é `guia-inteligente-renda-extra`. Não altere para `guia-ia`, `guia-flambra` ou `guia-kgen`. Essa publicação manual não foi executada.
