
export default [
  {
    label: 'Dígito después del número de DNI',
    checking: true,
    placeholder: '0',
    controlName: 'dniDigit',
    counter: 1,
    assets: [
      {
        img: 'assets/images/img_dni_azul_ultimo_digito.png',
        caption: 'Ubicación del dígito después del número de DNI Azul'
      },
      {
        img: 'assets/images/img_dni_electronico_ultimo_digito.png',
        caption: 'Ubicación del dígito después del número de DNI Electrónico'
      }
    ],
  },
  {
    label: 'Numero de ubigeo en DNI',
    checking: true,
    placeholder: 'Ej.: 190512',
    controlName: 'ubigeoNumber',
    counter: 6,
    assets: [
      {
        img: 'assets/images/img_dni_azul_ubigeo.png',
        caption: 'Ubicación del número de ubigeo en DNI Azul'
      },
      {
        img: 'assets/images/img_dni_electronico_ubigeo.png',
        caption: 'Ubicación del número de ubigeo en DNI Electrónico'
      }
    ]
  },
  {
    label: 'Fecha de emisión del DNI',
    checking: true,
    placeholder: 'dd/mm/aaaa',
    controlName: 'dniEmitDate',
    assets: [
      {
        img: 'assets/images/img_dni_azul_fecha_emision.png',
        caption: 'Ubicación de la fecha de emisión en DNI Azul'
      },
      {
        img: 'assets/images/img_dni_electronico_fecha_emision.png',
        caption: 'Ubicación de la fecha de emisión en DNI Electrónico'
      }
    ]
  },
  {
    label: 'Nombre de madre',
    checking: true,
    placeholder: 'Nombre completo',
    controlName: 'motherName'
  },
  {
    label: 'Nombre de padre',
    checking: true,
    placeholder: 'Nombre completo',
    controlName: 'fatherName'
  }
]