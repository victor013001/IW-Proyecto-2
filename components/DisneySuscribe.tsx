

const DisneySuscribe = () => {
  return (
    <div className='border w-{1180} h-{340}'>
      <div className='flex flex-row h-20 items-center justify-between'>
        <div >
          <span className='m-6'>Suscríbete al nivel 6 </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm line-through'>$56.690</span>
          <div>
            <span className='text-base font-bold '>$17.000</span>
            <span className='text-sm'>/mes</span>
          </div>
          
        </div> 
      </div>
      <div className='items-center h-16'>
        <span className='m-4'>Consigue los mejores beneficios de Mercado Libre</span>
      </div>
      <div className='border flex flex-row justify-between items-center h-20'>
        <div className='flex flex-row justify-center items-center g-3'>
          <span>Imagen</span>
          <span>Disney+ sin cargo</span>
        </div>
        <div>
          <span>Star+ sin cargo</span>
        </div>
        <div>
          <span>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
        </div>
      </div>
      <div className='border h-20'>
        <button>Suscribete</button> 
      </div>
    </div>
  )
}

export {DisneySuscribe}
