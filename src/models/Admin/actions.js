export const GET_TABLE_DATA_START = "GET_TABLE_DATA_START";
export const GET_TABLE_DATA_ERROR = "GET_TABLE_DATA_ERROR";
export const GET_TABLE_DATA_SUCCESS = "GET_TABLE_DATA_SUCCESS";

export const getTableData = (tableName) => ({
    type: GET_TABLE_DATA_START,
    tableName
});