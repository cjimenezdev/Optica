let indexArmazonSeleccionado;
let armazones = [];

export function addArmazon() {
  let numero_unico_armazon,
    nombre,
    marca,
    modelo,
    color,
    descripcion,
    fotografía,
    dimensiones,
    precio_compra,
    precio_venta,
    existencias,
    estatus,
    codigo_barras;

  numero_unico_armazon = document.getElementById("txtNumUnico").value;
  nombre = document.getElementById("txtNombre").value;
  marca = document.getElementById("txtMarca").value;
  modelo = document.getElementById("txtModelo").value;
  color = document.getElementById("txtColor").value;
  descripcion = document.getElementById("txtDescripcion").value;
  dimensiones = document.getElementById("txtDimensiones").value;
  precio_compra = document.getElementById("txtPrecioCompra").value;
  precio_venta = document.getElementById("txtPrecioVenta").value;
  existencias = document.getElementById("txtExistencias").value;

  codigo_barras = document.getElementById("txtCodigoBarras").value;

  let dato = "OQ-";
  let aleatorio = Math.random().toString(36).substr(2, 10);

  if (
    nombre == "" ||
    marca == "" ||
    modelo == "" ||
    color == "" ||
    descripcion == "" ||
    fotografía == "" ||
    dimensiones == "" ||
    precio_compra == "" ||
    precio_venta == "" ||
    existencias == ""
  ) {
    Swal.fire({
      text: "Todos los campos son obligatorios",
      icon: "error",
      showConfirmButton: false,
      timer: 1400,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    Swal.fire({
      title: "Registrar Armazon",
      text: nombre,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: " ",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        let armazon = {};
        armazon.numero_unico_armazon = "RDF05_01";
        armazon.nombre = nombre;
        armazon.marca = marca;
        armazon.modelo = modelo;
        armazon.color = color;
        armazon.descripcion = descripcion;
        armazon.fotografía = fotografía;
        armazon.dimensiones = dimensiones;
        armazon.precio_compra = precio_compra;
        armazon.precio_venta = precio_venta;
        armazon.existencias = existencias;
        armazon.estatus = "Activo";
        armazon.codigo_barras = dato + aleatorio;
        armazones.push(armazon);

        Swal.fire({
          title: "Armazon registrado",
          icon: "success",
          showConfirmButton: false,
          timer: 1400,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        clean();
        loadTabla();
      }
    });
  }
}

export function loadTabla() {
  let cuerpo = "";
  armazones.forEach(function (armazon) {
    let registro =
      '<tr onclick="moduloArmazon.selectArmazon(' +
      armazones.indexOf(armazon) +
      ');">' +
      "<td>" +
      armazon.nombre +
      "</td>" +
      "<td>" +
      armazon.marca +
      "</td>" +
      "<td>" +
      armazon.modelo +
      "</td>" +
      "<td>" +
      armazon.color +
      "</td>" +
      "<td>" +
      armazon.descripcion +
      "</td>" +
      "<td>" +
      armazon.fotografía +
      "</td>" +
      "<td>" +
      armazon.dimensiones +
      "</td>" +
      "<td>" +
      armazon.precio_compra +
      "</td>" +
      "<td>" +
      armazon.precio_venta +
      "</td>" +
      "<td>" +
      armazon.existencias +
      "</td>" +
      "<td>" +
      armazon.estatus +
      "</td>" +
      "<td>" +
      armazon.codigo_barras.toUpperCase() +
      "</td>" +
      "</tr>";
    cuerpo += registro;
  });
  console.log(cuerpo);
  document.getElementById("tblArmazon").innerHTML = cuerpo;
}

export function selectArmazon(index) {
  document.getElementById("txtNumUnico").value =
    armazones[index].numero_unico_armazon;
  document.getElementById("txtNombre").value = armazones[index].nombre;
  document.getElementById("txtMarca").value = armazones[index].marca;
  document.getElementById("txtModelo").value = armazones[index].modelo;
  document.getElementById("txtColor").value = armazones[index].color;
  document.getElementById("txtDescripcion").value =
    armazones[index].descripcion;
  document.getElementById("txtDimensiones").value =
    armazones[index].dimensiones;
  document.getElementById("txtPrecioCompra").value =
    armazones[index].precio_compra;
  document.getElementById("txtPrecioVenta").value =
    armazones[index].precio_venta;
  document.getElementById("txtExistencias").value =
    armazones[index].existencias;
  document.getElementById("txtCodigoBarras").value =
    armazones[index].codigo_barras;
  document.getElementById("btnUpdate").classList.remove("disabled");
  document.getElementById("btnDelete").classList.remove("disabled");
  document.getElementById("btnAdd").classList.add("disabled");
  indexArmazonSeleccionado = index;
}

export function clean() {
  document.getElementById("txtNumUnico").value = "";
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtMarca").value = "";
  document.getElementById("txtModelo").value = "";
  document.getElementById("txtColor").value = "";
  document.getElementById("txtDescripcion").value = "";
  document.getElementById("txtDimensiones").value = "";
  document.getElementById("txtPrecioCompra").value = "";
  document.getElementById("txtPrecioVenta").value = "";
  document.getElementById("txtExistencias").value = "";
  document.getElementById("txtCodigoBarras").value = "";

  document.getElementById("txtNombre").focus();
  document.getElementById("btnUpdate").classList.add("disabled");
  document.getElementById("btnDelete").classList.add("disabled");
  document.getElementById("btnAdd").classList.remove("disabled");
  indexArmazonSeleccionado = 0;
}

export function updateArmazon() {
  let numero_unico_armazon,
    nombre,
    marca,
    modelo,
    color,
    descripcion,
    fotografía,
    dimensiones,
    precio_compra,
    precio_venta,
    existencias,
    estatus,
    codigo_barras;

  numero_unico_armazon = document.getElementById("txtNumUnico").value;
  nombre = document.getElementById("txtNombre").value;
  marca = document.getElementById("txtMarca").value;
  modelo = document.getElementById("txtModelo").value;
  color = document.getElementById("txtColor").value;
  descripcion = document.getElementById("txtDescripcion").value;
  dimensiones = document.getElementById("txtDimensiones").value;
  precio_compra = document.getElementById("txtPrecioCompra").value;
  precio_venta = document.getElementById("txtPrecioVenta").value;
  existencias = document.getElementById("txtExistencias").value;

  codigo_barras = document.getElementById("txtCodigoBarras").value;

  let armazon = {};
  armazon.numero_unico_cliente = numero_unico_armazon;
  armazon.nombre = nombre;
  armazon.marca = marca;
  armazon.modelo = modelo;
  armazon.color = color;
  armazon.descripcion = descripcion;
  armazon.fotografía = fotografía;
  armazon.dimensiones = dimensiones;
  armazon.precio_compra = precio_compra;
  armazon.precio_venta = precio_venta;
  armazon.existencias = existencias;
  armazon.estatus = "Activo";
  armazon.codigo_barras = "OQ-" + codigo_barras;
  armazones[indexArmazonSeleccionado] = armazon;

  Swal.fire({
    title: "Armazon actualizado",
    icon: "success",
    showConfirmButton: false,
    timer: 1400,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  clean();
  loadTabla();
}

export function deleteArmazon() {
  Swal.fire({
    title: "Eliminar: ",
    text: armazones[indexArmazonSeleccionado].nombre,
    icon: "question",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: " ",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      armazones[indexArmazonSeleccionado].estatus = "Inactivo";
      Swal.fire({
        title: "Armazon " + armazones[indexArmazonSeleccionado].estatus,
        icon: "success",
        showConfirmButton: false,
        timer: 1400,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      clean();
      loadTabla();
    }
  });
}

fetch("/build/web/modules/moduloArmazones/data_Armazones.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsondata) {
    armazones = jsondata;
    console.log(armazones);
    loadTabla();
  });

export function searchArmazon() {
  let filtro = document.getElementById("txtBusquedaArmazon").value;

  let resultados = armazones.filter(
    (element) => element.codigo_barras === filtro
  );
  let cuerpo = "";
  resultados.forEach(function (armazon) {
    let registro =
      '<tr onclick="moduloArmazon.selectArmazon(' +
      armazones.indexOf(armazon) +
      ');">' +
      "<td>" +
      armazon.nombre +
      "</td>" +
      "<td>" +
      armazon.marca +
      "</td>" +
      "<td>" +
      armazon.modelo +
      "</td>" +
      "<td>" +
      armazon.color +
      "</td>" +
      "<td>" +
      armazon.descripcion +
      "</td>" +
      "<td>" +
      armazon.fotografía +
      "</td>" +
      "<td>" +
      armazon.dimensiones +
      "</td>" +
      "<td>" +
      armazon.precio_compra +
      "</td>" +
      "<td>" +
      armazon.precio_venta +
      "</td>" +
      "<td>" +
      armazon.existencias +
      "</td>" +
      "<td>" +
      armazon.estatus +
      "</td>" +
      "<td>" +
      armazon.codigo_barras +
      "</td>" +
      "</tr>";
    cuerpo += registro;
  });
  console.log(cuerpo);
  document.getElementById("tblArmazon").innerHTML = cuerpo;
}

export function refreshSearch() {
  loadTabla();
}

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var filePreview = document.createElement("img");
      filePreview.id = "file-preview";
      //e.target.result contents the base64 data from the image uploaded
      filePreview.src = e.target.result;
      console.log(e.target.result);

      var previewZone = document.getElementById("file-preview-zone");
      previewZone.appendChild(filePreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

var fileUpload = document.getElementById("txtFotografia");
fileUpload.onchange = function (e) {
  readFile(e.srcElement);
};

export function printTable() {
  var mywindow = window.open("", "PRINT", "height=700,width=1000");
  mywindow.document.write("<html><head>");
  mywindow.document.write(
    "<style>.table{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.table thead{ background-color:#92DCE5;}.table th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:left;font-size:15px;}.table td{border:1px solid #ddd;text-align:left;padding:6px;}</style>"
  );
  mywindow.document.write("</head><body >");
  mywindow.document.write(document.getElementById("printtable").innerHTML);
  mywindow.document.write("</body></html>");
  mywindow.document.close(); // necesario para IE >= 10
  mywindow.focus(); // necesario para IE >= 10
  mywindow.print();
  mywindow.close();
  return true;
}
