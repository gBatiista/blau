let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let secondInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let propriedade in secondInfo) {
  if (propriedade !== "recorrente") {
    console.log(info[propriedade], "e", secondInfo[propriedade]);
  } else if (info.recorrente === secondInfo.recorrente) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info['recorrente'], 'e', secondInfo['recorrente']);
  }
}
