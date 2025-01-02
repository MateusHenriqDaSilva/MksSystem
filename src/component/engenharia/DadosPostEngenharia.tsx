import imagem1 from "../../../public/imagem1.png"

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
    video?: any
}

const link = "/engenharia/postagem/"
export const conteudoBlogEngenharia: IContentBlog[] = [
    {
        id: '7',
        title: "Serviços Azure PT3",
        description: "7. Storage Account | 8. Data Lake | 9. SQL",
        link: link,
        post: [
            {
                text: `7. Storage Account
                * Objetivo:
                    O objetivo da Storage Account é fornecer um espaço de armazenamento na nuvem do Azure para os seus objetos de dados, que incluem: blobs, arquivos, filas e tabelas. Com a Storage Account, você pode:
            
                * Vantagens:
                    7.1 - Espaço de armazenamento na nuvem para os seus objetos de dados, como blobs, arquivos, filas e tabelas
                    7.2 - Acesso aos seus dados de armazenamento de qualquer lugar do mundo por HTTP ou HTTPS
                    7.3 - Durabilidade e alta disponibilidade dos seus dados de armazenamento com opções de redundância
                    7.4 - Segurança dos seus dados de armazenamento com criptografia, controle de acesso e firewall
                    7.5 - Escalabilidade e economia do seu espaço de armazenamento conforme a demanda e o uso
                
                * Desvantagens:
                    7.6 - Você precisa gerenciar o Azure para que ele tenha efeito. Embora você reduza seus gastos de capital com hardware e manutenção de TI localmente, ainda precisará de alguém para gerenciar seus dados com eficácia.
                    7.7 - Você pode ter que pagar mais por alguns recursos ou serviços que não estão incluídos no tipo de conta de armazenamento que você escolheu. Por exemplo, se você quiser usar o NFS (Network File System) nos Arquivos do Azure, você precisará usar o tipo de conta de compartilhamentos de arquivos premium.
                    7.8 - Você pode ter limitações de desempenho ou latência dependendo da opção de redundância que você selecionou para sua conta de armazenamento. Por exemplo, se você escolher o GRS (armazenamento com redundância geográfica), seus dados serão replicados em uma região secundária a centenas de quilômetros de distância da região primária, o que pode afetar a velocidade de acesso
            
            8. Data Lake
                * Objetivo:
                    O objetivo da Azure Data Lake é fornecer uma solução de data lake corporativa baseada em nuvem, que permite armazenar e analisar dados de qualquer tamanho, tipo e velocidade em um único lugar. O Azure Data Lake Storage Gen2 é um conjunto de funcionalidades dedicadas à análise de Big Data, criado no Armazenamento de Blobs do Azure. Com o Azure Data Lake, você pode capturar dados de qualquer tipo e velocidade de ingestão em um único local e assim facilitar o seu acesso e análise usando várias estruturas
                
                * Vantagens:
                    8.1 - Rápida inserção de dados
                    8.2 - Baixo custo de implementação
                    8.3 - Compatibilidade com ferramentas de ciência de dados
                    8.4 - Escalabilidade
                    8.5 - Colaboração
                    8.6 - Acessos sem suporte de TI
                    8.7 - Disponibilidade de dados a qualquer momento
                    8.8 - Acessos simultâneos
                    8.9 - Insights para tomada de decisão
                    8.1.1 - Mais flexibilidade
            
                * Desvantagens:
                    8.1.2 - O armazenamento de dados no formato nativo pode exigir a reformatação manual de diferentes fontes que entram no lago em formatos não padronizados.
                    8.1.3 - O baixo custo de armazenamento pode levar à inclusão de todo e qualquer dado gerado pela empresa no data lake, sem organização e documentação, tornando-o um “pântano de dados”.
                    8.1.4 - Os usuários do data lake ficam próximos dos dados brutos, mas têm que investir muito tempo na preparação dos dados do que realmente nas regras de negócio.
                    8.1.5 - A falta de controle de qualidade e governança dos dados pode levar a dados corrompidos, duplicados ou inconsistentes.
                    8.1.6 - A segurança e a privacidade dos dados podem ser comprometidas se não houver políticas e ferramentas adequadas para proteger o acesso e o uso dos dados.
            
            9. SQL
                * Objetivo:
                    O objetivo do Azure SQL é fornecer uma família de serviços de banco de dados SQL na nuvem que sejam inteligentes, seguros e escaláveis. O Azure SQL permite que você migre, modernize e inove com os serviços de banco de dados SQL mais recentes
            
                * Vantagens:
                    9.1 - Simplificação do gerenciamento de desempenho e ajuda aos desenvolvedores a compilar aplicativos com mais rapidez e eficiência com recursos de computação que são escalados automaticamente com base na demanda da carga de trabalho.
                    9.2 - Uso de versões completas do SQL Server na nuvem sem a necessidade de gerenciar nenhum hardware local.
                    9.3 - Benefício Híbrido do Azure para SQL Server, que fornece benefícios econômicos para mover cargas de trabalho altamente virtualizadas para o Azure.
                    9.4 - Suporte a uma grande variedade de linguagens, frameworks, banco de dados e sistemas operacionais, do Windows ao Linux, do SQL Server ao Oracle e do C# ao Java.
                    9.5 - Camadas de proteção, controles internos e detecção inteligente de ameaças que mantêm os seus dados seguros.
                    9.6 - IA interna e alta disponibilidade que mantêm o desempenho de pico e a durabilidade com um SLA de até 99,995%.
                    9.7 - Hiperescala que se adapta aos requisitos em constante mudança, escalonando rapidamente o armazenamento para até 100 TB.
                    9.8 - Flexibilidade para escolher entre diferentes opções de implantação da borda para a nuvem e executar o SQL do Azure localmente e em ambientes multinuvem com os serviços de dados habilitados para o Azure Arc.
            
                * Desvantagens:
                    9.9 - Você precisará gerenciar o Azure para que tenha efeito. Embora você reduza seus gastos de capital com hardware e manutenção de TI localmente, ainda precisará de alguém para gerenciar seus dados com eficácia. O Microsoft Azure não ajuda você a gerenciar seu data center baseado em nuvem.
                    9.1.1 - Você pode encontrar alguns recursos ausentes ou limitados. O Azure SQL não oferece todos os recursos que o SQL Server possui, como o SQL Agent, o Service Broker e o Linked Server. Alguns recursos podem estar disponíveis apenas em determinados níveis de serviço ou opções de implantação.
                    9.1.2 - Você pode enfrentar problemas de compatibilidade ou migração. Nem todos os bancos de dados do SQL Server podem ser migrados diretamente para o Azure SQL sem modificações. Você pode precisar usar ferramentas como o Data Migration Assistant ou o Azure Database Migration Service para avaliar e resolver quaisquer problemas de compatibilidade antes da migração.
                    9.1.3 - Você pode ter menos controle sobre o desempenho e a disponibilidade. Como o Azure SQL é um serviço gerenciado, você depende da Microsoft para fornecer atualizações, backups, ajustes e recuperação de desastres. Isso pode limitar sua capacidade de personalizar ou otimizar seu banco de dados de acordo com suas necessidades específicas. Além disso, você pode estar sujeito a interrupções ou atrasos causados por fatores fora de seu controle, como falhas de rede ou indisponibilidade do serviço.`,
                video: "https://www.youtube.com/watch?v=VdzMNi5tiD0&t=376s&ab_channel=Odi%C3%A1riodeumtecn%C3%B3logo",
            }
        ]
    },{
        id: '6',
        title: "Serviços Azure PT2",
        description: "4. Logic Apps | 5. Kubernetes Service | 6. Data Services",
        link: link,
        post: [
            {
                text: `4. Logic Apps
                * Objetivo: 
                    O objetivo do Logic Apps é fornecer uma plataforma de integração como serviço (iPaaS) que permite que você crie e execute fluxos de trabalho automatizados com pouco ou nenhum código.
            
                * Vantagens:
                    4.1 - Criar soluções de integração avançadas para os principais cenários empresariais e B2B
                    4.2 - Conectar seus aplicativos, dados, serviços e sistemas usando gatilhos e associações controlados por eventos
                    4.3 - Desenvolver e implantar fluxos de trabalho em qualquer lugar, seja na nuvem, localmente ou internamente
                    4.4 - Aproveitar centenas de conectores prontos para uso ou criar os seus
                    4.5 - Simplificar desafios complexos de orquestração com a extensão Durable Functions
                
                * Desvantagens:
                    4.6 - Necessidade de gerenciar o plano do serviço de aplicativo e os recursos associados se optar por hospedar fluxos de trabalho em um plano do serviço de aplicativo
                    4.7 - Limitações de tempo de execução e memória para fluxos de trabalho hospedados no plano de consumo
                    4.8 - Necessidade de adaptar o código do fluxo de trabalho às especificações do Logic Apps
                    4.9 - Menor controle sobre o ambiente de execução em comparação com as máquinas virtuais ou os contêineres
            
            5. Kubernetes Service
                * Objetivo: 
                    Simplifica a implantação de um cluster do Kubernetes gerenciado no Azure, transferindo a sobrecarga operacional para o Azure. Como um serviço Kubernetes hospedado, o Azure lida com tarefas críticas, como monitoramento da integridade e manutenção
                
                * Vantagens:
                    5.1 - Variedade de serviços de dados e análises na nuvem para atender a diferentes necessidades e cenários
                    5.2 - Serviços totalmente gerenciados que reduzem a complexidade e o custo de gerenciar a infraestrutura de dados
                    5.3 - Serviços sem servidor que permitem escalar sob demanda e pagar apenas pelo que usar
                    5.4 - Serviços de inteligência artificial e machine learning que permitem extrair insights e valor dos dados
                    5.5 - Ferramentas de visualização e exploração de dados que facilitam o entendimento e a tomada de decisão baseada em dados
            
                * Desvantagens:
                    5.6 - Necessidade de gerenciar os recursos e os custos associados aos serviços de dados na nuvem
                    5.7 - Limitações de recursos e funcionalidades dependendo do tipo e do nível de preço escolhido
                    5.8 - Necessidade de adaptar os dados e as aplicações às especificações dos serviços de dados na nuvem
                    5.9 - Restrições de localização e região para alguns serviços de dados na nuvem
            
            6. Data Services
                * Objetivo:
                    objetivo do Azure Data Services é fornecer uma variedade de serviços de dados e análises na nuvem que permitem que você colete, armazene, processe e visualize seus dados de forma escalável, segura e econômica. Com o Azure Data Services, você pode criar e gerenciar bancos de dados relacionais e não relacionais, integrar, transformar e analisar dados de diversas fontes, aplicar inteligência artificial e machine learning aos seus dados e visualizar e explorar seus dados com ferramentas interativas.
                
                * Vantagens:
                    6.1 - Variedade de serviços de dados e análises na nuvem para atender a diferentes necessidades e cenários
                    6.2 - Serviços totalmente gerenciados que reduzem a complexidade e o custo de gerenciar a infraestrutura de dados
                    6.3 - Serviços sem servidor que permitem escalar sob demanda e pagar apenas pelo que usar
                    6.4 - Serviços de inteligência artificial e machine learning que permitem extrair insights e valor dos dados
                    6.5 - Ferramentas de visualização e exploração de dados que facilitam o entendimento e a tomada de decisão baseada em dados
            
                * Desvantagens:
                    6.6 - Você precisa gerenciar o Azure para que ele tenha efeito. Embora você reduza seus gastos de capital com hardware e manutenção de TI localmente, ainda precisará de alguém para gerenciar seus dados com eficácia.
                    6.7 - Você pode ter restrições de localização para a transferência de dados. Por exemplo, o Azure Data Box só pode ser enviado dentro do mesmo país ou região de destino, e não cruzará nenhuma fronteira internacional, exceto na UE (União Europeia).
                    6.8 - Você pode ter menos participação de mercado e recursos do que a AWS (Amazon Web Services), que é a líder em serviços em nuvem. Por exemplo, em 2021, enquanto a AWS comandava 33% do nicho no mercado, a Azure conseguiu 20% de expressão`,
                video: "https://youtu.be/oxHsLZWmNjI",
            }
        ]
    },{
        id: '5',
        title: "Serviços Azure",
        description: "1. Virtual Machines | 2. App Service | 3. Functions",
        link: link,
        post: [
            {
                text: `1. Virtual Machines
                * Objetivo:
                    O objetivo do Azure Virtual Machines é oferecer a flexibilidade da virtualização para uma grande variedade de soluções de computação na nuvem do Azure, com suporte para Linux, Windows Server, SQL Server, Oracle, IBM, SAP e muito mais. Com o Azure Virtual Machines, você pode:
            
                * Beneficio:
                    1.1 - Flexibilidade da virtualização para uma grande variedade de soluções de computação na nuvem do Azure
                    1.2 - Criação e execução de máquinas virtuais do Linux e do Windows em segundos e redução de custos com cobrança por segundo e descontos por período
                    1.3 - Migração de cargas de trabalho críticas e de negócios para a infraestrutura do Azure e aprimoramento da eficiência operacional
                    1.4 - Aproveitamento da alta disponibilidade, da escalabilidade e da segurança da infraestrutura de nuvem do Azure
                    1.5 - Reutilização de licenças locais para executar VMs do Windows Server no Azure com o Benefício Híbrido do Azure
                    1.6 - Obtenção de mais três anos de atualizações de segurança estendidas gratuitas para o Windows Server 2012 e 2012 R2 ao migrar para o Azure
            
                * Desvantagens
                    1.7 - Necessidade de um hardware potente para suportar vários sistemas operacionais e aplicativos em máquinas virtuais
                    1.8 - Instabilidade e sobrecarga da CPU quando várias máquinas virtuais operam simultaneamente
                    1.9 - Necessidade de manter e atualizar o sistema operacional e o software das máquinas virtuais
                    1.1.1 - Menor eficiência e portabilidade em comparação com os contêineres
            
            2. App Service
                * Objetivo: 
                    O Azure App Service é um serviço HTTP para hospedar aplicativos Web, APIs REST e back-ends móveis. Você pode desenvolver na sua linguagem favorita, seja .NET, .NET Core, Java, Node.js, PHP ou Python. Os aplicativos são executados e escalonados com facilidade em ambientes baseados em Windows e Linux
            
                * Beneficio:
                    2.1 - Serviço HTTP baseado em PaaS para hospedar aplicativos web, APIs REST e back-ends móveis na nuvem do Azure
                    2.2 - Suporte para várias linguagens de programação, como .NET, .NET Core, Java, Node.js, PHP ou Python
                    2.3 - Execução e dimensionamento de aplicativos em ambientes baseados em Windows e Linux
                    2.4 - Aproveitamento dos recursos do Azure para o aplicativo, como segurança, balanceamento de carga, dimensionamento automático e gerenciamento automatizado
                    2.5 - Uso das capacidades de DevOps, como implantação contínua a partir do Azure DevOps, GitHub, Docker Hub e outras fontes, gerenciamento de pacotes, ambientes de teste e domínio personalizado e certificados TLS/SSL
                    2.7 - Escolha entre centenas de conectores para sistemas corporativos (como SAP), serviços SaaS (como Salesforce) e serviços da internet (como Facebook)
                    2.8 - Acesso a dados locais usando Conexões Híbridas e Redes Virtuais do Azure
                    2.9 - Autenticação de usuários com o Azure Active Directory, Google, Facebook, Twitter ou conta Microsoft
                    2.1.1 - Escolha entre uma extensa lista de modelos de aplicativos no Azure Marketplace, como WordPress, Joomla e Drupal
            
                * Desvantagens:
                    2.1.2 - Necessidade de gerenciar o plano do serviço de aplicativo e os recursos associados
                    2.1.3 - Limitações de recursos e funcionalidades dependendo do tipo de preço escolhido
                    2.1.4 - Necessidade de adaptar o aplicativo às especificações do App Service
                    2.1.5 - Menor controle sobre o ambiente de hospedagem em comparação com as máquinas virtuais
            
            3. Functions
                * Objetivo: 
                    O objetivo do Azure Functions é fornecer uma solução sem servidor que permite que você escreva menos código, mantenha menos infraestrutura e economize nos custos. Com o Azure Functions, você pode:
            
                * Vantagens:
                    3.1 - Execução de funções de código sem servidor e orientadas a eventos em sua linguagem de programação favorita
                    3.2 - Resposta a eventos e conexão fácil a outros serviços do Azure usando gatilhos e associações
                    3.3 - Desenvolvimento e teste local usando ferramentas integradas de desenvolvimento e CI/CD
                    3.4 - Dimensionamento automático sem servidor com base na demanda e pagamento por uso
                    3.5 - Simplificação de desafios complexos de orquestração com a extensão Durable Functions
                
                * Desvantagens
                    3.6 - Necessidade de gerenciar o plano do serviço de aplicativo e os recursos associados se optar por hospedar funções em um plano do serviço de aplicativo
                    3.7 - Limitações de tempo de execução e memória para funções hospedadas no plano de consumo
                    3.8 - Necessidade de adaptar o código da função às especificações do Azure Functions
                    3.9 - Menor controle sobre o ambiente de execução em comparação com as máquinas virtuais`,
                video: "https://www.youtube.com/watch?v=vuk_mPI4kwA&t=13s&ab_channel=Odi%C3%A1riodeumtecn%C3%B3logo",
            }
        ]
    },{
        id: '4',
        title: "Tipos de serviço em nuvem",
        description: "1. Infraestrutura como serviço (IaaS) | 2. Plataforma como serviço (PaaS) | 3. Software como serviço (SaaS)",
        link: link,
        post: [
            {
                text: `1. Infraestrutura como serviço (IaaS)
                * Objetivo
                    Infraestrutura como Serviço (IaaS): O objetivo de IaaS é fornecer serviços de infraestrutura pela Internet. Com IaaS, você pode contratar uma infraestrutura de TI (rede, servidores para armazenamento, firewall, datacenter, etc) totalmente hospedada na nuvem e pagar pelo serviço num modelo de aluguel.
            
                * Vantagens
                    1.1 - Ajuda a reduzir custos;
                    1.2 - É flexível – não depende de espaço físico;
                    1.3 - Ágil e efetivo de manter e configurar;
                    1.4 - Seguro para armazenar os dados da empresa, funcionários, clientes e fornecedores;
                    1.5 - Previne imprevistos e facilita a continuidade dos negócios;
                    1.6 - Fácil de obter suporte;
                    1.7 - Permite que a equipe acesse tudo pela internet, de qualquer lugar no mundo
            
                * Desvantagens
                    1.8 - Depende de conexão com a internet para acesso;
                    1.9 - Não fornece ferramentas e sistemas para que a equipe de desenvolvimento teste seus produtos e trabalhe neles diretamente na nuvem mas isso pode ser resolvido com outros tipos de serviço em nuvem; 
                    1.1.1 - Não permite que a empresa que o contrata ofereça seus serviços / softwares / apps na nuvem
            
            2. Plataforma como serviço (PaaS)
                * Objetivo
                    Plataforma como Serviço (PaaS): O objetivo de PaaS é fornecer uma plataforma e um ambiente para permitir que os desenvolvedores criem, testem e implantem aplicativos sem a necessidade de gerenciar a infraestrutura subjacente.
            
                * Vantagens
                    2.1 - Agilidade na implementação
                    2.2 - Padronização dos processos
                    2.3 - Redução de custos
                    2.4 - Maior controle dos ativos de TI
                
                * Desvantagens
                    2.1 - Menor controle sobre a infraestrutura
            
            3. Software como serviço (SaaS)
                * Objetivo
                    Software como Serviço (SaaS): O objetivo de SaaS é fornecer aplicativos pela Internet para a realização das mais variadas tarefas, de forma remota. Com SaaS, os usuários podem acessar aplicações de qualquer dispositivo e local sem a necessidade de instalar ou atualizar softwares.
            
                * Vantagens
                    3.1 - Acesso de qualquer lugar, em qualquer dispositivo
                    3.2 - Não requer atualizações ou instalações
                    3.3 - Escalabilidade
                    3.4 - Redução de custos
            
                * Desvantagens
                    3.5 - Exige um controle de acesso mais forte
                    3.6 - Dependência de fornecedor
                    3.7 - Segurança e conformidade (para empresas)
            
                * Exemplos: Microsoft 365, Microsoft Dynamics 365 e Netflix são exemplos de software como um serviço.`,
                video: "https://www.youtube.com/watch?v=xIg-TawdqZY&t=67s",
            }
        ]
    }, {
        id: '3',
        title: "Modelos de implantação de nuvem",
        description: "1. Nuvem pública | 2. Nuvem privada | 3. Nuvem híbrida",
        link: link,
        post: [
            {
                text: `1. Nuvem pública
                * Objetivo
                    Nuvem pública: O objetivo da nuvem pública é fornecer serviços de computação sob demanda a qualquer pessoa que queira utilizá-los ou comprá-los. Eles podem ser gratuitos ou vendidos sob demanda, permitindo que os clientes paguem apenas pelo seu consumo de ciclos de CPU, armazenamento ou largura de banda.
            
                * Beneficios
                    1.1 - Amazon Web Service e Google Cloud Platform são exemplos de provedores de nuvem pública
                    1.2 - Redução de custo total da empresa (não precisa mais do serviço, você pode desativá-lo)
                    1.3 - Implantação rápida
                    1.4 - Escalabilidade sob demanda
                    1.5 - Acesso global
            
                * Desvantagens
                    1.6 - Segurança pode ser uma preocupação
                    1.7 - Menos controle sobre a infraestrutura
                    1.8 - Dependência do provedor de serviços de nuvem
            
            2. Nuvem Privada
                * Objetivo
                    Nuvem privada: O objetivo da nuvem privada é fornecer um ambiente de computação em nuvem dedicado a uma única organização. Todos os recursos estão isolados e sob o controle da organização, proporcionando maior segurança e controle sobre a infraestrutura.
            
                * Beneficio
                    2.1 - Maior controle sobre a infraestrutura
                    2.2 - Maior controle sobre o infraestrutura de nuvem do que teria na nuvem pública.
                    2.3 - Maior segurança
                    2.4 - Personalização
            
                * Desvantagens
                    2.5 - Privada é caro em comparação com a execução do aplicativos na nuvem pública.
                    2.6 - Menos escalabilidade
                    2.7 - Dependência de equipe interna de TI
            
            3. Nuvem hibrida
                * Objetivo
                    Nuvem híbrida: O objetivo da nuvem híbrida é combinar os benefícios das nuvens públicas e privadas em um único ambiente virtual. Isso permite que as organizações aproveitem a escalabilidade e a economia de custos das nuvens públicas enquanto mantêm o controle e a segurança das nuvens privadas.
            
                * Beneficio 
                    3.1 - Flexibilidade
                    3.2 - Redução de custos
                    3.3 - Aproveitamento dos benefícios de nuvens públicas e privadas
            
                * Desvantagens
                    3.4 - Complexidade de gerenciamento
                    3.5 - Dependência de conexão com a internet
                Em busca da excelência, o objetivo é aumentar a produtividade, melhorar a confiabilidade e tornar os testes mais rápidos, alocando recursos de forma eficiente. Afinal, cada minuto economizado em testes é um passo adiante na jornada rumo a um software robusto e confiável.
                `,
                video: "https://www.youtube.com/watch?v=fl_d6qXc_lY&t=35s&ab_channel=Odi%C3%A1riodeumtecn%C3%B3logo",
            }
        ]
    }, {
        id: '2',
        title: "Desvendando as Engrenagens: Um Perfil Operacional que Impulsiona a Sinergia em Sistemas Multiagentes Normativos",
        description: "Parte 1 - Introdução: Na fascinante jornada da Engenharia de Software, testemunhamos uma evolução constante, repleta de mudanças significativas e um crescimento exponencial. Essa transformação está moldando um impacto profundo em nosso futuro. Mas como podemos garantir que essa revolução seja justa e cativante?",
        link: link,
        post: [
            {
                header: "Desvendando a Confiabilidade: A Busca por Software Impecável",
                text: `No mundo da engenharia de software, a confiabilidade é uma pedra angular. Medir a confiabilidade de um software é essencial para garantir seu desempenho consistente e livre de falhas. É nesse contexto que entram os casos de teste de confiabilidade de software, que nos permitem avaliar sua capacidade de funcionar de forma estável e previsível em diversas situações.
                Em busca da excelência, o objetivo é aumentar a produtividade, melhorar a confiabilidade e tornar os testes mais rápidos, alocando recursos de forma eficiente. Afinal, cada minuto economizado em testes é um passo adiante na jornada rumo a um software robusto e confiável.
                `,
                img: imagem1
            }, {
                header: "E como podemos testar a confiabilidade de um software?",
                text: `Aqui, entra a importância de desenvolver uma metodologia sólida para criar um perfil operacional para sistemas multiagentes normativos (NorMAS). Essa abordagem nos permite compreender como o software interage em diferentes cenários, identificar possíveis pontos de falha e tomar medidas preventivas para garantir sua confiabilidade em todas as circunstâncias.`,
            }, {
                header: "À medida que desvendamos os segredos da confiabilidade do software, embarcamos em uma jornada de aprendizado constante.",
                text: `Cada teste realizado, cada perfil operacional desenvolvido, nos aproxima da visão de um software impecável, capaz de superar expectativas e oferecer uma experiência confiável aos usuários.
                Portanto, prepare-se para explorar as fronteiras da confiabilidade do software, desafiando limites e construindo um futuro em que a excelência seja a norma. Junte-se a nós nessa jornada emocionante em busca do software mais confiável e robusto que podemos imaginar.`,
            }, {
                text: `1. Processo de desenvolvimento contém cinco etapas: perfil do cliente,
                perfil do usuário, perfil do modo do sistema, perfil funcional e perfil operacional.
                2. Conjunto de testes existente e classificar o impacto dos defeitos na operação do software contribuindo para a precificação dos defeitos, abordagem de desenvolvimento orientada por comportamento
                Encontre o perfil da função do cliente NorMAS, identifique a função do usuário NorMAS
                perfil, Definir o perfil do modo NorMAS, Determinar o perfil do objetivo NorMAS e
                determinar o perfil operacional NorMAS
                3. Desafiando os Limites: Um Intrincado Bailado de Missões em Sistemas Multiagentes Normativos`,
            }, {
                text: `No palco da pesquisa e educação, testemunhamos um espetáculo impressionante de obrigações e metas entrelaçadas. O 1.Professor-Pesquisador assume a missão de ensinar, avaliar e conduzir pesquisas, tudo isso enquanto mantém o respeito aos regulamentos. Um verdadeiro 2. Líder do Projeto, navegando nas águas da permissão, busca ocupar uma posição de destaque, guiado por sua visão. Enquanto isso, os 3.alunos têm a obrigação de buscar a prática autônoma, passar por avaliações de aprovação e respeitar as regras estabelecidas.
                Um elo essencial nesta dança é a 4.Missão de Recomendação do Aluno-S, que incentiva a participação em cursos que enriquecem o conhecimento. O 1.Professor-Pesquisador, guiando com maestria, desempenha seu papel como um farol de sabedoria. Por outro lado, a Missão de Obrigação do 3.Pesquisador Nor5-R exige colaboração com outros pesquisadores, avanços em pesquisas e a participação em seminários, tudo isso enquanto se mantém dentro dos limites estabelecidos.
                Enquanto as cortinas se abrem, o Líder do Projeto assume a missão de liderança com responsabilidades empolgantes: pesquisa, estabelecimento de contatos industriais, assinatura de contratos, proposição de abordagens inovadoras e supervisão de investigadores. Tudo isso, é claro, sempre com o devido respeito às regras. A permissão para ocupar uma posição de destaque é concedida pela administração, reconhecendo o potencial e a capacidade do líder.
                Por fim, a administração exerce sua missão de permissão, com o poder de punir ou recompensar, garantindo a ordem e incentivando o progresso. Todo esse espetáculo em constante movimento desafia os limites convencionais e nos lembra da complexidade envolvida na 7. Orquestração desses sistemas multiagentes normativos.
                Em cada ato, uma nova camada é revelada, desvendando a teia intricada de deveres e objetivos entrelaçados. É nesse palco que a sinfonia da colaboração, conhecimento e respeito aos regulamentos se desenrola, impulsionando a busca pelo crescimento e excelência.
                Prepare-se para se encantar, pois a jornada de sistemas multiagentes normativos está apenas começando.
                Embarcando em uma Jornada Colaborativa: Revelando as Funções dos Usuários em um Empolgante Ensemble
                Conforme mergulhamos no fascinante mundo das funções dos usuários, uma emocionante história se desenrola, destacando as probabilidades de cada grupo geral. O Professor-Pesquisador assume o palco com uma probabilidade de 0,13, trazendo sua expertise para iluminar o caminho. Os Alunos, com uma probabilidade de 0,7, se destacam como personagens centrais, ansiosos para absorver conhecimento e explorar novas fronteiras. Os Pesquisadores, com uma probabilidade de 0,06, trazem sua curiosidade inabalável e sede de descoberta.
                Um personagem raro e especial, o Líder de Projeto, entra em cena com uma probabilidade de 0,01, carregando consigo a visão e a determinação para guiar e inspirar a equipe. Por fim, a Administração, com uma probabilidade de 0,1, desempenha um papel crucial na coordenação e no suporte, garantindo que todos os atores tenham as ferramentas necessárias para brilhar.
                Nesse envolvente ensemble, cada função de usuário desempenha um papel fundamental na trama, criando uma sinfonia de colaboração e crescimento. Juntos, eles enfrentam desafios, buscam conhecimento e constroem um futuro promissor.
                Prepare-se para se encantar, pois essa jornada repleta de personagens cativantes está prestes a começar.`,
            }, {
                header: "Explorando os Modos do Sistema: Uma Jornada entre Cursos e Pesquisas",
                text: `Nesta emocionante jornada pelo mundo dos sistemas, deparamo-nos com diferentes modos que moldam a sua essência. Com uma probabilidade de ocorrência de 0,854, encontramos o estimulante Modo de Curso, onde o aprendizado e o compartilhamento de conhecimento são os pilares fundamentais. É nesse cenário que professores inspiram, alunos absorvem e a busca pelo crescimento é constantemente estimulada.
                No entanto, também nos deparamos com o intrigante Modo de Pesquisa, com uma probabilidade de ocorrência de 0,146. Nesse ambiente, a curiosidade e a exploração de novas fronteiras são as estrelas do show. Pesquisadores apaixonados desvendam mistérios, buscam soluções inovadoras e desafiam o status quo.
                É nessa interação entre os dois modos que a magia acontece. O Modo de Curso nutre a base do conhecimento, preparando terreno para a transformação e o avanço. Por sua vez, o Modo de Pesquisa traz as descobertas e insights que impulsionam a evolução do sistema como um todo.
                Prepare-se para embarcar nessa jornada que transita entre cursos e pesquisas, onde a busca pelo saber e a exploração do desconhecido se entrelaçam em uma sinfonia harmoniosa. Desvende novos horizontes, desafie-se e permita-se explorar o melhor que cada modo tem a oferecer.
                O mundo dos sistemas aguarda, repleto de oportunidades e promessas. Venha, junte-se a nós, e descubra as maravilhas que aguardam aqueles que estão dispostos a abraçar o poder transformador dos cursos e das pesquisas.
                Navegando pelos Objetivos: Descobrindo o Papel dos Agentes no Modo Curso
                À medida que exploramos os objetivos que impulsionam o modo Curso, mergulhamos em um universo fascinante de agentes e suas responsabilidades. Com uma probabilidade de ocorrência de 0,854, esse modo revela a importância do aprendizado e da educação como elementos-chave para o crescimento do sistema.
                Dentre os agentes envolvidos nessa jornada, destacamos o Professor-Pesquisador, cujo papel é essencial para a meta1 de ensinar, com uma probabilidade de ocorrência de 0,2. Sua missão é compartilhar conhecimento, inspirar e moldar as mentes em busca do saber. Além disso, a meta2 de avaliar também recai sobre o Professor-Pesquisador, com uma probabilidade de 0,1. É ele quem observa, analisa e avalia o progresso dos alunos.
                Falando em alunos, eles desempenham um papel crucial no modo Curso, com uma probabilidade geral de ocorrência de 1,708. O objetivo6 de ser guiado e praticar autonomamente, com uma probabilidade de 0,2, destaca a importância do autodesenvolvimento e da aplicação prática do conhecimento. A meta7 de avaliação de aprovação, com uma probabilidade de 0,1, e a meta8 de frequentar cursos, com uma probabilidade de 0,1, incentivam os alunos a se esforçarem e buscarem a excelência acadêmica.
                Por fim, a administração também desempenha um papel significativo no modo Curso, com uma probabilidade de ocorrência de 0,06405. Sua responsabilidade inclui a meta16 de punir, com uma probabilidade de 0,075, e a meta17 de recompensar, também com uma probabilidade de 0,075. Eles garantem que as regras sejam seguidas, proporcionando um ambiente justo e incentivando o sucesso dos agentes.
                À medida que nos aprofundamos nos objetivos que impulsionam o modo Curso, uma teia complexa de interações e responsabilidades se revela. Professores, alunos e administração trabalham em conjunto para criar um ambiente propício à aprendizagem, ao crescimento e ao sucesso.
                Prepare-se para se inspirar e descobrir as maravilhas que o modo Curso reserva. Junte-se a nós nessa emocionante jornada em busca de conhecimento, autodesenvolvimento e excelência acadêmica.`,
            }, {
                header: "Desvendando as Metas e Variáveis do NorMAS: Um Desafio Ambiental",
                text: `No contexto do NorMAS, nos deparamos com uma série de metas e variáveis que influenciam o funcionamento desse sistema multiagente normativo. Essas metas e variáveis moldam o ambiente em que os agentes NorMAS operam, apresentando desafios únicos e oportunidades de crescimento.
                A meta1 de ensinar é afetada pela ausência do papel de aluno (Abs-SR), o que pode trazer desafios na transmissão efetiva de conhecimento. Além disso, os problemas de recursos do NorMAS (NorMAS-RP) podem impactar a capacidade de alcançar a meta2 de avaliar e a meta3 de pesquisa, limitando os recursos disponíveis para essas atividades.
                Em relação ao objetivo4 de respeitar regulamentos, essa meta não está ligada a uma variável específica, indicando a importância de manter a conformidade normativa como um princípio fundamental dentro do NorMAS.
                A meta5 de ocupar uma posição sênior e o objetivo6 de prática autônoma são afetados pela ausência do papel de professor-pesquisador (Abs-TR), o que pode dificultar a progressão e o desenvolvimento dos agentes no sistema.
                As metas7 de avaliação de aprovação, 8 de participar de cursos e 9 de colaborar com pesquisadores são afetadas por variáveis não especificadas. No entanto, o objetivo10 de avanço na pesquisa é afetado pela ausência da função de líder do projeto (Abs-LR), o que pode limitar a capacidade de avançar na pesquisa de forma efetiva.
                Além disso, as metas11 de participar de seminários, 12 de estabelecer contatos industriais, 13 de assinar contratos, 14 de propor abordagens e 15 de supervisionar investigadores também podem enfrentar desafios devido à ausência de funções específicas dentro do NorMAS.
                Por fim, a meta16 de punir é afetada pela ausência das funções de aluno e professor-pesquisador (Abs-SR&TR), o que pode impactar a capacidade de manter a disciplina e a conformidade normativa no sistema.
                Ao enfrentar esses desafios ambientais, o NorMAS deve buscar soluções criativas e estratégias adaptativas para superar as limitações e alcançar suas metas. É através desses desafios que surgem oportunidades para inovação e crescimento, fortalecendo a resiliência do sistema e promovendo uma abordagem mais eficaz e eficiente para alcançar seus objetivos.
                Adentre o mundo do NorMAS, onde os agentes se adaptam e se reinventam em face dos desafios ambientais. Descubra como o equilíbrio entre metas e variáveis pode moldar o sucesso e o progresso desse sistema multiagente normativo.
                `,
            }, {
                header: "Perfil de Objetivo do Modo de Curso",
                text: `Nesta tabela, apresentamos o perfil de objetivo final do modo de curso, levando em consideração os fatores ambientais. Utilizamos a multiplicação da lista de metas inicial com as variáveis ​​ambientais para obter esses resultados.
                Objetivo1 (Ensinar): Como obrigação do Professor-Pesquisador, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,001708. Além disso, consideramos a ausência do papel de aluno (Abs-SR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,001708 nas condições normais (probabilidade de 0,98).
                Meta2 (Avaliar): Levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000854. Também consideramos a ausência do papel de aluno (Abs-SR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,000854 nas condições normais (probabilidade de 0,98).
                Objetivo4 (Respeito aos regulamentos): Considerando tanto o Professor-Pesquisador quanto o Estudante, levamos em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01. A ocorrência geral é calculada como 0,000854 nas condições normais (probabilidade de 0,99).
                Meta5 (Ocupar uma posição sênior): Como permissão do Professor-Pesquisador, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,99).
                Objetivo6 (Prática Guiada e Autônoma): Como obrigação do Aluno, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,001708. Também consideramos a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,001708 nas condições normais (probabilidade de 0,98).
                Goal7 (Aprovação): Como obrigação do Aluno, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000854. Também consideramos a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,000854 nas condições normais (probabilidade de 0,98).
                Goal8 (Participar de cursos): Como recomendação, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência.`,
            }, {
                header: "Ações da Função do Agente no Modo de Curso:",
                text: `Nesta tabela, apresentamos as ações da função do agente (operações) no modo de curso, levando em consideração as variáveis ambientais.
                Objetivo1 do Professor-Pesquisador (Ensinar):
                Preparar o curso: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,98).
                Curso atual: Com uma probabilidade de ocorrência de 0,3, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0005124 nas condições normais (probabilidade de 0,98).
                Prática Guiada: Com uma probabilidade de ocorrência de 0,3, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0005124 nas condições normais (probabilidade de 0,98).
                Preparar Prática Autônoma: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,98).
                Objetivo2 do Professor-Pesquisador (Avaliar):
                Preparar o trabalho de avaliação: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,98).
                Preparar resposta típica: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,98).
                Corrigir trabalho de avaliação: Com uma probabilidade de ocorrência de 0,5, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,98).
                Atribuir marcas: Com uma probabilidade de ocorrência de 0,1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0000854 nas condições normais (probabilidade de 0,98).
                Objetivo4 (Respeitar os regulamentos):
                Conhecer os regulamentos: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,99).
                Direitos de prática: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,99).
                Aplicar direitos: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,99).
                Meta5 do Professor-Pesquisador (Ocupar um cargo superior):
                Ocupar uma posição sênior: Com uma probabilidade de ocorrência de 1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,99).
                Objetivo6 do Aluno (Prática Guiada e Autônoma):
                Alcançar prática guiada: Com uma probabilidade de ocorrência de 0,6, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0010248 nas condições normais (probabilidade de 0,98).
                Alcançar prática autônoma: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0006832 nas condições normais (probabilidade de 0,98).
                Goal7 (Avaliação de Aprovação):
                Responder à avaliação: Com uma probabilidade de ocorrência de 1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01`,
            }
        ]
    }, {
        id: '1',
        title: "Engenharia de Software IA: Construindo um Futuro Justo e Inovador",
        description: "Parte 1 - Introdução: Na fascinante jornada da Engenharia de Software, testemunhamos uma evolução constante, repleta de mudanças significativas e um crescimento exponencial. Essa transformação está moldando um impacto profundo em nosso futuro. Mas como podemos garantir que essa revolução seja justa e cativante?",
        link: link,
        post: [
            {
                header: "Dizemos adeus às crenças baseadas em boatos, dando lugar a fatos e dados concretos.",
                text: `Os modelos de negócios estão sendo reinventados, adaptando-se habilmente a um macroambiente dinâmico e em constante mudança. Tornou-se uma tarefa complexa conceber a ideia de vender produtos ou prestar serviços, a menos que a tecnologia esteja presente em todos os estágios dessa incrível jornada.`,
            }, {
                header: "As pessoas anseiam por surpresas, por algo novo e diferente, e querem isso agora!",
                text: `buscam facilidade de acesso e simplificação de suas tarefas diárias. Talvez não seja o produto ou serviço que precise mudar, mas sim a maneira como a experiência do usuário/consumidor utiliza o produto ou serviço.`,
            }, {
                header: "A transformação constante do modelo de negócio tornou-se uma obrigação para sobreviver nesse cenário em rápida evolução.",
                text: `Estratégias de negócios digitais e inovação são, portanto, elementos indispensáveis para criar uma vantagem competitiva sustentável. No âmbito das inteligências artificiais, a qualidade é crucial. Um software de IA injusto é considerado de má qualidade. Precisamos de sistemas de IA que sejam justos, responsáveis e transparentes. Surgem grandes questões sobre o que significa exatamente ter um software de IA justo.`,
            }, {
                header: "No âmbito das inteligências artificiais, a qualidade é crucial.",
                text: `Um software de IA injusto é considerado de má qualidade. Precisamos de sistemas de IA que sejam justos, responsáveis e transparentes. Surgem grandes questões sobre o que significa exatamente ter um software de IA justo.`,
            }, {
                header: "Imagine um sistema de software utilizando ML/AI sem um design, implementação e testes adequados.",
                text: `Isso pode resultar em consequências graves e prejudiciais. Fatores sensíveis, como raça, sexo, cor da pele, entre outros, devem ser considerados no pré-processamento, no processamento e no pós-processamento dos modelos de IA.`,
            }, {
                header: "A justiça abrange diferentes campos e subcampos da inteligência artificial.",
                text: `Ela assume várias formas, desde a justiça individual e de grupo até a justiça híbrida. Reconhecemos que a saída de um modelo de ML pode ser injusta para uma ou mais variáveis protegidas e/ou subgrupos dentro dessas variáveis, e é aí que entra o estágio de pós-processamento.`,
            }, {
                header: "Nossa busca por justiça não compromete o acesso às previsões e informações de atributos confidenciais, sem exigir acesso aos algoritmos e modelos de ML reais.",
                text: `Desenvolvemos um algoritmo de correção chamado RBA (Redução da Amplificação do Viés) para retificar quaisquer viéses indesejados.`,
            }, {
                header: "Porém, enfrentamos desafios.",
                text: `Conceituar justiça é um deles, especialmente no contexto do software. Avaliar a imparcialidade dos dados e alcançar equidade e desempenho são demandas complexas, exigindo definições quantitativas claras de justiça. Estabelecer requisitos de imparcialidade na engenharia de IA tornou-se um requisito de qualidade para o software AI/ML.`,
            }, {
                header: "Nossa abordagem abrange três etapas cruciais:",
                text: `pré-processamento, processamento e pós-processamento. Aprendizado de máquina justo, representação justa e processamento justo de linguagem natural são nossos objetivos. Utilizamos técnicas avançadas de avaliação de probabilidade para garantir a justiça em nosso software de IA, sempre encontrando soluções apropriadas.`,
            }, {
                header: "Estamos determinados a verificar a imparcialidade em nossos produtos de IA, construindo definições adequadas de justiça.",
                text: `Nosso compromisso é garantir a justiça sem afetar outros requisitos essenciais do software AI. Na Engenharia de Software IA, estamos construindo um futuro cativante, onde a inovação e a justiça caminham de mãos dadas. Junte-se a nós nessa jornada emocionante rumo a um mundo melhor e mais equitativo.`,
            },
        ]
    }
]