import './Nosotros.scss'
import iconoApp             from "./iconoApp.jpg"
import perroPerdido         from "./perroPerdido.jpg"
import chapita              from "./chapita.jpg"
import hombrePerro          from "./hombrePerro.jpg"
import { MuestroLeyenda }   from "./MuestroLeyenda"

export const Nosotros = () => {
    
    const leyenda1 = "1.- Supongamos que tu MASCOTA  se extravía en la calle o se escapa de tu casa durante un descuido."
   
    const leyenda2 = "2.- Por suerte, ya le habías colocado su CHAPITA DOGGY  donde, además de tener tu teléfono de contacto, figura un código QR de identificación único que tiene toda la información, no sólo tuya sino también de él - si tiene alguna enfermedad, su comportamiento, medicamentos que necesita tomar, etc.- que previamente cargaste en nuestra web."
    
    const leyenda3 = "3.- La persona que encuentre a tu MASCOTA, al revisar la CHAPITA DOGGY , lo primero que hará será intentar llamarte. Si no logra comunicarse tiene dos opciones para ponerse en contacto con vos: puede escanear el código QR con su celu; si lo hace vas a recibir en tu celu la ubicación exacta en dónde fue escaneda la CHAPITA DOGGY; o puede ingresar desde cualquier dispositivo a la web chapitas.doggystyle.com.ar e ingresar el nombre que figura en la CHAPITA DOGGY + los últimos 4 dígitos del teléfono en el buscador."
    
    const leyenda4 = "Listo! Ahora la persona que encontró a tu MASCOTA  puede ver, además de una mayor cantidad de datos para ponerse en contacto con vos, si tu MASCOTA  necesita algún cuidado especial o se encuentra bajo algún tratamiento médico."

    return (
        <div className="contenedor">
            <h2 className="contenedor_titulo"> <img src={iconoApp} alt=""/> ¿Cómo ayuda tu <b>CHAPITA DOGGY</b> a encontrar a tu <b>MASCOTA</b>?</h2>
        
            <MuestroLeyenda leyenda={leyenda1} imagen={perroPerdido}   />
            <MuestroLeyenda leyenda={leyenda2} imagen={chapita}        />
            <MuestroLeyenda leyenda={leyenda3}                         />
            <MuestroLeyenda leyenda={leyenda4} imagen={hombrePerro}    />
            
        </div>
    )
}