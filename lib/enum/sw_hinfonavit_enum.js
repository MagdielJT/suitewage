/**
* @NApiVersion 2.x
* @description ENUM para tabla hinfonavit
* @author Aldo Chaman 
*/
define(["./sw_hinfonavit_enum"],

   /**
    * 
    * @param hinfonavit - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       empd000: Subsidiaria/Empresa,
    *       perd001: Empleado,
    *       fechainf: Fecha del movimiento,
    *       clave: Tipo de Movimiento,
    *       aplicatabladismin: Aplica tabla de Disminución,
    *       tipodescuento: Tipo Descuento,
    *       valordescuento: Valor Descuento,
    *       fechacaptura: Fecha de elaboración del movimiento,
    *       usuclave: Usuario que elaboró el movimiento,
    *       hisdregpatroninf: Registro Patronal,
    *       hisdguiainf: Guía,
    *       hisdfechanominainf: Fecha de Registro de Movimiento,
    *       salariodiario: Salario Diario,
    *       salariointegrado: Salario integrado,
    *       topeinfo: Tope Infonavit,
    *       topeeym: Tope EyM,
    *      }
    */

    function(hinfonavit){
        return {
            recordType: "customrecord_sw_hinfonavit",
            empd000: "custrecord_sw_h_empd000",
            perd001: "custrecord_sw_h_perd001",
            fechainf: "custrecord_sw_h_fechainf",
            clave: "custrecord_sw_h_clave",
            aplicatabladismin: "custrecord_sw_h_aplicatabladismin",
            tipodescuento: "custrecord_sw_h_tipodescuento",
            valordescuento: "custrecord_sw_h_valordescuento",
            fechacaptura: "custrecord_sw_h_fechacaptura",
            usuclave: "custrecord_sw_h_usuclave",
            hisdregpatroninf: "custrecord_sw_h_hisdregpatroninf",
            hisdguiainf: "custrecord_sw_h_hisdguiainf",
            hisdfechanominainf: "custrecord_sw_h_hisdfechanominainf",
            salariodiario: "custrecord_sw_h_salariodiario",
            salariointegrado: "custrecord_sw_h_salariointegrado",
            topeinfo: "custrecord_sw_h_topeinfo",
            topeeym: "custrecord_sw_h_topeeym",           
        }
    }

    );