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
    *       h_empd000: Subsidiaria/Empresa,
    *       h_perd001: Empleado,
    *       h_fechainf: Fecha del movimiento,
    *       h_clave: Tipo de Movimiento,
    *       h_aplicatabladismin: Aplica tabla de Disminución,
    *       h_tipodescuento: Tipo Descuento,
    *       h_valordescuento: Valor Descuento,
    *       h_fechacaptura: Fecha de elaboración del movimiento,
    *       h_usuclave: Usuario que elaboró el movimiento,
    *       h_hisdregpatroninf: Registro Patronal,
    *       h_hisdguiainf: Guía,
    *       h_hisdfechanominainf: Fecha de Registro de Movimiento,
    *       h_salariodiario: Salario Diario,
    *       h_salariointegrado: Salario integrado,
    *       h_topeinfo: Tope Infonavit,
    *       h_topeeym: Tope EyM,
    *      }
    */

    function(hinfonavit){
        return {
            recordType: "customrecord_sw_hinfonavit",
            h_empd000: "custrecord_sw_h_empd000",
            h_perd001: "custrecord_sw_h_perd001",
            h_fechainf: "custrecord_sw_h_fechainf",
            h_clave: "custrecord_sw_h_clave",
            h_aplicatabladismin: "custrecord_sw_h_aplicatabladismin",
            h_tipodescuento: "custrecord_sw_h_tipodescuento",
            h_valordescuento: "custrecord_sw_h_valordescuento",
            h_fechacaptura: "custrecord_sw_h_fechacaptura",
            h_usuclave: "custrecord_sw_h_usuclave",
            h_hisdregpatroninf: "custrecord_sw_h_hisdregpatroninf",
            h_hisdguiainf: "custrecord_sw_h_hisdguiainf",
            h_hisdfechanominainf: "custrecord_sw_h_hisdfechanominainf",
            h_salariodiario: "custrecord_sw_h_salariodiario",
            h_salariointegrado: "custrecord_sw_h_salariointegrado",
            h_topeinfo: "custrecord_sw_h_topeinfo",
            h_topeeym: "custrecord_sw_h_topeeym",           
        }
    }

    );