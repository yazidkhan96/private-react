import { useState } from 'react';


const Halaman = (props) => {
    const [state, setState] = useState("Pending");
    const [status, setStatus] = useState("Belum dibayar");
    const [mhs, setMhs] = useState({
        nama: "yazid",
        semester: 1,
    });
    return (
        <div>
            <div>status: {state}</div>
            <div>status: {status}</div>
            <div>Nama : {mhs["nama"]}</div>
            <button onClick={() => setState('complete')}>Rubah Status</button>
            <button onClick={() => setStatus('Sudah dibayar')}>Rubah Status</button>
            <button onClick={() => setMhs({
                nama: 'kamu',
                semester: 2
            })}
            >Rubah</button>
        </div >
    )
}


export default Halaman;