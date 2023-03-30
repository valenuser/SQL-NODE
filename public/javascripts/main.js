
axios.get('/api')
    .then((response)=>{
        console.log(response.data);
    })

    .catch((error)=>{
        console.log(error);
    })