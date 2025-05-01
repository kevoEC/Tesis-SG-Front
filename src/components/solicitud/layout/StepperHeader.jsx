import { useSolicitudStepper } from "@/service/stepper/stepperSolicitud";
import { pasosSolicitud, utilsSolicitud } from "@/service/stepper/stepperSolicitud";
import { CheckCircle, Circle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// 💡 Aquí defines los pasos que tienen errores (para visual feedback)
const erroresPorPaso = {
  proyeccion: false,
  datos: true,
  actividad: false,
};

export default function StepperHeader() {
  const { currentStep, goTo } = useSolicitudStepper();

  if (!currentStep || !currentStep.id) {
    return (
      <div className="w-full py-4 text-center text-sm text-gray-500">
        Cargando pasos...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between px-10 py-6 bg-white shadow-sm border-b border-gray-200 rounded-t-xl relative overflow-x-auto">
      {pasosSolicitud.map((step, index) => {
        const currentIndex = utilsSolicitud.getIndex(currentStep.id);
        const stepIndex = utilsSolicitud.getIndex(step.id);
        const isActive = step.id === currentStep.id;
        const isVisited = stepIndex < currentIndex;
        const hasError = erroresPorPaso[step.id] === true;

        const icon = hasError
          ? <AlertCircle size={20} />
          : isVisited
          ? <CheckCircle size={20} />
          : <Circle size={20} />;

        return (
          <div
            key={step.id}
            onClick={() => goTo(step.id)}
            className="relative z-10 flex flex-col items-center text-center group flex-1 cursor-pointer"
          >
            {index < pasosSolicitud.length - 1 && (
              <div className="absolute top-5 left-1/2 w-full h-px bg-gray-300 z-[-1]" />
            )}

            <motion.div
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                hasError
                  ? "bg-red-100 text-red-600 border-red-300"
                  : isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : isVisited
                  ? "bg-green-100 text-green-600 border-green-400"
                  : "bg-white text-gray-400 border-gray-300"
              }`}
            >
              {icon}
            </motion.div>

            <motion.span
              layout
              className={`mt-2 text-xs font-medium transition-colors ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {step.title}
            </motion.span>

            {step.description && (
              <motion.span
                layout
                className="text-[11px] text-gray-400 font-normal mt-0.5"
              >
                {step.description}
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}
