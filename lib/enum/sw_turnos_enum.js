/**
* @NApiVersion 2.x
* @description ENUM para tabla turnos
* @author Aldo Chaman 
*/
define(["./sw_turnos_enum"],

   /**
    * 
    * @param turnos - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       turempresa: Subsidiaria/empresa,
    *       turcobrahextras: Cobra horas extras,
    *       turnacumretfalta: Acumula Retardos para Falta,
    *       turnnumrethacfal: Numero de Retardos para hacer Falta,
    *       turdia1: Lunes,
    *       turdia2: Martes,
    *       turdia3: Miercoles,
    *       turdia4: Jueves,
    *       turdia5: Viernes,
    *       turdia6: Sabado,
    *       turdia7: Domingo,
    *       turdescripcion: Descripción,
    *      }
    */   
    function(turnos){
        return {
            recordType: "customrecord_sw_turnos",
            turempresa: "custrecord_sw_turempresa",
            turcobrahextras: "custrecord_sw_turcobrahextras",
            turnacumretfalta: "custrecord_sw_turnacumretfalta",
            turnnumrethacfal: "custrecord_sw_turnnumrethacfal",
            turdia1: "custrecord_sw_turdia1",
            turdia2: "custrecord_sw_turdia2",
            turdia3: "custrecord_sw_turdia3",
            turdia4: "custrecord_sw_turdia4",
            turdia5: "custrecord_sw_turdia5",
            turdia6: "custrecord_sw_turdia6",
            turdia7: "custrecord_sw_turdia7",
            turdescripcion: "custrecord_sw_turdescripcion",

        }
    }

    );