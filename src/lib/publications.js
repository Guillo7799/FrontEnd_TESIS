import api from "./api";

async function getAll() {
  return await api.get(`/publications`);
}

async function getById(id) {
  return await api.get(`/publications/${id}`);
}

async function create(data) {
  return await api.post(`/publications`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function update(id, data) {
  return await api.put(`/publications/${id}`, data);
}

async function deletePublications(id) {
  return await api.delete(`/publications/${id}`);
}

export const Publication = {
  getAll,
  getById,
  create,
  update,
  delete: deletePublications,
};
