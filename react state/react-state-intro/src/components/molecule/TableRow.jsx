import TableCell from "../atoms/TableHeading.jsx";

function TableRow({data, cellType}) {
    return <tr>
        {data.map((field) => {
        <TableCell value={field} type={cellType}/>
        })}
    </tr>
};

export default TableRow;