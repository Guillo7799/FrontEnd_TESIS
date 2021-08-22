import api from "./api";

async function getAll() {
  return await api.get(`/cvitaes`);
}

async function getById(id) {
  return await api.get(`/cvitaes/${id}`);
}

async function create(data) {
  return await api.post(`/cvitaes`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function update(id, data) {
  return await api.put(`/cvitaes/${id}`, data);
}

async function deleteCvitaes(id) {
  return await api.delete(`/cvitaes/${id}`);
}

export const CVitae = {
  getAll,
  getById,
  create,
  update,
  delete: deleteCvitaes,
};
