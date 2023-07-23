import Eventos from "./Eventos.js"


const $options = document.getElementById('options-card')
const $btnEditar = document.getElementById('btn-editar')
const $btnEliminar = document.getElementById('btn-eliminar')
const $table = document.getElementById('body')

const objEvento = new Eventos(true);

objEvento.setClassOfComponent = 'options'
objEvento.setDataSet = ['num']
objEvento.setComponentsToSetData = {
    0 : [$btnEditar,  'id'], 
    1 : [$btnEliminar, 'id']
}


const getData = ()=>{
    fetch('https://ferreteriaapppp.000webhostapp.com/usuarios.php')
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json=>{
        let row = ''
        json.map((el, index) =>{
            row += `
                <tr>
                    <th scope="row">${el.id}</th>
                    <td>${el.nombre}</td>
                    <td>${el.apellidos}</td>
                    <td>${el.gmail}</td>
                    <td>${el.telefono}</td>
                    <td><img class="options" data-num = "${index + 1}" data-id="${el.id}" width="20px" src="../img/delete_red.png" alt=""></td>
                    <td><button id="abrirModal" class="icon-button">
        <img src="../img/edit.png" alt="Icono">
    </button></td>
                </tr>
            `
    
        })
        
    
        $table.innerHTML = row
    
        console.log(json)
    })
    .catch(err=>{
        console.log(err)
    })
}



getData()

$btnEliminar.addEventListener('click', e=>{
    fetch('https://ferreteriaapppp.000webhostapp.com/eliminar_pedido.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `id=${e.target.dataset.id}`
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json=>{
        getData()
    })
    .catch(err=>{
        console.log(err)
    })
})



