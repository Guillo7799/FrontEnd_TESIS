import api from "./api";

async function getAll() {
  return await api.get(`/comments`);
}

async function getById(id) {
  return await api.get(`/comments/${id}`);
}

async function create(data) {
  return await api.post(`/comments`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function update(id, data) {
  return await api.put(`/comments/${id}`, data);
}

async function deleteComments(id) {
  return await api.delete(`/comments/${id}`);
}

export const Comment = {
  getAll,
  getById,
  create,
  update,
  delete: deleteComments,
};
