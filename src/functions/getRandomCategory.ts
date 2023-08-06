const randomCategory = () => {
  const category = [
    'animação',
    'terror',
    'drama',
    'comédia',
    'suspense',
    'ação',
    'aventura',
  ];

  const randomCategory = Math.floor(Math.random() * category.length);
  return category[randomCategory];
};

export default randomCategory;
