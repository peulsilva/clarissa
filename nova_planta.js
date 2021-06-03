function gravarApi(){
  let photo = document.getElementById("image").files[0];
  let formData = new FormData();
  formData.append('name',document.getElementById('name').value)
  formData.append('species',document.getElementById('species').value)
  formData.append("image", photo);
  formData.append('date',document.getElementById('date').value)
  


  axios.post('http://127.0.0.1:8000/plantas_registradas/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert('Dados inválidos ou já inseridos');
  });

  };
  
  
  


