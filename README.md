# Fast-Project 🔥⚡
Projeto feito com NodeJS.

*Desenvolvido por Santiago Fleitas e Matheus Ferreira.*

---
 (TUTORIAL - GIT)

1.	Como inicializar repositórios.
    
    O conceito de um repósitorio baseia-se básicamente em um "local" onde serão armazenados seus arquivos, esses arquvivos podem ser de diversos tipos ( 
    códigos, imagens, áudios, vídeos ou qualquer coisa relacionada a esse projeto).
    Para se iniciar um repositório, vá ao diretório escolhido para criar o repositório e execute o comando:

    `git init`
 
2. Como fazer o primeiro commit em um projeto.

   O comando **git commit** irá criar uma versão ou um ponto na linha do tempo do repositório. Esse comando serve tanto para notificar ao repositório que houve uma alteração ou inserção quanto a deleção de arquivos do repositório local.

   `git commit -m <mensagem>`
 

3.	Como realizar commit de mudanças.

   Um commit de mudanças irá se basear em um git commit comum + algum determinado comando, temos as seguintes opções:
   
   -a: incluirá automaticamente no seu commit todos os arquivos modificados.
   
   -- ammend: Caso voce esqueça de realizar adicionar algum arquivo oou alteração e quer realizar até mesmo a troca de mensagem do commit ( uso do -m ao dar git          commit). , porém esse comando deve ser utilizado com bastante cuidado, pois o mesmo não apenas altera o último commit, mas altera toalmente o commit que foi            criado a partir daquele momento.
   

4.	Como compartilhar suas mudanças com outras pessoas da equipe.

   Para poder compartilhar as suas mudanças com outras pessoas será necessário disponibilizar o repositório em alguma plataforma online que seja de fácil acesso para todos, dentre essas plataformas de repositórios online temos o **GitHub** e o **GitLab** por exemplo, onde podemos hospedar um repositório online e todos os desenvolvedores poderão desenvolver seus códigos em seus repositórios locais (em suas próprias máquinas) e mandar seus commits para a nuvem (repositório remoto).

![image](https://user-images.githubusercontent.com/69471715/163996511-cb8ec351-70e8-4d7c-95aa-d805e29f9a3d.png)


5.	Como desfazer alterações.

   Graças a Deus, no git é possivel desfazer alterações, porém ele possui 3 maneiras (git revert,git reeset,git reflog) e cada uma dessas maneiras atua de um jeito       específico na questão de desfazer alguma coisa no projeto em questão.
  
  GIT REVERT: Forma mais segura de “desfazer” um commit, pois ele não apaga o commit do histórico. O que ele faz é pegar as alterações do commit que você quer reverter               e criar um novo commit com essas alterações desfeitas. exemplo: "git revert 11a5b".
  
  GIT RESET: Caso de você precisar desfazer um commit que não é o commit mais recente e sim um mais antigo,o revert cria um novo commit que faz o reverso do commit                  especificado,ou seja,se o commit adicionou um arquivo, o revert remove, se editou uma linha,volta ao que era antes. Exemplo: "git revert 11a5b".
  
  GIT REFLOG Com este comando você consegue ter acesso aos logs de referências, também conhecidos como reflogs, de cada um dos commits. A partir disso, você consegue                deletar ou realizar outras operações com cada uma das referências.
   
6.	Como resolver conflitos de merge.
   O Conflito de merge irá acontecer quando o mesmo arquivo,trecho ou linha de código é modificada por duas versões diferentes e essãs versões podem ser                  automáticamente mescladas, ocasionando o conflito, esses conflitos podem acontecer tanto a mescmar branches, quanto commits dentro do própio branch. Porém existe      resolução para resolver conflitos do GIT:
   
   (1) deve-se localizar todos os arquivos que tiveram conflito, logo deve ser inspecionadas todas as mensagens de conflito que aparecem naquele momento.
   (2) Para sanar o conflito, é necessário alterar o arquivo que contenha apenas uma versão, assim, deletando o código incorreto e removendo marcações de conflito.
   
7.	Como usar branches.

   As branches são ramificações ou variações disponíveis no nosso projeto, fazendo uma analogia à série de televisão Loki, as branches são "diferentes linhas do tempo no universo", podemos separar branches para determinados objetivos, por exemplo, teremos uma branch chamada **main** que será a principal do nosso código, ela representa o resultado ou produto final e estável, porém podemos desenvolver paralelamente novas funcionalidades para o produto através *branches*, podemos criar uma branch que represente por exemplo uma melhoria no catálogo de produtos.
   
   Criando um branch: `git branch testing`
   Alternando entre branches: `git checkout testing (Para mudar para um branch existente, você executa o comando git checkout).`
   Criando e acessando imediatamente: `git checkout -b <nomeDaBranch>`
   
8.	Como encontrar bugs (git diff, git log, git bisect, git blame).

   Dentro do GIT, possuimos algumas ferramentas para poder ajudar na otimização do nosso tempo, atrás de possíveis problemas, para que não tenhamos que ficar              pesquisando bloco por bloco de código, logo podemos usar de 4 ferramentas:
   
   (1) Git Diff:é um comando Git multiuso que, quando executado, realiza uma função de comparação nas fontes de dados Git. Essas fontes de dados podem ser commits,                     ramificações, arquivos e outros. Este documento vai discutir solicitações comuns de git diff e comparações de padrões de fluxo de trabalho.
   
   (2) Git Log:é um comando em que  você pode visualizar o que vem sendo feito em uma determinada branch ou avaliar as alterações de um arquivo em especial,isso pode                  ser útil para você entender como alguma parte do código vem sendo evoluída, ou pode ajudar a avaliar os commits locais antes de dar git push e                          identificar possivéis bugs.
              
   (3) Git Bisect:pode ser utilizado para encontrar o commit que alterou qualquer propriedade do seu projeto; um commit que corrigiu um problema ou um commit que fez                     com que o desempenho de um benchmark melhorasse.
   
   (4) Git Blame:é um comando  versátil de resolução de problemas que tem opções de uso extensas. A função geral do git blame é a exibição de metadados do autor              anexados a linhas de commit específicas em um arquivo. Ele é usado para examinar os pontos específicos do histórico de um arquivo e obter contexto sobre quem          foi o último autor que modificou a linha.

9.	Como escolher determinados commits.
   git cherry-pick [--edit] [-n] [-m <parent-number>] [-s] [-x] [--ff] [-S[<keyid>]] <commit>…​git cherry-pick (--continue | --skip | --abort | --quit).
 
 git cherry-pick [--edit]
 git cherry-pick [--edit] [-n]
 git cherry-pick [-m <parent-number>]
 git cherry-pick [-m <parent-number>] [-s]
 git cherry-pick [-m <parent-number>] [-x]
 git cherry-pick [-m <parent-number>] [--ff]
 git cherry-pick [-m <parent-number>] [-S[<keyid>]]

 git cherry-pick (--continue).
 git cherry-pick ( --skip).
 git cherry-pick (--abort).
 git cherry-pick (--quit).
 
 
 
 
 
 
 
 
 



