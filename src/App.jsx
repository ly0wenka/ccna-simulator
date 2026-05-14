import { motion } from 'framer-motion'

export default function App() {
  const ports = [
    { id: 'Fa0/5', device: 'PC-01', status: 'Connected' },
    { id: 'Fa0/6', device: 'Empty', status: 'Unused' },
    { id: 'Fa0/7', device: 'Laptop-02', status: 'Connected' }
  ];

  const simulateViolation = (port) => {
    alert(`Port ${port.id}\nSTATUS: ERR-DISABLED\nUnauthorized device detected`)
  }

  const deviceStyle={
    border:'2px solid black',
    padding:'20px',
    width:'160px',
    textAlign:'center',
    borderRadius:'20px',
    background:'white',
    cursor:'grab',
    position:'absolute'
  }

  return (
    <div style={{padding:'30px',fontFamily:'Arial'}}>
      <h1>CCNA Network Topology Simulator</h1>
      <p>Перетягуй пристрої мишею (утримуй ліву кнопку і переміщуй)</p>

      <div style={{position:'relative',height:'600px',border:'1px solid gray'}}>

        <motion.div drag style={{...deviceStyle,left:'50px',top:'150px'}}>
          🖥️<br/><b>PC-01</b><br/>
          IP: 192.168.1.10
        </motion.div>

        <motion.div
          drag
          style={{
            ...deviceStyle,
            left:'420px',
            top:'140px',
            width:'260px',
            background:'#e8f0ff'
          }}
        >
          <b>Cisco Switch</b>
          <br/><br/>
          {ports.map((port)=>(
            <div key={port.id}>
              {port.id} | {port.device}
              <button
                onClick={()=>simulateViolation(port)}
                style={{marginLeft:'10px'}}
              >
                Test
              </button>
            </div>
          ))}
        </motion.div>

        <motion.div drag style={{...deviceStyle,left:'850px',top:'150px'}}>
          💻<br/><b>Laptop-02</b><br/>
          IP: 192.168.1.20
        </motion.div>

      </div>
    </div>
  )
}
