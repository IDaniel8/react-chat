// DB simulation
const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isExistedUser = Boolean(
    users.find((user) => user.room === room && user.name === name)
  );

  if (isExistedUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

const getAllUsers = () => {
  return users;
};

export { addUser, removeUser, getUser, getUsersInRoom, getAllUsers };
