export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 },{
    field:"user", headerName: "User", width: 230, renderCell: (params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        );
    },
    },
    {
        field:"email", headerName:"Email", width: 230
    },
    {
        field:"age", headerName:"Age", width: 100
    },
    {
        field:"status", headerName:"Status", width: 160, renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    }
];


//Data for the table
export const userRows = [
    {
        id: 1,
        username: "Juan",
        img:"https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-white-man-beard-256.png",
        status: "active",
        email: "juan.hr@email.com",
        age: 35,
    },
    {
        id: 2,
        username: "Pedro",
        img:"https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-black-man-beard-glasses-256.png",
        status: "passive",
        email: "pedro.hr@email.com",
        age: 32,
    },
    {
        id: 3,
        username: "Maria",
        img:"https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-black-woman-young-256.png",
        status: "pending",
        email: "maria.hr@email.com",
        age: 28,
    },
    {
        id: 4,
        username: "Santiago",
        img:"https://cdn2.iconfinder.com/data/icons/avatars-vol-1-glyph/64/glyph-avatar-white-man-beard-256.png",
        status: "active",
        email: "santiago.hr@email.com",
        age: 21,
    },
]