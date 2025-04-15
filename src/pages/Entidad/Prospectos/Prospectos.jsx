import { useNavigate } from "react-router-dom";
import EntidadView from "@/components/shared/VistaEntidad";
import { getProspectos, deleteProspecto } from "@/service/Entidades/ProspectoService";
import { useEffect, useState } from "react";


export default function Prospectos() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProspectos();
        setDatos(response);
      } catch (err) {
        console.error("Error al cargar prospectos:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const handleEditar = (item) => {
    navigate(`/prospectos/editar/${item.id}`);
  };

  const handleEliminar = async (item) => {
    try {
      await deleteProspecto(item.id);
      setDatos((prev) => prev.filter((d) => d.idProspecto !== item.id));
    } catch (err) {
      console.error("Error al eliminar prospecto:", err);
    }
  };

  return (
    <EntidadView
      titulo="Prospectos"
      entidad="prospectos"
      loading={loading}
      data={datos.map((d) => ({
        id: d.idProspecto,
        nombre: `${d.nombres} ${d.apellidoPaterno} ${d.apellidoMaterno}`,
        correo: d.correoElectronico,
        telefono: d.telefonoCelular,
        estado: d.estado || "Activo",
      }))}
      onEditar={handleEditar}
      onEliminar={handleEliminar}
    />
  );
  
}
