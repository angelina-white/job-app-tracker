import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { useEffect } from 'react'
import { gsap } from "gsap";

function Stats({ jobList })
{

    const pendingStatus = jobList.filter((item) =>
    {
        if(item.status == "Pending")
        {
            return (
                item
            )
        }
    })

    const offerStatus = jobList.filter((item) =>
    {
        if(item.status == "Offer")
        {
            return (
                item.status
            )
        }
    })

    const rejectedStatus = jobList.filter((item) =>
    {
        if(item.status == "Rejected")
        {
            return (
                item.status
            )
        }
    })

    const ghostedStatus = jobList.filter((item) =>
    {
        if(item.status == "Ghosted")
        {
            return (
                item.status
            )
        }
    })

    const data = [
        { name: 'Pending', value: pendingStatus.length },
        { name: 'Offers', value: offerStatus.length },
        { name: 'Rejected', value: rejectedStatus.length },
        { name: 'Ghosted', value: ghostedStatus.length }
        ];

    const COLORS = ['#FCF67E', '#7EFC85', '#FC7E91', '#C0C2C4'];

    useEffect(() =>
    {
        gsap.from("#statsTitle", {duration: 1, opacity: 0, y: 5});
        gsap.from("#numContainer", {delay: .25, duration: 1, opacity: 0, y: 5});
        gsap.from(".pieBackground", {delay: .5, duration: 1, opacity: 0, y: 10});

        const tl = gsap.timeline({repeat: 0});

        tl.from("#pendingText", 
        {
          duration: .25, 
          opacity: 0,
          y: 25
        });
        
        tl.from("#offerText", 
        {
          duration: .25,
          opacity: 0,
          y: 25
        });
        tl.from("#rejectText", 
        {
          duration: .25,
          opacity: 0,
          y: 25
        });
        tl.from("#ghostText", 
        {
          duration: .25,
          opacity: 0,
          y: 25
        });
    }, [])


    return (
        <div className="stats">
            <h2 id="statsTitle">Statistics</h2>

            <div className="statsBackground">
                <div id="numContainer">
                    <h4>Number of applications: { jobList.length }</h4> 
                </div>
                
                <div className="statsData">
                    <div className="writtenStatsBackground">
                        <h3 id="pendingText">Pending: { pendingStatus.length }</h3>
                        <h3 id="offerText">Offers: { offerStatus.length }</h3>
                        <h3 id="rejectText">Rejections: {rejectedStatus.length }</h3>
                        <h3 id="ghostText">Ghostings: {ghostedStatus.length }</h3>
                    </div>
                    <div className="pieBackground">
                        <div id="statsPie">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    data={data}
                                    isAnimationActive={false}
                                    cx="200"
                                    cy="200"
                                    label
                                    outerRadius={80}
                                    fill="#8884d8"
                                >
                                    {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default Stats