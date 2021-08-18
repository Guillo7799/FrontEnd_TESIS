import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CommentsCrud = () => {
  const { data, error } = useSWR(`/comments`, fetcher);

  if (error) return <div>No se pudo cargar los comentarios</div>;
  if (!data) return <div>Cargando comentarios...</div>;
  // render data
  return (
    <>
      <div>Crud de comentarios</div>
    </>
  );
};
export default CommentsCrud;
