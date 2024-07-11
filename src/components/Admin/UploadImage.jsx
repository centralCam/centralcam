'use client'
import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function UploadImage({ imagenes, updateImages, handleRemoveImage }) {
// Inicializar el estado con URLs y archivos
  const [archivos, setArchivos] = useState(
    imagenes
      .filter(Boolean) // Filtrar elementos vacíos
      .map((img) => ({
        name:  typeof img ==='string' && img.split('/').pop(), // Extraer el nombre del archivo desde la URL
        preview: img,
        isURL: true,
      }))
  );
  //console.log(archivos,'estado archivos uploadImage')

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  
  // Verificar si la imagen tiene una relación de aspecto 1:1
  const isAspectRatioOneToOne = (image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const isOneToOne = img.width === img.height;
        resolve(isOneToOne);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(image);
    });
  };

  // Manejar la selección de archivos
  const handleArchivoSeleccionado = async (e) => {
    const nuevosArchivos = [...archivos];
    const filesToUpload = e.target.files;
    if (archivos.length + filesToUpload.length > 4) {
      toast.error("Solo se pueden cargar hasta 4 fotos.");
      return;
    }
    for (let i = 0; i < filesToUpload.length; i++) {
      const archivo = filesToUpload[i];
      //console.log(archivo,'dentro del for')
      //funcion que suba el archivo a cloudinary
      const existe = archivos.some((a) => a.name === archivo.name);
      if (!existe) {
        const isOneToOne = await isAspectRatioOneToOne(archivo);
        if (isOneToOne) {
          archivo.preview = URL.createObjectURL(archivo);
          const res =await submitUpdateImage(archivo)
          //console.log(res,'funcion subida')
          nuevosArchivos.push(res);
        } else {
          toast.error("La imagen debe tener una relación de aspecto 1:1.");
        }
      }
    }
    //console.log(nuevosArchivos,'ARCHIVO')
    setArchivos(nuevosArchivos);
    updateImages(nuevosArchivos.map(archivo => archivo));
  };

  // Manejar la eliminación de archivos
  const handleEliminarArchivo = async (index) => {
    const [imgPrevAEliminar] = archivos.filter((_, i) => i === index)[0].name.split('.');
    const imgAEliminar = `Products/${imgPrevAEliminar}`;

    const res = await fetch('api/deleteImage', {
        method: 'DELETE',
        body: JSON.stringify({ file: imgAEliminar }) // Correctly pass the image to be deleted
    });

    const data = await res.json();
    // console.log(res, 'dataDelete');
    //(index,'index')
    
    const nuevosArchivos = archivos.filter((_, i) => i !== index);
    const archivoAEliminar = archivos[index];
    if (!archivoAEliminar.isURL && archivoAEliminar.preview) {
      URL.revokeObjectURL(archivoAEliminar.preview);
    }
    handleRemoveImage(index);

    setArchivos(nuevosArchivos);
    updateImages(nuevosArchivos.map(archivo => archivo));
};

  // Manejar la visualización de archivos
  const handleVerArchivo = (archivo) => {
    if (archivo.preview) {
      window.open(archivo.preview);
    } else {
      window.open(URL.createObjectURL(archivo));
    }
  };


  const submitUpdateImage = async(file) => {
    const formData = new FormData()
    formData.append('file', file);

     const res = await fetch ( 'api/uploadImage', {
       method:'POST',
       body: formData
     })
      const data = await res.json()
      //console.log(data,'data')
      return data
    }
  

  return (
    <div>
      <ToastContainer
        className="toast-container"
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex mt-[10px]">
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
        >
          Subir Archivo
          <VisuallyHiddenInput type="file" multiple onChange={handleArchivoSeleccionado} />
        </Button>
      </div>

      {archivos.length !== 0 && (
        <div className="relative pb-[50px] bg-white mt-[20px] rounded-md ">
          <div className="grid grid-cols-4 gap-4">
            {archivos.map((archivo, index) => (
              <div key={index} className="relative shadow-md rounded-lg">
                {/* Vista previa de la imagen */}
                <img
                  src={archivo.preview || URL.createObjectURL(archivo)}
                  alt={archivo.name}
                  className="w-full object-cover cursor-pointer h-36 max-w-full rounded-lg"
                  onClick={() => handleVerArchivo(archivo)}
                  loading='lazy'
                />

                 <button
                    type="button"
                    aria-label="eliminar archivo"
                    onClick={() => handleEliminarArchivo(index)}
                    aria-controls="drawer-navigation"
                    className="absolute top-1 right-1 cursor-pointer bg-gray-300 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg text-sm w-6 h-6  inline-flex items-center justify-center "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>

              </div>
            ))}
          </div>
         
        </div>
      )}
    </div>
  );
}