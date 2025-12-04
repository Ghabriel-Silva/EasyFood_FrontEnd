export default function getsStatusColor(status: string) {
    switch (status) {
      case "Pendente":
        return "yellow.400";
      case "Preparando":
        return "orange.400";
      case "Completo":
        return "green.600";
      case "Entregue":
        return "blue.600";
      case "Cancelado":
        return "red.500";
      default:
        return "gray.400";
    }
  }