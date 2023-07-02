const loadingMessages = [
  'Carregando conteúdo incrível...',
  'Aguarde um momento, estamos preparando tudo para você!',
  'Enquanto isso, aprecie a música...',
  'Estamos quase lá, não desista!',
  'Um dia de carga intensa de bits...',
  'Achou que seria rápido? Espere mais um pouco...',
  'Dizem que a pressa é inimiga da perfeição...',
  'Carregando as informações...',
  'Calma, a espera valerá a pena! Eu acho.',
  'Estamos afinando os pixels, um instante...',
  'Curiosidade: A água é molhada.',
  'Se estiver esperando por muito tempo recomendo que atualize a pàgina',
  'Loading demorado? Pedimos desculpas...',
  'Sugestões, dúvidas ou problemas? Pode entrar em contato!',
];

export function getRandomMessage() {
  const randomMessage = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomMessage];
}
