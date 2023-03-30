const space = document.getElementById('space')
const nombre = document.getElementById('nombre')
const descripcion = document.getElementById('descripcion')
const addData = document.getElementById('addData')
const formulario = document.getElementById('formulario')


//use to reload the data after to use the end-point
const loadData = ()=>{
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
}

//first call to the server
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


//add data
addData.addEventListener('click',()=>{
    axios.post('/api',{
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
})
