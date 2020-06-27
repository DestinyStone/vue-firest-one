import axiosPack from "./axiosPack"

export function getHomeMulitData() {
  return axiosPack({
    url: '/home/multidata'
  });
}
