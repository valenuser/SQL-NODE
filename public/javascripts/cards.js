
const card = (data)=>{
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h1>${data.nombre}</h1>
                <p>${data.descripcion}</p>
                <button type="button" class="btn btn-danger cards" data-id=${data.id} id="delete">Delete</button>
                <button type="button" class="btn btn-success" data-id=${data.id} id="update">Update</button>
            </div>
        </div>
    `

    const Delete = div.querySelector('#delete')
    const Update = div.querySelector('#update')


    const buttonConfirm = (data)=>{
        const confirmUpdate = document.createElement('div')
        confirmUpdate.innerHTML=`
            <button type="button" class="btn btn-success updateButtonForm" id="updateButton" data-id=${data}>Update</button>
        `

    const updateButton = confirmUpdate.querySelector('#updateButton')
    updateButton.addEventListener('click',()=>{
        axios.put('/api/'+updateButton.dataset.id,{
            nombre:nombre.value,
            descripcion:descripcion.value
        })
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
        
            nombre.value = ''
            descripcion.value = ''
            loadData()
            updateButton.style.display = 'none'
    })

    return confirmUpdate
    }

    Update.addEventListener('click',()=>{

        axios.get('/api/'+Update.dataset.id)
            .then((response)=>{
                nombre.value = response.data[0].nombre
                descripcion.value = response.data[0].descripcion
                formulario.append(buttonConfirm(response.data[0].id))

            })
            .catch((error)=>{
                console.log(error);
            })
    })



    Delete.addEventListener('click',()=>{

        axios.delete('/api/'+Delete.dataset.id)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })

        axios.get('/api')
            .then((response)=>{
                let dataList = []
                for(let i = 0; i < response.data.length;i++){
                    let data = {
                        id:response.data[i].id,
                        nombre:response.data[i].nombre,
                        descripcion:response.data[i].descripcion
                    }
        
                    dataList.push(data)
                }
        
                loadCard(dataList)
            })
            .catch((error)=>{
                console.log(error);
            })
    })

    return div
}


const loadCard = (loadData)=>{
    space.innerHTML= ''
    loadData.forEach((data)=>{
        space.append(card(data))
    })
}