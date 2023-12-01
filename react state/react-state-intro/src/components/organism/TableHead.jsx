import TableRow from "../molecule/TableRow.jsx";

function TableHead({data}) {
    return <thead><TableRow cellType={'heading'} data={data}/></thead>
};

export default TableHead;