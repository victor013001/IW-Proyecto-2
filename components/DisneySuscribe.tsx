import { Button } from "@mui/material"

const DisneySuscribe = () => {
  return (
    <section className='border md:w-[1180px] h-{340} justify-center items-center md:ml-16 mt-14 sm:w-[100px], m-1'>
      <div className='flex flex-row h-20 items-center justify-between header-sub-color '>
        <div className="text-white text-lg">
          <span className='m-6 font-bold'>Suscríbete al nivel 6 </span>
        </div>
        <div className='flex flex-col text-white'>
          <span className='text-sm line-through'>$56.690</span>
          <div>
            <span className='text-lg font-bold '>$17.000</span>
            <span className='text-sm mr-6'>/mes</span>
          </div>
          
        </div> 
      </div>
      <div className='items-center h-16 m-4'>
        <span>Consigue los mejores beneficios de Mercado Libre</span>
      </div>
      <div className='flex flex-row justify-between items-center gap-48 m-4'>
        <div className='w-[377px] gap-4 flex flex-row justify-center items-center'>
        <img src='./disney+.png'/>
          <span>Disney+ sin cargo</span>
        </div>
        <div className='hidden w-[377px] gap-4 md:flex flex-row justify-center items-center'>
          <img src='./star.png'/>
          <span>Star+ sin cargo</span>
        </div>
        <div className='hidden md:flex flex-row gap-5'>
        <img src='./camion.png'/>
          <div className="">
            <span>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</span>
          </div>
          
        </div>
      </div>
      <div className='flex flex-row justify-end items-center mr-4 mb-3 h-20'>
        <Button variant="contained">Suscribete</Button>
      </div>
    </section>
  )
}

export {DisneySuscribe}
