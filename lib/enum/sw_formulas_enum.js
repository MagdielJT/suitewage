/**
* @NApiVersion 2.x
* @description ENUM para tabla formulas
* @author Aldo Chaman 
*/
define(["./sw_formulas_enum"],

   /**
    * 
    * @param formulas - Dato de tipo string que identifica el nombre del campo asignado a suitwage.
    * @returns  {JSON} {
    *       recordType: Tipo de registro,
    *       ford000: Subsidiaria/empresa,
    *       ford001: Número de Fórmula,
    *       ford002: Nombre corto de Fórmula,
    *       ford003: Nombre Largo de Fórmula,
    *       ford004: Formula de importe,
    *       ford005: Formula de días,
    *       ford006: Naturaleza,
    *       ford007: ¿Fórmula final?,
    *       ford008: ¿Resta al préstamo?,
    *       ford011: Formula de aplicación contable,
    *       ford012: ¿Fórmula de integración de salario para IMSS?,
    *       ford013: Formula de contrapartida (Agrupación Contable),
    *       ford014: Tipo de operación,
    *       ford015: Tipo de contabilización,
    *       ford016: Fórmula de falta SUA,
    *       ford017: Clave Concepto anterior,
    *       ford018: Fórmula de Unidades / Horas,
    *       ford019: Descripción para cuenta contable,
    *       ford020: Descripción para contrapartida de la cuenta contable,
    *       ford021: Agrupa recibos en el concepto,
    *       ford022: Formula de Referencia,
    *       ford023: Clave Sat,
    *       ford024: Fórmula incapacidad SAT,
    *       ford025: UUID,
    *       ford026: Fórmula agrupación contable,
    *       ford027: Agrupador SAT,
    *       ford028: Formula Agrupación contrapartida,
    *       ford029: Fórmula orden contable,
    *       ford030: Fórmula orden contrapartida,
    *       ford031: Check Salarios ISSTE,
    *       ford032: Aplicar Salarios ISSTE,
    *       ford033: Fórmula contable no ligada al presupuesto,
    *       ford034: Fórmula de contrapartida no ligada al presupuesto,
    *       ford036: Campo para almacenar la clasificación de horas extras del SAT,
    *       ford037: Campo para almacenar la clasificación de horas extras del SAT,
    *       ford038: Campo para almacenar la clasificación de tipos de pago SAT,
    *       ford039: Campo para almacenar el numero de concepto SAT 2017 negativo,
    *      }
    */    

    function(formulas){
        return {
            recordType: "customrecord_sw_formulas",
            ford000: "custrecord_sw_ford000",
            ford001: "custrecord_sw_ford001",
            ford002: "custrecord_sw_ford002",
            ford003: "custrecord_sw_ford003",
            ford004: "custrecord_sw_ford004",
            ford005: "custrecord_sw_ford005",
            ford006: "custrecord_sw_ford006",
            ford007: "custrecord_sw_ford007",
            ford008: "custrecord_sw_ford008",
            ford011: "custrecord_sw_ford011",
            ford012: "custrecord_sw_ford012",
            ford013: "custrecord_sw_ford013",
            ford014: "custrecord_sw_ford014",
            ford015: "custrecord_sw_ford015",
            ford016: "custrecord_sw_ford016",
            ford017: "custrecord_sw_ford017",
            ford018: "custrecord_sw_ford018",
            ford019: "custrecord_sw_ford019",
            ford020: "custrecord_sw_ford020",
            ford021: "custrecord_sw_ford021",
            ford022: "custrecord_sw_ford022",
            ford023: "custrecord_sw_ford023",
            ford024: "custrecord_sw_ford024",
            ford025: "custrecord_sw_ford025",
            ford026: "custrecord_sw_ford026",
            ford027: "custrecord_sw_ford027",
            ford028: "custrecord_sw_ford028",
            ford029: "custrecord_sw_ford029",
            ford030: "custrecord_sw_ford030",
            ford031: "custrecord_sw_ford031",
            ford032: "custrecord_sw_ford032",
            ford033: "custrecord_sw_ford033",
            ford034: "custrecord_sw_ford034",
            ford036: "custrecord_sw_ford036",
            ford037: "custrecord_sw_ford037",
            ford038: "custrecord_sw_ford038",
            ford039: "custrecord_sw_ford039",

            
        }
    }

    );