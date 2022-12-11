const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');

btn.onclick = () => 
{
    if (senha.type == 'password')
    {
        senha.type = 'text'
        btn.src = '../Imagens/icones/olho2.png'
    }
    else
    {
        senha.type = 'password'
        btn.src = '../Imagens/icones/olho1.png'
    }
}