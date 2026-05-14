export default function App() {
  const ports = [
    { id: 'Fa0/5', device: 'PC-01', status: 'Connected' },
    { id: 'Fa0/6', device: 'Empty', status: 'Unused' },
    { id: 'Fa0/7', device: 'Laptop-02', status: 'Connected' }
  ];

  const simulateViolation = (port) => {
    alert(`Port ${port.id}\nSTATUS: ERR-DISABLED\nUnauthorized device detected`);
  };

  return (
    <div style={{padding:'30px',fontFamily:'Arial'}}>
      <h1>CCNA Network Topology Simulator</h1>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'50px',
        marginTop:'50px'
      }}>

        <div style={{
          border:'2px solid black',
          padding:'20px',
          width:'150px',
          textAlign:'center'
        }}>
          🖥️<br/><b>PC-01</b><br/>
          IP: 192.168.1.10
        </div>

        <div>
          ─────Fa0/5─────
        </div>

        <div style={{
          border:'3px solid blue',
          padding:'30px',
          width:'250px',
          textAlign:'center',
          background:'#f0f5ff'
        }}>
          <b>Cisco Switch</b>
          <br/><br/>
          {ports.map((port)=>(
            <div key={port.id} style={{margin:'8px'}}>
              {port.id} | {port.device} | {port.status}
              <button
                style={{marginLeft:'10px'}}
                onClick={()=>simulateViolation(port)}
              >
                Test
              </button>
            </div>
          ))}
        </div>

        <div>
          ─────Fa0/7─────
        </div>

        <div style={{
          border:'2px solid black',
          padding:'20px',
          width:'150px',
          textAlign:'center'
        }}>
          💻<br/><b>Laptop-02</b><br/>
          IP: 192.168.1.20
        </div>
      </div>
    </div>
  )
}