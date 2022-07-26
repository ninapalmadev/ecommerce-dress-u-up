const api = 'http://localhost:3000/'

export const criaCliente = (nome, email,senha) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

// verificar usuario login
export const getLogin = async(email, senha, setIsLogged) => {
    await api.get(`/users?email=${email}&senha=${senha}`)
      .then(function (response) {
        if(response.data.length > 0){
          setIsLogged(true);
        }else{
          Swal.fire({    
            icon: 'error',  
            confirmButtonColor: '#2A7AE4',
            title: 'Usuário e/ou senha incorretos!',
            text: 'Tente novamente.'
          });
        }      
      })
      .catch(function (error) {
        console.error(error);
      });
  }