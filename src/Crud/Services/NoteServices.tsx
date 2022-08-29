import http from "../http-common";
import INoteData from "../Types/NoteType";
const getAll = () => {
  return http.get<Array<INoteData>>("/notes");
};
const get = (id: number) => {
  return http.get<INoteData>(`/notes/${id}`);
};
const create = (data: INoteData) => {
  return http.post<INoteData>("/notes", data);
};
const update = (id: number, data: INoteData) => {
  return http.put<number>(`/notes/${id}`, data);
};
const remove = (id: number) => {
  return http.delete<number>(`/notes/${id}`);
};

const NoteService = {
  getAll,
  get,
  create,
  update,
  remove
};
export default NoteService;