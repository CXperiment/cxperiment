import { useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import BotonBase from './BotonBase'

const FormContacto = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [opciones, setOpciones] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
  }

  const handleSubmit = (e) => {

  }

  return (
    <section className='w-full flex justify-center items-center'>
      <form action='' className='w-full h-auto md:w-[80%] lg:w-full xl:w-[620px] xl:h-auto bg-bgForm rounded-lg px-5 md:px-5 lg:px-3 xl:px-7 py-14 flex flex-col gap-4 lg:gap-6 xl:gap-7'>
        <div className='w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='name' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Nombre
            <input
              type='text' name='name' id='name'
              value={name}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.name ? 'border-2 border-red-600' : ''}`} placeholder='Nombre'
            />
            {errors.name && (<p className='text-red-500 text-xs w-full'>{errors.name}</p>)}
          </label>
          <label htmlFor='email' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Email
            <input
              type='email' name='email' id='email'
              value={email}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.email ? 'border-2 border-red-600' : ''}`} placeholder='Email'
            />
            {errors.email && (<p className='text-red-500 text-xs w-full'>{errors.email}</p>)}
          </label>
        </div>

        <div className='w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='telefono' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Teléfono
            <input
              type='text' name='telefono' id='telefono'
              value={telefono}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.telefono ? 'border-2 border-red-600' : ''}`} placeholder='Teléfono'
            />
            {errors.telefono && (<p className='text-red-500 text-xs w-full'>{errors.telefono}</p>)}
          </label>
          <label htmlFor='empresa' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Empresa
            <input
              type='text' name='empresa' id='empresa'
              value={empresa}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.empresa ? 'border-2 border-red-600' : ''}`} placeholder='Empresa'
            />
            {errors.empresa && (<p className='text-red-500 text-xs w-full'>{errors.empresa}</p>)}
          </label>
        </div>

        <div className='w-full flex flex-row flex-nowrap gap-5'>
          <label for='opciones' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem] relative'>Opciones de consulta
            <select
              id='opciones' name='opciones'
              value={opciones}
              onChange={handleInputChange}
              className={`w-full p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] text-lg bg-whiteWi border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 appearance-none relative
              ${errors.opciones ? 'border-2 border-red-600' : ''}`}
            >
              <option value=''>Servicio de customer research</option>
              <option value='opcion1'>Opción 1</option>
              <option value='opcion2'>Opción 2</option>
              <option value='opcion3'>Opción 3</option>
            </select>
            <div className='absolute w-[50px] h-[68px] bottom-0 right-2 flex items-center px-2 pointer-events-none'>
              {/* Reemplazar 'IconComponent' con el icono deseado */}
              <IoArrowForwardOutline className='w-5 h-5 text-verdeTurk' />
            </div>
            {errors.opciones && (<p className='text-red-500 text-xs w-full'>{errors.opciones}</p>)}
          </label>
        </div>

        <label htmlFor='mensaje' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
          Mensaje
          <textarea
            name='mensaje' id='mensaje'
            className={`block p-3 lg:p-3 xl:p-4 w-full h-[140px] rounded-xl border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 font-parrafo font-[400] text-lg resize-none ${errors.mensaje ? 'border-2 border-red-600' : ''}`}
            placeholder='Ingrese su mensaje'
          />
          {errors.mensaje && (<p className='text-red-500 text-xs w-full'>{errors.mensaje}</p>)}
        </label>
        <div className='w-full flex flex-row flex-nowrap gap-5'>
          <BotonBase name='enviar mensaje' clase='botonVerde' />
        </div>
      </form>
    </section>
  )
}

export default FormContacto
