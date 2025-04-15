import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntidadView from "@/components/shared/VistaEntidad";

// Mock enriquecido
const datosMock = [
  {
    id: 1,
    nombre: "Juan Pérez",
    correo: "juan@correo.com",
    telefono: "0999999999",
    tipoIdentificacion: { nombre: "Cédula" },
    origen: { nombre: "Publicidad" },
    productoInteres: { nombre: "Inversión A" },
    agencia: { ciudad: "Quito" },
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Luisa Gómez",
    correo: "luisa@correo.com",
    telefono: "0988888888",
    tipoIdentificacion: { nombre: "Pasaporte" },
    origen: { nombre: "Recomendación" },
    productoInteres: { nombre: "Inversión B" },
    agencia: { ciudad: "Guayaquil" },
    estado: "Inactivo",
  },
];

export default function Prospectos() {
  const [datos, setDatos] = useState(datosMock);
  const navigate = useNavigate();

  const handleEditar = (item) => {
    navigate(`/prospectos/detalle/${item.id}`);
  };

  const handleEliminar = (item) => {
    setDatos((prev) => prev.filter((d) => d.id !== item.id));
  };

  return (
    <EntidadView
      titulo="Prospectos"
      entidad="prospectos"
      data={datos.map((d) => ({
        id: d.id,
        nombre: d.nombre,
        correo: d.correo,
        telefono: d.telefono,
        tipoIdentificacion: d.tipoIdentificacion.nombre,
        origen: d.origen.nombre,
        productoInteres: d.productoInteres.nombre,
        agencia: d.agencia.ciudad,

        estado: d.estado,
      }))}
      onEditar={handleEditar}
      onEliminar={handleEliminar}
    />
  );
}
