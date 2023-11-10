# Método de Autenticação Basic Auth HTTP

***

Existe uma diferença fundamental entre autenticação e autorização. A autenticação está relacionada ao reconhecimento do usuário como um usuário cadastrado no sistema. Assim, a partir das informações do seu login, é possível realizar a autorização, onde determinados serviços, com base no seu nível de autorização, estarão disponíveis para uso, enquanto outros não estarão, devido à falta do nível de autoridade necessário. Em outras palavras, para acessar esses serviços, ele precisaria ser autenticado como um usuário com um nível de permissão mais alto.

Para realizar a autenticação de um usuário, existem diversas formas. A mais básica é a autenticação utilizando o cabeçalho da requisição HTTP. Através desse cabeçalho, é possível informar ao navegador que a página requer autenticação. Ao inserir a autenticação no campo disponibilizado pelo navegador, é possível verificar a autenticidade do usuário.

O fluxo do Basic Auth funciona da seguinte forma: primeiro, o cliente envia uma requisição HTTP tentando acessar um determinado recurso. A requisição é analisada para verificar se as credenciais do usuário foram passadas no campo de autenticação. Essas credenciais são válidas; se forem inexistentes ou inválidas, a resposta enviada para o cliente é um formulário de validação embutido no próprio navegador. O cliente preenche esse formulário e reenvia a requisição para o servidor, com os dados validados novamente.

Um dos maiores problemas com esse tipo de autenticação é a falta de segurança, já que as credenciais são passadas no campo de autenticação apenas codificadas para base 64, ou seja, elas não são criptografadas, possibilitando que qualquer um possa interceptar essas credenciais. Para resolver esse problema, é necessário que as requisições sejam enviadas como requisições HTTPS, onde toda mensagem é criptografada.

Outro problema com essa abordagem é que, a partir do momento em que a primeira requisição com os dados de autenticação é enviada para o servidor, o navegador irá guardar essas informações até que seja fechado ou as credenciais sejam sobrescritas. Isso torna um pouco mais complicado realizar o logout de um usuário, pois é necessário chamar novamente o formulário de requisição para sobrescrever as informações.

***

## Referências

- https://www.youtube.com/watch?v=rhi1eIjSbvk&ab_channel=OktaDev
- https://www.youtube.com/watch?v=mwccHwUn7Gc&t=201s&ab_channel=theroadmap

***

