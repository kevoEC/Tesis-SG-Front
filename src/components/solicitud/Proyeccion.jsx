import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Proyeccion() {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-xl font-semibold text-gray-800">Aceptación del producto</h2>

      {/* ✅ Botón encima de la tabla */}
      <div className="flex justify-end mb-2">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
          <PlusCircle size={16} className="mr-2" />
          Agregar proyección
        </Button>
      </div>

      <Card>
        <CardContent className="p-4">
          {/* Tabla vacía */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Tasa %</TableHead>
                  <TableHead>Corte de pago</TableHead>
                  <TableHead>Tiene excepción</TableHead>
                  <TableHead>Fecha de creación</TableHead>
                  <TableHead>Proyección real...</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No se encontró nada para mostrar aquí
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Formulario inferior */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormGroup label="Asesor comercial">
              <Input placeholder="PORTAL WEB" disabled />
            </FormGroup>

            <FormGroup label="Justificativo de transacción">
              <Select>
                <SelectTrigger className="bg-white border border-gray-300">
                  <SelectValue placeholder="---" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="1">Opción 1</SelectItem>
                  <SelectItem value="2">Opción 2</SelectItem>
                </SelectContent>
              </Select>
            </FormGroup>

            <FormGroup label="Proyección seleccionada">
              <Input placeholder="---" disabled />
            </FormGroup>

            <FormGroup label="Origen de fondos">
              <Input placeholder="---" disabled />
            </FormGroup>

            <FormGroup label="Enviar proyección">
              <div className="flex items-center gap-3">
                <Switch disabled className="border border-black" />
                <span className="text-sm text-muted-foreground">No</span>
              </div>
            </FormGroup>

            <FormGroup label="Aceptación del cliente">
            <Select>
              <SelectTrigger className="bg-white border border-gray-300">
                <SelectValue placeholder="Selecciona aceptación" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="acepta">El Cliente Acepta</SelectItem>
                <SelectItem value="no-acepta">El Cliente No Acepta</SelectItem>
              </SelectContent>
            </Select>
          </FormGroup>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FormGroup({ label, children }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm text-gray-700 font-medium">{label}</Label>
      {children}
    </div>
  );
}
