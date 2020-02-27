import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table'
import Form from './Form'

export const CODE = {
    OPENED: 0,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE = -5,
    CLICKED_MINE: -6,
    MINE: -7,
};

export const TableContext = createContext({
    tableData: [
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
    ],
    dispatch: () => { },
});

const initialState = {
    tableData: [],
    timer: 0,
    result: 0,
}

export const START_GAME = 'START_GAME';

const plantMine = (row, cell, mine) => {

};

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine);
            }
        default:
            return state;
    }
}

const MainSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => {
        return {
            tableData: state.tableData,
            dispatch,
        }
    }, [state.tableData]);

    return (
        <TableContext.Provider value={value}>
            <Form />
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    )
};

export default MainSearch;
