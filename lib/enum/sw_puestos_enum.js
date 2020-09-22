/**
* @NApiVersion 2.x
* @description ENUM para tabla puestos
* @author Aldo Chaman 
*/
define(["./sw_puestos_enum"],

   /**
    * 
    * @param puestos - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       pued000: Subsidiaria/empresa,
    *       pued001: Código del Puesto,
    *       pued002: Nombre del Puesto,
    *       pued003: Salario del Puesto,
    *       pued004: Objetivo del Puesto,
    *       pueabreiva: Abreviatura del Puesto,
    *       puedescripcion: Descripción de funciones el puesto,
    *       pueextra: Aplican Horas Extras,
    *       puesalminimo: Salario Mínimo,
    *       nijnivel: Nivel Jerarjico,
    *       puepuntos: Puntos del Puesto según valuación,
    *       pueaquienreporta: Clave del puesto a quien reporta,
    *       pueautorizadas: Numero de Plazas autorizadas,
    *       pueocupadas: Numero de plazas ocupadas a la fecha,
    *       puepuealta: Fecha de Alta del puesto,
    *       puecancelacion: Fecha de Cancelación del puesto,
    *       puesalmaximo: Salario Máximo,
    *       puedsincon: Sindicalizado,
    *       puedayuda1: Ayuda Despensa,
    *       puedayuda2: Ayuda Hospital y Habilitación,
    *       puedayuda3: Ayuda y Alimentación,
    *       puedayuda4: Compensación Domingo,
    *       puedayuda5: Compensación Noche,
    *       puedayuda6: Viáticos,
    *       puedhrsext: Horas extras,
    *       puedhrscom: Importe Horas Compensación,
    *       puemodificacion: Fecha de modificación,
    *      }
    */    
    function(puestos){
        return {
            recordType: "customrecord_sw_puestos",
            pued000: "custrecord_sw_pued000",
            pued001: "custrecord_sw_pued001",
            pued002: "custrecord_sw_pued002",
            pued003: "custrecord_sw_pued003",
            pued004: "custrecord_sw_pued004",
            pueabreiva: "custrecord_sw_pueabreiva",
            puedescripcion: "custrecord_sw_puedescripcion",
            pueextra: "custrecord_sw_pueextra",
            puesalminimo: "custrecord_sw_puesalminimo",
            nijnivel: "custrecord_sw_nijnivel",
            puepuntos: "custrecord_sw_puepuntos",
            pueaquienreporta: "custrecord_sw_pueaquienreporta",
            pueautorizadas: "custrecord_sw_pueautorizadas",
            pueocupadas: "custrecord_sw_pueocupadas",
            puepuealta: "custrecord_sw_puepuealta",
            puecancelacion: "custrecord_sw_puecancelacion",
            puesalmaximo: "custrecord_sw_puesalmaximo",
            puedsincon: "custrecord_sw_puedsincon",
            puedayuda1: "custrecord_sw_puedayuda1",
            puedayuda2: "custrecord_sw_puedayuda2",
            puedayuda3: "custrecord_sw_puedayuda3",
            puedayuda4: "custrecord_sw_puedayuda4",
            puedayuda5: "custrecord_sw_puedayuda5",
            puedayuda6: "custrecord_sw_puedayuda6",
            puedhrsext: "custrecord_sw_puedhrsext",
            puedhrscom: "custrecord_sw_puedhrscom",
            puemodificacion: "custrecord_sw_puemodificacion",

            
        }
    }

    );