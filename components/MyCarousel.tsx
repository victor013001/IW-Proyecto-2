import Carousel from 'react-multi-carousel'
import { Oferta } from './oferta'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    desktop: {
        breakpoint: { max:3000, min:1024},
        items: 5
      },
    tablet: {
      breakpoint: { max:768, min:425},
      items: 1
    },
    mobile: {
      breakpoint: { max:425, min: 0 },
      items: 1
    }
  };

const MyCarousel = () => {
  return (
        <section className='flex justify-center items-center'>
            <div className='w-[250px] lg:w-[996px]'>
            <Carousel responsive={responsive}>
                <Oferta imagen='./media/silla_oferta.png' precio='210.000' descuento='32' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/micro_oferta.png' precio='74.990' descuento='25' promo='Envío gratis FULL'></Oferta>
                <Oferta imagen='./media/afeitadora_oferta.png' precio='134.950' descuento='50' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/armario_oferta.png' precio='149.900' descuento='30' promo='Envío gratis'></Oferta>
                <Oferta imagen='./media/cortina_oferta.png' precio='69.990' descuento='17' promo='FULL'></Oferta>
                <Oferta imagen='./media/bucket_oferta.png' precio='35.000' descuento='25' promo='Envío gratis'></Oferta> 
                <Oferta imagen='./media/camiseta_oferta.png' precio='329.000' descuento='5' promo='Envío gratis FULL'></Oferta> 
                <Oferta imagen='./media/xbox_oferta.png' precio='150.000' descuento='15' promo='FULL'></Oferta> 
                <Oferta imagen='./media/pc_oferta.png' precio='200' descuento='98' promo='Envío gratis FULL'></Oferta>
                <Oferta imagen='./media/guayos_oferta.png' precio='300.000' descuento='35' promo='Envío gratis'></Oferta>                      
            </Carousel>
        </div>
        </section>
  )
}
export {MyCarousel}