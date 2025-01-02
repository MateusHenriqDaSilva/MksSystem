
type IContentBlog = {
    id: string
    title: string
    description: string
    link?: string
    post: MyNestedObject[]
}

type MyNestedObject = {
    header?: string
    text: string
    code?: string
    img?: any
}

const link = "/programacao/postagem/"
export const contentBlog: IContentBlog[] = [
    {
        id: '21',
        title: "C#: Desvende a essência da simplicidade ao simplificar sistemas complexos com a elegância e eficiência das fachadas, abrindo caminho para uma experiência harmoniosa e descomplicada.",
        description: "simplificar sistemas complexos usando fachadas é proporcionar uma abordagem eficiente e acessível para lidar com a complexidade inerente aos sistemas.",
        link: link,
        post: [
            {
                text: "interfaces simplificadas e coesas, as fachadas permitem que os usuários interajam com o sistema de forma intuitiva, ocultando a complexidade dos componentes internos. Isso resulta em maior usabilidade, manutenção simplificada e evolução facilitada do sistema, capacitando indivíduos e organizações a enfrentar desafios complexos com confiança e eficiência.",
                code: `using System;

                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\tConsole.WriteLine("Sistema de punição");
                
                            \t\t\t// Jogador 1
                            \t\t\tJogador Kazak = new Jogador("Kazak", 5000, true);
                
                            \t\t\t// Iniciando verificação de status
                            \t\t\tVerificaStatus verificaStatus = new VerificaStatus();
                            \t\t\tbool aprovadoStatus = verificaStatus.JaFoiViolento(Kazak);
                
                            \t\t\tstring status;
                            \t\t\tstring reacao;
                
                            \t\t\tif (!aprovadoStatus)
                            \t\t\t{
                                \t\t\t\tstatus = "Protegido";
                                \t\t\t\treacao = "Pode entrar em zonas seguras";
                            \t\t\t}
                            \t\t\telse
                            \t\t\t{
                                \t\t\t\tstatus = "Violento";
                                \t\t\t\treacao = "Não pode entrar em zonas seguras";
                            \t\t\t}
                
                            \t\t\tConsole.WriteLine($"{Kazak.nome} aplicacao status: {status}");
                            \t\t\tConsole.WriteLine($"Relembrando sua reacao: {reacao}");
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"Message: {ex.Message}");
                        \t\t}
                    \t}
                }
                
                class Jogador
                {
                    \tpublic string nome;
                    \tpublic double dinheiro;
                    \tpublic bool foiStatusViolento;
                
                    \tpublic Jogador(string nome, double dinheiro = 10000, bool foiStatusViolento = false)
                    \t{
                        \t\tthis.nome = nome;
                        \t\tthis.dinheiro = dinheiro;
                        \t\tthis.foiStatusViolento = foiStatusViolento;
                    \t}
                }
                
                \tclass VerificaStatus
                \t{
                    \t\tpublic bool JaFoiViolento(Jogador jogador)
                    \t\t{
                        \t\t\tConsole.WriteLine($"Verifica se {jogador.nome} já foi violento");
                        \t\t\treturn jogador.foiStatusViolento;
                    \t\t}
                \t}
                
                `
            }
        ]
    }, {
        id: '20',
        title: "C#: Com os hooks, mergulhe em um balé de código, onde componentes dançam em perfeita sincronia, criando uma sinfonia de eficiência e reutilização, cativando todos que testemunham a magia dos hooks em ação.",
        description: "Trazer funcionalidades avançadas e uma melhor organização do código. Eles permitem que os desenvolvedores extraiam e reutilizem lógicas comuns entre os componentes de forma mais elegante e eficiente.",
        link: link,
        post: [
            {
                text: `é possível gerenciar o estado de um componente, fazer requisições a APIs, manipular o ciclo de vida dos componentes e lidar com outros aspectos importantes do desenvolvimento de interfaces de usuário.`,
            }, {
                text: "ferramenta poderosa para desenvolvedores React, proporcionando uma maneira mais eficiente e cativante de lidar com o estado, o ciclo de vida e outras funcionalidades essenciais no desenvolvimento de aplicações web modernas.",
                code: `using System;

                // Iniciando Programa
                // Classe abstrata chamada RoboCompras
                // Funções: visitarLugar -> visitar -> lugar
                // Funções: proximoPasso -> executar -> passos
                // Funções: gastosAteOLugar -> valor -> gasto
                    \t// verificaSefoiGeradoCupom -> verifica -> cupom
                    \t// pegarCupom -> pegar -> cupom
                // Funções: carregarProduto -> pegar -> produto
                
                /* Classes -> derivadas -> override */
                // SelecionarProduto -> selecionar -> produto
                // ComprarProduto -> comprar -> Produto
                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\tConsole.WriteLine("--- Demonstração do método utilizando template");
                            \t\t\tConsole.WriteLine("--- Criaremos o método RoboCompras -> Frutas ---");
                            \t\t\tRoboCompras roboCompras = new Maca();
                            \t\t\troboCompras.ComprarProduto();
                            \t\t\tConsole.WriteLine(" Criando um novo robô ");
                            \t\t\troboCompras = new Banana();
                            \t\t\troboCompras.ComprarProduto();
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"Mensagem: {ex}");
                        \t\t}
                    \t}
                }
                
                // <Sumario>
                // ComprarProduto -> Estrutura dos passo a passo
                // </Sumario>
                public abstract class RoboCompras
                {
                    \t// passo 1:
                    \tprotected void visitarMercado()
                    \t{
                        \t\tConsole.WriteLine("1. Vá visitar o mercado agora por gentileza");
                    \t}
                
                    // passo 2:
                    protected abstract void selecionarProduto();
                
                    // passo 3:
                    protected void gastosAteOLugar()
                    {
                        \tConsole.WriteLine("3. Gerando contas de pagamento");
                    }
                
                    // passo 4:
                    protected void carregarProduto()
                    {
                        \tConsole.WriteLine("4. O Produto foi pego");
                    }
                
                    // Método Completo
                    public void ComprarProduto()
                    {
                        \t// Passo 1:
                        \tvisitarMercado();
                
                        \t// Passo 2:
                        \tselecionarProduto();
                        \tif (verificaSefoiGeradoCupom())
                        \t{
                            \t\tpegarCupom();
                        \t}
                
                        \t// Passo 3:
                        \tgastosAteOLugar();
                
                        \t// Passo 4:
                        \tcarregarProduto();
                    }
                
                    protected virtual void pegarCupom()
                    {
                        \t\tConsole.WriteLine("\t Guia do cupom foi Pega");
                    }
                
                    protected virtual bool verificaSefoiGeradoCupom()
                    {
                        \t\treturn false;
                    }
                }
                
                // Criando a classe completa: Maca
                public class Maca : RoboCompras
                {
                    \tprotected override bool verificaSefoiGeradoCupom()
                    \t{
                        \t\treturn true;
                    \t}
                
                    \tprotected override void selecionarProduto()
                    \t{
                        \t\tConsole.WriteLine("2. Pegando Maçã");
                    \t}
                }
                
                // Criando a classe completa: Banana
                public class Banana : RoboCompras
                {
                    \tprotected override void selecionarProduto()
                    \t{
                        \t\tConsole.WriteLine("2. Pegando banana");
                    \t}
                }
                `
            }
        ]
    }, {
        id: '19',
        title: "C#: Desvende o potencial ilimitado do seu código, adicionando recursos com maestria através do envoltório mágico dos wrappers!",
        description: "é uma técnica poderosa na programação que permite estender a funcionalidade de um objeto ou componente existente sem modificar seu código original.",
        link: link,
        post: [
            {
                text: `Os wrappers funcionam como intermediários entre o código existente e as novas funcionalidades desejadas. Eles encapsulam o objeto original e fornecem uma interface adicional, permitindo a adição de novos métodos, propriedades ou comportamentos.`,
            }, {
                text: "Abraçe o poder da modularidade e flexibilidade ao separar o código mutável utilizando a mágica arte das fábricas!",
                code: `using System;

                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\t//  Criando Leao
                            \t\t\tFabricarMonstro fabricarMonstro = new FabricarLeao();
                            \t\t\t7u8IMonstro monstro = fabricarMonstro.fazerMonstro("black");
                            \t\t\tmonstro.mostrarMonstro();
                            \t\t\t// Criando tigres
                            \t\t\tfabricarMonstro = new FabricarTigre();
                            \t\t\tmonstro = fabricarMonstro.fazerMonstro("blue");
                            \t\t\tmonstro.mostrarMonstro();
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"Mensagem: {ex.Message}");
                        \t\t}
                    \t}
                }
                
                // Regiao dos monstros
                interface IMonstro
                {
                    \t\tvoid mostrarMonstro();
                }
                
                class Tigre : IMonstro
                {
                    \tpublic Tigre()
                    \t{
                        \t\tConsole.WriteLine("\t O tigre foi criado.");
                    \t}
                
                    \tpublic void mostrarMonstro()
                    \t{
                        \t\tConsole.WriteLine("\"ROAAAAAAAAAARRRRRRRR\"");
                    \t}
                }
                
                class Leao : IMonstro
                {
                    \tpublic Leao()
                    \t{
                        \t\tConsole.WriteLine("\t Leao foi criado.");
                    \t}
                
                    \tpublic void mostrarMonstro()
                    \t{
                        \t\tConsole.WriteLine("\t Uf!! Roarddss!!");
                    \t}
                }
                
                // Regiao de fabricacao
                abstract class FabricarMonstro
                {
                    \tpublic IMonstro fazerMonstro(string cor)
                    \t{
                        \t\tConsole.WriteLine($"\t O mosntro criado com a cor: {cor}");
                        \t\tIMonstro monstro = criarMonstro();
                        \t\treturn monstro;
                    \t}
                
                    \tpublic abstract IMonstro criarMonstro();
                }
                
                class FabricarTigre : FabricarMonstro
                {
                    \tpublic override IMonstro criarMonstro()
                    \t{
                        \t\treturn new Tigre();
                    \t}
                }
                
                class FabricarLeao : FabricarMonstro
                {
                    \tpublic override IMonstro criarMonstro()
                    \t{
                        \t\treturn new Leao();
                    \t}
                }
                `
            }
        ]
    }, {
        id: '18',
        title: "C#: Desvende o poder da modularidade: Crie com maestria usando fábricas!",
        description: "Com a técnica das Fábricas, você ganha flexibilidade, escalabilidade e uma base sólida para aprimorar o seu código sem medo. Prepare-se para dominar o caos e criar um software resiliente e elegante. Separe, crie e transforme o seu código usando Fábricas!",
        link: link,
        post: [
            {
                text: `Imagine um mundo onde o código mutável não é mais um emaranhado de incertezas e dores de cabeça. Com a técnica "Separate Changeable Code Using Factories" (Separe o Código Mutável Usando Fábricas), você desvenda os segredos para desvincular o indomável.`,
            }, {
                text: "Abraçe o poder da modularidade e flexibilidade ao separar o código mutável utilizando a mágica arte das fábricas!",
                code: `using System;

                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\t//  Criando Leao
                            \t\t\tFabricarMonstro fabricarMonstro = new FabricarLeao();
                            \t\t\t7u8IMonstro monstro = fabricarMonstro.fazerMonstro("black");
                            \t\t\tmonstro.mostrarMonstro();
                            \t\t\t// Criando tigres
                            \t\t\tfabricarMonstro = new FabricarTigre();
                            \t\t\tmonstro = fabricarMonstro.fazerMonstro("blue");
                            \t\t\tmonstro.mostrarMonstro();
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"Mensagem: {ex.Message}");
                        \t\t}
                    \t}
                }
                
                // Regiao dos monstros
                interface IMonstro
                {
                    \t\tvoid mostrarMonstro();
                }
                
                class Tigre : IMonstro
                {
                    \tpublic Tigre()
                    \t{
                        \t\tConsole.WriteLine("\t O tigre foi criado.");
                    \t}
                
                    \tpublic void mostrarMonstro()
                    \t{
                        \t\tConsole.WriteLine("\"ROAAAAAAAAAARRRRRRRR\"");
                    \t}
                }
                
                class Leao : IMonstro
                {
                    \tpublic Leao()
                    \t{
                        \t\tConsole.WriteLine("\t Leao foi criado.");
                    \t}
                
                    \tpublic void mostrarMonstro()
                    \t{
                        \t\tConsole.WriteLine("\t Uf!! Roarddss!!");
                    \t}
                }
                
                // Regiao de fabricacao
                abstract class FabricarMonstro
                {
                    \tpublic IMonstro fazerMonstro(string cor)
                    \t{
                        \t\tConsole.WriteLine($"\t O mosntro criado com a cor: {cor}");
                        \t\tIMonstro monstro = criarMonstro();
                        \t\treturn monstro;
                    \t}
                
                    \tpublic abstract IMonstro criarMonstro();
                }
                
                class FabricarTigre : FabricarMonstro
                {
                    \tpublic override IMonstro criarMonstro()
                    \t{
                        \t\treturn new Tigre();
                    \t}
                }
                
                class FabricarLeao : FabricarMonstro
                {
                    \tpublic override IMonstro criarMonstro()
                    \t{
                        \t\treturn new Leao();
                    \t}
                }
                `
            }
        ]
    }, {
        id: '17',
        title: "C#: O princípio DRY sugere que cada parte do conhecimento em um sistema de software deve ter uma representação única, uma única fonte confiável e autoritativa.",
        description: "DRY Principle enfatiza a importância de evitar a repetição desnecessária de informações ou lógica em um programa. Quando você repete código em várias partes do seu sistema, aumenta a complexidade, a dificuldade de manutenção e o risco de introduzir erros. Além disso, torna o código mais difícil de ser alterado e atualizado no futuro.",
        link: link,
        post: [
            {
                text: `O princípio DRY nos ensina que, na programação e em muitos aspectos da vida, evitar a repetição desnecessária nos torna mais eficientes, nos poupa tempo e nos permite criar com consistência. O DRY é como um molde mágico que nos ajuda a esculpir nossas criações com maestria, economizando esforços e nos permitindo brilhar em tudo o que fazemos!`,
            }, {
                text: "Quando a sede da simplicidade encontra a elegância da eficiência, nasce o poder transformador do princípio Dry.",
                code: `using System;

                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\tConsole.WriteLine("--- Demonstração do princípio DRY ---");
                            \t\t\tGameInformacao gameInformacao = new("SuperGame");
                            \t\t\tGamePreco gamePreco = new();
                            \t\t\tsuperGame.MostrarPreco();
                            \t\t\tGame game = new(gameInformacao, gamePreco);
                            \t\t\tgame = new Game(gameInformacao, gamePreco);
                            \t\t\tgame.SobreJogo();
                            \t\t\tgame.MostrarPreco();
                            \t\t\tgame.MostrarPrecoComDesconto();
                            \t\t\tsuperGame.MostrarPrecoComDesconto();
                            \t\t\tsuperGame.MostrarPrecoAntesDoDesconto();
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"mensagem {ex}");
                        \t\t}
                    \t}
                }
                
                public class GameInformacao
                {
                    \treadonly string empresaNome { get; set; }
                    \treadonly string gameNome { get; set; }
                    \treadonly string version { get; set; }
                    \treadonly double anosNoMercado { get; set; }
                
                    \tpublic GameInformacao(string gameName)
                    \t{
                        \t\tempresaNome = "SuperGame da empresa MDJV";
                        \t\tgameNome = "SuperGame";
                        \t\tversion = "1.0";
                        \t\tanosNoMercado = 10;
                    \t}
                
                    \tpublic void MostrarPrecoComDesconto()
                    \t{
                        \t\tConsole.WriteLine("\nDetalhes de preço do jogo SuperGame da empresa MDJV:");
                        \t\tConsole.WriteLine($"Versão: 1.0\nPreço: {atualPreco}");
                    \t}
                
                    \tpublic void SobreJogo()
                    \t{
                        \t\tConsole.WriteLine($"\n Game name: {gameNome}");
                        \t\tConsole.WriteLine($"Ano no mercado: {anosNoMercado}");
                        \t\tConsole.WriteLine($"version ocorrencia: {version}");
                        \t\tConsole.WriteLine($"essa é a compania {empresaNome}");
                    \t}
                    public void MostrarPrecoAntesDoDesconto()
                    {
                        \tConsole.WriteLine("\nDetalhes de preço do jogo SuperGame da empresa MDJV:");
                        \tConsole.WriteLine("Desconto aplicado:");
                        \tConsole.WriteLine($"Jogo: {gameNome}\nVersão: {version} \nDesconto: {descontoPreco}");
                    }
                }
                
                class GamePreco
                {
                    \tpublic double Preco { get; set; }
                    \tpublic double DescontoPreco { get; set; }
                    \tpublic void MostrarPreco()
                    \t{
                        \t\tPreco = 1000;
                        \t\tdescontoPreco = 800;
                    \t}
                }
                
                class Game
                {
                    \treadonly string empresaNome;
                    \treadonly string gameNome;
                    \treadonly double minimoIdade;
                    \treadonly string version;
                    \treadonly double atualPreco;
                    \treadonly double descontoPreco;
                    \tpublic Game(GameInformacao gameInformacao, GamePreco gamePreco)
                    \t{
                        \t\tempresaNome = gameInformacao.empresaNome;
                        \t\tgameNome = gameInformacao.gameNome;
                        \t\tversion = gameInformacao.version;
                        \t\tanosNoMercado = gameInformacao.minimoIdade;
                        \t\tatualPreco = gamePreco.Preco;
                        \t\tdescontoPreco = gamePreco.DescontoPreco;
                    \t}
                
                    \tpublic void SobreOGame(){
                        \t\tConsole.WriteLine($"Game name: {gameNome}");
                        \t\tConsole.WriteLine($"Anos da empresa: {anosNoMercado}");
                        \t\tConsole.WriteLine($"Versão: {versao}");
                        \t\tConsole.WriteLine($"Nome da empresa: {empresaNome}");
                    \t}
                
                    \tpublic void mostrarPreco(){
                        \t\tConsole.WriteLine($"{empresaNome} {gameNome} preco detalhes: ");
                    \t}
                
                    \tpublic void MostrarPrecoComDesconto(){
                        \t\tConsole.WriteLine($"\n {empresaNome} oferta de desconto BlackFriday");
                        \t\tConsole.WriteLine($"\n Detalhes do preco com desconto");
                        \t\tConsole.WriteLine($"\n {gameNome}  versao: {versao} Desconto Preco: {descontoPreco} ");
                    \t}
                }
                `
            }
        ]
    }, {
        id: '16',
        title: "C# PARTE 5: Princípio da Inversão de Dependência - DIP",
        description: "DIP é um princípio da programação orientada a objetos que estabelece que os módulos de alto nível não devem depender diretamente dos módulos de baixo nível. Em vez disso, ambos devem depender de abstrações",
        link: link,
        post: [
            {
                text: `No mágico mundo do código, o Princípio da Inversão de Dependência (DIP) é como a dança encantada que permite que os módulos se libertem das amarras das implementações concretas e se movam harmoniosamente com a flexibilidade das abstrações`,
                code: `using System;

                interface IDeposito
                {
                    \tvoid salvarNoDeposito(string id);
                }
                
                class Deposito : IDeposito
                {
                    \treadonly IDeposito deposito;
                
                    \tpublic Deposito(IDeposito deposito)
                    \t{
                        \t\tthis.deposito = deposito;
                    \t}
                
                    \tpublic void salvarNoDeposito(string id)
                    \t{
                        \t\tConsole.WriteLine($"O id: {id} salvo no Deposito");
                    \t}
                }
                
                class DepositoDinheiro : IDeposito
                {
                    \tpublic void salvarNoDeposito(string id)
                    \t{
                        \t\tConsole.WriteLine($"O id: {id} está salvo no depósito");
                    \t}
                }
                
                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\tIDeposito deposito = new Deposito(null);
                            \t\t\tDeposito usarDeposito = new Deposito(deposito);
                            \t\t\tusarDeposito.salvarNoDeposito("0001");
                
                            \t\t\t// Usando deposito
                            \t\t\tdeposito = new DepositoDinheiro();
                            \t\t\tusarDeposito = new Deposito(deposito);
                            \t\t\tusarDeposito.salvarNoDeposito("0002");
                        \t\t}
                        \t\tcatch (Exception ex)
                        \t\t{
                            \t\t\tConsole.WriteLine($"Error: {ex}");
                        \t\t}
                    \t}
                }`
            },
        ]
    }, {
        id: '15',
        title: "C#: PARTE 4: ISP é um princípio da programação orientada a objetos que promove a divisão de interfaces em partes menores e coesas",
        description: "O ISP declara que as interfaces devem ser específicas para os requisitos de cada cliente, evitando que as classes dependam de métodos que não são relevantes para elas. Em vez de ter uma única interface abrangente que abarque todos os métodos possíveis, o ISP incentiva a criação de várias interfaces mais especializadas",
        link: link,
        post: [
            {
                text: `Imagine que você está montando um quebra-cabeça incrível com várias peças. O Princípio da Segregação de Interfaces (ISP) é como dividir as peças em conjuntos menores e temáticos, para que você possa escolher apenas os conjuntos de peças que se encaixam no seu quebra-cabeça e descartar as peças que não são relevantes. Dessa forma, você evita bagunça, economiza tempo e cria uma imagem perfeita do seu quebra-cabeça, sem se preocupar com peças fora do lugar.`,
                code: `using System;
                        using System.Collections.Generic;

                        interface IMagia
                        {
                            \tvoid DarMagia();
                        }

                        interface ICanalizarMagia
                        {
                            \tvoid CanalizarMagia();
                        }

                        interface IEncherVida
                        {
                            \tvoid EncherVida();
                        }

                        class EncherMetadeDaVida : IEncherVida
                        {
                            \tpublic void EncherVida()
                            \t{
                                \t\tConsole.WriteLine("Recuperando metade da vida");
                            \t}
                        }

                        class EncherVidaToda : IEncherVida
                        {
                            \tpublic void EncherVida()
                            \t{
                                \t\tConsole.WriteLine("Recuperando a vida toda");
                            \t}
                        }

                        class MagiaAvancada : IMagia, ICanalizarMagia
                        {
                            \tpublic void DarMagia()
                            \t{
                                \t\tConsole.WriteLine("Usando magia avançada");
                            \t}

                            \tpublic void CanalizarMagia()
                            \t{
                                \t\tConsole.WriteLine("Canalizando magia");
                            \t}
                        }

                        class MagiaBasica : IMagia
                        {
                            \tpublic void DarMagia()
                            \t{
                                \t\tConsole.WriteLine("Usando magia básica");
                            \t}
                        }

                        class Program
                        {
                            \tstatic void Main(string[] args)
                            \t{
                                \t\ttry
                                \t\t{
                                    \t\t\tConsole.WriteLine("--- Demonstração do ISP ---");
                                    \t\t\tIMagia magia = new MagiaAvancada();
                                    \t\t\tmagia.DarMagia();
                                    \t\t\t((ICanalizarMagia)magia).CanalizarMagia();

                                    \t\t\tList<IMagia> magias = new List<IMagia>
                                    \t\t\t{
                                        \t\t\t\tnew MagiaAvancada(),
                                        \t\t\t\tnew MagiaBasica()
                                    \t\t\t};

                                    \t\t\tforeach (IMagia magiaItem in magias)
                                    \t\t\t{
                                        \t\t\t\tmagiaItem.DarMagia();
                                    \t\t\t}
                                \t\t}
                                \t\tcatch (Exception ex)
                                \t\t{
                                    \t\t\tConsole.WriteLine($"Error: {ex}");
                                \t\t}
                            \t}
                        }
                `
            },
        ]
    }, {
        id: '14',
        title: "C#: PARTE 3: O Princípio da Substituição de Liskov (LSP)",
        description: "LSP diz que você pode substituir uma classe base por qualquer uma de suas classes derivadas sem quebrar o funcionamento do programa",
        link: link,
        post: [
            {
                header: `Se um objeto parece um pato, nada como um pato e faz quack como um pato, então pode ser tratado como um pato!`,
                text: `LSP afirma que se uma classe A é uma subclasse de uma classe B, então A deve ser capaz de substituir B em qualquer lugar onde B é usado, sem que isso cause comportamentos indesejados ou erros`,
                code: `using System;
                using System.Collections.Generic;
                
                interface MineracaoAnterior
                {
                    \tvoid CarregarMineracaoAnterior();
                }
                
                interface ProcessarNovaMineracao
                {
                    \tvoid ProcessarNovaMineracao();
                }
                
                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \ttry
                        \t{
                            \t\tConsole.WriteLine("--- Demonstração LSP ---");
                            \t\tAjudarJogador ajudar = new AjudarJogador();
                            \t\t// Instanciando 2 registros de jogador
                            \t\tRegistrarJogador jogador1 = new RegistrarJogador("jogador1");
                            \t\tRegistrarJogador jogador2 = new RegistrarJogador("jogador2");
                            \t\t// Chamando a classe AjudarJogador e adicionando jogadores
                            \t\tajudar.AdicionarJogador(jogador1);
                            \t\tajudar.AdicionarJogador(jogador2);
                            \t\t// Processando mineração
                            \t\tajudar.MostrarMineracaoAnterior();
                            \t\tajudar.ProcessarNovaMineracao();
                            \t\t// Adicionando jogador convidado para minerar
                            \t\tJogadorConvidado jogadorConvidado1 = new JogadorConvidado();
                            \t\tajudar.AdicionarJogador(jogadorConvidado1);
                            \t}
                            \tcatch (Exception ex)
                            \t{
                                \t\tConsole.WriteLine($"Error: {ex}");
                                \t}
                    }
                }
                
                class RegistrarJogador : MineracaoAnterior, ProcessarNovaMineracao
                {
                    \treadonly string nome;
                
                    \tpublic RegistrarJogador(string nome)
                    \t{
                        \t\tthis.nome = nome;
                        \t}
                
                        \tpublic void CarregarMineracaoAnterior()
                        \t{
                            \t\tConsole.WriteLine($"Recuperando últimos detalhes de mineração de {nome}");
                            \t}
                
                            \tpublic void ProcessarNovaMineracao()
                            \t{
                                \t\tConsole.WriteLine($"Processando requisição de ocorrência de mineração para {nome}");
                                \t}
                }
                
                class AjudarJogador
                {
                    \treadonly List<MineracaoAnterior> jogadores = new List<MineracaoAnterior>();
                
                    \tpublic void AdicionarJogador(MineracaoAnterior jogador)
                    \t{
                        \t\tjogadores.Add(jogador);
                        \t}
                
                        \tpublic void MostrarMineracaoAnterior()
                        \t{
                            \t\tforeach (MineracaoAnterior jogador in jogadores)
                            \t{
                                \t\tjogador.CarregarMineracaoAnterior();
                                \t\tConsole.WriteLine("-----------");
                                \t}
                    }
                
                    public void ProcessarNovaMineracao()
                    {
                        \tforeach (ProcessarNovaMineracao jogador in jogadores)
                        \t{
                            \t\tjogador.ProcessarNovaMineracao();
                            \t\tConsole.WriteLine("------------");
                            \t}
                    }
                }
                
                class JogadorConvidado : MineracaoAnterior, ProcessarNovaMineracao
                {
                    \treadonly List<MineracaoAnterior> mineracaoAnterior = new List<MineracaoAnterior>();
                    \treadonly List<ProcessarNovaMineracao> processarNovaMineracao = new List<ProcessarNovaMineracao>();
                
                    \tpublic void CarregarMineracaoAnterior()
                    \t{
                        \t\tConsole.WriteLine("Carregando mineração anterior de jogador convidado");
                        \t}
                
                        \tpublic void ProcessarNovaMineracao()
                        \t{
                            \t\tConsole.WriteLine("Processando nova mineração para jogador convidado");
                            \t}
                }
                `
            },
        ]
    }, {
        id: '13',
        title: "C#: PARTE 2: OCP - O Princípio Aberto/Fechado (Open/Closed Principle - OCP)",
        description: "é um dos princípios do SOLID, um conjunto de princípios de design de software que visam promover a construção de código mais modular, extensível e de fácil manutenção.",
        link: link,
        post: [
            {
                text: `Um produto mais flexível, fácil de manter e adaptável às necessidades dos clientes. Você mantém o softwate fechado para modificações e aberto para extensões, permitindo que ele evolua e cresça sem comprometer sua integridade e qualidade`,
                code: `using System;
                using System.Collections.Generic;
                
                // • Princípio de Responsabilidade Única (SRP)
                // • Princípio Aberto/Fechado (OCP)
                // • Princípio da Substituição de Liskov (LSP)
                // • Princípio de Segregação de Interface (ISP)
                // • Princípio de Inversão de Dependência (DIP) 
                
                /*é um dos princípios do SOLID, um conjunto de princípios de design de software que visam promover a construção de código mais modular, extensível e de fácil manutenção.
                
                O OCP estabelece que uma entidade de software (uma classe, 
                módulo, função, etc.) deve estar aberta para extensão, mas 
                fechada para modificação. Em outras palavras, o comportamento de
                uma entidade deve poder ser estendido sem a necessidade de alterar 
                seu código fonte*/
                
                // OCP EXAMPLE: 
                // Criar uma classe monstro onde monstro tem uma caixa de detalhes, tem seu nivel de conhecimento, e um ID Auto-Generativo
                
                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t{
                            \t\t\tConsole.WriteLine("*** Demonstração do OCP ***");
                            \t\t\tList<Jogador> guerreiroJogadores = Ajudante.CriarListaDeJogadorArqueiro();
                            \t\t\tList<Jogador> arqueiroJogadores = Ajudante.CriarListaDeJogadorGuerreiro();
                            \t\t\tConsole.WriteLine("=== Resultados ===");
                            \t\t\tforeach (Jogador jogador in guerreiroJogadores)
                            \t\t\t{
                                \t\t\t\tConsole.WriteLine(jogador);
                                \t\t\t}
                                \t\t\tforeach (Jogador jogador in arqueiroJogadores)
                                \t\t\t{
                                    \t\t\t\tConsole.WriteLine(jogador);
                                    \t\t\t}
                                    \t\t\t// Para jogadores guerreiros
                                    \t\t\tIDecidirVocacao decidirJogador = new DecidirVocacaoGuerreiro();
                                    \t\t\tforeach (Jogador jogador in guerreiroJogadores)
                                    \t\t\t{
                                        \t\t\t\tdecidirJogador.EscolherVocacao(jogador);
                                        \t\t\t}
                                        \t\t\t// Para jogadores arqueiros
                                        \t\t\tdecidirJogador = new DecidirVocacaoArqueiro();
                                        \t\t\tforeach (Jogador jogador in arqueiroJogadores)
                                        \t\t\t{
                                            \t\t\t\tdecidirJogador.EscolherVocacao(jogador);
                                            \t\t\t}
                                            \t\t}
                                            \t\tcatch (Exception ex)
                                            \t\t{
                                                \t\t\tConsole.WriteLine($"Error: {ex}");
                                                \t\t}
                    \t}
                }
                
                class Jogador
                {
                    \tinternal string nome;
                    \tinternal string registrarNumero;
                    \tinternal double nivel;
                    \tinternal string vocacao;
                
                    \tpublic Jogador(string nome, string registrarNumero, double nivel, string vocacao)
                    \t{
                        \t\tthis.nome = nome;
                        \t\tthis.registrarNumero = registrarNumero;
                        \t\tthis.nivel = nivel;
                        \t\tthis.vocacao = vocacao;
                        \t}
                
                        \tpublic override string ToString()
                        \t{
                            \t\treturn $@"
                            \t\tNome: {nome}
                            \t\tRegistrar número: {registrarNumero}
                            \t\tNível: {nivel}
                            \t\tVocação: {vocacao}
                            \t\t***********
                            \t\t";
                            \t}
                }
                
                interface IDecidirVocacao
                {
                    \tvoid EscolherVocacao(Jogador jogador);
                }
                
                class DecidirVocacaoArqueiro : IDecidirVocacao
                {
                    \tpublic void EscolherVocacao(Jogador jogador)
                    \t{
                        \t\tif (jogador.vocacao == "arqueiro")
                        \t\t{
                            \t\t\tif (jogador.nivel > 20)
                            \t\t\t{
                                \t\t\t\tConsole.WriteLine($"{jogador.registrarNumero} recebeu a vocação Arqueiro especialista em bestas");
                                \t\t\t}
                                \t\t}
                                \t}
                }
                
                \tclass DecidirVocacaoGuerreiro : IDecidirVocacao
                \t{
                    \t\tpublic void EscolherVocacao(Jogador jogador)
                    \t\t{
                        \t\t\tif (jogador.vocacao == "guerreiro")
                        \t\t\t{
                            \t\t\t\tif (jogador.nivel > 20)
                            \t\t\t{
                                \t\t\t\tConsole.WriteLine($"{jogador.registrarNumero} recebeu a distinção de guerreiro especialista em espadas de 2 mãos");
                                \t\t\t}
                                \t\t}
                                \t}
                }
                
                class Ajudante
                {
                    \tpublic static List<Jogador> CriarListaDeJogadorArqueiro()
                    \t{
                        \t\tJogador alienados = new Jogador("Alienados", "001", 20, "guerreiro");
                        \t\tJogador springs = new Jogador("Springs", "002", 40, "guerreiro");
                
                        \t\tList<Jogador> jogadores = new List<Jogador>
                        \t\t{
                            \t\talienados,
                            \t\tsprings
                            \t\t};
                            \t\treturn jogadores;
                            \t}
                
                            \tpublic static List<Jogador> CriarListaDeJogadorGuerreiro()
                            \t{
                                \t\tJogador clonados = new Jogador("Clonados", "003", 20, "arqueiro");
                                \t\tJogador revelados = new Jogador("Revelados", "004", 40, "arqueiro");
                
                                \t\tList<Jogador> jogadores = new List<Jogador>
                                \t\t{
                                    \t\t\tclonados,
                                    \t\t\trevelados
                                    \t\t\t};
                
                                    \t\treturn jogadores;
                    \t}
                }
                `
            },
        ]
    },
    {
        id: '12',
        title: "C#: PARTE 1: SRP - Desvendando os segredos dos Princípios Importantes: a chave para um código magnético e irresistível. ",
        description: "Desvendando a essência do desenvolvimento de software de elite, encontramos um acrônimo mágico chamado SOLID. Prepare-se para embarcar em uma jornada de descoberta, onde os segredos para criar sistemas robustos, flexíveis e de fácil manutenção serão revelados, Cada princípio desbloqueia novas possibilidades, aprimorando nossas habilidades como desenvolvedores e transformando nosso código em uma obra-prima técnica.",
        link: link,
        post: [
            {
                text: `Desbravar o mundo de SOLID é como encontrar um tesouro escondido no vasto universo da programação, Cada princípio desbloqueia novas possibilidades, aprimorando nossas habilidades como desenvolvedores e transformando nosso código em uma obra-prima técnica`,
                code: `using System;

                // • Princípio de Responsabilidade Única (SRP)
                // • Princípio Aberto/Fechado (OCP)
                // • Princípio da Substituição de Liskov (LSP)
                // • Princípio de Segregação de Interface (ISP)
                // • Princípio de Inversão de Dependência (DIP) 
                
                // Princípio de Responsabilidade Única (SRP) - SRP EXAMPLE: 

                // Criar uma classe monstro onde monstro tem uma caixa de detalhes, tem seu nivel de conhecimento, e um ID Auto-Generativo
                
                class Monstro
                {
                    \tpublic string id;
                    \tpublic string primeiroNome;
                    \tpublic string segundoNome;
                    \tpublic double experiencia;
                
                    \tpublic void gerarMonstro(string primeiroNome, string segundoNome, double experiencia)
                    \t{
                        \t\tthis.primeiroNome = primeiroNome;
                        \t\tthis.segundoNome = segundoNome;
                        \t\tthis.experiencia = experiencia;
                        \t\tid = "Não gerar ID";
                    \t}
                
                    \tpublic void mostrarDetalhes()
                    \t{
                        \t\tConsole.WriteLine($"O nome do Monstro: {primeiroNome} {segundoNome}");
                        \t\tConsole.WriteLine($"Experiencia do monstro: {experiencia}");
                    \t}
                
                    \tpublic string checarNivelDoMonstro()
                    \t{
                        \t\tif (experiencia < 1000)
                            \t\t\treturn "Facil";
                        \t\telse if (experiencia > 1000 && experiencia < 10000)
                            \t\t\treturn "Medio";
                        \t\telse
                            \t\t\treturn "Dificil";
                        \t\t}
                
                    \t\tpublic string gerarId()
                    \t\t{
                        \t\t\tint random = new Random().Next(1000);
                        \t\t\tid = string.Concat(primeiroNome[0], random);
                        \t\t\treturn id;
                    \t\t}
                \t}
                
                
                
                \t// --------------------------------------------------------------------------------------------------------------------------
                \t// Exemplo de SRP 2
                \tclass Monstro2
                \t{
                    \t\tpublic string id;
                    \t\tpublic string primeiroNome;
                    \t\tpublic string segundoNome;
                    \t\tpublic double experiencia;
                
                    \t\tpublic void gerarMonstro(string primeiroNome, string segundoNome, double experiencia)
                    \t\t{
                        \t\t\tthis.primeiroNome = primeiroNome;
                        \t\t\tthis.segundoNome = segundoNome;
                        \t\t\tthis.experiencia = experiencia;
                        \t\t\tid = "Não gerar ID";
                    \t\t}
                
                    \t\tpublic void mostrarDetalhes()
                    \t\t{
                        \t\t\tConsole.WriteLine($"O nome do Monstro: {primeiroNome} {segundoNome}");
                        \t\t\tConsole.WriteLine($"Experiência do monstro: {experiencia}");
                    \t\t}
                \t}
                
                \tclass ChecarNivel
                \t{
                    \t\tpublic string checarNivelDoMonstro(double experiencia)
                    \t\t\t{
                        \t\t\t\tif (experiencia < 1000)
                        \t\t\t\t\treturn "Facil";
                        \t\t\t\telse if (experiencia > 1000 && experiencia < 10000)
                            \t\t\t\t\treturn "Medio";
                        \t\t\t\telse
                            \t\t\t\t\treturn "Dificil";
                        \t\t\t\t}
                    \t\t\t}
                
                \t\t\tclass GerarId
                \t\t\t{
                \t\t\t\tpublic string gerarId(string primeiroNome)
                \t\t\t{
                \t\t\t\tint random = new Random().Next(1000);
                \t\t\t\tstring id = string.Concat(primeiroNome[0], random);
                \t\t\t\treturn id;
                \t\t\t}
                
                \t\t\tpublic void mostrarDetalhes(string primeiroNome, string segundoNome, double experiencia)
                \t\t\t{
                    \t\t\t\tConsole.WriteLine($"O nome do Monstro: {primeiroNome} {segundoNome}");
                    \t\t\t\tConsole.WriteLine($"Experiencia do monstro: {experiencia}");
                    \t\t\t}
                    \t\t}
                
                    \t\tclass MapearMonstro
                    \t\t\t{
                        \t\t\t\tpublic static void mostrarMonstroDetalhes(Monstro2 monstro)
                        \t\t\t{
                            \t\t\t\tmonstro.mostrarDetalhes();
                            \t\t\t}
                
                            \t\t\tpublic static void mostrarMonstroId(Monstro2 monstro)
                            \t\t\t{
                                \t\t\t\tGerarId idGerador = new GerarId();
                                \t\t\t\tstring monstroId = idGerador.gerarId(monstro.primeiroNome);
                                \t\t\t\tConsole.WriteLine($"O monstro id: {monstroId}");
                                \t\t\t}
                
                                \t\t\tpublic static void mostrarNivelMonstro(Monstro2 monstro)
                                \t\t\t{
                                    \t\t\t\tChecarNivel checarNivel = new ChecarNivel();
                                    \t\t\t\tstring nivel = checarNivel.checarNivelDoMonstro(monstro.experiencia);
                                    \t\t\t\tConsole.WriteLine($"Esse monstro é: {nivel}");
                                    \t\t\t}
                                    \t\t}
                
                                    \t\tclass Program
                                    \t\t{
                                        \t\t\tstatic void Main(string[] args)
                                        \t\t{
                                            \t\t\ttry
                                            \t\t{
                                                \t\t// Exemplo 1
                                                \t\tConsole.WriteLine("*** Demonstracao do SRP ***");
                                                \t\tMonstro tartaruga = new Monstro();
                                                \t\ttartaruga.gerarMonstro("Tartaruga", "Pequena", 200);
                                                \t\ttartaruga.mostrarDetalhes();
                                                \t\tstring monstroId = tartaruga.gerarId();
                                                \t\tConsole.WriteLine($"O monstro id: {monstroId}");
                                                \t\tConsole.WriteLine($"Essa tartaruga tem a experiencia: {tartaruga.checarNivelDoMonstro()}");
                                                \t\tConsole.WriteLine("*********");
                                                \t\tMonstro tartarugaMedia = new Monstro();
                                                \t\ttartarugaMedia.gerarMonstro("tartaruga", "media", 700);
                                                \t\ttartarugaMedia.mostrarDetalhes();
                                                \t\tstring tartarugaMediaId = tartarugaMedia.gerarId();
                                                \t\tConsole.WriteLine($"A tartaruga media tem a experiencia: {tartarugaMedia.checarNivelDoMonstro()}");
                                                \t\t// Exemplo 2
                                                \t\tConsole.WriteLine("*** Demonstracao do SRP MAIN 2***");
                                                \t\tMonstro2 tartaruga1 = new Monstro2();
                                                \t\ttartaruga1.gerarMonstro("Tartaruga", "Pequena", 200);
                                                \t\tMapearMonstro.mostrarMonstroDetalhes(tartaruga1);
                                                \t\tMapearMonstro.mostrarMonstroId(tartaruga1);
                                                \t\tMapearMonstro.mostrarNivelMonstro(tartaruga1);
                                                \t\tConsole.WriteLine("*********");
                                                \t\tMonstro2 tartarugaMedia2 = new Monstro2();
                                                \t\ttartarugaMedia2.gerarMonstro("Tartaruga", "Média", 5000);
                                                \t\tMapearMonstro.mostrarMonstroDetalhes(tartarugaMedia2);
                                                \t\tMapearMonstro.mostrarMonstroId(tartarugaMedia2);
                                                \t\tMapearMonstro.mostrarNivelMonstro(tartarugaMedia2);
                                                \t}
                                                \tcatch (Exception ex)
                                                \t{
                                                    \t\tConsole.WriteLine($"Error: {ex}");
                                                    \t}
                    }
                }
                `
            },
        ]
    }, {
        id: '11',
        title: "C#: O poderoso impacto de um simples comentário transformador.",
        description: "Compreensão e manutenção do código, Colaboração e trabalho em equipe, Legibilidade e clareza, Documentação, Depuração e resolução de problemas",
        link: link,
        post: [
            {
                text: `Utilização de comentários na programação é essencial para melhorar a compreensão, a colaboração, a legibilidade e a manutenção do código`,
                code: `// Testando se 2 é maior que 3?
                Console.WriteLine(2 > 3);
                /* Usando multi linha 
                -----------------
                para comentarios */
                
                // Example 1
                
                /* Criando a classe Jogador que contem 3 atributos vida e saude e leitura 
                Criando a classe Jogador que contem 2 metodos RecuperarVida e RecuperarEstamina*/
                
                class Jogador
                {
                    \t/* readonly é garantir a imutabilidade de um campo após sua 
                    \tatribuição inicial. Isso pode ser útil em situações 
                    \tem que você deseja ter um valor constante ou que não 
                    \tpode ser modificado após a inicialização */
                    \treadonly double vida;
                    \treadonly double saude;
                    \treadonly string nome = "Leitura";
                
                    \tpublic RecuperarVida(double vida)
                    \t{
                        \t\tvida = vida + 20;
                        \t}
                
                        \tpublic RecuperarSaude(double saude)
                        \t{
                            \t\tsaude = saude + 20;
                            \t}
                
                            \tpublic RecuperarVidaESaude(double vida, double saude)
                            \t{
                                \t\tsaude = saude + 10;
                                \t\tvida = vida + 10;
                                \t}
                
                                \tpublic Saudacao()
                                \t{
                                    \t\tConsole.WriteLine($"{nome}: \n Ola, Player2");
                                    \t}
                
                                    \tpublic Motivar()
                                    \t{
                                        \t\tConsole.WriteLine($"{nome}: Junto iremos vencer");
                                        \t\tConsole.WriteLine("Pra cima !!!");
                                        \t}
                }
                
                class Program
                {
                    \tstatic void Main(string[] args)
                    \t{
                        \t\ttry
                        \t\t\t{
                            \t\t\t\tConsole.WriteLine("Enchendo a Vida");
                            \t\t\t\t// Instanciando o Objeto vida
                            \t\t\t\tJogador player1 = new();
                            \t\t\t\t// Chamada do metodo recuperar vida no player1
                            \t\t\t\tplayer1.RecuperarVida();
                            \t\t\t\t// Chamada do metodo recuperar saude no player1
                            \t\t\t\tConsole.WriteLine("Enchendo a Saude");
                            \t\t\t\tplayer1.RecuperarSaude();
                            \t\t\t\t// Chamada do metodo recuperar vida e saude no player1
                            \t\t\t\tConsole.WriteLine("Enchendo a Saude e Vida");
                            \t\t\t\tplayer1.RecuperarVidaESaude();
                            \t\t\t\t// Chamada do metodo Saudar
                            \t\t\t\tplayer1.Saudacao();
                            \t\t\t\t// Chamada do metodo Motivar
                            \t\t\t\tplayer1.motivar();
                            \t\t\t}
                            \t\tcatch (Exception ex)
                            \t\t{
                                \t\t\tConsole.WriteLine($"Error: {ex}");
                                \t\t}
                                \t}
                }`
            },
        ]
    }, {
        id: '10',
        title: "C# Classes abstratas ou interface?",
        description: "Classes abstratas e interfaces são conceitos fundamentais na programação orientada a objetos. Ambos são mecanismos para definir contratos ou estruturas que as classes devem seguir, mas existem diferenças importantes entre eles",
        link: link,
        post: [
            {
                text: `classe abstrata é uma classe que não pode ser instanciada diretamente, ou seja, você não pode criar objetos dessa classe. Ela serve como um modelo para outras classes que estendem ou herdam dela`,
            }, {
                text: `interface é uma lista de métodos abstratos, ou seja, métodos sem implementação. Ela define um contrato que as classes devem seguir, especificando os métodos que elas devem implementar`,
                code: `# Lendo c# do zero
                ## Dotnet sdk download
                Link: https://dotnet.microsoft.com/en-us/download
                Terminal: dotnet new console
                Executar codigo: dotnet run
                `
            }, {
                text: `classes abstratas são usadas quando você quer fornecer uma implementação base comum para um conjunto de classes relacionadas, permitindo que elas estendam essa funcionalidade. As interfaces, por sua vez, são usadas para definir contratos que as classes devem seguir, independentemente de sua hierarquia, permitindo uma maior flexibilidade na implementação de comportamentos`,
                code: `
                using Juizes;

// Definindo namespace
namespace Futebols
{
    \tabstract class Futebol
    \t{
        \t\tprotected string nomeJogador = string.Empty;
        \t\tprotected Juiz juiz;
        \t\tprotected string registrarNumero = string.Empty;
        \t\tpublic abstract void SetComportamento(Juiz juiz);
        \t\tpublic abstract void DisplayDetalhes();
        \t}

        \tclass Carrinho : Futebol
        \t{
            \t\tpublic Carrinho(string id)
            \t{
                \t\tregistrarNumero = id;
                \t\tnomeJogador = "Jogador";
                \t\tjuiz = new FaltaSemPoderes();
                \t}

                \tpublic override void SetComportamento(Juiz juiz)
                \t{
                    \t\tthis.juiz = juiz;
                    \t}

                    \tpublic override void DisplayDetalhes()
                    \t{
                        \t\tConsole.WriteLine("Carrinho: " + registrarNumero);
                        \t\tjuiz.Apitar();
                        \t}
                        \t}

                        \tclass Sobrenatural : Futebol
                        \t{
                            \t\tpublic Sobrenatural(string id)
                            \t\t{
                                \t\t\tregistrarNumero = id;
                                \t\t\tnomeJogador = "jogador";
                                \t\t\tjuiz = new FaltaComPoder();
                                \t\t}

                                \t\tpublic override void SetComportamento(Juiz juiz)
                                \t\t{
                                    \t\t\tthis.juiz = juiz;
                                    \t\t}

                                    \t\tpublic override void DisplayDetalhes()
                                    \t\t{
                                        \t\t\tConsole.WriteLine("Sobrenatural: " + registrarNumero);
                                        \t\t\tjuiz.Apitar();
                                        \t\t}
                                        \t}
}

namespace Juizes
{
    \tinterface Juiz
    \t\t{
        \t\t\tvoid Apitar();
        \t\t}

        \t\tclass FaltaSemPoderes : Juiz
        \t\t{
            \t\tpublic void Apitar()
            \t\t\t{
                \t\t\t\tConsole.WriteLine("Cometeu falta sem usar poder");
                \t\t\t}
                \t\t}

                \t\tclass FaltaComPoder : Juiz
                \t\t{
                    \t\t\tpublic void Apitar()
                    \t\t{
                        \t\t\tConsole.WriteLine("Cometeu falta com poder");
                        \t\t}
                        \t}
}

class Program
{
    \tstatic void Main(string[] args)
    \t{
        \t\ttry
        \t\t{
            \t\t\tConsole.WriteLine("***Comecou o jogo de Futebol Sobrenatural***");
            \t\t\tConsole.WriteLine("Using a Carrinho");
            \t\t\tFutebols.Futebol futebol = new Futebols.Carrinho("B001");
            \t\t\tfutebol.DisplayDetalhes();
            \t\t\tConsole.WriteLine("****************");
            \t\t\tJuizes.Juiz Apitar = new Juizes.FaltaSemPoderes();
            \t\t\tConsole.WriteLine("Definindo compotamento do juiz e verificando no painel falta sem poder");
            \t\t\tfutebol.SetComportamento(Apitar);
            \t\t\tfutebol.DisplayDetalhes();
            \t\t\tConsole.WriteLine("****************");
            \t\t\tConsole.WriteLine("Usando falta com poderes");
            \t\t\tfutebol = new Futebols.Sobrenatural("A002");
            \t\t\tConsole.WriteLine("Definindo compotamento do juiz e verificando no painel falta com poder");
            \t\t\tApitar = new Juizes.FaltaSemPoderes();
            \t\t\tfutebol.SetComportamento(Apitar);
            \t\t\tfutebol.DisplayDetalhes();
            \t\t\tConsole.WriteLine("****************");
            \t\t\tConsole.WriteLine("Definindo compotamento do juiz e verificando no painel falta com poder");
            \t\t\tApitar = new Juizes.FaltaComPoder();
            \t\t\tfutebol.SetComportamento(Apitar);
            \t\t\tfutebol.DisplayDetalhes();
            \t\t\tConsole.WriteLine("****************");
        \t\t}
        \t\tcatch (Exception ex)
        \t\t{
            \t\t\tConsole.WriteLine($"Error: {ex}");
            \t\t}
    \t}
}
                `
            }
        ]
    }, {
        id: '9',
        title: "C# Codigos Flexiveis com Polimorfismo",
        description: "Polimorfismo é a capacidade de um objeto assumir muitas formas. Em C#, isso é feito através de herança e interfaces. O polimorfismo permite que um objeto seja tratado como um objeto de sua classe base ou como um objeto de uma de suas classes derivadas. Isso significa que, em vez de escrever código separado para cada classe derivada, você pode escrever um código genérico para a classe base e usá-lo com todas as classes derivadas",
        link: link,
        post: [
            {
                text: `Aprender polimorfismo em C# é importante porque é um conceito fundamental da programação orientada a objetos e permite criar um código mais flexível, modular e reutilizável`,
            }, {
                text: `Polimorfismo em C# é importante porque ajuda a escrever código mais flexível, modular e reutilizável, economizando tempo de codificação e facilitando a manutenção`,
            }, {
                text: `Para isso utilizamos os seguintes comandos abaixo dentro de Program.cs`,
                code: `# Lendo c# do zero
                ## Dotnet sdk download
                Link: https://dotnet.microsoft.com/en-us/download
                Terminal: dotnet new console
                Executar codigo: dotnet run
                `
            }, {
                text: `Primeiro programa inicial C# Polimorfismo`,
                code: `using System;

                namespace Funcoes
                {
                    \tclass Exemplos
                    \t{
                        \t\tstatic void Main(string[] args)
                        \t\t{
                            \t\t\t// Polimorfismo
                            \t\t\tConsole.WriteLine("Sons de diferentes Tipos de Pessoas");
                            \t\t\t// Objeto Humano Instanciado
                            \t\t\tIPessoa humano = new Humano();
                            \t\t\thumano.Som();
                            \t\t\t// Objeto Ogro
                            \t\t\tIPessoa ogro = new Ogro();
                            \t\t\togro.Som();
                            \t\t\t// Objeto Elfo
                            \t\t\tIPessoa elfo = new Elfo();
                            \t\t\telfo.Som();
                
                            \t\t\t// Definindo sons de diferentes pessoas 
                            \t\t\tConsole.WriteLine("Sons aleatorios de diferentes pessoas");
                            \t\t\t// Criando uma fabrica de pessoas aleatoriamente
                            \t\t\tIPessoa pessoa = PessoaProducao.GetPessoa();
                            \t\t\tConsole.WriteLine("aleatorio: 1");
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                            \t\t\tConsole.WriteLine("aleatorio: 2");
                            \t\t\tpessoa = PessoaProducao.GetPessoa();
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                            \t\t\tConsole.WriteLine("aleatorio: 3");
                            \t\t\tpessoa = PessoaProducao.GetPessoa();
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                
                            \t\t\tConsole.ReadKey();
                    \t\t}
                
                    \t\t\t// Definindo Interface Super Types
                    \t\t\tinterface IPessoa
                    \t\t\t{
                        \t\t\t\t  void Som();
                        \t\t\t}
                        \t\t\t// Criando a classe pessoa de forma abstrata e os metodos abstratos
                        \t\t\tabstract class Pessoa {
                            \t\t\t\tpublic abstract void Som();
                            \t\t\t}
                            \t\t\t// Classes abstratas de Tipos de Pessoas 
                            \t\t\t// Difinicao da Classe humano e override nas classes
                
                            \t\t\t// Ao usar override, estamos dizendo ao compilador que o método na subclasse deve substituir o comportamento do método da superclasse, 
                            \t\t\t// em vez de simplesmente ocultá-lo. Dessa forma, a subclasse herda a funcionalidade do método da superclasse, 
                            \t\t\t// mas também pode adicionar ou modificar comportamentos específicos, de acordo com as necessidades da subclasse.
                            \t\t\tclass Humano : IPessoa
                            \t\t\t{
                                \t\t\t\tpublic void Som()
                                \t\t\t{
                                    \t\t\t\tConsole.WriteLine("Inteligencia educação resolve tudo !!!");
                                    \t\t\t}
                                    \t\t\t}
                                    \t\t\t// Definicao da classe Ogro
                                    \t\t\tclass Ogro : IPessoa
                                    \t\t\t\t{
                                        \t\t\t\tpublic void Som()
                                        \t\t\t{
                                            \t\t\t\tConsole.WriteLine("Ola seres inferiores !!!");
                                            \t\t\t}
                                            \t\t}
                                            \t\t// Definicao da classe Elfo
                                            \t\tclass Elfo : IPessoa
                                            \t\t{
                                                \t\t\tpublic void Som()
                                                \t\t{
                                                    \t\t\tConsole.WriteLine("Humanos Fracos e inuteis !!!");
                                                    \t\t}
                        \t\t}
                        \t\t// Criando a classe abstrata de producao de pessoas 
                        \t\tclass PessoaProducao
                        \t\t{
                            \t\t\t// Definindo um metodo STATIC dentro da classe pessoa
                            \t\t\tinternal static IPessoa GetPessoa()
                            \t\t\t{
                                \t\t\t\tIPessoa pessoa;
                                \t\t\t\t// Instanciando uma classe random
                                \t\t\t\tRandom random = new Random();
                                \t\t\t\t// Definindo temporariamente os numeros aleatorios
                                \t\t\t\tint temporario = random.Next(0, 3);
                                \t\t\t\t// Verificação da criação de fabrica aleatoria utilizando switch
                                \t\t\t\tpessoa = temporario switch
                                \t\t\t{
                                    \t\t\t\t0 => new Humano(),
                                    \t\t\t\t1 => new Ogro(),
                                    \t\t\t\t_ => new Elfo()
                                    \t\t\t};
                                    \t\t\t// verificação de fabrica aleatoria utilizando IF
                                    \t\t\t// if (temporario == 0)
                                    \t\t\t// {
                                        \t\t\t\t//     pessoa = new Humano();
                                        \t\t\t// }
                                        \t\t\t// else if (temporario == 1)
                                        \t\t\t// {
                                            \t\t\t\t//     pessoa = new Ogro();
                                            \t\t\t// }
                                            \t\t\t// else
                                            \t\t\t// {
                                                \t\t\t\t//     pessoa = new Elfo();
                                                \t\t\t// }
                
                                                \t\t\t// Retorna o objeto criado
                                                \t\t\t\treturn pessoa;
                                                \t\t\t}
                                                \t\t\t// Funcao interna da classe estatica para criar som de pessoas 
                            
                                                \t\t\tinternal static void CriarSom(IPessoa pessoa)
                                                \t\t\t{
                                                    \t\t\t\tpessoa.Som();
                                                    \t\t\t}
                                                    \t\t}
                    \t}
                }
                `
            }
        ]
    }, {
        id: '8',
        title: "Responsive",
        description: "A responsividade é uma técnica de desenvolvimento de interfaces que permite que um site ou aplicativo se adapte a diferentes tamanhos de tela e dispositivos, garantindo que o conteúdo seja exibido de maneira clara e legível em todas as resoluções",
        link: link,
        post: [
            {
                text: `Aumento do uso de dispositivos móveis para navegar na internet, a responsividade tornou-se uma necessidade para garantir que seu site ou aplicativo seja acessível a todos os usuários`,
            }, {
                text: `Se adapta às telas de diferentes tamanhos e orientações, tornando-o mais fácil de navegar e interagir com o conteúdo, para isso copie o exemplo de HTML abaixo:`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Teste7.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<div class="cabecalho">
                  \t  \t    <ul class="containerLista">
                  \t\t  \t      <li class="lista item1">Item 1</li>
                  \t\t\t  <li class="lista item2">Item 2</li>
                  \t\t\t    <li class="lista item3">Item 3</li>
                  \t\t\t    <li class="lista item4">Item 4</li>
                  \t\t\t    <li class="lista item5">Item 5</li>
                  \t\t</ul>
                  \t</div>
                  \t<div class="espacoDoBanner">
                  \t\t    <img class="banner"src="img/exampleBanner.jpg" alt="" />
                  \t</div>
                  \t<div class="conteudo">
                  \t\t    <div class="quadrado">
                  \t\t\t        <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t    <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t</div>
                  \t<!-- Criando uma tabela  -->
                  \t<div class="espacoTabela">
                  \t\t<table class="tabela">
                  \t\t\t<thead class="cabecalhoTabelaContainer">
                  \t\t\t\t<tr class="linhaTabelaCabecalho">
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 1</th>
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 2</th>
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 3</th>
                  \t\t\t\t</tr>
                  \t\t\t</thead>
                  \t\t\t<tbody>
                  \t\t\t\t<tr class="linhaTabelaCorpo">
                  \t\t\t\t\t<td class="corpoTabela">Corpo 1</td>
                  \t\t\t\t\t<td class="corpoTabela">Corpo 2</td>
                  \t\t\t\t\t<td class="corpoTabela">Corpo 3</td>
                  \t\t\t\t</tr>
                  \t\t\t</tbody>
                  \t\t</table>
    \t</div>
                </body>
                </html>`
            }, {
                header: "Aumento do uso de dispositivos móveis para navegar na internet, a responsividade tornou-se uma necessidade para garantir que seu site ou aplicativo seja acessível a todos os usuários",
                text: `Fornecem uma experiência de usuário melhor e mais consistente em todas as plataformas`,
                code: `*{
                    \t/* Container Global do CSS */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                body {
                    \t/* container do corpo em HTML */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                .cabecalho{
                    \tbackground: black;
                    \tcolor: white;
                    \theight: 80px;
                    \t/* Sombra do cabecalho na pagina */
                    \tbox-shadow: 0px 0px 10px black
                }
                
                .containerLista{
                    \t/* Deixa o container flexivel */
                    \tdisplay: flex;
                    \t/* Alinha o container no centro */
                    \tjustify-content: center;
                    \t/* Tira a marcacao de estilo no <li> */
                    \tlist-style: none;
                    \tcolor: white;
                }
                
                .lista{
                    \tpadding: 20px 20px;
                }
                
                .conteudo{
                    \tdisplay: flex;
                    \twidth: 100%;
                    \tjustify-content: center;
                    \ttext-align: center;
                }
                
                .quadrado{
                    \theight: 500px;
                    \twidth: 500px;
                    \tmargin: 20px;
                    \tmargin-top: -200px;
                    \tbackground: black;
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                .descricao{
                    \tdisplay: flex;
                    \t/* Espacamento interno no componente */
                    \tpadding: 30px;
                    \tjustify-content: center;
                    \t/* Alinha texto no centro */
                    \ttext-align: center;
                    \ttext-transform: uppercase;
                }
                
                .quadrado:hover{
                    \theight: 500px;
                    \tbackground: rgb(35, 131, 35);
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                
                .banner {
                    \theight: 500px;
                    \twidth: 100%;
                }
                
                .espacoTabela{
                    \theight: 500px;
                    \twidth: 100%;
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \ttext-align: center;
                    \tmargin-bottom: 300px;
                }
                
                .tabela{
                    \theight: 500px;
                    \twidth: 800px;
                    \tborder: 1px solid black;
                }
                
                .linhaTabelaCabecalho{
                    \theight: 80px;
                    \tbackground: rgb(216, 216, 216);
                }
                
                .cabecalhoTabela{
                    \tborder: 1px solid black;
                }
                
                .linhaTabelaCorpo{
                    \tborder: 1px solid black;
                }
                
                .corpoTabela{
                    \tborder: 1px solid black;
                }
                
                /* Deixando a pagina resposiva conforme o parametro de tamanho */
                @media only screen and (max-width: 768px) {
                    \t.conteudo{
                        \t\tdisplay: flex;
                        \t\tflex-direction: column;
                        \t\talign-items: center;
                        \t\tjustify-content: center;
                        \t\tmargin: 0px;
                    }
                    .quadrado{
                        \tmargin: 30px 0px;
                    }
                }`
            }
        ]
    }, {
        id: '7',
        title: "CSS",
        description: "É uma ferramenta poderosa que pode ajudá-lo a levar o design do seu website para o próximo nível",
        link: link,
        post: [
            {
                header: "Benefícios do CSS é que ele permite separar o design e o layout do seu site do próprio conteúdo",
                text: `isso significa que você pode fazer alterações no design do seu site sem ter que editar cada página individualmente`,
            }, {
                text: `Siga abaixo conforme o codigo HTML`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Teste7.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<div class="cabecalho">
                  \t  \t    <ul class="containerLista">
                  \t\t  \t      <li class="lista item1">Item 1</li>
                  \t\t\t  <li class="lista item2">Item 2</li>
                  \t\t\t    <li class="lista item3">Item 3</li>
                  \t\t\t    <li class="lista item4">Item 4</li>
                  \t\t\t    <li class="lista item5">Item 5</li>
                  \t\t</ul>
                  \t</div>
                  \t<div class="espacoDoBanner">
                  \t\t    <img class="banner"src="img/exampleBanner.jpg" alt="" />
                  \t</div>
                  \t<div class="conteudo">
                  \t\t    <div class="quadrado">
                  \t\t\t        <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t    <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t</div>
                </body>
                </html>`
            }, {
                header: "Siga abaixo conforme o codigo CSS",
                text: `Todos os passo a passo para execução estão nas aulas anterior ou no video`,
                code: `*{
                    \t/* Container Global do CSS */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                body {
                    \t/* container do corpo em HTML */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                .cabecalho{
                    \tbackground: black;
                    \tcolor: white;
                    \theight: 80px;
                    \t/* Sombra do cabecalho na pagina */
                    \tbox-shadow: 0px 0px 10px black
                }
                
                .containerLista{
                    \t/* Deixa o container flexivel */
                    \tdisplay: flex;
                    \t/* Alinha o container no centro */
                    \tjustify-content: center;
                    \t/* Tira a marcacao de estilo no <li> */
                    \tlist-style: none;
                    \tcolor: white;
                }
                
                .lista{
                    \tpadding: 20px 20px;
                }
                
                .conteudo{
                    \tdisplay: flex;
                    \tjustify-content: center;
                }
                
                .quadrado{
                    \theight: 500px;
                    \twidth: 500px;
                    \tmargin: 20px;
                    \tmargin-top: -200px;
                    \tbackground: black;
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                    \tz-index: 1;
                }
                
                .quadrado:hover{
                    \theight: 500px;
                    \twidth: 500px;
                    \tbackground: rgb(35, 131, 35);
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                .titulo{
                    \tdisplay: flex;
                    \tjustify-content: center;
                }
                
                .descricao{
                    \tdisplay: flex;
                    \t/* Espacamento interno no componente */
                    \tpadding: 30px;
                    \tjustify-content: center;
                    \t/* Alinha texto no centro */
                    \ttext-align: center;
                    \ttext-transform: uppercase;
                }
                
                .banner {
                    \theight: 500px;
                    \twidth: 100%;
                }`
            },
        ]
    }, {
        id: '6',
        title: "Lendo atributos HTML com CSS",
        description: "Os atributos CSS de um elemento, é possível identificar quais estilos estão sendo aplicados e quais não estão. Isso pode ajudar a resolver problemas de layout e de compatibilidade entre diferentes navegadores",
        link: link,
        post: [
            {
                header: "Ao ler os atributos CSS, é possível criar animações em JavaScript ou em outras bibliotecas para manipular a aparência do elemento",
                text: `Lendo os atributos CSS, é possível personalizar a aparência de um elemento em tempo de execução, como alterar a cor do texto ou a largura de um elemento`,
                code: `<div class="quadrado">
                \tQuadrado
            </div>`
            }, {
                header: "Definindo dois atributos:",
                text: `Lendo os atributos CSS, é possível modificar a aparência de um elemento em resposta a eventos, como quando o mouse passa sobre o elemento ou quando o usuário clica nele`,
                code: `<div class="quadrado verde">
                \tQuadrado
            </div>`
            }, {
                header: "Chamando os atributos dentro do CSS sendo possivel chamar os atributos em JAVASCRIPT",
                text: `Porem o foco é mais no HTML e um pouco de CSS mais para frente irei ensinar detalhadamente, lendo atributos HTML com CSS"`,
                code: `<div class="quadrado verde">
                \tQuadrado
            </div>`
            }, {
                text: `HTML completo`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Aula6.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<!-- div com o atributo quadrado -->
                    \t<div class="quadrado">
                    \t\tQuadrado
                    \t</div>
                    \t<!-- div com o atributo quadrado verde-->
                    \t<div class="quadrado verde">
                    \t\tQuadrado Verde
                    \t</div>
                </body>
                </html>`
            }, {
                text: `CSS completo`,
                code: `.quadrado{
                    \theight: 100px;
                    \twidth: 100px;
                    \tfont-size: 20px;
                    \tbackground: blue;
                    \tcolor: white;
                }
                
                .verde{
                    \tbackground: green;
                    \tcolor: white;
                }`
            }
        ]
    }, {
        id: '5',
        title: "Trabalhando com imagens e videos em HTML",
        description: "Imagens e os vídeos são partes essenciais do mundo digital em que vivemos atualmente. Esses elementos visuais têm o poder de transmitir mensagens e informações de maneira mais clara e eficaz do que o texto simples",
        link: link,
        post: [
            {
                text: `Adicionando imagem na sua pagina`,
                code: `tag: \t<img></img>
                \tTipos de dados:
                \t\t.gif
                \t\t.jpg
                \t\t.jpeg
                \t\t.png
                \t\t.svg
                
                <figure>
                \t<img src="/images/logo.png" alt="descricao" title="logo">
                \t<figcaption>Caption text</figcaption>
            </figure>`
            }, {
                text: `Link em imagens ao clicar na imagens navega para uma nova pagina`,
                code: `<a href="url"><img src="/images/logo.png" alt=”descricao”></a>`
            }, {
                text: `Utilizando imagem dentro do CSS`,
                code: `ul {
                    \tlist-style-image: url(/images/logo.png)
                }
                
                <ul>
                    \t<li>descricao 1</li>
                    \t<li>descricao 2</li>
                    \t<li>descricao 3</li>
                </ul>`
            }, {
                text: `Alinhamento de imagens e textos`,
                code: `element {
                    \tvertical-align: baseline | bottom | middle | top
                }`
            }, {
                text: `Colocando imagem na pagina pelo CSS`,
                code: `element{
                    \tbackground-image: url(file)
                    \twidth: 500px;
                    \theight: 200px;
                    \ttext-align: center;
                }`
            }, {
                text: `Html uilizado para o exemplo`,
                code: `<div class="image">
                \t<h1>Bem Vindo!</h1>
                \t<h2>Texto de exemplo</h2>
            </div>
            <div class="main">
            \tCentro da pagina aqui.
            </div>`
            }, {
                text: `Exemplo de uma pagina com imagem centralizada CSS`,
                code: `image {
                    \twidth: 100vw;
                    \theight: 100vh;
                    \tbackground-image: url(/images/toronto.jpg);
                    \tbackground-position: center center;
                    \tbackground-size: cover;
                }`
            }, {
                text: `Exemplo com video:`,
                code: `<video src="/videos/movie.mp4"
                \tposter="/images/movie-poster.jpg"
                \twidth="625"
                \theight="480"
                \tcontrols
                \tautoplay
                \tloop>
            </video>`
            }, {
                text: `Exemplo utilizando audio:`,
                code: `<audio controls
                autoplay
                loop>
            <source src="/audio/music.mp3"
                \ttype="audio/mp3">
            <source src="/audio/music.wav"
            \ttype="audio/wav">
            <source src="/audio/music.webm"
            \ttype="audio/webm">
            <source src="/audio/music.ogg"
            \ttype="audio/ogg">
            <source src="/audio/music.m4a"
            \ttype="audio/mp4">
            </audio>`
            }
        ]
    }, {
        id: '4',
        title: "Semantica do HTML",
        description: "Garantir que o conteúdo da sua página seja compreensível, acessível e indexável, resultando em uma melhor experiência do usuário e maior alcance da sua mensagem",
        link: link,
        post: [
            {
                header: "Fornecer significado e estrutura para o conteúdo de uma página web",
                text: `Para isso crie os arquivo teste.html e teste.css link o css a pagina conforme a postagem anterior`,
            }, {
                text: `Crie a estrutura conforme o codigo abaixo: `,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<title>Document</title>
                    \t<!-- Vinculação do CSS na pagina -->
                    \t<link rel="stylesheet" href="./Aula4.css">
                </head>
                <body>
                \t<!-- Cabecalho da pagina "HEADER" -->
                \t<div class="header">
                \t\t<ul class="lista">
                \t\t\t<li class="conteudo"><a href="https://www.youtube.com/">Youtube</a></li>
                \t\t\t<li class="conteudo"><a href="https://www.facebook.com/">Facebook</a></li>
                \t\t\t<li class="conteudo"><a href="https://www.instagram.com/">Instagram</a></li>
                \t\t</ul>
                \t</div>
                \t  <!-- FIM do Cabecalho da pagina -->
                \t  <!-- Corpo da pagina "MAIN" -->
                \t  <div class="main">
                \t\t      <ul class="listaConteudo">
                \t\t\t        <li class="item">Lista de temas 1</li>
                \t\t\t      <li class="item">Lista de temas 2</li>
                \t\t\t      <li class="item">Lista de temas 3</li>
                \t\t  </ul>
                \t</div>
                \t  <!-- FIM do corpo da pagina -->
                \t  <!-- Rodape da pagina "FOOTER" -->
                \t  <div class="footer">
                \t\t      &copy; Finalizando o fim da pagina
                \t</div>
                \t\t  <!-- FIM do Rodape da pagina -->
                </body>
                </html>
                `,
            }, {
                text: `Utilize o seguinte codigo dentro do seu CSS`,
                code: `*{
                    \tpadding: 0px;
                    \tmargin: 0px;
                    \twidth: 100%;
                }
                
                body{
                    \tpadding: 0px;
                    \tmargin: 0px;
                }
                
                .header{
                    \tdisplay: flex;
                    \tpadding: 0px;
                    \tmargin: 0px;
                }
                
                .lista{
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \tflex-direction: row;
                    \tcolor: white;
                    \theight: 80px;
                    \talign-items: center;
                    \tbackground-color: rgb(216, 216, 216);
                }
                
                .conteudo{
                    \tjustify-content: center;
                    \ttext-align: center;
                    \tmargin: 0px;
                    \tpadding: 0px;
                    \tlist-style: none;
                }
                
                a{
                    \ttext-decoration: none;
                    \tcolor: rgb(0, 19, 105);
                    \tfont-size: 20px;
                }
                
                .main{
                    \tdisplay: flex;
                    \ttext-align: center;
                    \talign-items: center;
                    \tjustify-content: center;
                }
                
                .listaConteudo{
                    \tdisplay: flex;
                    \tflex-direction: column;
                    \tpadding: 60px;
                    \tlist-style: none;
                }
                
                .item{
                    \tfont-size: 20px;
                    \tpadding: 20px 0px;
                    \tmargin: 0px;
                }
                
                .footer{
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \tfont-size: 13px;
                    \tfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                }`
            }
        ]
    }, {
        id: '3',
        title: "Tags e Atributos",
        description: "Com as tags, podemos estruturar o conteúdo de nossas páginas, definindo seções, parágrafos, títulos, imagens e muito mais",
        link: link,
        post: [
            {
                header: "Alterando os textos em sua pagina",
                text: `Para isso crie os arquivo teste.html e teste.css link a pagina conforme a postagem anterior`,
            }, {
                header: "Acesse o site do Google Fonts: ",
                text: `Clique sobre a fonte desejada, No canto direito da tela clique em IMPORT Copie o codigo e cole dentro do CSS`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<title>Document</title>
                    \t<!-- Linkando css na pagina -->
                    \t<link rel="stylesheet" href="Aula3.css">
                </head>
                <body>
                    \t<h1>
                    \t\tteste copiado do google fonts
                    \t</h1>
                    \t<h2>
                    \t\tteste atributo 1
                    \t</h2>
                    \t<h3>
                    \t\tteste atributo 2
                    \t</h3>
                    \t<!-- Alinhamento de estrutura de texto -->
                    \t<!-- Espacamento de div 1 -->
                    \t<div>
                    \t\t<h1 style="text-align: left;">texto teste 1</h1>
                    \t</div>
                    \t<!-- Espacamento de div 2 -->
                    \t<div>
                    \t\t<h1 style="text-align: center;">texto teste 2</h1>
                    \t</div>
                    \t<!-- Espacamento de div 3 -->
                    \t<div>
                    \t\t<h1 style="text-align: right;">texto teste 2</h1>
                    \t</div>
                    \t<div style="text-indent: 1em">
                    \t<!-- Identa o espacamento na DIV -->
                    \t<h1>teste indent 1</h1>
                    \t</div>
                </div>  
                </body>
                </html>`,
            }, {
                text: `Estilo utilizando dentro do CSS para o exemplo:`,
                code: `/* Importado do GOOGLE FONTS: https://fonts.google.com/specimen/Sigmar */
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
                
                h1 {
                    \t/* Copiando do Google Fonts */
                    \t\tfont-family: 'Rajdhani', sans-serif; 
                    \t/* Font font-weight deixa o texto em formato bold */
                    \t\tfont-weight: 200;
                    /* Alinha o texto a esquerda */
                    \t\ttext-align: left;
                    /* Alinha o texto no centro */
                    \t\ttext-align: center;
                    \t/* Alinha o texto a direita */
                    \t\ttext-align: right;
                    \t/* Alinha o texto conforme o espacamento da div anterior */
                    \t\ttext-align: justify;
                }
                h2, h3{
                    \t/* Utilizando CSS com 2 atributos */
                    \t\ttext-align: center;
                }
                `
            }
        ]
    }, {
        id: '2',
        title: "Estrutura de página em HTML",
        description: "Organizar seu conteúdo em seções lógicas e hierarquias claras, garantindo que seu site seja fácil de navegar e usar",
        link: link,
        post: [
            {
                header: "Criar páginas mais acessíveis e amigáveis para motores de busca",
                text: `Crie o arquivo teste.html e o teste.css dentro de uma pasta ou apenas contiue conforme a postagem anterior`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t<meta charset="UTF-8">
                \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                \t<title>Document</title>
                \t<!-- Link para linkar seu componente CSS na pagina HTML -->
                \t\t<link rel="stylesheet" type="text/css" href="Aula2.css">
                </head>
                \t<body>
                \t\t<!-- Container da pagina -->
                \t\t<div>
                \t\t\t<h1>Titulo dentro do container DIV</h1>
                \t\t</div>
                \t\t<!-- <ul> para estrutura para lista "NÃO ORDENADA" -->
                \t\t<ul>
                \t\t<!-- Item do componente da Lista -->
                \t\t\t<li>Componente 1</li>
                \t\t\t<li>Componente 2</li>
                \t\t\t<li>Componente 3</li>
                \t\t\t<li>Componente 4</li>
                \t\t</ul>
                \t\t<!-- Puchando o campo spam com estilo em CSS aplicado -->
                \t\t<span>teste</span>
                \t\t<!-- Container de espacamento da pagina 1 -->
                \t\t<div>
                \t\t\tTeste1 teste1 
                \t\t</div>
                \t\t<!-- Hr para tracar uma linha de separacao na pagina -->
                \t\t<hr>
                \t\t<div>
                \t\t\t<!-- Container de espacamento da pagina 2 -->
                \t\t\tTeste2 teste2
                \t\t</div>
                \t\t<!-- lista ordenada -->
                \t\t<ol>
                \t\t\t<li>teste 1</li>
                \t\t\t<li>teste 2</li>
                \t\t\t<li>teste 3</li>
                \t\t\t<li>teste 4</li>
                \t\t\t<li>teste 5</li>
                \t\t</ol>
                \t</body>
                </html>`
            }, {
                text: `Estilo utilizando dentro do CSS para o exemplo:`,
                code: `span {
                    \tbackground-color: black;
                    \tfont-size: 50px;
                    \tcolor: white;
                }`
            }
        ]
    }, {
        id: '1',
        title: "Iniciando HTML",
        description: "Primeiros passos com HTML do zero",
        link: link,
        post: [
            {
                header: "Cabecalho / Titulo",
                text: `Usando h1 dentro do seu codigo HTML para fazer isso crie um arquivo teste.html`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t\t<meta charset="UTF-8">
                    \t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t\t<title>Document</title>
                </head>
                \t<body>
                \t\t<!-- Utilize o codigo abaixo para cabecalho na estrutura do seu site -->
                    \t\t<h1>Cabecalho para textos</h1>
                    \t</body>
                </html>`
            }, {
                header: "Estilizando o componente de texto com CSS",
                text: "Para estilizar crie um arquivo teste.css",
                code: `h1 {
                    /* Font size aumenta letra */
                    \tfont-size: 20px;
                    /* Color muda a cor da letra */
                    \tcolor: white;
                    /* Background Altera o fundo do container */
                    \tbackground: black;
                    /* Alinha o texto no centro da pagina */
                    \t text-align: center
                    /* alterar o estilo da fonte, na qual todas as letras minúsculas são transformadas em maiúsculas */
                    \t font-variant: small-caps;
                }`
            }, {
                text: "Utilizando Css direto no componente ",
                code: `\t<h1 style="font-size: 20px; font-variant: small-caps;">cabecalho para textos<h1>
                \t <a href="https://www.youtube.com/">Deixa um texto e faz com que voce link para a pagina</a>
                \t <blockquote>paragrafo e linha no texto</blockquote>`
            }
        ]
    }
]