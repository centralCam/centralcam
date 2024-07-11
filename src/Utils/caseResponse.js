import Swal from "sweetalert2";

const caseResponse = (response)=>{
  //console.log('response:',response)
    switch (response.status) {
      
        case 404:
            const errorMessage = response.data ? response.data.message : `Error ${response.status}` ;
          Swal.fire({
            title: errorMessage,
            icon: 'warning',
            showConfirmButton: true
          });
        case 409:
          const errorMessage1 = response.data ? response.data.message : `Error ${response.status}` ;
          Swal.fire({
            title: errorMessage1,
            icon: 'warning',
            showConfirmButton: true
          });
          break;
        case 200:
          Swal.fire({
            title: response.data ? response.data.message : response.message,
            icon: 'success',
            showConfirmButton: true
          });
          break;
         case 500:
            const errorMessage2 = response.data ? response.data.message : `Error ${response.status}` ;
          Swal.fire({
            title: errorMessage2,
            icon: 'error',
            showConfirmButton: true
          });
        default:
        const errorMessage3 = response.data ? response.data.message : `Error ${response.status}` ;
          Swal.fire({
            title: errorMessage3,
            icon: 'error',
            showConfirmButton: true
          });
      }
  }

  export default caseResponse