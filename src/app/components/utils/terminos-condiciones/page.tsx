import React from "react";
import "./TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <div className="container">
      <h1 className="title">Términos y Condiciones</h1>
      <p className="subtitle">
        ¡Gracias por elegir a <strong>QORI WAYRA TRAVEL E.I.R.L</strong>! Antes de reservar, lea atentamente nuestros términos y condiciones.
      </p>
      
      <section className="section">
        <h2 className="section-title">Reservas</h2>
        <ul className="list">
          <li>Se requiere información personal completa de todos los viajeros.</li>
          <li>Para estudiantes menores de 24 años, se requiere una tarjeta de estudiante vigente.</li>
          <li>Depósito del 50% del costo del tour.</li>
          <li>Para caminatas a Machu Picchu, se requiere un depósito no reembolsable de $200.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="section-title">Pagos</h2>
        <p className="text">El saldo restante deberá pagarse un día antes de la salida en nuestra oficina en Cusco.</p>
        <p className="highlight">📍 Calle Garcilaso 210, int. 110</p>
        <ul className="list">
          <li>Efectivo</li>
          <li>Tarjeta de crédito/débito (Visa, American Express)</li>
          <li>Transferencias bancarias</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="section-title">Cancelaciones</h2>
        <p className="text">El depósito de reserva no es reembolsable ni transferible.</p>
        <p className="text">No hay reembolsos una vez abonado el saldo total.</p>
      </section>
      
      <section className="section">
        <h2 className="section-title">Normas de Conducta</h2>
        <ul className="list">
          <li>Se deben respetar las leyes y normas locales.</li>
          <li>La decisión del guía es inapelable si la seguridad del grupo está en riesgo.</li>
          <li>Si un cliente afecta al grupo, puede ser retirado del tour sin derecho a reembolso.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="section-title">Salud y Seguros</h2>
        <p className="text">Todo cliente debe contar con un seguro médico personal de viaje.</p>
        <ul className="list">
          <li>Accidentes personales</li>
          <li>Gastos médicos y repatriación</li>
          <li>Pérdida de efectos personales</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="section-title">Precauciones contra el Mal de Altura</h2>
        <ul className="list">
          <li>Permanecer al menos 2 días a más de 3,000 metros de altitud antes del viaje.</li>
          <li>Beber líquidos en abundancia y consumir alimentos ricos en carbohidratos.</li>
          <li>Evitar alcohol y cigarrillos.</li>
          <li>Tomar té de hoja de coca.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="section-title">Reclamaciones y Quejas</h2>
        <p className="text">Si el cliente tiene una queja, debe informarlo de inmediato al guía o jefe de grupo.</p>
        <p className="text">Las reclamaciones deben enviarse por correo electrónico dentro de los 5 días posteriores al tour.</p>
      </section>
      
      <section className="signature">
        <h2 className="section-title">Firma del Viajero</h2>
        <p className="text">📌 Firma del Viajero 1</p>
        <p className="text">📌 Firma del Viajero 2</p>
      </section>
    </div>
  );
};

export default TerminosCondiciones;
