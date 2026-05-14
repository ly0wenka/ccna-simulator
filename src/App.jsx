import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [devices,setDevices]=useState([
    {id:'pc',name:'PC-01',icon:'🖥️',x:100,y:350,ports:['Fa0']},
    {id:'sw',name:'Cisco Switch',icon:'🔵',x:500,y:350,ports:['Fa0/1','Fa0/2','Fa0/3']},
    {id:'lap',name:'Laptop-02',icon:'💻',x:900,y:350,ports:['Fa0']}
  ])

  const [selected,setSelected]=useState([])
  const [connections,setConnections]=useState([])

  function connect(id){
    const next=[...selected,id]
    setSelected(next)

    if(next.length===2){
      setConnections(prev=>[...prev,[next[0],next[1]]])
      setSelected([])
    }
  }

  function updatePosition(id,info){
    setDevices(prev=>prev.map(d=>
      d.id===id
      ? {...d,x:d.x+info.offset.x,y:d.y+info.offset.y}
      : d
    ))
  }

  return (
    <div style={{padding:'20px'}}>
      <h1>CCNA Network Topology Simulator</h1>
      <p>Двічі натисни на два пристрої для створення кабелю</p>

      <div style={{position:'relative',height:'700px',border:'1px solid gray'}}>

        <svg style={{position:'absolute',width:'100%',height:'100%'}}>
          {connections.map((c,i)=>{
            const a=devices.find(d=>d.id===c[0])
            const b=devices.find(d=>d.id===c[1])

            return(
              <line
                key={i}
                x1={a.x+80}
                y1={a.y+50}
                x2={b.x+80}
                y2={b.y+50}
                stroke='lime'
                strokeWidth='3'
              />
            )
          })}
        </svg>

        {devices.map(device=>(
          <motion.div
            key={device.id}
            drag
            dragMomentum={false}
            onDragEnd={(e,info)=>updatePosition(device.id,info)}
            onDoubleClick={()=>connect(device.id)}
            style={{
              position:'absolute',
              left:device.x,
              top:device.y,
              width:'170px',
              border:'2px solid gray',
              borderRadius:'20px',
              textAlign:'center',
              padding:'20px',
              cursor:'grab'
            }}
          >
            <div>{device.icon}</div>
            <b>{device.name}</b>
            <div style={{marginTop:'10px'}}>
              {device.ports.map(p=>(
                <div key={p}>🔌 {p}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
