// src/services/ProspectoService.js

const mockProspectos = [
  {
    id: 1,
    nombres: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "García",
    correoElectronico: "juan@correo.com",
    telefonoCelular: "0999999999",
    idTipoIdentificacion: "1",
    idOrigenCliente: "2",
    idProductoInteres: "1",
    idAgencia: "1",
  },
  {
    id: 2,
    nombres: "Luisa",
    apellidoPaterno: "Gómez",
    apellidoMaterno: "Ramírez",
    correoElectronico: "luisa@correo.com",
    telefonoCelular: "0988888888",
    idTipoIdentificacion: "2",
    idOrigenCliente: "1",
    idProductoInteres: "2",
    idAgencia: "2",
  },
];

export const getProspectoById = async (id) => {
  const found = mockProspectos.find((p) => p.id === Number(id));
  if (!found) throw new Error("Prospecto no encontrado");
  return found;
};

export const createProspecto = async (data) => {
  console.log("✅ Enviando prospecto al backend (simulado):", data);
  return { success: true };
};
