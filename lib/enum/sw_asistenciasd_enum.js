/**
* @NApiVersion 2.x
* @description ENUM para tabla asistenciasd
* @author Aldo Chaman 
*/
define(["./sw_asistenciasd_enum"],

   /**
    * 
    * @param asistenciasd - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       asid000: Subsidiaria/empresa,
    *       asid001: Número de Tipo de Nómina en el que está el movimiento (obsoleto),
    *       asid002: Número de Periodo Interno,
    *       asid003: Número de Fórmula (Concepto),
    *       asid004: Número de Empleado,
    *       asid005: Desglose de la fórmula de dias,
    *       asid006: Desglose de la fórmula en Importe,
    *       asid007: Comentario sobre la excepción,
    *       asid008: Referencia,
    *       asid009: Dias,
    *       asid010: Importe,
    *       asid011: Fecha de la excepción,
    *       asid012: Turno,
    *       asid013: Puesto,
    *       usucapturo: Indica el nombre del usuario que capturo,
    *       usucapfechahora: Indica la fecha en que fue capturada,
    *       usuautorizo: Indica que usuario autorizo la excepcion,
    *       usuautfechahora: Indica la fecha en que fue autorizada,
    *       periodo: Periodo,
    *       nombreempleado: Nombre del Empleado,
    *       salariodiario: Salario Diario,
    *       salariodiarioi: Salario Diario Integrado,
    *       fechai: 	Fecha de ingreso,
    *       fechab: Fecha de Baja,
    *       salariop: Salario Puesto,
    *       fechaaplicacion: Fecha de aplicación,
    *       fechapago: Fecha de Pago,
    *       fechainicio: Fecha de inicio,
    *       fechafin: Fecha fin,
    *      }
    */    

    function(asistenciasd){
        return {
            recordType: "customrecord_sw_asistenciasd",
            asid000: "custrecord_sw_asid000",
            asid001: "custrecord_sw_asid001",
            asid002: "custrecord_sw_asid002",
            asid003: "custrecord_sw_asid003",
            asid004: "custrecord_sw_asid004",
            asid005: "custrecord_sw_asid005",
            asid006: "custrecord_sw_asid006",
            asid007: "custrecord_sw_asid007",
            asid008: "custrecord_sw_asid008",
            asid009: "custrecord_sw_asid009",
            asid010: "custrecord_sw_asid010",
            asid011: "custrecord_sw_asid011",
            asid012: "custrecord_sw_asid012",
            asid013: "custrecord_sw_asid013",
            usucapturo: "custrecord_sw_usucapturo",
            usucapfechahora: "custrecord_sw_usucapfechahora",
            usuautorizo: "custrecord_sw_usuautorizo",
            usuautfechahora: "custrecord_sw_usuautfechahora",
            periodo: "custrecord_sw_periodo",
            nombreempleado: "custrecord_sw_nombreempleado",
            salariodiario: "custrecord_sw_salariodiario",
            salariodiarioi: "custrecord_sw_salariodiarioi",
            fechai: "custrecord_sw_fechai",
            fechab: "custrecord_sw_fechab",
            salariop: "custrecord_sw_salariop",
            fechaaplicacion: "custrecord_sw_fechaaplicacion",
            fechapago: "custrecord_sw_fechapago",
            fechainicio: "custrecord_sw_fechainicio",
            fechafin: "custrecord_sw_fechafin",

        }
    }

    );