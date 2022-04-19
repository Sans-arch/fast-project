# Fast-Project 🔥⚡
Projeto feito com NodeJS.

Desenvolvido por Santiago Fleitas e Matheus Ferreira.

 (TUTORIAL - GIT)

1.	Como inicializar repositórios.
    
    O conceito de um repósitorio se baseia  básicamente em  um "local" onde será armazenado seus arquivos , onde esses arquvivos podem ser de variados casos ( 
    códigos, imagens, áudios, vídeos ou qualquer coisa relacionada a esse projeto).Para se iniciar um repositório, vá em Create a repository (criar um repositório)         para começar um novo projeto.
 
2. Como fazer o primeiro commit em um projeto.

   O Git commit vai ser um comando a ser utilizado a vida toda, caso você não queria perder seus projetos, deve sempre se atentar,caso ao estar alterando/modificando o 
   o seu projeto, deve-se sempre se atentar em qualquer modificação em dar o comando GIT COMMIT (terminal) para salvar seu trabalho e não passar uma raiva num futuro      distante. 
 

3.	Como realizar commit de mudanças.

   Um commit de mudanças irá se basear em um git commit comum + algum determinado comando, temos as seguintes opções:
   
   -a: incluirá automaticamente no seu commit todos os arquivos modificados.
   
   -- ammend: Caso voce esqueça de realizar adicionar algum arquivo oou alteração e quer realizar até mesmo a troca de mensagem do commit ( uso do -m ao dar git      commit). , porém esse comando deve ser utilizado com bastante cuidado, pois o mesmo não apenas altera o último commit, mas altera toalmente o commit que foi      criado a partir daquele momento.
   

4.	Como compartilhar suas mudanças com outras pessoas da equipe.

   O git possui uma ferramenta responsável por facilitar a questão de compartilhar mudanças com um número de pessoas, sejam eles uma dupla,trio, quarteto e até um        grupo com N pessoas. O nome da ferramenta é o BRANCH, ele se caracteriza como um ponteiro para alterações feitas nos arquivos de um projeto,é bastante util no          conceito de alterar/corrigir alguma coisa do projeto e querer preservar o código base. Para poder fazer um compartilhamento de mudanças com segurança, deve- se 
   seguir os seguintes passos:
   
   (1) - Criar um novo Branch para o trabalho.
   (2) - Confirmar alterações.
   (3) - Envie por push o Branch para compartilhá-lo com a equipe.
   
5.	Como desfazer alterações.

   Graças a Deus, no git é possivel desfazer alterações, porém ele possui 3 maneiras (git revert,git reeset,git reflog) e cada uma dessas maneiras atua de um jeito       específico na questão de desfazer alguma coisa no projeto em questão.
  
  GIT REVERT: Forma mais segura de “desfazer” um commit, pois ele não apaga o commit do histórico. O que ele faz é pegar as alterações do commit que você quer reverter               e criar um novo commit com essas alterações desfeitas. exemplo: "git revert 11a5b".
  
  GIT RESET: Caso de você precisar desfazer um commit que não é o commit mais recente e sim um mais antigo,o revert cria um novo commit que faz o reverso do commit                  especificado,ou seja,se o commit adicionou um arquivo, o revert remove, se editou uma linha,volta ao que era antes. Exemplo: "git revert 11a5b".
  
  GIT REFLOG Com este comando você consegue ter acesso aos logs de referências, também conhecidos como reflogs, de cada um dos commits. A partir disso, você consegue                deletar ou realizar outras operações com cada uma das referências.
   
6.	Como resolver conflitos de merge.
   
7.	Como usar branches.
   
8.	Como encontrar bugs (git diff, git log, git bisect, git blame).


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
 
 
 
 
 
 
 
 
 



