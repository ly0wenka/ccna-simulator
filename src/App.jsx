import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [selected, setSelected] = useState([])

  const devices = [
    {id:'pc',name:'PC-01',icon:'🖥️',x:50,y:150},
    {id:'sw',name:'Cisco Switch',icon:'🔵',x:420,y:150},
    {id:'lap',name:'Laptop-02',icon:'💻',x:850,y:150}
  ]

  const [connections,setConnections]=useState([])

  function connect(id){
    const next=[...selected,id]
    setSelected(next)

    if(next.length===2){
      setConnections([...connections,[next[0],next[1]]])
      setSelected([])
    }
  }

  return (
    <div style={{padding:'20px'}}>
      <h1>CCNA Network Topology Simulator</h1>
      <p>Клікни на два пристрої для створення кабелю. Перетягуй мишею.</p>

      <div style={{position:'relative',height:'600px',border:'1px solid gray'}}>

        <svg style={{position:'absolute',width:'100%',height:'100%'}}>
          {connections.map((c,i)=>{
            const a=devices.find(d=>d.id===c[0])
            const b=devices.find(d=>d.id===c[1])
            return (
              <line
                key={i}
                x1={a.x+80}
                y1={a.y+40}
                x2={b.x+80}
                y2={b.y+40}
                stroke='black'
                strokeWidth='3'
              />
            )
          })}
        </svg>

        {devices.map(device=>(
          <motion.div
            key={device.id}
            drag
            onDoubleClick={()=>connect(device.id)}
            style={{
              position:'absolute',
              left:device.x,
              top:device.y,
              border:'2px solid black',
              padding:'20px',
              width:'160px',
              textAlign:'center',
              borderRadius:'20px',
              background:'white',
              cursor:'grab'
            }}
          >
            {device.icon}<br/>
            <b>{device.name}</b>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
