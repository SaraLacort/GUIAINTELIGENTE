# Validação — 06/11/2026

- Build: aprovado, páginas HTML completas (sem depender de hidratação para conteúdo/links).
- Quatro testes automatizados aprovados: destinos e códigos; SEO/links e recursos internos; ausência de tags herdadas; análises e avisos comerciais.
- Browser desktop: composição e imagem conferidas visualmente; seletor retornou análise Flambra; navegação para análise testada.
- Browser em iframes com larguras de 360, 390 e 768 px: conteúdo sem overflow horizontal global (345/375/753 px úteis, descontadas barras). Captura visual de 360/390; 768 conferido por geometria DOM. Não equivale a teste em aparelhos reais.
- Filtro KGeN: ocultou Hub/Flambra e manteve KGeN; botão Todas restaurou os cartões.
- Seletor KGeN: retornou a análise correspondente; link gerado contém UTMs/gclid.
- Navegação para análise Flambra preservou utm_source=qa, utm_campaign=guia e gclid=teste no CTA externo.
- Convite KGeN permaneceu /invite/ffcb8034 com parâmetros acrescentados.
- Sem conversões Google: nenhuma tag instalada; eventos locais não são hits enviados.
- Recursos de acessibilidade: links semânticos, fieldset/legend, radios nativos, foco visível, skip link, reduced-motion, região de tabela rolável. Auditoria assistiva e percurso completo por teclado não executados.
- Imagens: carregamento verificado na home desktop/360; imagens fora da tela são lazy-loaded.
- Fluxos finais de conta, aprovação e pagamento nas plataformas não foram executados.
- Projetos anteriores: somente leitura, sem publicação em seus Workers.

Pendências editoriais: fonte oficial atual para detalhes do Hub; URL da landing independente KGeN. Estes limites aparecem na documentação e onde pertinente no site.

## Atualização Claru

Adicionado cartão, filtro, seletor, análise /analises/claru/ e coluna de comparação. Fonte oficial conferida em 06/11/2026. Contato editorial definido como eximiaeduc@gmail.com. Build e testes executados novamente.
