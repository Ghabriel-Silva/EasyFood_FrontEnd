"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import getsStatusColor from "./themeOrders";


type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  status: string;
  paymentMethod: string;
  total: string;
  totalFreight: string;
  created_at: string;
};

export default function OrderPage({ token }: { token: string }) {

  const [orders, setOrders] = React.useState<Order[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch("http://localhost:8080/order/filter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });

        const data = await res.json();
        if (Array.isArray(data.data)) {
          setOrders(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadOrders();
  }, [token]);

  // handlers da paginação
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };




  return (
    <Box >
      <Flex justify={"space-between"} pb={4}>
        <Heading size="xl" fontWeight={"medium"} >Pedidos</Heading>
        <Button bg={"blue.600"} borderRadius={"lg"} >Novo Pedido< MdAdd /></Button>
      </Flex>
      <Paper>
        <TableContainer
          sx={{ maxHeight: "700px" }}
        >
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 750 }}  >
            <TableHead>
              <TableRow >
                {[
                  "Pedido",
                  "Cliente",
                  "Telefone",
                  "Endereço",
                  "Status",
                  "Pagamento",
                  "Total",
                  "Frete",
                  "Criado em",
                ].map((header) => (
                  <TableCell
                    key={header}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: "#fafafa" }}>
              {orders
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((order, index) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell sx={{ fontWeight: 700 }}>
                      {"#" + (order.id.length > 6
                        ? order.id.slice(0, 4) + "..."
                        : order.id)}
                    </TableCell>
                    <TableCell>{order.customerName}</TableCell>
                    <TableCell>{order.customerPhone}</TableCell>
                    <TableCell>{order.customerAddress}</TableCell>
                    <TableCell>
                      <Box
                        px={1}
                        py={1}
                        fontSize={"12px"}
                        borderRadius="2xl"
                        textAlign="center"
                        fontWeight="light"
                        color="white"
                        bg={getsStatusColor(order.status)}
                      >
                        {order.status}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {order.paymentMethod}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>
                      R$ {order.total}
                    </TableCell>
                    <TableCell>R$ {order.totalFreight}</TableCell>
                    <TableCell sx={{ fontSize: "0.8rem" }}>
                      {new Date(order.created_at).toLocaleString("pt-BR")}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* Paginação */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </Box>
  );
}
