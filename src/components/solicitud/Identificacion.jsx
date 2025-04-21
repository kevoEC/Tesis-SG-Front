import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Identificacion() {
  const [form, setForm] = useState({
    tipoSolicitud: "",
    tipoCliente: "",
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    validar: false,
    equifax: "",
    obsEquifax: "",
    listasControl: "",
    obsListasControl: "",
    listasInternas: "",
    obsListasInternas: "",
    continuar: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-xl font-semibold text-gray-800">Identificación</h2>

      <Card className="shadow border">
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              label="Tipo de solicitud"
              value={form.tipoSolicitud}
              onChange={(val) => handleChange("tipoSolicitud", val)}
              options={["Nueva", "Renovación", "Incremento"]}
            />
            <FormSelect
              label="Tipo de cliente"
              value={form.tipoCliente}
              onChange={(val) => handleChange("tipoCliente", val)}
              options={["Natural", "Jurídico"]}
            />
            <FormSelect
              label="Tipo de documento"
              value={form.tipoDocumento}
              onChange={(val) => handleChange("tipoDocumento", val)}
              options={["CI", "Pasaporte", "RUC"]}
            />
            <FormInput
              label="Número de identificación"
              value={form.numeroDocumento}
              onChange={(e) => handleChange("numeroDocumento", e.target.value)}
            />
            <FormInput
              label="Nombres"
              value={form.nombres}
              onChange={(e) => handleChange("nombres", e.target.value)}
            />
            <FormInput
              label="Apellido paterno"
              value={form.apellidoPaterno}
              onChange={(e) => handleChange("apellidoPaterno", e.target.value)}
            />
            <FormInput
              label="Apellido materno"
              value={form.apellidoMaterno}
              onChange={(e) => handleChange("apellidoMaterno", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4 px-6">
        <Label className="text-sm font-medium text-gray-700">Validar</Label>
        <Switch
          checked={form.validar}
          onCheckedChange={(checked) => handleChange("validar", checked)}
          className="border border-gray-400 bg-white data-[state=checked]:bg-blue-600"
        />

        <span className="text-sm text-muted-foreground">{form.validar ? "Sí" : "No"}</span>
      </div>

      {form.validar && (
        <>
          <h2 className="text-xl font-semibold text-gray-800">Validación</h2>
          <Card className="shadow border">
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Identidad (Equifax)"
                  value={form.equifax}
                  onChange={(e) => handleChange("equifax", e.target.value)}
                />
                <FormTextArea
                  label="Observación Equifax"
                  value={form.obsEquifax}
                  onChange={(e) => handleChange("obsEquifax", e.target.value)}
                />
                <FormInput
                  label="Listas de Control (LDS)"
                  value={form.listasControl}
                  onChange={(e) => handleChange("listasControl", e.target.value)}
                />
                <FormTextArea
                  label="Observación LDS"
                  value={form.obsListasControl}
                  onChange={(e) => handleChange("obsListasControl", e.target.value)}
                />
                <FormInput
                  label="Listas internas"
                  value={form.listasInternas}
                  onChange={(e) => handleChange("listasInternas", e.target.value)}
                />
                <FormTextArea
                  label="Observación Listas Internas"
                  value={form.obsListasInternas}
                  onChange={(e) => handleChange("obsListasInternas", e.target.value)}
                />
                <FormSelect
                  label="Continuar"
                  value={form.continuar}
                  onChange={(val) => handleChange("continuar", val)}
                  options={["Continuar con la solicitud", "Rechazar solicitud"]}
                  full
                />
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

// 🔁 Reutilizables
function FormInput({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm text-gray-700 font-medium">{label}</Label>
      <Input
        value={value}
        onChange={onChange}
        className="text-sm border-gray-300"
      />
    </div>
  );
}

function FormSelect({ label, value, onChange, options = [], full = false }) {
  return (
    <div className={`space-y-1 ${full ? "md:col-span-2" : ""}`}>
      <Label className="text-sm text-gray-700 font-medium">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="text-sm">
          <SelectValue placeholder={`Selecciona ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function FormTextArea({ label, value, onChange }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm text-gray-700 font-medium">{label}</Label>
      <textarea
        rows={3}
        value={value}
        onChange={onChange}
        className="w-full text-sm rounded-md border border-gray-300 px-3 py-2 resize-none"
      />
    </div>
  );
}
