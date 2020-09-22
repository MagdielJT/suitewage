/**
* @NApiVersion 2.x
* @description ENUM para tabla anualf
* @author Aldo Chaman 
*/
define(["./sw_anualf_enum"],

   /**
    * 
    * @param anualf - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       af_acum000: Subsidiaria/empresa,
    *       af_acum001: Año,
    *       af_acum002: Empleado,
    *       af_acum003: Formula,
    *       af_acuml1: Importe de Enero,
    *       af_acumd1: Dias de Enero,
    *       af_acumi2: Importe de Febrero,
    *       af_acumd2: Dias de Febrero,
    *       af_acumi3: Importe de Marzo,
    *       af_acumd3: Dias de Marzo,
    *       af_acumi4: Importe de Abril,
    *       af_acumd4: Dias de Abril,
    *       af_acumi5: Importe de Mayo,
    *       af_acumd5: Dias de Mayo,
    *       af_acumi6: Importe de Junio,
    *       af_acumd6: Dias de Junio,
    *       af_acumi7: Importe de Julio,
    *       af_acumd7: Dias de Julio,
    *       af_acumi8: Importe de Agosto,
    *       af_acumd8: Dias de Agosto,
    *       af_acumi9: Importe de Septiembre,
    *       af_acumd9: Dias de Septiembre,
    *       af_acumi10: Importe de Octubre,
    *       af_acumd10: Dias de Octubre,
    *       af_acumi11: Importe de Noviembre,
    *       af_acumd11: Dias de Noviembre,
    *       af_acumi12: Importe de Diciembre,
    *       af_acumd12: Dias de Diciembre,
    *       af_acuml13: Importe de Último Periodo de Nómina Acumulado,
    *       af_acumd13: Dias de Último Periodo de Nómina Acumulado,
    *       af_acuml14: Importe al Mes que se haya acumulado,
    *       af_acumd14: Dias al Mes que se haya acumulado,
    *       af_acuml15: Importe al Año,
    *       af_acumd15: Dias del Año,
    *      }
    */ 

    function(anualf){
        return {
            recordType: "customrecord_sw_anualf",
            af_acum000: "custrecord_sw_af_acum000",
            af_acum001: "custrecord_sw_af_acum001",
            af_acum002: "custrecord_sw_af_acum002",
            af_acum003: "custrecord_sw_af_acum003",
            af_acuml1: "custrecord_sw_af_acuml1",
            af_acumd1: "custrecord_sw_af_acumd1",
            af_acumi2: "custrecord_sw_af_acumi2",
            af_acumd2: "custrecord_sw_af_acumd2",
            af_acumi3: "custrecord_sw_af_acumi3",
            af_acumd3: "custrecord_sw_af_acumd3",
            af_acumi4: "custrecord_sw_af_acumi4",
            af_acumd4: "custrecord_sw_af_acumd4",
            af_acumi5: "custrecord_sw_af_acumi5",
            af_acumd5: "custrecord_sw_af_acumd5",
            af_acumi6: "custrecord_sw_af_acumi6",
            af_acumd6: "custrecord_sw_af_acumd6",
            af_acumi7: "custrecord_sw_af_acumi7",
            af_acumd7: "custrecord_sw_af_acumd7",
            af_acumi8: "custrecord_sw_af_acumi8",
            af_acumd8: "custrecord_sw_af_acumd8",
            af_acumi9: "custrecord_sw_af_acumi9",
            af_acumd9: "custrecord_sw_af_acumd9",
            af_acumi10: "custrecord_sw_af_acumi10",
            af_acumd10: "custrecord_sw_af_acumd10",
            af_acumi11: "custrecord_sw_af_acumi11",
            af_acumd11: "custrecord_sw_af_acumd11",
            af_acumi12: "custrecord_sw_af_acumi12",
            af_acumd12: "custrecord_sw_af_acumd12",
            af_acuml13: "custrecord_sw_af_acuml13",
            af_acumd13: "custrecord_sw_af_acumd13",
            af_acuml14: "custrecord_sw_af_acuml14",
            af_acumd14: "custrecord_sw_af_acumd14",
            af_acuml15: "custrecord_sw_af_acuml15",
            af_acumd15: "custrecord_sw_af_acumd15",

            
        }
    }

    );