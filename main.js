let btn = document.querySelector('#btn')
function formArea() {
    const form = document.querySelector('#form')
    
    function preventNumbers (e) {
        const keyCode = (e.keyCode ? e.keyCode : e.wich)
            
        if(keyCode > 47 && keyCode < 58) {
            e.preventDefault()
        }
    }
    nome.addEventListener('keypress', preventNumbers)
    sobrenome.addEventListener('keypress', preventNumbers)
    
    form.addEventListener('submit', preventDeflt)

    function preventDeflt(e) {
        e.preventDefault()
        
        let nome = document.querySelector('#nome')
        let sobrenome = document.querySelector('#sobrenome')
        let peso = document.querySelector('#peso')
        let altura = document.querySelector('#altura')
        let list = document.querySelector('#list')

        list.innerHTML += 
            `
            <ul>
                <li>Nome: ${nome.value}</li>
                <li>Sobrenome: ${sobrenome.value}</li>
                <li>Peso: ${peso.value}</li>
                <li>Altura: ${altura.value}</li>
            </ul>
            `
    
        console.log(
            [
                {
                    nome: `${nome.value}`,
                    sobrenome: `${sobrenome.value}`,
                    peso: `${peso.value}`,
                    altura: `${altura.value}`
                }
            ]   
        )
    }
}

formArea()



