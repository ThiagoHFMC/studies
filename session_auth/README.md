# Método de Autenticação Sessão e Cookie

***

Existem duas principais formas de realizar a autenticação de um usuário, considerando que ele já possua as credenciais necessárias para sua autenticação e autorização para um determinado nível de prioridade. Uma das formas mais básicas de autenticação é a autenticação baseada em sessão. Nesse tipo de autenticação, o usuário deve enviar suas credenciais para o servidor, que as verificará para autorizar ou não o acesso do usuário ao sistema.

Se o usuário não for autorizado, ele não terá acesso, mesmo que envie credenciais válidas. Por outro lado, se as credenciais forem válidas, o servidor criará uma sessão para aquele usuário. As informações dessa sessão serão armazenadas no próprio servidor. Com base nessas informações, o servidor gerará um identificador único para aquela sessão, que será enviado de volta para o navegador como resposta à requisição de login do usuário. Esse identificador será armazenado no cookie do navegador, contendo as informações da sessão. A cada nova requisição feita pelo usuário, o cabeçalho enviará o cookie com esse identificador para que o servidor saiba que o usuário está com uma sessão ativa. Quando o usuário realizar o logout do sistema, um pedido será enviado ao servidor para que a sessão seja finalizada, eliminando os dados que estavam representados no banco de dados.

As vantagens desse método incluem a facilidade de implementação, pois além de ser simples, é de fácil gerenciamento, já que as informações estarão todas presentes no servidor. Por outro lado, as desvantagens desse método de autenticação incluem os altos requisitos de capacidade de armazenamento do servidor em serviços escaláveis. Quanto mais pessoas acessarem o servidor simultaneamente, mais informações sobre a sessão precisarão ser armazenadas. Outro problema com essa abordagem está relacionado à segurança, pois é muito vulnerável a Cross-site Scripting, onde um atacante, por meio de um computador terceiro, pode atacar o servidor. Isso é possível, pois o computador do cliente estará em uma sessão e toda requisição feita por ele já estaria autenticada.

***


## Referências

- https://www.youtube.com/watch?v=UBUNrFtufWo&ab_channel=Fireship
- https://www.youtube.com/watch?v=gKkBEOq_shs&ab_channel=theroadmap

***