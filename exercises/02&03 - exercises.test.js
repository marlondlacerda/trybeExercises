const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

describe('Verifica a função getUserName para o caso em que o user é encontrado e também quando não é encontrado', () => {

  it('verifica o resolve', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark')
  });

  it('Verifica o Reject', async () => {
    expect.assertions(1);
    await expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' })
  });
});

// Gabarito da Trybe 

// Solução 2

// const users = {
//   : { name: 'Mark' },
//   : { name: 'Paul' }
//   };
  
//   const findUserById = (id) => {
//     return new Promise((resolve, reject) => {
//       if (users[id]) {
//         return resolve(users[id]);
//       }
  
//       return reject({ error: 'User with ' + id + ' not found.' });
//     });
//   }
  
//   const getUserName = (userID) => {
//     return findUserById(userID).then(user => user.name);
//   }
  
//   describe('getUserName - promise', () => {
//     describe('when the user id exists', () => {
//       it('returns the user name', () => {
//         expect.assertions(1);
//         return getUserName(4).then(data => expect(data).toEqual('Mark'));
//       });
//     });
  
//     describe('when the user id does not exists', () => {
//       it('returns an error', () => {
//         expect.assertions(1);
//         return getUserName(2).catch(error =>
//           expect(error).toEqual({ error: 'User with 2 not found.' })
//         );
//       });
//     });
//   });

// SOLUÇÃO 3

// const users = {
//   : { name: 'Mark' },
//   : { name: 'Paul' }
//   };
  
//   const findUserById = (id) => {
//     return new Promise((resolve, reject) => {
//         if (users[id]) {
//           return resolve(users[id]);
//         }
//         return reject({ error: 'User with ' + id + ' not found.' });
//     });
//   }
  
//   const getUserName = (userID) => {
//     return findUserById(userID).then(user => user.name);
//   }
  
//   describe('getUserName - async/await', () => {
//     describe('when the user id exists', () => {
//       it('returns the user name', async () => {
//         expect.assertions(1);
//         const data = await getUserName(4);
//         expect(data).toEqual('Mark');
//       });
//     });
  
//     describe('when the user id does not exists', () => {
//       it('returns an error', async () => {
//         expect.assertions(1);
//         try {
//           await getUserName(1);
//         } catch (error) {
//           expect(error).toEqual({ error: 'User with 1 not found.' });
//         }
//       });
//     });
//   });
