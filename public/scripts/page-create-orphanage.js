//create map
const map = L.map('mapid').setView([-16.7167231,-49.277035], 15);

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
})

// adicionar o campo de fotos
function addPhotoField(){
    // pegar o container de fotos
    const container = document.querySelector('#images')
    // pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // se o campo estiver vazio nao vamos adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpa o valor dentro do campo antes de adicionar a imagem
    newFieldContainer.children[0].value = ""
    // adicionar o clone ao container de images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value=""
        return
    }
    // deletar o campo inteiro
    span.parentNode.remove()
}

// selecionar sim ou não
function toggleSelect(event){
    // retirar a classe .active de yodos os botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active')) // arrow function
    // colocar a classe .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    // verificar se
}

