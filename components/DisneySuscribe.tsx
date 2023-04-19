const DisneySuscribe = () => {
  return (
    <section className='w-[1180px] h-{340} justify-center items-center ml-16 mt-14'>
      <div className='flex flex-row h-20 items-center justify-between bg-gradient-to-r from-cyan-500 to-black-500'>
        <div>
          <span className='m-6 font-bold'>Suscríbete al nivel 6 </span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm line-through'>$56.690</span>
          <div>
            <span className='text-base font-bold '>$17.000</span>
            <span className='text-sm mr-6'>/mes</span>
          </div>
          
        </div> 
      </div>
      <div className='items-center h-16 m-4'>
        <span>Consigue los mejores beneficios de Mercado Libre</span>
      </div>
      <div className='flex flex-row justify-between items-center gap-48'>
        <div className='w-[377px] gap-4 flex flex-row justify-center items-center'>
        <img src='./disney+.png'/>
          <span>Disney+ sin cargo</span>
        </div>
        <div className='w-[377px] gap-4 flex flex-row justify-center items-center'>
          <img src='./star.png'/>
          <span>Star+ sin cargo</span>
        </div>
        <div className='flex flex-row gap-5'>
          
          <div className="w-[242px]">
            <span>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
          </div>
          
        </div>
      </div>
      <div className='border items-end h-20 '>
        <button>Suscribete</button> 
      </div>
    </section>
  )
}

export {DisneySuscribe}
