import './ItemListContainer.scss'
import iconoApp from "./iconoApp.jpg"
import perroPerdido from "./perroPerdido.jpg"
import chapita from "./chapita.jpg"
import hombrePerro from "./hombrePerro.jpg"


const ItemListContainer = () => {

    return (
        <div className="contenedor">
            <h2 className="contenedor_titulo">¿Cómo ayuda tu <b>CHAPITA DOGGY</b> a encontrar a tu <b>MASCOTA</b>? <img src={iconoApp} alt=""/> </h2>
            <p>1.- Supongamos que tu <b>MASCOTA</b>  se extravía en la calle o se escapa de tu casa durante un descuido. <img src={perroPerdido} alt=""/></p>
            <p>2.- Por suerte, ya le habías colocado su <b>CHAPITA DOGGY</b>  donde, además de tener tu teléfono de contacto, figura un código QR de identificación único que tiene toda la información, no sólo tuya sino también de él - si tiene alguna enfermedad, su comportamiento, medicamentos que necesita tomar, etc.- que previamente cargaste en nuestra web. <img src={chapita} alt=""/></p>
            <p>3.- La persona que encuentre a tu <b>MASCOTA</b> , al revisar la <b>CHAPITA DOGGY</b> , lo primero que hará será intentar llamarte. Si no logra comunicarse tiene dos opciones para ponerse en contacto con vos: puede escanear el código QR con su celu; si lo hace vas a recibir en tu celu la ubicación exacta en dónde fue escaneda la <b>CHAPITA DOGGY</b> . O puede ingresar desde cualquier dispositivo a la web chapitas.doggystyle.com.ar e ingresar el nombre que figura en la <b>CHAPITA DOGGY</b>  + los últimos 4 dígitos del teléfono en el buscador. </p>
            <p>Listo! Ahora la persona que encontró a tu <b>MASCOTA</b>  puede ver, además de una mayor cantidad de datos para ponerse en contacto con vos, si tu <b>MASCOTA</b>  necesita algún cuidado especial o se encuentra bajo algún tratamiento médico. </p>
            <img src={hombrePerro} alt=""/>
        </div>
    )
}

export default ItemListContainer