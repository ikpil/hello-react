import React, { useContext } from 'react';
import { CODE, TableContext } from './MineSearch'

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444',
            }
        case CODE.OPENED:
            return {
                background: 'white',
            }

        default:
            return {
                background: 'white'
            }
    }
};

const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        default:
            return '';
    }
};

const Td = ({ rowIdx, cellIdx }) => {
    const { tableData } = useContext(TableContext);

    return (
        <td
            style={getTdStyle(tableData[rowIdx][cellIdx])}
        >{getTdText(tableData[rowIdx][cellIdx])}
        </td>
    )
};

export default Td;