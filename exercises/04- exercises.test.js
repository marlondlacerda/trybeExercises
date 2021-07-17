const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Suíte de teste que verifica se possui tipos de repositórios', () => {

  it('gets a list of repositories names', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(2);
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list');
    await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');

  });
}); // De acordo com o gabrito + uma adaptação com async e await 



// O modo que eu fiz que também deu certo 
describe('Suíte de teste que verifica se possui tipos de repositórios', () => {

  it('gets a list of repositories names', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const expected = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
    expect.assertions(1);
    await expect(getRepos(url)).resolves.toEqual(expect.arrayContaining(expected));
  });
}); 
