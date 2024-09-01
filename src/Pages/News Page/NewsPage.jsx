import News from "../../Components/News/News";
import Background from '../../assets/backgroundNews2.jpg';

const NewsPage = () => {
    return ( 
        <div className="relative w-full min-h-screen flex justify-center items-center py-44">
            {/* Capa del fondo con desenfoque */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100% auto',  // Ajuste del tamaño para cubrir el ancho y repetir verticalmente
                    backgroundRepeat: 'repeat-y',  // Repetir solo en la dirección vertical
                    filter: 'blur(25px)' // Aplicar desenfoque al fondo
                }}
            ></div>
            
            {/* Capa superpuesta para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Contenido principal */}
            <div className="relative">
                <News showLoadMoreButton={true} />
            </div>
        </div>
    );
}

export default NewsPage;
