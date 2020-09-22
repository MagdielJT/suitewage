/**
* @NApiVersion 2.x
* @description ENUM para tabla relhorarios
* @author Aldo Chaman 
*/
define(["./sw_relhorarios_enum"],

   /**
    * 
    * @param relhorarios - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       horempresa: Subsidiaria/empresa,
    *       horabreviatura: Nombre corto del horario,
    *       horentrada: Hora de Entrada,
    *       horentmaxsret: Hora maxima de tolerancia para marcar retardo,
    *       horentmaxsfal: Hora maxima de tolerancia para marcar falta,
    *       horasalidacomer: Hora salida de comer,
    *       horaregresocomer: hora de regreso a comer,
    *       horregcomaxsret: Hora máxima de tolerancia para marcar retardo en el regreso de comer,
    *       horregcomaxsfal: Hora máxima de tolerancia para marcar falta en el regreso de comer,
    *       horsalida: Hora de salida,
    *       horminsalsamo: Horario mínimo que se permite salir sin sanción,
    *       horhorascomida: Horas para comer,
    *       hornovecescome: Numero de veces que puede comer el empleado,
    *       horpcontextr: Numero de horas para contar horas extras,
    *       horcveentrada: Clave para especificar la clave del reloj que indica la entrada,
    *       horcvesalcomer: Campo para especificar la clave del reloj que indica la salida a comer,
    *       horcveregcomer: Campo para especificar la clave del reloj que indica el regreso de comer,
    *       horcvesalida: Campo para especificar la clave del reloj que indica la salida,
    *       horhorpcontex: Horas acumuladas con tiempo extra,
    *       hordescripcion: Descripción,
    *      }
    */    
    function(relhorarios){
        return {
            recordType: "customrecord_sw_relhorarios",
            horempresa: "custrecord_sw_horempresa",
            horabreviatura: "custrecord_sw_horabreviatura",
            horentrada: "custrecord_sw_horentrada",
            horentmaxsret: "custrecord_sw_horentmaxsret",
            horentmaxsfal: "custrecord_sw_horentmaxsfal",
            horasalidacomer: "custrecord_sw_horasalidacomer",
            horaregresocomer: "custrecord_sw_horaregresocomer",
            horregcomaxsret: "custrecord_sw_horregcomaxsret",
            horregcomaxsfal: "custrecord_sw_horregcomaxsfal",
            horsalida: "custrecord_sw_horsalida",
            horminsalsamo: "custrecord_sw_horminsalsamo",
            horhorascomida: "custrecord_sw_horhorascomida",
            hornovecescome: "custrecord_sw_hornovecescome",
            horpcontextr: "custrecord_sw_horpcontextr",
            horcveentrada: "custrecord_sw_horcveentrada",
            horcvesalcomer: "custrecord_sw_horcvesalcomer",
            horcveregcomer: "custrecord_sw_horcveregcomer",
            horcvesalida: "custrecord_sw_horcvesalida",
            horhorpcontex: "custrecord_sw_horhorpcontex",
            hordescripcion: "custrecord_sw_hordescripcion",
            
        }
    }

    );