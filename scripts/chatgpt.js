//Inclusão da Api do ChatGPT

const API_KEY = `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`;

//Acessar o campo de texto
const mainSearch = document.querySelector(`.search`),
    question = document.querySelector(`.pesquisa`);

if(mainSearch) {
    //Aguardar o usuário clicar no botão Enviar
    question.addEventListener(`click`, async (e) => {
        //Bloquear o recarregamento da página
        e.preventDefault();

        //Receber o valor do input
        const pergunta = document.getElementById(`question`).value;

        console.log(pergunta);

        //Link para requisição do ChatGPT
        await fetch(`https://api.openai.com/v1/completions`, {
            //Método para enviar os dados
            method: `POST`,

            //Dados enviados no cabeçalho da requisição

            headers: {
                Accept: `application/json`,
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },

            //Enviar os dados no corpo da requisição
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": pergunta,
                "max_tokens": 1000,
                "temperature": 0.8
            }),
        }) //Término da requisição
        //Acessa o then quando tiver resposta
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados);
            console.log(dados.choice[0].text);
        })
        .catch((erro) => {
            console.log(dados.choice[0].text);
        }); 
    });
}