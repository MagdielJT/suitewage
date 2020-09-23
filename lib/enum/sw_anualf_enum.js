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
    *       acum000: Subsidiaria/empresa,
    *       acum001: Año,
    *       acum002: Empleado,
    *       acum003: Formula,
    *       acuml1: Importe de Enero,
    *       acumd1: Dias de Enero,
    *       acumi2: Importe de Febrero,
    *       acumd2: Dias de Febrero,
    *       acumi3: Importe de Marzo,
    *       acumd3: Dias de Marzo,
    *       acumi4: Importe de Abril,
    *       acumd4: Dias de Abril,
    *       acumi5: Importe de Mayo,
    *       acumd5: Dias de Mayo,
    *       acumi6: Importe de Junio,
    *       acumd6: Dias de Junio,
    *       acumi7: Importe de Julio,
    *       acumd7: Dias de Julio,
    *       acumi8: Importe de Agosto,
    *       acumd8: Dias de Agosto,
    *       acumi9: Importe de Septiembre,
    *       acumd9: Dias de Septiembre,
    *       acumi10: Importe de Octubre,
    *       acumd10: Dias de Octubre,
    *       acumi11: Importe de Noviembre,
    *       acumd11: Dias de Noviembre,
    *       acumi12: Importe de Diciembre,
    *       acumd12: Dias de Diciembre,
    *       acuml13: Importe de Último Periodo de Nómina Acumulado,
    *       acumd13: Dias de Último Periodo de Nómina Acumulado,
    *       acuml14: Importe al Mes que se haya acumulado,
    *       acumd14: Dias al Mes que se haya acumulado,
    *       acuml15: Importe al Año,
    *       acumd15: Dias del Año,
    *      }
    */ 

    function(anualf){
        return {
            recordType: "customrecord_sw_anualf",
            acum000: "custrecord_sw_af_acum000",
            acum001: "custrecord_sw_af_acum001",
            acum002: "custrecord_sw_af_acum002",
            acum003: "custrecord_sw_af_acum003",
            acuml1: "custrecord_sw_af_acuml1",
            acumd1: "custrecord_sw_af_acumd1",
            acumi2: "custrecord_sw_af_acumi2",
            acumd2: "custrecord_sw_af_acumd2",
            acumi3: "custrecord_sw_af_acumi3",
            acumd3: "custrecord_sw_af_acumd3",
            acumi4: "custrecord_sw_af_acumi4",
            acumd4: "custrecord_sw_af_acumd4",
            acumi5: "custrecord_sw_af_acumi5",
            acumd5: "custrecord_sw_af_acumd5",
            acumi6: "custrecord_sw_af_acumi6",
            acumd6: "custrecord_sw_af_acumd6",
            acumi7: "custrecord_sw_af_acumi7",
            acumd7: "custrecord_sw_af_acumd7",
            acumi8: "custrecord_sw_af_acumi8",
            acumd8: "custrecord_sw_af_acumd8",
            acumi9: "custrecord_sw_af_acumi9",
            acumd9: "custrecord_sw_af_acumd9",
            acumi10: "custrecord_sw_af_acumi10",
            acumd10: "custrecord_sw_af_acumd10",
            acumi11: "custrecord_sw_af_acumi11",
            acumd11: "custrecord_sw_af_acumd11",
            acumi12: "custrecord_sw_af_acumi12",
            acumd12: "custrecord_sw_af_acumd12",
            acuml13: "custrecord_sw_af_acuml13",
            acumd13: "custrecord_sw_af_acumd13",
            acuml14: "custrecord_sw_af_acuml14",
            acumd14: "custrecord_sw_af_acumd14",
            acuml15: "custrecord_sw_af_acuml15",
            acumd15: "custrecord_sw_af_acumd15",

            
        }
    }

    );